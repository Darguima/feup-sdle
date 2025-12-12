package crdt

import (
	"reflect"
	"sort"
	"testing"
)

// === Helper Functions for Tests ===

func equalRegs[T comparable](reg1, reg2 *MVReg[T]) bool {
	if len(reg1.dotKernel.dotValues) != len(reg2.dotKernel.dotValues) {
		return false
	}

	for dot, value1 := range reg1.dotKernel.dotValues {
		value2, exists := reg2.dotKernel.dotValues[dot]
		if !exists || value1 != value2 {
			return false
		}
	}

	return true
}

// === Test Cases for MVReg ===

func TestMVReg_WriteAndRead(t *testing.T) {
    reg1 := NewMVReg[string]("node1")
	if len(reg1.Read()) != 0 {
		t.Errorf("expected empty register, got %v", reg1.Read())
	}

	delta1 := reg1.Write("value1")
	if len(reg1.Read()) != 1 || reg1.Read()[0] != "value1" {
		t.Errorf("expected ['value1'], got %v", reg1.Read())
	}

	delta2 := reg1.Write("value2")
	if len(reg1.Read()) != 1 || reg1.Read()[0] != "value2" {
		t.Errorf("expected ['value2'], got %v", reg1.Read())
	}

	reg2 := NewMVReg[string]("node2")
	delta3 := reg2.Write("value3")

	reg1.Join(delta3)
	reg2.Join(delta1)
	reg2.Join(delta2)
	if !equalRegs(reg1, reg2) {
		t.Errorf("expected registers to be equal after joins")
	}
	if len(reg1.Read()) != 2 {
		t.Errorf("expected 2 values in register, got %v", reg1.Read())
	}

	reg1.Write("value4")
	if len(reg1.Read()) != 1 || reg1.Read()[0] != "value4" {
		t.Errorf("expected ['value4'], got %v", reg1.Read())
	}
}

func TestMVReg_Reset(t *testing.T) {
    reg1 := NewMVReg[string]("node1")
	reg1.Write("value1")
	reg2 := NewMVReg[string]("node2")
	reg2.Join(reg1)

    // Reset the register
    resetDelta := reg1.Reset()

    // Read should return an empty list
    values := reg1.Read()
    if len(values) != 0 {
        t.Errorf("expected empty list, got %v", values)
    }

	reg2.Join(resetDelta)
	if !equalRegs(reg2, reg1) {
		t.Errorf("expected reg2 to be equal to reg1 after reset")
	}
}

func TestMVReg_Join(t *testing.T) {
    reg1 := NewMVReg[string]("node1")
    reg2 := NewMVReg[string]("node2")

    // Write values to both registers
    delta1 := reg1.Write("value1")
    reg1.Join(delta1)

    delta2 := reg2.Write("value2")
    reg2.Join(delta2)

    // Join reg2 into reg1
    reg1.Join(reg2)

    // Read should return values from both registers
    values := reg1.Read()
	sort.Slice(values, func(i, j int) bool {
		return values[i] < values[j]
	})

    expected := []string{"value1", "value2"}
    if !reflect.DeepEqual(values, expected) {
        t.Errorf("expected %v, got %v", expected, values)
    }
}

func TestMVReg_JoinIdempotence(t *testing.T) {
    reg := NewMVReg[string]("node1")
	reg.Write("value1")

	regJoined := reg.Clone()
    regJoined.Join(reg)

    if !equalRegs(reg, regJoined) {
		t.Errorf("expected registers to be equal after idempotent join")
	}
}

func TestMVReg_Commutativity(t *testing.T) {
    reg1 := NewMVReg[string]("node1")
    reg2 := NewMVReg[string]("node2")

    // Write values to both registers
    reg1.Write("value1")
    reg2.Write("value2")

    // Join in different orders
    reg1.Join(reg2)
    reg2.Join(reg1)

    // Both registers should be equal
	if !equalRegs(reg1, reg2) {
		t.Errorf("expected registers to be equal after commutative joins")
	}
}

func TestMVReg_Collapse(t *testing.T) {
    reg1 := NewMVReg[int]("node1")
	reg1.Write(10)

	reg2 := NewMVReg[int]("node2")
	reg2.Write(20)

	reg3 := NewMVReg[int]("node3")
	reg3.Write(15)


	reg1.Join(reg2)
	reg1.Join(reg3)
	reg4 := reg1.Clone()

    // Collapse the register to keep only the maximum value
    delta := reg1.Collapse(func(a, b int) int {
        if a > b {
            return a
        }
        return b
    })

    // Read should return only the maximum value
    values := reg1.Read()
    expected := []int{20}
    if !reflect.DeepEqual(values, expected) {
        t.Errorf("expected %v, got %v", expected, values)
    }

	reg4.Join(delta)
	if !equalRegs(reg1, reg4) {
		t.Errorf("expected reg4 to be equal to reg1 after collapse")
	}
}