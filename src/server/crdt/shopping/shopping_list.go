package crdt

import (
	"fmt"
	"log"
	"sdle-server/crdt/generic"
	g01 "sdle-server/proto"
)

type ShoppingList struct {
	replicaID  string
	listID     string
	name       *crdt.MVReg[string]
	items      *crdt.ORMap[string, *ShoppingItem]
	dotContext *crdt.DotContext
}

func NewShoppingList(replicaID string, listID string) *ShoppingList {
	dotContext := crdt.NewDotContext()

	name := crdt.NewMVReg[string](replicaID)
	name.SetContext(dotContext)

	createItem := func(id string) *ShoppingItem { return NewShoppingItemWithEnabled(id, "", false) }
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
	// Assumes a single value in the MVReg
	values := sl.name.Read()
	if len(values) > 0 {
		return values[0]
	}
	return ""
}

func (sl *ShoppingList) SetName(name string) *ShoppingList {
	delta := NewShoppingList(sl.replicaID, sl.listID)

	nameDelta := sl.name.Reset()
	nameDelta.Join(sl.name.Write(name))

	delta.name = nameDelta
	delta.SetContext(nameDelta.Context())
	return delta
}

func (sl *ShoppingList) Context() *crdt.DotContext {
	return sl.dotContext
}

func (sl *ShoppingList) SetContext(ctx *crdt.DotContext) {
	sl.dotContext = ctx
	sl.name.SetContext(ctx)
	sl.items.SetContext(ctx)
}


func (sl *ShoppingList) Items() []ShoppingItem {
	result := []ShoppingItem{}

	ids := sl.items.Keys()
	for _, id := range ids {
		item := sl.items.Get(id)
		result = append(result, *item.Clone())
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
	delta := NewShoppingList(sl.replicaID, sl.listID)

	itemsDelta := sl.items.Apply(itemID, func(item *ShoppingItem) *ShoppingItem {
		item.SetItemID(itemID)

		itemDelta := item.SetName(name)
		itemDelta.Join(item.IncQuantity(quantityDiff))
		itemDelta.Join(item.IncAcquired(acquiredDiff))
		itemDelta.Join(item.Enable())

		return itemDelta
	})

	delta.items = itemsDelta
	delta.SetContext(itemsDelta.Context())

	return delta
}

func (sl *ShoppingList) RemoveItem(itemID string) *ShoppingList {
	delta := NewShoppingList(sl.replicaID, sl.listID)

	// Perform soft delete
	itemsDelta := sl.items.Apply(itemID, func(item *ShoppingItem) *ShoppingItem {
		itemDelta := item.Disable()
		return itemDelta
	})

	delta.items = itemsDelta
	delta.SetContext(itemsDelta.Context())

	return delta
}

func (sl *ShoppingList) Join(other *ShoppingList) {
	originalContext := sl.dotContext.Clone()

	sl.name.Join(other.name)
	sl.dotContext.Copy(originalContext)

	sl.items.Join(other.items)
	// No need to restore context here

	sl.dotContext.Join(other.dotContext)
}

func (sl *ShoppingList) Clone() *ShoppingList {
	clone := NewShoppingList(sl.replicaID, sl.listID)

	clone.name = sl.name.Clone()
	clone.items = sl.items.Clone()
	clone.SetContext(sl.dotContext.Clone())

	return clone
}

func (sl *ShoppingList) String() string {
	return fmt.Sprintf("ShoppingList{replicaID: %s, listID: %s, name: %s, dotContext: %v, items: %v}",
		sl.replicaID, sl.listID, sl.name, sl.dotContext, sl.items)
}

func (sl *ShoppingList) ToProto() *g01.ShoppingList {
	protoName := (*crdt.StringMVReg)(sl.name).ToProto()

	protoItems := make(map[string]*g01.ShoppingItem)
	ids := sl.items.Keys()

	for _, id := range ids {
		protoItems[id] = sl.items.Get(id).ToProto()
	}

	return &g01.ShoppingList{
		Id:         sl.listID,
		Name:       protoName,
		Items:      protoItems,
		DotContext: sl.dotContext.ToProto(),
	}
}

func ShoppingListFromProto(protoList *g01.ShoppingList, replicaId string) *ShoppingList {
	ctx := crdt.DotContextFromProto(protoList.GetDotContext())

	itemMap := make(map[string]*ShoppingItem)
	for id, protoItem := range protoList.GetItems() {
		itemMap[id] = ShoppingItemFromProto(protoItem, replicaId, id, ctx)
		log.Print(itemMap[id])
	}

	createItem := func(id string) *ShoppingItem { return NewShoppingItem(id, "") }
	items := crdt.NewORMapFrom(replicaId, createItem, ctx, itemMap)

	return &ShoppingList{
		replicaID:  replicaId,
		listID:     protoList.GetId(),
		name:       (*crdt.MVReg[string])(crdt.StringMVRegFromProto(protoList.GetName(), replicaId, ctx)),
		dotContext: ctx,
		items:      items,
	}
}