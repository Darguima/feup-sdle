package crdt

import (
	"reflect"
	crdt "sdle-server/crdt/generic"
	"testing"
)

func TestShoppingItem_NewShoppingItem(t *testing.T) {
    item := NewShoppingItem("crdt1", "item1", "Milk")

    if item.CRDTID() != "crdt1" {
        t.Errorf("Expected CRDTID to be 'crdt1', got %s", item.CRDTID())
    }
    if item.ItemID() != "item1" {
        t.Errorf("Expected ItemID to be 'item1', got %s", item.ItemID())
    }
    if item.Name() != "Milk" {
        t.Errorf("Expected Name to be 'Milk', got %s", item.Name())
    }
    if item.Quantity() != 0 {
        t.Errorf("Expected initial quantity to be 0, got %d", item.Quantity())
    }
    if item.Acquired() != 0 {
        t.Errorf("Expected initial acquired to be 0, got %d", item.Acquired())
    }
}

func TestShoppingItem_IncQuantity(t *testing.T) {
    item1 := NewShoppingItem("crdt1", "item1", "Milk")
	item2 := item1.Clone()

    delta := item1.IncQuantity(5)

    if item1.Quantity() != 5 {
        t.Errorf("Expected quantity to be 5, got %d", item1.Quantity())
    }

	item2.Join(delta)

	if !reflect.DeepEqual(item1, item2) {
		t.Errorf("Expected item1 and item2 to be equal after joining with delta")
	}
}

func TestShoppingItem_DecQuantity(t *testing.T) {
    item1 := NewShoppingItem("crdt1", "item1", "Milk")
    item1.IncQuantity(10)
	item2 := item1.Clone()

    delta := item1.DecQuantity(4)

    if item1.Quantity() != 6 {
        t.Errorf("Expected quantity to be 6, got %d", item1.Quantity())
    }

	item2.Join(delta)
	if !reflect.DeepEqual(item1, item2) {
		t.Errorf("Expected item1 and item2 to be equal after joining with delta")
	}
}

func TestShoppingItem_IncAcquired(t *testing.T) {
    item1 := NewShoppingItem("crdt1", "item1", "Milk")
	item2 := item1.Clone()

    delta := item1.IncAcquired(3)

    if item1.Acquired() != 3 {
        t.Errorf("Expected acquired to be 3, got %d", item1.Acquired())
    }

	item2.Join(delta)
	if !reflect.DeepEqual(item1, item2) {
		t.Errorf("Expected item1 and item2 to be equal after joining with delta")
	}
}

func TestShoppingItem_DecAcquired(t *testing.T) {
    item1 := NewShoppingItem("crdt1", "item1", "Milk")
    item1.IncAcquired(5)
	item2 := item1.Clone()

    delta := item1.DecAcquired(2)

    if item1.Acquired() != 3 {
        t.Errorf("Expected acquired to be 3, got %d", item1.Acquired())
    }

	item2.Join(delta)
	if !reflect.DeepEqual(item1, item2) {
		t.Errorf("Expected item1 and item2 to be equal after joining with delta")
	}
}

func TestShoppingItem_SetContext(t *testing.T) {
    item := NewShoppingItem("crdt1", "item1", "Milk")
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
    item1 := NewShoppingItem("crdt1", "item1", "Milk")
    item1.IncQuantity(5)
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
		t.Errorf("Expected item1 and item2 to be equal after joining with delta")
	}
}

func TestShoppingItem_Join(t *testing.T) {
    item1 := NewShoppingItem("crdt1", "item1", "Milk")
    item1.IncQuantity(5)
    item1.IncAcquired(2)

    item2 := NewShoppingItem("crdt2", "item1", "Milk")
    item2.IncQuantity(3)
    item2.IncAcquired(4)

    item1.Join(item2)

    if item1.Quantity() != 8 {
        t.Errorf("Expected quantity to be 8 after join, got %d", item1.Quantity())
    }
    if item1.Acquired() != 6 {
        t.Errorf("Expected acquired to be 6 after join, got %d", item1.Acquired())
    }
}

func TestShoppingItem_JoinWithEmptyItem(t *testing.T) {
    item1 := NewShoppingItem("crdt1", "item1", "Milk")
    item1.IncQuantity(5)
    item1.IncAcquired(2)

    item2 := NewShoppingItem("crdt2", "item2", "Bread")

    item1.Join(item2)

    if item1.Quantity() != 5 {
        t.Errorf("Expected quantity to remain 5 after joining with empty item, got %d", item1.Quantity())
    }
    if item1.Acquired() != 2 {
        t.Errorf("Expected acquired to remain 2 after joining with empty item, got %d", item1.Acquired())
    }
}

func TestShoppingItem_ConcurrentUpdates(t *testing.T) {
    item1 := NewShoppingItem("crdt1", "item1", "Milk")
    item2 := NewShoppingItem("crdt2", "item1", "Milk")

    delta1 := item1.IncQuantity(5)
    delta2 := item2.IncAcquired(3)

    item1.Join(delta2)
    item2.Join(delta1)

    if item1.Quantity() != 5 {
        t.Errorf("Expected item1 quantity to be 5 after concurrent updates, got %d", item1.Quantity())
    }
    if item1.Acquired() != 3 {
        t.Errorf("Expected item1 acquired to be 3 after concurrent updates, got %d", item1.Acquired())
    }
    if item2.Quantity() != 5 {
        t.Errorf("Expected item2 quantity to be 5 after concurrent updates, got %d", item2.Quantity())
    }
    if item2.Acquired() != 3 {
        t.Errorf("Expected item2 acquired to be 3 after concurrent updates, got %d", item2.Acquired())
    }
}
