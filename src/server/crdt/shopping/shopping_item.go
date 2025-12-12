package crdt

import (
	crdt "sdle-server/crdt/generic"
	g01 "sdle-server/proto"
)

type ShoppingItem struct {
	replicaID  string
	dotContext *crdt.DotContext
	itemID     string
	name       *crdt.MVReg[string]
	quantity   *crdt.CCounter
	acquired   *crdt.CCounter
	deleted    *crdt.DWFlag
}

func NewShoppingItem(replicaID string, itemID string) *ShoppingItem {
	dotContext := crdt.NewDotContext()

	name := crdt.NewMVReg[string](replicaID)
	name.SetContext(dotContext)

	deletedFlag := crdt.NewDWFlag(replicaID)
	deletedFlag.SetContext(dotContext)

	quantity := crdt.NewCCounter(replicaID)
	quantity.SetContext(dotContext)

	acquired := crdt.NewCCounter(replicaID)
	acquired.SetContext(dotContext)

	return &ShoppingItem{
		replicaID:  replicaID,
		dotContext: dotContext,
		itemID:     itemID,
		name:       name,
		deleted:    deletedFlag,
		quantity:   quantity,
		acquired:   acquired,
	}
}

func (si *ShoppingItem) ReplicaID() string {
	return si.replicaID
}

func (si *ShoppingItem) Name() string {
	// Assumes a single value in the MVReg
	values := si.name.Read()
	if len(values) > 0 {
		return values[0]
	}
	return ""
}

func (si *ShoppingItem) SetName(name string) *ShoppingItem {
	delta := NewShoppingItem(si.replicaID, si.itemID)

	delta.name = si.name.Write(name)
	delta.SetContext(delta.name.Context())

	return delta
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
	delta := NewShoppingItem(si.replicaID, si.itemID)

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
	delta := NewShoppingItem(si.replicaID, si.itemID)
	currQuantity := int64(si.quantity.Read())
	currAcquired := int64(si.acquired.Read())

	// Prevent negative acquired values
	amount = max(-currAcquired, amount)

	// Prevent acquired from exceeding quantity
	amount = min(currQuantity-currAcquired, amount)

	acquiredDelta := si.acquired.Inc(amount)
	delta.acquired = acquiredDelta
	delta.SetContext(acquiredDelta.Context())

	return delta
}

func (si *ShoppingItem) Deleted() bool {
	return si.deleted.Read()
}

func (si *ShoppingItem) Delete() *ShoppingItem {
	delta := NewShoppingItem(si.replicaID, si.itemID)

	nonEnabledDelta := si.deleted.Enable()
	delta.deleted = nonEnabledDelta
	delta.SetContext(nonEnabledDelta.Context())

	return delta
}

func (si *ShoppingItem) Restore() *ShoppingItem {
	delta := NewShoppingItem(si.replicaID, si.itemID)

	nonEnabledDelta := si.deleted.Disable()
	delta.deleted = nonEnabledDelta
	delta.SetContext(nonEnabledDelta.Context())

	return delta
}

func (si *ShoppingItem) Context() *crdt.DotContext {
	return si.dotContext
}

func (si *ShoppingItem) SetContext(ctx *crdt.DotContext) {
	si.dotContext = ctx

	si.name.SetContext(ctx)
	si.quantity.SetContext(ctx)
	si.acquired.SetContext(ctx)
	si.deleted.SetContext(ctx)
}

func (si *ShoppingItem) Reset() *ShoppingItem {
	delta := NewShoppingItem(si.replicaID, si.itemID)

	delta.name = si.name.Reset()
	delta.quantity = si.quantity.Reset()
	delta.acquired = si.acquired.Reset()
	delta.deleted = si.deleted.Enable()

	delta.dotContext.Join(delta.name.Context())
	delta.dotContext.Join(delta.quantity.Context())
	delta.dotContext.Join(delta.acquired.Context())
	delta.dotContext.Join(delta.deleted.Context())

	return delta
}

func (si *ShoppingItem) IsNull() bool {
	return si.name.IsNull() && si.quantity.IsNull() && si.acquired.IsNull() && si.deleted.IsNull()
}

func (si *ShoppingItem) Join(other *ShoppingItem) {
	// Save original context to restore after merging quantity
	originalContext := si.dotContext.Clone()

	// Merge itemID if it is empty
	// This is needed when empty items are created automatically by ORMap
	if si.itemID == "" {
		si.itemID = other.itemID
	}

	si.name.Join(other.name)
	si.dotContext.Copy(originalContext)

	si.quantity.Join(other.quantity)
	si.dotContext.Copy(originalContext)

	si.acquired.Join(other.acquired)
	si.dotContext.Copy(originalContext)

	si.deleted.Join(other.deleted)
	// No need to restore original context here

	si.dotContext.Join(other.dotContext)
}

func (si *ShoppingItem) Clone() *ShoppingItem {
	clone := NewShoppingItem(si.replicaID, si.itemID)

	clone.dotContext = si.dotContext.Clone()
	clone.name = si.name.Clone()
	clone.quantity = si.quantity.Clone()
	clone.acquired = si.acquired.Clone()
	clone.deleted = si.deleted.Clone()

	clone.name.SetContext(clone.dotContext)
	clone.quantity.SetContext(clone.dotContext)
	clone.acquired.SetContext(clone.dotContext)
	clone.deleted.SetContext(clone.dotContext)

	return clone
}

func (si ShoppingItem) String() string {
	return "ShoppingItem{" +
		"replicaID: " + si.replicaID +
		", itemID: " + si.itemID +
		", name: " + si.name.String() +
		", deleted: " + si.deleted.String() +
		", quantity: " + si.quantity.String() +
		", acquired: " + si.acquired.String() +
		"}"
}

func (si *ShoppingItem) ToProto() *g01.ShoppingItem {
	return &g01.ShoppingItem{
		Name:     ((*crdt.StringMVReg)(si.name)).ToProto(),
		Quantity: si.quantity.ToProto(),
		Acquired: si.acquired.ToProto(),
		Deleted:  si.deleted.ToProto(),
	}
}

func ShoppingItemFromProto(protoItem *g01.ShoppingItem, replicaID string, itemID string, ctx *crdt.DotContext) *ShoppingItem {
	name := (*crdt.MVReg[string])(crdt.StringMVRegFromProto(protoItem.GetName(), replicaID, ctx))
	quantity := crdt.CCounterFromProto(protoItem.GetQuantity(), replicaID, ctx)
	acquired := crdt.CCounterFromProto(protoItem.GetAcquired(), replicaID, ctx)
	deleted := crdt.DWFlagFromProto(protoItem.GetDeleted(), replicaID, ctx)

	return &ShoppingItem{
		replicaID:  replicaID,
		dotContext: ctx,
		itemID:     itemID,
		name:       name,
		quantity:   quantity,
		acquired:   acquired,
		deleted:    deleted,
	}
}
