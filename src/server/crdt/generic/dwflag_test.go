package crdt

import (
	"reflect"
	"testing"
)

// === Test Auxiliary Functions ===

func equalFlags(a, b *DWFlag) bool {
	return reflect.DeepEqual(a.dotKernel.dotContext, b.dotKernel.dotContext) &&
		reflect.DeepEqual(a.dotKernel.dotValues, b.dotKernel.dotValues)
}

// === DWFlag Tests ===

func TestDWFlag_EnableAndRead(t *testing.T) {
	flag := NewDWFlag("node1")

	// Initially, the flag should be enabled
	if !flag.Read() {
		t.Errorf("expected flag to be enabled, got disabled")
	}

	// Disable the flag
	delta := flag.Disable()
	if flag.Read() {
		t.Errorf("expected flag to be disabled after disable, got enabled")
	}

	// Simulate applying the delta on another replica
	replica := NewDWFlag("node2")
	replica.Join(delta)

	// The replica should now have the flag disabled
	if replica.Read() {
		t.Errorf("expected flag to be disabled, got enabled")
	}
}

func TestDWFlag_Disable(t *testing.T) {
	flag := NewDWFlag("node1")

	// Enable the flag
	deltaEnable := flag.Enable()

	// Simulate applying the enable delta on another replica
	replica := NewDWFlag("node2")
	replica.Join(deltaEnable)

	// Disable the flag
	deltaDisable := replica.Disable()

	// Simulate applying the disable delta on another replica
	replica2 := NewDWFlag("node3")
	replica2.Join(deltaDisable)

	// The replica should now have the flag disabled
	if replica2.Read() {
		t.Errorf("expected flag to be disabled, got enabled")
	}
}

func TestDWFlag_Join(t *testing.T) {
	flag1 := NewDWFlag("node1")
	flag2 := NewDWFlag("node2")

	// Enable the flag on both replicas
	delta1 := flag1.Enable()
	delta2 := flag2.Enable()

	// Simulate merging the states
	replica := NewDWFlag("node3")
	replica.Join(delta1)
	replica.Join(delta2)

	// The merged replica should have the flag enabled
	if !replica.Read() {
		t.Errorf("expected flag to be enabled after join, got disabled")
	}
}

func TestDWFlag_Idempotence(t *testing.T) {
	flag := NewDWFlag("node1")

	// Enable the flag
	delta := flag.Enable()

	// Simulate applying the delta multiple times on another replica
	replica := NewDWFlag("node2")
	replica.Join(delta)
	replica.Join(delta)

	// The replica should still have the flag enabled
	if !replica.Read() {
		t.Errorf("expected flag to remain enabled, got disabled")
	}
}

func TestDWFlag_Commutativity(t *testing.T) {
	flag1 := NewDWFlag("node1")
	flag2 := NewDWFlag("node2")

	// Enable the flag on both replicas
	delta1 := flag1.Enable()
	delta2 := flag2.Enable()

	// Simulate merging the states in different orders
	replica1 := NewDWFlag("node3")
	replica1.Join(delta1)
	replica1.Join(delta2)

	replica2 := NewDWFlag("node4")
	replica2.Join(delta2)
	replica2.Join(delta1)

	// Both replicas should have the same state
	if !equalFlags(replica1, replica2) {
		t.Errorf("expected flags to have the same state, got different states")
	}
}

func TestDWFlag_DisableWins(t *testing.T) {
	flag1 := NewDWFlag("node1")
	flag2 := NewDWFlag("node2")

	// Enable the flag on one replica
	deltaEnable := flag1.Enable()

	// Disable the flag on another replica
	deltaDisable := flag2.Disable()

	// Simulate merging the states
	replica := NewDWFlag("node3")
	replica.Join(deltaEnable)
	replica.Join(deltaDisable)

	// The merged replica should have the flag disabled (disable-wins)
	if replica.Read() {
		t.Errorf("expected flag to be disabled (disable-wins), got enabled")
	}

	// Enable and merge with original
	replica2 := replica.Clone()
	replica2.Enable()
	replica2.Join(replica)

	// The merged replica should now have the flag enabled
	if !replica2.Read() {
		t.Errorf("expected flag to be enabled after enabling, got disabled")
	}
}

func TestDWFlag_Clone(t *testing.T) {
	flag := NewDWFlag("node1")

	// Enable the flag
	delta := flag.Enable()
	flag.Join(delta)

	// Clone the flag
	clone := flag.Clone()

	// The clone should be equal to the original
	if !equalFlags(flag, clone) {
		t.Errorf("expected clone to be equal to original flag")
	}

	// Modify the clone
	disableDelta := clone.Disable()
	clone.Join(disableDelta)

	// The original flag should remain unchanged
	if !flag.Read() {
		t.Errorf("expected original flag to remain enabled after modifying clone")
	}
}
