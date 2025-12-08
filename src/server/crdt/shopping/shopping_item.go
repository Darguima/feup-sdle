package crdt

import (
	crdt "sdle-server/crdt/generic"
	g01 "sdle-server/proto"
)

type ShoppingItem struct {
	replicaID  string
	dotContext *crdt.DotContext
	itemID     string
	name       string
	quantity   *crdt.CCounter
	acquired   *crdt.CCounter
}

func NewShoppingItem(replicaID string, itemID string, name string) *ShoppingItem {
	dotContext := crdt.NewDotContext()

	quantity := crdt.NewCCounter(replicaID)
	quantity.SetContext(dotContext)

	acquired := crdt.NewCCounter(replicaID)
	acquired.SetContext(dotContext)

	return &ShoppingItem{
		replicaID:  replicaID,
		dotContext: dotContext,
		itemID:     itemID,
		name:       name,
		quantity:   quantity,
		acquired:   acquired,
	}
}

func (si *ShoppingItem) ReplicaID() string {
	return si.replicaID
}

func (si *ShoppingItem) Name() string {
	return si.name
}

func (si *ShoppingItem) SetName(name string) {
	si.name = name
}

func (si *ShoppingItem) ItemID() string {
	return si.itemID
}

func (si *ShoppingItem) SetItemID(itemID string) {
	si.itemID = itemID
}

func (si *ShoppingItem) Quantity() uint64 {
	return uint64(si.quantity.Read())
}

func (si *ShoppingItem) IncQuantity(amount int64) *ShoppingItem {
	delta := NewShoppingItem(si.replicaID, si.itemID, si.name)

	// Prevent negative quantity values
	amount = max(-si.quantity.Read(), amount)

	quantityDelta := si.quantity.Inc(amount)
	delta.quantity = quantityDelta
	delta.SetContext(quantityDelta.Context())

	return delta
}

func (si *ShoppingItem) Acquired() uint64 {
	return uint64(si.acquired.Read())
}

func (si *ShoppingItem) IncAcquired(amount int64) *ShoppingItem {
	delta := NewShoppingItem(si.replicaID, si.itemID, si.name)
	currQuantity := int64(si.quantity.Read())
	currAcquired := int64(si.acquired.Read())

	// Prevent negative acquired values
	amount = max(-currAcquired, amount)

	// Prevent acquired from exceeding quantity
	amount = min(currQuantity - currAcquired, amount)

	acquiredDelta := si.acquired.Inc(amount)
	delta.acquired = acquiredDelta
	delta.SetContext(acquiredDelta.Context())

	return delta
}

func (si *ShoppingItem) Context() *crdt.DotContext {
	return si.dotContext
}

func (si *ShoppingItem) SetContext(ctx *crdt.DotContext) {
	si.dotContext = ctx
	si.quantity.SetContext(ctx)
	si.acquired.SetContext(ctx)
}

func (si *ShoppingItem) NewEmpty(id string) *ShoppingItem {
	return NewShoppingItem(id, "", "")
}

func (si *ShoppingItem) Reset() *ShoppingItem {
	delta := NewShoppingItem(si.replicaID, si.itemID, si.name)
	quantityDelta := si.quantity.Reset()
	acquiredDelta := si.acquired.Reset()

	delta.dotContext.Join(quantityDelta.Context())
	delta.dotContext.Join(acquiredDelta.Context())

	return delta
}

func (si *ShoppingItem) IsNull() bool {
	return si.quantity.Read() == 0  // Quantity must normally be positive
}

func (si *ShoppingItem) Join(other *ShoppingItem) {
	// Save original context to restore after merging quantity
	originalContext := si.dotContext.Clone()

	// Merge itemID and name if they are empty
	// This is needed when empty items are created automatically by ORMap
	if si.itemID == "" {
		si.itemID = other.itemID
	}
	if si.name == "" {
		si.name = other.name
	}

	si.quantity.Join(other.quantity)
	si.dotContext.Copy(originalContext)

	si.acquired.Join(other.acquired)
	// No need to restore original context here

	si.dotContext.Join(other.dotContext)
}

func (si *ShoppingItem) Clone() *ShoppingItem {
	clone := NewShoppingItem(si.replicaID, si.itemID, si.name)

	clone.dotContext = si.dotContext.Clone()
	clone.quantity = si.quantity.Clone()
	clone.acquired = si.acquired.Clone()

	clone.quantity.SetContext(clone.dotContext)
	clone.acquired.SetContext(clone.dotContext)

	return clone
}

func (si ShoppingItem) String() string {
	return "ShoppingItem{" +
		"replicaID: " + si.replicaID +
		", itemID: " + si.itemID +
		", name: " + si.name +
		", quantity: " + si.quantity.String() +
		", acquired: " + si.acquired.String() +
	"}"
}

func (si *ShoppingItem) ToProto() *g01.ShoppingItem {
	return &g01.ShoppingItem{
		Name:     si.name,
		Quantity: si.quantity.ToProto(),
		Acquired: si.acquired.ToProto(),
	}
}

func ShoppingItemFromProto(protoItem *g01.ShoppingItem, replicaID string, itemID string, ctx *crdt.DotContext) *ShoppingItem {
	quantity := crdt.CCounterFromProto(protoItem.GetQuantity(), replicaID, ctx)
	acquired := crdt.CCounterFromProto(protoItem.GetAcquired(), replicaID, ctx)

	return &ShoppingItem{
		replicaID:  replicaID,
		dotContext: ctx,
		itemID:     itemID,
		name:       protoItem.GetName(),
		quantity:   quantity,
		acquired:   acquired,
	}
}
