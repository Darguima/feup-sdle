package crdt

import (
	"reflect"
	crdt "sdle-server/crdt/generic"
	"testing"
)

func TestShoppingItem_NewShoppingItem(t *testing.T) {
	item := NewShoppingItem("replica1", "item1")

	if item.ReplicaID() != "replica1" {
		t.Errorf("Expected CRDTID to be 'replica1', got %s", item.ReplicaID())
	}
	if item.ItemID() != "item1" {
		t.Errorf("Expected ItemID to be 'item1', got %s", item.ItemID())
	}
	if item.Name() != "" {
		t.Errorf("Expected Name to be empty string, got %s", item.Name())
	}
	if item.Quantity() != 0 {
		t.Errorf("Expected initial quantity to be 0, got %d", item.Quantity())
	}
	if item.Acquired() != 0 {
		t.Errorf("Expected initial acquired to be 0, got %d", item.Acquired())
	}
}

func TestShoppingItem_SetName(t *testing.T) {
	item1 := NewShoppingItem("replica1", "item1")
	item2 := item1.Clone()

	delta := item1.SetName("Milk")

	if item1.Name() != "Milk" {
		t.Errorf("Expected name to be 'Milk', got %s", item1.Name())
	}

	item2.Join(delta)
	if !reflect.DeepEqual(item1, item2) {
		t.Logf("Item 1: %v", item1)
		t.Logf("Item 2: %v", item2)
		t.Errorf("Expected item1 and item2 to be equal after joining with delta")
	}
}

func TestShoppingItem_IncQuantity(t *testing.T) {
	item1 := NewShoppingItem("replica1", "item1")
	item2 := item1.Clone()

	delta1 := item1.IncQuantity(5)

	if item1.Quantity() != 5 {
		t.Errorf("Expected quantity to be 5, got %d", item1.Quantity())
	}

	delta2 := item1.IncQuantity(-3)

	if item1.Quantity() != 2 {
		t.Errorf("Expected quantity to be 2 after decrement, got %d", item1.Quantity())
	}

	delta3 := item1.IncQuantity(-10) // Should not go below 0
	if item1.Quantity() != 0 {
		t.Errorf("Expected quantity to be 0 after excessive decrement, got %d", item1.Quantity())
	}

	item2.Join(delta1)
	item2.Join(delta2)
	item2.Join(delta3)

	if !reflect.DeepEqual(item1, item2) {
		t.Logf("Item1: %v", item1)
		t.Logf("Item2: %v", item2)
		t.Errorf("Expected item1 and item2 to be equal after joining with deltas")
	}
}

func TestShoppingItem_IncAcquired(t *testing.T) {
	item1 := NewShoppingItem("replica1", "item1")
	item1.IncQuantity(10)
	item2 := item1.Clone()

	delta := item1.IncAcquired(3)

	if item1.Acquired() != 3 {
		t.Errorf("Expected acquired to be 3, got %d", item1.Acquired())
	}

	delta2 := item1.IncAcquired(-2)

	if item1.Acquired() != 1 {
		t.Errorf("Expected acquired to be 1 after decrement, got %d", item1.Acquired())
	}

	delta3 := item1.IncAcquired(-5) // Should not go below 0
	if item1.Acquired() != 0 {
		t.Errorf("Expected acquired to be 0 after excessive decrement, got %d", item1.Acquired())
	}

	delta4 := item1.IncAcquired(15) // Should not exceed quantity
	if item1.Acquired() != 10 {
		t.Errorf("Expected acquired to be 10 after exceeding quantity, got %d", item1.Acquired())
	}

	item2.Join(delta)
	item2.Join(delta2)
	item2.Join(delta3)
	item2.Join(delta4)

	if !reflect.DeepEqual(item1, item2) {
		t.Errorf("Expected item1 and item2 to be equal after joining with deltas")
	}
}

func TestShoppingItem_SetContext(t *testing.T) {
	item := NewShoppingItem("replica1", "item1")
	newContext := crdt.NewDotContext()

	item.SetContext(newContext)

	if item.Context() != newContext {
		t.Errorf("Expected context to be updated, but it was not")
	}
	if item.quantity.Context() != newContext {
		t.Errorf("Expected quantity context to be updated, but it was not")
	}
	if item.acquired.Context() != newContext {
		t.Errorf("Expected acquired context to be updated, but it was not")
	}
}

func TestShoppingItem_Reset(t *testing.T) {
	item1 := NewShoppingItem("replica1", "item1")
	item1.Enable()
	item1.IncAcquired(5)
	item1.IncAcquired(2)
	item2 := item1.Clone()

	delta := item1.Reset()

	if item1.Quantity() != 0 {
		t.Errorf("Expected quantity to be 0 after reset, got %d", item1.Quantity())
	}
	if item1.Acquired() != 0 {
		t.Errorf("Expected acquired to be 0 after reset, got %d", item1.Acquired())
	}

	item2.Join(delta)
	if !reflect.DeepEqual(item1, item2) {
		t.Logf("Delta: %v", delta)
		t.Logf("Item 1: %v", item1)
		t.Logf("Item 2: %v", item2)
		t.Errorf("Expected item1 and item2 to be equal after joining with delta")
	}
}

func TestShoppingItem_ResetIsNull(t *testing.T) {
	item := NewShoppingItem("replica1", "item1")
	item.Enable()
	item.IncQuantity(5)

	if item.IsNull() {
		t.Errorf("Expected item to not be null before reset")
	}

	item.Reset()

	if !item.IsNull() {
		t.Errorf("Expected item to be null after reset")
	}
}

func TestShoppingItem_Join(t *testing.T) {
	item1 := NewShoppingItem("replica1", "item1")
	item1.IncQuantity(3)
	item1.IncAcquired(2)

	item2 := NewShoppingItem("replica2", "item1")
	item2.IncQuantity(5)
	item2.IncAcquired(4)

	item1.Join(item2)
	t.Logf("Item 1: %v", item1)

	if item1.Quantity() != 8 {
		t.Errorf("Expected quantity to be 8 after join, got %d", item1.Quantity())
	}
	if item1.Acquired() != 6 {
		t.Errorf("Expected acquired to be 6 after join, got %d", item1.Acquired())
	}
}

func TestShoppingItem_JoinWithEmptyItem(t *testing.T) {
	item1 := NewShoppingItem("replica1", "item1")
	item1.IncQuantity(5)
	item1.IncAcquired(2)

	item2 := NewShoppingItem("replica2", "item2")

	item1.Join(item2)

	if item1.Quantity() != 5 {
		t.Errorf("Expected quantity to remain 5 after joining with empty item, got %d", item1.Quantity())
	}
	if item1.Acquired() != 2 {
		t.Errorf("Expected acquired to remain 2 after joining with empty item, got %d", item1.Acquired())
	}
}

func TestShoppingItem_ConcurrentUpdates(t *testing.T) {
	item1 := NewShoppingItem("replica1", "item1")
	item2 := NewShoppingItem("replica2", "item1")

	delta1 := item1.IncQuantity(5)
	delta21 := item2.IncQuantity(5)
	delta22 := item2.IncAcquired(3)

	item1.Join(delta21)
	item1.Join(delta22)
	item2.Join(delta1)

	if item1.Quantity() != 10 {
		t.Errorf("Expected item1 quantity to be 5 after concurrent updates, got %d", item1.Quantity())
	}
	if item1.Acquired() != 3 {
		t.Errorf("Expected item1 acquired to be 3 after concurrent updates, got %d", item1.Acquired())
	}
	if item2.Quantity() != 10 {
		t.Errorf("Expected item2 quantity to be 5 after concurrent updates, got %d", item2.Quantity())
	}
	if item2.Acquired() != 3 {
		t.Errorf("Expected item2 acquired to be 3 after concurrent updates, got %d", item2.Acquired())
	}
}
