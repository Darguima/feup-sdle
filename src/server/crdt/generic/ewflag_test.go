package crdt

import (
    "reflect"
    "testing"
)

// === Test Auxiliary Functions ===

func equalFlags(a, b *EWFlag) bool {
	return reflect.DeepEqual(a.dotKernel.dotContext, b.dotKernel.dotContext) &&
		reflect.DeepEqual(a.dotKernel.dotValues, b.dotKernel.dotValues)
}

// === EWFlag Tests ===

func TestEWFlag_EnableAndRead(t *testing.T) {
    flag := NewEWFlag("node1")

    // Initially, the flag should be disabled
    if flag.Read() {
        t.Errorf("expected flag to be disabled, got enabled")
    }

    // Enable the flag
    delta := flag.Enable()

    // Simulate applying the delta on another replica
    replica := NewEWFlag("node2")
    replica.Join(delta)

    // The replica should now have the flag enabled
    if !replica.Read() {
        t.Errorf("expected flag to be enabled, got disabled")
    }
}

func TestEWFlag_Disable(t *testing.T) {
    flag := NewEWFlag("node1")

    // Enable the flag
    deltaEnable := flag.Enable()

    // Simulate applying the enable delta on another replica
    replica := NewEWFlag("node2")
    replica.Join(deltaEnable)

    // Disable the flag
    deltaDisable := replica.Disable()

    // Simulate applying the disable delta on another replica
    replica2 := NewEWFlag("node3")
    replica2.Join(deltaDisable)

    // The replica should now have the flag disabled
    if replica2.Read() {
        t.Errorf("expected flag to be disabled, got enabled")
    }
}

func TestEWFlag_Join(t *testing.T) {
    flag1 := NewEWFlag("node1")
    flag2 := NewEWFlag("node2")

    // Enable the flag on both replicas
    delta1 := flag1.Enable()
    delta2 := flag2.Enable()

    // Simulate merging the states
    replica := NewEWFlag("node3")
    replica.Join(delta1)
    replica.Join(delta2)

    // The merged replica should have the flag enabled
    if !replica.Read() {
        t.Errorf("expected flag to be enabled after join, got disabled")
    }
}

func TestEWFlag_Idempotence(t *testing.T) {
    flag := NewEWFlag("node1")

    // Enable the flag
    delta := flag.Enable()

    // Simulate applying the delta multiple times on another replica
    replica := NewEWFlag("node2")
    replica.Join(delta)
    replica.Join(delta)

    // The replica should still have the flag enabled
    if !replica.Read() {
        t.Errorf("expected flag to remain enabled, got disabled")
    }
}

func TestEWFlag_Commutativity(t *testing.T) {
    flag1 := NewEWFlag("node1")
    flag2 := NewEWFlag("node2")

    // Enable the flag on both replicas
    delta1 := flag1.Enable()
    delta2 := flag2.Enable()

    // Simulate merging the states in different orders
    replica1 := NewEWFlag("node3")
    replica1.Join(delta1)
    replica1.Join(delta2)

    replica2 := NewEWFlag("node4")
    replica2.Join(delta2)
    replica2.Join(delta1)

    // Both replicas should have the same state
    if !equalFlags(replica1, replica2) {
        t.Errorf("expected flags to have the same state, got different states")
    }
}

func TestEWFlag_Clone(t *testing.T) {
	flag := NewEWFlag("node1")

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