package crdt

import (
	"reflect"
	crdt "sdle-server/crdt/generic"
	"testing"
)

// === Auxiliary Functions ===

func listsEqual(a, b *ShoppingList) bool {
	if a.listID != b.listID || a.Name() != b.Name() {
		return false
	}

	if !reflect.DeepEqual(a.dotContext, b.dotContext) {
		return false
	}

	aKeys := a.items.Keys()
	bKeys := b.items.Keys()

	if len(aKeys) != len(bKeys) {
		return false
	}

	for _, key := range aKeys {
		itemA := a.items.Get(key)
		itemB := b.items.Get(key)

		if itemA.quantity.Read() != itemB.quantity.Read() || itemA.acquired.Read() != itemB.acquired.Read() {
			return false
		}
	}

	return true
}

// === Shopping List Tests ===

func TestShoppingList_NewShoppingList(t *testing.T) {
    list := NewShoppingList("replica1", "list1")

    if list.ReplicaID() != "replica1" {
        t.Errorf("Expected ReplicaID to be 'replica1', got %s", list.ReplicaID())
    }
    if list.Name() != "" {
        t.Errorf("Expected Name to be empty string, got %s", list.Name())
    }
    if len(list.Items()) != 0 {
        t.Errorf("Expected initial items to be empty, got %v", list.Items())
    }
    if list.Context() == nil {
        t.Errorf("Expected context to be initialized, got nil")
    }
}

func TestShoppingList_SetName(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list2 := list1.Clone()

    delta := list1.SetName("Weekly Shopping")
    if list1.Name() != "Weekly Shopping" {
        t.Errorf("Expected name to be 'Weekly Shopping', got %s", list1.Name())
    }

    list2.Join(delta)
    if !listsEqual(list1, list2) {
        t.Logf("List 1: %v", list1)
        t.Logf("List 2: %v", list2)
        t.Errorf("Expected list1 and list2 to be equal after joining with delta")
    }
}

func TestShoppingList_PutItem(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list2 := list1.Clone()

    delta := list1.PutItem("item1", "Milk", 5, 2)
    t.Logf("List 1: %v", list1)

    items := list1.Items()
    if len(items) != 1 {
        t.Errorf("Expected 1 item in the list, got %d", len(items))
    }
    if items[0].ItemID() != "item1" || items[0].Name() != "Milk" {
        t.Errorf("Expected item1 to be 'Milk', got %v", items[0])
    }
    if items[0].Quantity() != 5 {
        t.Errorf("Expected quantity to be 5, got %d", items[0].Quantity())
    }
    if items[0].Acquired() != 2 {
        t.Errorf("Expected acquired to be 2, got %d", items[0].Acquired())
    }

    list2.Join(delta)
    if !listsEqual(list1, list2) {
		t.Logf("List 1: %v", list1)
		t.Logf("List 2: %v", list2)
        t.Errorf("Expected list1 and list2 to be equal after joining with delta")
    }
}

func TestShoppingList_RemoveItem(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list1.PutItem("item1", "Milk", 5, 2)
    list2 := list1.Clone()

    delta := list1.RemoveItem("item1")

    items := list1.Items()
    if len(items) != 0 {
        t.Errorf("Expected no items in the list after removal, got %d", len(items))
    }

    list2.Join(delta)
    if !listsEqual(list1, list2) {
		t.Logf("List 1: %v", list1)
		t.Logf("List 2: %v", list2)
		t.Logf("Delta: %v", delta)
        t.Errorf("Expected list1 and list2 to be equal after joining with delta")
    }
}

func TestShoppingList_Join(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list1.PutItem("item1", "Milk", 5, 2)

    list2 := NewShoppingList("replica2", "list2")
    list2.PutItem("item2", "Bread", 3, 1)

    list1.Join(list2)

    items := list1.Items()
    if len(items) != 2 {
        t.Errorf("Expected 2 items in the list after join, got %d", len(items))
    }

    item1 := items[0]
    item2 := items[1]

    if item1.ItemID() == "item1" {
        if item1.Quantity() != 5 || item1.Acquired() != 2 {
            t.Errorf("Expected item1 to have quantity 5 and acquired 2, got quantity %d and acquired %d", item1.Quantity(), item1.Acquired())
        }
    } else if item1.ItemID() == "item2" {
        if item1.Quantity() != 3 || item1.Acquired() != 1 {
            t.Errorf("Expected item2 to have quantity 3 and acquired 1, got quantity %d and acquired %d", item1.Quantity(), item1.Acquired())
        }
    } else {
        t.Errorf("Unexpected item in the list: %v", item1)
    }

    if item2.ItemID() == "item1" {
        if item2.Quantity() != 5 || item2.Acquired() != 2 {
            t.Errorf("Expected item1 to have quantity 5 and acquired 2, got quantity %d and acquired %d", item2.Quantity(), item2.Acquired())
        }
    } else if item2.ItemID() == "item2" {
        if item2.Quantity() != 3 || item2.Acquired() != 1 {
            t.Errorf("Expected item2 to have quantity 3 and acquired 1, got quantity %d and acquired %d", item2.Quantity(), item2.Acquired())
        }
    } else {
        t.Errorf("Unexpected item in the list: %v", item2)
    }
}

func TestShoppingList_SetContext(t *testing.T) {
    list := NewShoppingList("replica1", "list1")
    newContext := crdt.NewDotContext()

    list.SetContext(newContext)

    if list.Context() != newContext {
        t.Errorf("Expected context to be updated, but it was not")
    }
}

func TestShoppingList_ConcurrentUpdates(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list2 := NewShoppingList("replica2", "list1")

    delta1 := list1.PutItem("item1", "Milk", 5, 2)
    delta2 := list2.PutItem("item2", "Bread", 3, 1)

    list1.Join(delta2)
    list2.Join(delta1)

    items1 := list1.Items()
    items2 := list2.Items()

    if !listsEqual(list1, list2) {
        t.Errorf("Expected both lists to have the same items after concurrent updates,\n\ngot %v\n\nand %v\n", items1, items2)
    }

    if len(items1) != 2 {
        t.Errorf("Expected 2 items in the list after concurrent updates, got %d", len(items1))
    }
}



func TestShoppingList_JoinWithConflictingUpdates(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list1.PutItem("item1", "Milk", 5, 2)

    list2 := NewShoppingList("replica2", "list1")
    list2.PutItem("item1", "Milk", 10, 4)

    list1.Join(list2)

    item := list1.GetItem("item1")
    if item == nil {
        t.Fatalf("Expected item1 to exist after join, got nil")
    }

    if item.Quantity() != 15 {
        t.Errorf("Expected quantity to be 15 after resolving conflict, got %d", item.Quantity())
    }
    if item.Acquired() != 6 {
        t.Errorf("Expected acquired to be 6 after resolving conflict, got %d", item.Acquired())
    }
}

func TestShoppingList_JoinWithEmptyList(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list1.PutItem("item1", "Milk", 5, 2)

    list2 := NewShoppingList("replica2", "list2")

    list1.Join(list2)

    items := list1.Items()
    if len(items) != 1 {
        t.Errorf("Expected 1 item in the list after joining with empty list, got %d", len(items))
    }
    if items[0].ItemID() != "item1" {
        t.Errorf("Expected item1 to remain in the list, got %v", items[0])
    }
}

func TestShoppingList_JoinWithMultipleUpdates(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list1.PutItem("item1", "Milk", 5, 2)

    list2 := NewShoppingList("replica2", "list2")
    list2.PutItem("item1", "Milk", 10, 4)
    list2.PutItem("item2", "Bread", 3, 1)

    list1.Join(list2)

    items := list1.Items()
    if len(items) != 2 {
        t.Errorf("Expected 2 items in the list after join, got %d", len(items))
    }

    item1 := list1.GetItem("item1")
    if item1.Quantity() != 15 || item1.Acquired() != 6 {
        t.Errorf("Expected item1 to have quantity 15 and acquired 6, got quantity %d and acquired %d", item1.Quantity(), item1.Acquired())
    }

    item2 := list1.GetItem("item2")
    if item2.Quantity() != 3 || item2.Acquired() != 1 {
        t.Errorf("Expected item2 to have quantity 3 and acquired 1, got quantity %d and acquired %d", item2.Quantity(), item2.Acquired())
    }
}

func TestShoppingList_Clone(t *testing.T) {
    list := NewShoppingList("replica1", "list1")
    list.PutItem("item1", "Milk", 5, 2)

    clone := list.Clone()

    if !listsEqual(list, clone) {
        t.Errorf("Expected cloned list to be equal to the original, got %v and %v", list, clone)
    }
}

func TestShoppingList_CloneIndependence(t *testing.T) {
	list1 := NewShoppingList("replica1", "list1")
	list1.PutItem("item1", "Milk", 5, 2)
	list2 := list1.Clone()

	list1.PutItem("item2", "Bread", 3, 1)

	if len(list2.Items()) != 1 {
		t.Errorf("Expected cloned list to remain unchanged after modifying original, got %d items", len(list2.Items()))
	}
}

func TestShoppingList_GetItem(t *testing.T) {
    list := NewShoppingList("replica1", "list1")
    list.PutItem("item1", "Milk", 5, 2)

    item := list.GetItem("item1")
    if item == nil {
        t.Fatalf("Expected to retrieve item1, got nil")
    }
    if item.ItemID() != "item1" || item.Name() != "Milk" {
        t.Errorf("Expected item1 to be 'Milk', got %v", item)
    }
    if item.Quantity() != 5 {
        t.Errorf("Expected quantity to be 5, got %d", item.Quantity())
    }
    if item.Acquired() != 2 {
        t.Errorf("Expected acquired to be 2, got %d", item.Acquired())
    }

    nonExistentItem := list.GetItem("item2")
    if nonExistentItem != nil {
        t.Errorf("Expected nil for non-existent item, got %v", nonExistentItem)
    }
}

func TestShoppingList_RemoveNonExistentItem(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list2 := list1.Clone()

    delta := list1.RemoveItem("item1")

    if len(list1.Items()) != 0 {
        t.Errorf("Expected no items in the list after attempting to remove non-existent item, got %d", len(list1.Items()))
    }

    list2.Join(delta)
    if !listsEqual(list1, list2) {
        t.Errorf("Expected list1 and list2 to remain equal after removing non-existent item")
    }
}

func TestShoppingList_PutItemWithNegativeValues(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
	list2 := list1.Clone()

    delta := list1.PutItem("item1", "Milk", -5, -2)

    items := list1.Items()
    if len(items) != 1 {
        t.Errorf("Expected 1 item in the list, got %d", len(items))
    }

	list2.Join(delta)
	if !listsEqual(list1, list2) {
		t.Errorf("Expected list1 and list2 to be equal after joining with delta")
	}
}

func TestShoppingList_RemoveItemWithOtherItems(t *testing.T) {
	list1 := NewShoppingList("replica1", "list1")
	list1.PutItem("item1", "Milk", 5, 2)
	list1.PutItem("item2", "Bread", 3, 1)
	list2 := list1.Clone()

	delta := list1.RemoveItem("item2")

	items := list1.Items()
	if len(items) != 1 {
		t.Errorf("Expected 1 item in the list after removal, got %d", len(items))
	}
	if items[0].ItemID() != "item1" {
		t.Errorf("Expected remaining item to be item1, got %v", items[0])
	}

	list2.Join(delta)
	if !listsEqual(list1, list2) {
		t.Errorf("Expected list1 and list2 to be equal after joining with delta")
	}
}

func TestShoppingList_RemoveAfterPutItem(t *testing.T) {
	list1 := NewShoppingList("replica1", "list1")
	list2 := NewShoppingList("replica2", "list1")

	delta1 := list1.PutItem("item1", "Milk", 5, 2)
	delta2 := list1.RemoveItem("item1")

	if len(list1.Items()) != 0 {
		t.Errorf("Expected no items in the list after put and remove, got %d", len(list1.Items()))
	}

	list2.Join(delta1)
	list2.Join(delta2)

    t.Logf("Delta 1: %v", delta1)
    t.Logf("Delta 2: %v", delta2)

	if !listsEqual(list1, list2) {
        t.Logf("List 1: %v", list1)
        t.Logf("List 2: %v", list2)
		t.Errorf("Expected list1 and list2 to be equal after joining with deltas")
	}
}

func TestShoppingList_PutItemMultipleTimes(t *testing.T) {
	list1 := NewShoppingList("replica1", "list1")
	list1.PutItem("item1", "Milk", 5, 2)
	list2 := list1.Clone()

	delta := list1.PutItem("item1", "Milk", 3, 1)

	items := list1.Items()
	if len(items) != 1 {
		t.Errorf("Expected 1 item in the list after multiple puts, got %d", len(items))
	}
	if items[0].Quantity() != 8 {
		t.Errorf("Expected quantity to be 8 after multiple puts, got %d", items[0].Quantity())
	}
	if items[0].Acquired() != 3 {
		t.Errorf("Expected acquired to be 3 after multiple puts, got %d", items[0].Acquired())
	}

	list2.Join(delta)
	if !listsEqual(list1, list2) {
		t.Errorf("Expected list1 and list2 to be equal after joining with deltas")
	}
}

func TestShoppingList_EmptyList(t *testing.T) {
    list := NewShoppingList("replica1", "list1")

    if len(list.Items()) != 0 {
        t.Errorf("Expected empty list to have no items, got %d", len(list.Items()))
    }

    item := list.GetItem("item1")
    if item != nil {
        t.Errorf("Expected nil for non-existent item in empty list, got %v", item)
    }
}

func TestShoppingList_ToProtoAndFromProto_EmptyList(t *testing.T) {
    list := NewShoppingList("replica1", "list1")

    proto := list.ToProto()
    converted := ShoppingListFromProto(proto, "replica1")

    if !listsEqual(list, converted) {
        t.Errorf("Expected converted list to be equal to the original,\n---\ngot %v\n---\nand %v\n---", list, converted)
    }
}

func TestShoppingList_ToProtoAndFromProto_SingleItem(t *testing.T) {
    list := NewShoppingList("replica1", "list1")
    list.PutItem("item1", "Milk", 5, 2)

    proto := list.ToProto()
    converted := ShoppingListFromProto(proto, "replica1")

    t.Logf("list: %v", list)
    t.Logf("conv: %v", converted)

    if !listsEqual(list, converted) {
        t.Errorf("Expected converted list to be equal to the original,\n---\ngot %v\n---\nand %v\n---", list, converted)
    }
}

func TestShoppingList_ToProtoAndFromProto_MultipleItems(t *testing.T) {
    list := NewShoppingList("replica1", "list1")
    list.PutItem("item1", "Milk", 5, 2)
    list.PutItem("item2", "Bread", 3, 1)

    proto := list.ToProto()
    converted := ShoppingListFromProto(proto, "replica1")

    if !listsEqual(list, converted) {
        t.Errorf("Expected converted list to be equal to the original,\n---\ngot %v\n---\nand %v\n---", list, converted)
    }
}

func TestShoppingList_ToProtoAndFromProto_EmptyItem(t *testing.T) {
    list := NewShoppingList("replica1", "list1")
    list.PutItem("item1", "Milk", 0, 0) // Add an item with zero quantity and acquired

    proto := list.ToProto()
    converted := ShoppingListFromProto(proto, "replica1")

    if !listsEqual(list, converted) {
        t.Errorf("Expected converted list to be equal to the original,\n---\ngot %v\n---\nand %v\n---", list, converted)
    }
}

func TestShoppingList_ToProtoAndFromProto_ConflictingUpdates(t *testing.T) {
    list1 := NewShoppingList("replica1", "list1")
    list1.PutItem("item1", "Milk", 5, 2)

    list2 := NewShoppingList("replica2", "list1")
    list2.PutItem("item1", "Milk", 10, 4)

    list1.Join(list2)

    proto := list1.ToProto()
    converted := ShoppingListFromProto(proto, "replica1")

    if !listsEqual(list1, converted) {
        t.Errorf("Expected converted list to be equal to the original after join,\n---\ngot %v\n---\nand %v\n---", list1, converted)
    }
}

func TestShoppingList_ToProtoAndFromProto_RemoveItem(t *testing.T) {
    list := NewShoppingList("replica1", "list1")
    list.PutItem("item1", "Milk", 5, 2)
    list.PutItem("item2", "Bread", 3, 1)

    list.RemoveItem("item1")

    proto := list.ToProto()
    converted := ShoppingListFromProto(proto, "replica1")

    if !listsEqual(list, converted) {
        t.Errorf("Expected converted list to be equal to the original after item removal,\n---\ngot %v\n---\nand %v\n---", list, converted)
    }
}

func TestShoppingList_ToProtoAndFromProto_ComplexScenario(t *testing.T) {
    list := NewShoppingList("replica1", "list1")
    list.PutItem("item1", "Milk", 5, 2)
    list.PutItem("item2", "Bread", 3, 1)
    list.PutItem("item3", "Eggs", 12, 6)

    list.RemoveItem("item2")
    list.PutItem("item4", "Butter", 2, 0)

    proto := list.ToProto()
    converted := ShoppingListFromProto(proto, "replica1")

    if !listsEqual(list, converted) {
        t.Errorf("Expected converted list to be equal to the original after complex scenario,\n---\ngot %v\n---\nand %v\n---", list, converted)
    }
}