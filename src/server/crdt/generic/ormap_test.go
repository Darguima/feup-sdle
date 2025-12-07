package crdt

import (
	"fmt"
	"reflect"
	"sort"
	"testing"
)

// === Mock Dot Context Based CRDT for Testing ===

type MockCRDT struct {
    id         string
    dotContext *DotContext
    value      int
}

func NewMockCRDT(id string) *MockCRDT {
    return &MockCRDT{
        id:         id,
        dotContext: NewDotContext(),
        value:      0,
    }
}

func (m *MockCRDT) String() string {
    return fmt.Sprintf("MockCRDT{id: %s, value: %d, dotContext: %v}", m.id, m.value, m.dotContext)
}

func (m *MockCRDT) Context() *DotContext {
    return m.dotContext
}

func (m *MockCRDT) SetContext(ctx *DotContext) {
    m.dotContext = ctx
}

func (m *MockCRDT) Read() int {
    return m.value
}

func (m *MockCRDT) Inc(amount int) *MockCRDT {
    delta := NewMockCRDT(m.id)
    delta.value = m.value + amount
    m.value += amount
    return delta
}

func (m *MockCRDT) Reset() *MockCRDT {
    delta := NewMockCRDT(m.id)
    delta.value = m.value
    m.value = 0
    return delta
}

func (m *MockCRDT) Join(other *MockCRDT) {
    if other.value > m.value {
        m.value = other.value
    }
}

func (m *MockCRDT) NewEmpty(id string) *MockCRDT {
    return NewMockCRDT(id)
}

func (m *MockCRDT) Clone() *MockCRDT {
    clone := NewMockCRDT(m.id)
    clone.value = m.value
    clone.dotContext = m.dotContext.Clone()
    return clone
}

func (m *MockCRDT) IsEmpty() bool {
    return m.value == 0
}

func (m *MockCRDT) Equal(other *MockCRDT) bool {
    return m.value == other.value && reflect.DeepEqual(m.dotContext, other.dotContext)
}

// === Test Auxiliary Functions ===

func equalORMaps(a, b *ORMap[string, *MockCRDT]) bool {
    if !reflect.DeepEqual(a.dotContext, b.dotContext) {
        return false
    }

    for key, valueA := range a.valueMap {
        valueB, ok := b.valueMap[key]
        if (!ok && !valueA.IsEmpty()) || !valueA.Equal(valueB) {
            return false
        }
    }

    for key, valueB := range b.valueMap {
        valueA, ok := a.valueMap[key]
        if (!ok && !valueB.IsEmpty()) || !valueA.Equal(valueB) {
            return false
        }
    }

    return true
}
// === ORMap Tests ===

func TestORMap_NewORMap(t *testing.T) {
    ormap := NewORMap[string, *MockCRDT]("ormap1")

    if ormap.id != "ormap1" {
        t.Errorf("Expected ORMap id to be 'ormap1', got %s", ormap.id)
    }
    if len(ormap.valueMap) != 0 {
        t.Errorf("Expected ORMap valueMap to be empty, got %v", ormap.valueMap)
    }
    if ormap.dotContext == nil {
        t.Errorf("Expected ORMap dotContext to be initialized, got nil")
    }
}

func TestORMap_Get(t *testing.T) {
    ormap := NewORMap[string, *MockCRDT]("ormap1")

    value1 := ormap.Get("key1")
    if !value1.IsEmpty() {
        t.Errorf("Expected created value for 'key1' to be nil: %v", value1)
    }

    value1.Inc(10)
    if ormap.Get("key1").Read() != 10 {
        t.Errorf("Expected value for 'key1' to be 10, got %d", ormap.Get("key1").Read())
    }
}

func TestORMap_Keys(t *testing.T) {
    ormap := NewORMap[string, *MockCRDT]("ormap1")
    ormap.Get("key1")
    ormap.Get("key2")

    keys := ormap.Keys()
    sort.Strings(keys)
    expectedKeys := []string{"key1", "key2"}

    if !reflect.DeepEqual(keys, expectedKeys) {
        t.Errorf("Expected keys %v, got %v", expectedKeys, keys)
    }
}

func TestORMap_Apply(t *testing.T) {
    ormap1 := NewORMap[string, *MockCRDT]("ormap1")
    ormap2 := ormap1.Clone()

    // Apply an increment operation
    delta := ormap1.Apply("key1", func(value *MockCRDT) *MockCRDT {
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
        t.Errorf("Expected ormap1 and ormap2 to be equal after joining with delta")
    }
}

func TestORMap_Remove(t *testing.T) {
    ormap1 := NewORMap[string, *MockCRDT]("replica1")
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
    ormap1 := NewORMap[string, *MockCRDT]("ormap1")
    ormap1.Get("key1").Inc(5)
    ormap1.Get("key2").Inc(10)

    delta := ormap1.Reset()

    if len(ormap1.valueMap) != 2 {
        t.Errorf("Expected ORMap valueMap to still contain 2 entries, got %d", len(ormap1.valueMap))
    }
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
        t.Errorf("Expected ormap1 and ormap2 to be equal after joining with delta")
    }
}

func TestORMap_Join(t *testing.T) {
    ormap1 := NewORMap[string, *MockCRDT]("ormap1")
    ormap1.Get("key1").Inc(5)

    ormap2 := NewORMap[string, *MockCRDT]("ormap2")
    ormap2.Get("key1").Inc(10)
    ormap2.Get("key2").Inc(5)
    ormap1.Join(ormap2)

    if ormap1.Get("key1").Read() != 10 {
        t.Errorf("Expected ORMap to prefer higher value for 'key1', got %d", ormap1.Get("key1").Read())
    }
    if ormap1.Get("key2").Read() != 5 {
        t.Errorf("Expected ORMap to include 'key2' with value 5, got %v", ormap1.Get("key2").Read())
    }
}

func TestORMap_JoinWithEmptyORMap(t *testing.T) {
    ormap1 := NewORMap[string, *MockCRDT]("ormap1")
    ormap1.Get("key1").Inc(5)

    ormap2 := NewORMap[string, *MockCRDT]("ormap2")

    ormap1.Join(ormap2)

    if len(ormap1.Keys()) != 1 {
        t.Errorf("Expected ORMap to still have 1 key after joining with empty ORMap, got %d", len(ormap1.Keys()))
    }
    if ormap1.Get("key1").Read() != 5 {
        t.Errorf("Expected ORMap to remain unchanged after joining with empty ORMap, got %d", ormap1.Get("key1").Read())
    }
}

func TestORMap_JoinIdempotent(t *testing.T) {
    ormap1 := NewORMap[string, *MockCRDT]("ormap1")
    ormap1.Get("key1").Inc(5)

    ormap2 := ormap1.Clone()
    ormap1.Join(ormap2)

    if !equalORMaps(ormap1, ormap2) {
        t.Errorf("Expected ORMap to be unchanged after joining with itself")
    }
}

func TestORMap_JoinCommutative(t *testing.T) {
    ormap1 := NewORMap[string, *MockCRDT]("ormap1")
    ormap1.Get("key1").Inc(5)

    ormap2 := NewORMap[string, *MockCRDT]("ormap2")
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
    ormap1 := NewORMap[string, *MockCRDT]("ormap1")
    ormap1.Get("key1").Inc(5)

    ormap2 := NewORMap[string, *MockCRDT]("ormap2")
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

func TestORMap_Clone(t *testing.T) {
    ormap1 := NewORMap[string, *MockCRDT]("ormap1")
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
    ormap := NewORMap[string, *MockCRDT]("ormap1")
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