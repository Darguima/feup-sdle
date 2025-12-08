package crdt

import (
	"fmt"
	"sdle-server/crdt/generic"
	g01 "sdle-server/proto"
)

type ShoppingList struct {
	replicaID  string
	listID     string
	name       string
	items      *crdt.ORMap[string, *ShoppingItem]
	dotContext *crdt.DotContext
}

func NewShoppingList(replicaID string, listID string, name string) *ShoppingList {
	dotContext := crdt.NewDotContext()

	createItem := func(id string) *ShoppingItem { return NewShoppingItem(id, "", "") }
	items := crdt.NewORMap[string](replicaID, createItem)
	items.SetContext(dotContext)

	return &ShoppingList{
		replicaID:  replicaID,
		listID:     listID,
		name:       name,
		items:      items,
		dotContext: dotContext,
	}
}



func (sl *ShoppingList) ReplicaID() string {
	return sl.replicaID
}

func (sl *ShoppingList) ListID() string {
	return sl.listID
}

func (sl *ShoppingList) Name() string {
	return sl.name
}

func (sl *ShoppingList) Context() *crdt.DotContext {
	return sl.dotContext
}

func (sl *ShoppingList) SetContext(ctx *crdt.DotContext) {
	sl.dotContext = ctx
	sl.items.SetContext(ctx)
}


func (sl *ShoppingList) Items() []ShoppingItem {
	result := []ShoppingItem{}

	ids := sl.items.Keys()
	for _, id := range ids {
		item := sl.items.Get(id)

		// Due to resets, some items may be null
		if !item.IsNull() {
			result = append(result, *item.Clone())
		}
	}

	return result
}

func (sl *ShoppingList) GetItem(itemID string) *ShoppingItem {
	item := sl.items.Get(itemID)
	if item.IsNull() {
		return nil
	}
	return item.Clone()
}

func (sl *ShoppingList) PutItem(itemID string, name string, quantityDiff int64, acquiredDiff int64) *ShoppingList {
	delta := NewShoppingList(sl.replicaID, sl.listID, sl.name)

	itemsDelta := sl.items.Apply(itemID, func(item *ShoppingItem) *ShoppingItem {
		item.SetItemID(itemID)
		item.SetName(name)

		itemDelta := item.IncQuantity(quantityDiff)
		itemDelta.Join(item.IncAcquired(acquiredDiff))

		return itemDelta
	})

	delta.items = itemsDelta
	delta.SetContext(itemsDelta.Context())

	return delta
}

func (sl *ShoppingList) RemoveItem(itemID string) *ShoppingList {
	delta := NewShoppingList(sl.replicaID, sl.listID, sl.name)

	itemsDelta := sl.items.Remove(itemID)
	delta.items = itemsDelta
	delta.SetContext(itemsDelta.Context())

	return delta
}

func (sl *ShoppingList) Join(other *ShoppingList) {
	sl.items.Join(other.items)
	sl.dotContext.Join(other.dotContext)
}

func (sl *ShoppingList) Clone() *ShoppingList {
	clone := NewShoppingList(sl.replicaID, sl.listID, sl.name)
	clone.dotContext = sl.dotContext.Clone()
	clone.items = sl.items.Clone()
	return clone
}

func (sl *ShoppingList) String() string {
	return fmt.Sprintf("ShoppingList{replicaID: %s, listID: %s, name: %s, dotContext: %v, items: %v}",
		sl.replicaID, sl.listID, sl.name, sl.dotContext, sl.items)
}

func (sl *ShoppingList) ToProto() *g01.ShoppingList {
	protoItems := make(map[string]*g01.ShoppingItem)
	ids := sl.items.Keys()

	for _, id := range ids {
		protoItems[id] = sl.items.Get(id).ToProto()
	}

	return &g01.ShoppingList{
		ReplicaId:  sl.replicaID,
		Id:         sl.listID,
		Name:       sl.name,
		Items:      protoItems,
		DotContext: sl.dotContext.ToProto(),
	}
}

func ShoppingListFromProto(protoList *g01.ShoppingList) *ShoppingList {
	ctx := crdt.DotContextFromProto(protoList.GetDotContext())

	itemMap := make(map[string]*ShoppingItem)
	for id, protoItem := range protoList.GetItems() {
		itemMap[id] = ShoppingItemFromProto(protoItem, protoList.GetReplicaId(), id, ctx)
	}

	createItem := func(id string) *ShoppingItem { return NewShoppingItem(id, "", "") }
	items := crdt.NewORMapFrom(protoList.GetReplicaId(), createItem, ctx, itemMap)

	return &ShoppingList{
		replicaID:  protoList.GetReplicaId(),
		listID:     protoList.GetId(),
		name:       protoList.GetName(),
		dotContext: ctx,
		items:      items,
	}
}