package crdt

import (
	"reflect"
	"sort"
	"testing"
)

// === Mock Dot Context Based CRDT for Testing ===

// type MockCRDT struct {
//     id        string
//     dotKernel *DotKernel[int]
// }

// func NewMockCRDT(id string) *MockCRDT {
//     return &MockCRDT{
//         id:        id,
//         dotKernel: NewDotKernel[int](),
//     }
// }

// func (m *MockCRDT) String() string {
//     return fmt.Sprintf("MockCRDT{id: %s, dotKernel: %v}", m.id, m.dotKernel)
// }

// func (m *MockCRDT) Context() *DotContext {
//     return m.dotKernel.Context()
// }

// func (m *MockCRDT) SetContext(ctx *DotContext) {
//     m.dotKernel.SetContext(ctx)
// }

// func (m *MockCRDT) Read() int {
//     value := 0
//     for _, v := range m.dotKernel.dotValues {
//         value = max(value, v)
//     }
//     return value
// }

// func (m *MockCRDT) Inc(amount int) *MockCRDT {
//     delta := NewMockCRDT(m.id)

//     for dot, v := range m.dotKernel.dotValues {
//         if dot.id == m.id {
//             newValue := v + amount

//             delta.dotKernel.Join(m.dotKernel.Add(m.id, newValue))

//             return delta
//         }
//     }

//     return delta
// }

// func (m *MockCRDT) Reset() *MockCRDT {
//     delta := NewMockCRDT(m.id)

//     delta.dotKernel = m.dotKernel.Reset()

//     return delta
// }

// func (m *MockCRDT) Join(other *MockCRDT) {
//     m.dotKernel.Join(other.dotKernel)
// }

// func (m *MockCRDT) NewEmpty(id string) *MockCRDT {
//     return NewMockCRDT(id)
// }

// func (m *MockCRDT) Clone() *MockCRDT {
//     clone := NewMockCRDT(m.id)
//     clone.dotKernel = m.dotKernel.Clone()
//     return clone
// }

// func (m *MockCRDT) IsNull() bool {
//     return m.Read() == 0
// }

// func (m *MockCRDT) Equal(other *MockCRDT) bool {
//     return m.Read() == other.Read() && reflect.DeepEqual(m.dotKernel, other.dotKernel)
// }

// === Test Auxiliary Functions ===

func equalORMaps(a, b *ORMap[string, *CCounter]) bool {
	if !reflect.DeepEqual(a.dotContext, b.dotContext) {
		return false
	}

	for key, valueA := range a.valueMap {
		valueB := b.Get(key)

		if !reflect.DeepEqual(valueA.dotKernel, valueB.dotKernel) {
			return false
		}
	}

	for key, valueB := range b.valueMap {
		valueA := a.Get(key)

		if !reflect.DeepEqual(valueA.dotKernel, valueB.dotKernel) {
			return false
		}
	}

	return true
}

// === ORMap Tests ===

func TestORMap_NewORMap(t *testing.T) {
	ormap := NewORMap[string]("replica1", NewCCounter)

	if ormap.replicaId != "replica1" {
		t.Errorf("Expected ORMap id to be 'replica1', got %s", ormap.replicaId)
	}
	if len(ormap.valueMap) != 0 {
		t.Errorf("Expected ORMap valueMap to be empty, got %v", ormap.valueMap)
	}
	if ormap.dotContext == nil {
		t.Errorf("Expected ORMap dotContext to be initialized, got nil")
	}
}

func TestORMap_Get(t *testing.T) {
	ormap := NewORMap[string]("replica1", NewCCounter)

	value1 := ormap.Get("key1")
	if !value1.IsNull() {
		t.Errorf("Expected created value for 'key1' to be nil: %v", value1)
	}

	value1.Inc(10)
	if ormap.Get("key1").Read() != 10 {
		t.Errorf("Expected value for 'key1' to be 10, got %d", ormap.Get("key1").Read())
	}
}

func TestORMap_Keys(t *testing.T) {
	ormap := NewORMap[string]("replica1", NewCCounter)
	ormap.Get("key1").Inc(10)
	ormap.Get("key2").Inc(20)

	keys := ormap.Keys()
	sort.Strings(keys)
	expectedKeys := []string{"key1", "key2"}

	if !reflect.DeepEqual(keys, expectedKeys) {
		t.Errorf("Expected keys %v, got %v", expectedKeys, keys)
	}
}

func TestORMap_KeysWithNullValues(t *testing.T) {
	ormap := NewORMap[string]("replica1", NewCCounter)
	ormap.Get("key1").Inc(5)
	ormap.Get("key2") // This will be null

	keys := ormap.Keys()
	expectedKeys := []string{"key1"}

	if !reflect.DeepEqual(keys, expectedKeys) {
		t.Errorf("Expected keys %v, got %v", expectedKeys, keys)
	}
}

func TestORMap_Apply(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap2 := ormap1.Clone()

	// Apply an increment operation
	delta := ormap1.Apply("key1", func(value *CCounter) *CCounter {
		return value.Inc(5)
	})

	// Check the updated value in the ORMap
	value := ormap1.Get("key1")
	if value.Read() != 5 {
		t.Errorf("Expected value for 'key1' to be 5, got %d", value.Read())
	}

	// Check the delta
	deltaValue := delta.Get("key1")
	if deltaValue.Read() != 5 {
		t.Errorf("Expected delta value for 'key1' to be 5, got %d", deltaValue.Read())
	}

	// Join delta to the cloned ORMap and verify equality
	ormap2.Join(delta)
	if !equalORMaps(ormap1, ormap2) {
		t.Logf("ORMap 1: %v", ormap1)
		t.Logf("ORMap 2: %v", ormap2)
		t.Errorf("Expected ormap1 and ormap2 to be equal after joining with delta")
	}
}

func TestORMap_Remove(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap2 := ormap1.Clone()

	delta := ormap1.Remove("key1")

	if len(ormap1.valueMap) != 0 {
		t.Errorf("Expected ORMap valueMap to be empty after removal, got %v", ormap1.valueMap)
	}

	ormap2.Join(delta)
	if !equalORMaps(ormap1, ormap2) {
		t.Errorf("Expected ormap1 and ormap2 to be equal after joining with delta")
	}
}

func TestORMap_Reset(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap1.Get("key1").Inc(5)
	ormap1.Get("key2").Inc(10)

	delta := ormap1.Reset()

	value1 := ormap1.Get("key1")
	value2 := ormap1.Get("key2")
	if value1.Read() != 0 || value2.Read() != 0 {
		t.Errorf("Expected all values in ORMap to be reset to 0")
	}

	deltaValue1 := delta.Get("key1")
	deltaValue2 := delta.Get("key2")
	if deltaValue1.Read() != 0 || deltaValue2.Read() != 0 {
		t.Errorf("Expected delta to have values resetted, got %v and %v", deltaValue1.Read(), deltaValue2.Read())
	}

	ormap2 := ormap1.Clone()
	ormap2.Join(delta)
	if !equalORMaps(ormap1, ormap2) {
		t.Logf("ORMap 1: %v", ormap1)
		t.Logf("ORMap 2: %v", ormap2)
		t.Errorf("Expected ormap1 and ormap2 to be equal after joining with delta")
	}
}

func TestORMap_Join(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap1.Get("key1").Inc(5)

	ormap2 := NewORMap[string]("replica2", NewCCounter)
	ormap2.Get("key1").Inc(10)
	ormap2.Get("key2").Inc(5)
	ormap1.Join(ormap2)

	if ormap1.Get("key1").Read() != 15 {
		t.Errorf("Expected ORMap to prefer higher value for 'key1', got %d", ormap1.Get("key1").Read())
	}
	if ormap1.Get("key2").Read() != 5 {
		t.Errorf("Expected ORMap to include 'key2' with value 5, got %v", ormap1.Get("key2").Read())
	}
}

func TestORMap_JoinWithEmptyORMap(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap1.Get("key1").Inc(5)

	ormap2 := NewORMap[string]("replica2", NewCCounter)

	ormap1.Join(ormap2)

	if len(ormap1.Keys()) != 1 {
		t.Errorf("Expected ORMap to still have 1 key after joining with empty ORMap, got %d", len(ormap1.Keys()))
	}
	if ormap1.Get("key1").Read() != 5 {
		t.Errorf("Expected ORMap to remain unchanged after joining with empty ORMap, got %d", ormap1.Get("key1").Read())
	}
}

func TestORMap_JoinIdempotent(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap1.Get("key1").Inc(5)

	ormap2 := ormap1.Clone()
	ormap1.Join(ormap2)

	if !equalORMaps(ormap1, ormap2) {
		t.Errorf("Expected ORMap to be unchanged after joining with itself")
	}
}

func TestORMap_JoinCommutative(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap1.Get("key1").Inc(5)

	ormap2 := NewORMap[string]("replica2", NewCCounter)
	ormap2.Get("key1").Inc(10)
	ormap2.Get("key2").Inc(5)

	// Join in one order
	joined1 := ormap1.Clone()
	joined1.Join(ormap2)

	// Join in the opposite order
	joined2 := ormap2.Clone()
	joined2.Join(ormap1)

	if !equalORMaps(joined1, joined2) {
		t.Logf("Joined 1: %v", joined1)
		t.Logf("Joined 2: %v", joined2)
		t.Errorf("Expected ORMap joins to be commutative, but got different results")
	}
}

func TestORMap_JoinIndependence(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap1.Get("key1").Inc(5)

	ormap2 := NewORMap[string]("replica2", NewCCounter)
	ormap2.Get("key2").Inc(10)

	// Join ormap2 into ormap1
	joined1 := ormap1.Clone()
	joined1.Join(ormap2)

	// Modify ormap2 after the join
	ormap2.Get("key2").Inc(10)

	if joined1.Get("key2").Read() != 10 {
		t.Errorf("Expected joined ORMap to remain unchanged after modifying the other ORMap, got %d", joined1.Get("key2").Read())
	}
}

func TestORMap_JoinAfterRemove(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap1.Get("key1").Inc(5)

	ormap2 := ormap1.Clone()
	delta := ormap1.Remove("key1")

	// t.Logf("Before merge: %v", ormap2)
	ormap2.Join(delta)

	if !equalORMaps(ormap1, ormap2) {
		t.Logf("ORMap 1: %v", ormap1)
		t.Logf("ORMap 2: %v", ormap2)
		t.Logf("Delta: %v", delta)
		t.Errorf("Expected ORMaps to be equal after joining with removal delta")
	}
}

func TestORMap_Clone(t *testing.T) {
	ormap1 := NewORMap[string]("replica1", NewCCounter)
	ormap1.Get("key1").Inc(5)

	ormap2 := ormap1.Clone()

	if !equalORMaps(ormap1, ormap2) {
		t.Errorf("Expected cloned ORMap to be equal to the original")
	}

	// Modify the clone and ensure original is unchanged
	ormap2.Get("key1").Inc(10)
	if ormap1.Get("key1").Read() != 5 {
		t.Errorf("Expected original ORMap to remain unchanged after modifying clone, got %d", ormap1.Get("key1").Read())
	}
}

func TestORMap_SetContext(t *testing.T) {
	ormap := NewORMap[string]("replica1", NewCCounter)
	ormap.Get("key1").Inc(5)

	newContext := NewDotContext()
	ormap.SetContext(newContext)

	if ormap.Context() != newContext {
		t.Errorf("Expected ORMap context to be updated, but it was not")
	}
	value := ormap.Get("key1")
	if value.Context() != newContext {
		t.Errorf("Expected value context to be updated, but it was not")
	}
}
