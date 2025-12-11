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
	nonErased  *crdt.EWFlag
}

func NewShoppingItem(replicaID string, itemID string) *ShoppingItem {
	return NewShoppingItemWithEnabled(replicaID, itemID, true)
}

func NewShoppingItemWithEnabled(replicaID string, itemID string, enabled bool) *ShoppingItem {
	dotContext := crdt.NewDotContext()

	name := crdt.NewMVReg[string](replicaID)
	name.SetContext(dotContext)

	nonErased := crdt.NewEWFlag(replicaID)
	nonErased.SetContext(dotContext)
	if enabled {
		nonErased.Enable()
	}

	quantity := crdt.NewCCounter(replicaID)
	quantity.SetContext(dotContext)

	acquired := crdt.NewCCounter(replicaID)
	acquired.SetContext(dotContext)

	return &ShoppingItem{
		replicaID:  replicaID,
		dotContext: dotContext,
		itemID:     itemID,
		name:       name,
		nonErased:  nonErased,
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
	delta := NewShoppingItemWithEnabled(si.replicaID, si.itemID, false)

	nameDelta := si.name.Write(name)
	delta.name = nameDelta
	delta.SetContext(nameDelta.Context())

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
	delta := NewShoppingItemWithEnabled(si.replicaID, si.itemID, false)

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
	delta := NewShoppingItemWithEnabled(si.replicaID, si.itemID, false)
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

func (si *ShoppingItem) Disabled() bool {
	return !si.nonErased.Read()
}

func (si *ShoppingItem) Enable() *ShoppingItem {
	delta := NewShoppingItemWithEnabled(si.replicaID, si.itemID, false)

	nonErasedDelta := si.nonErased.Enable()
	delta.nonErased = nonErasedDelta
	delta.SetContext(nonErasedDelta.Context())

	return delta
}

func (si *ShoppingItem) Disable() *ShoppingItem {
	delta := NewShoppingItemWithEnabled(si.replicaID, si.itemID, false)

	nonErasedDelta := si.nonErased.Disable()
	delta.nonErased = nonErasedDelta
	delta.SetContext(nonErasedDelta.Context())

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
	si.nonErased.SetContext(ctx)
}

func (si *ShoppingItem) NewEmpty(id string) *ShoppingItem {
	return NewShoppingItem(id, "")
}

func (si *ShoppingItem) Reset() *ShoppingItem {
	delta := NewShoppingItemWithEnabled(si.replicaID, si.itemID, false)

	nameDelta := si.name.Reset()
	quantityDelta := si.quantity.Reset()
	acquiredDelta := si.acquired.Reset()
	nonErasedDelta := si.nonErased.Disable()
	delta.nonErased = nonErasedDelta

	delta.dotContext.Join(nameDelta.Context())
	delta.dotContext.Join(quantityDelta.Context())
	delta.dotContext.Join(acquiredDelta.Context())
	delta.dotContext.Join(nonErasedDelta.Context())

	return delta
}

func (si *ShoppingItem) IsNull() bool {
	return !si.nonErased.Read()
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

	si.nonErased.Join(other.nonErased)
	// No need to restore original context here

	si.dotContext.Join(other.dotContext)
}

func (si *ShoppingItem) Clone() *ShoppingItem {
	clone := NewShoppingItem(si.replicaID, si.itemID)

	clone.dotContext = si.dotContext.Clone()
	clone.name = si.name.Clone()
	clone.quantity = si.quantity.Clone()
	clone.acquired = si.acquired.Clone()
	clone.nonErased = si.nonErased.Clone()

	clone.name.SetContext(clone.dotContext)
	clone.quantity.SetContext(clone.dotContext)
	clone.acquired.SetContext(clone.dotContext)
	clone.nonErased.SetContext(clone.dotContext)

	return clone
}

func (si ShoppingItem) String() string {
	return "ShoppingItem{" +
		"replicaID: " + si.replicaID +
		", itemID: " + si.itemID +
		", name: " + si.name.String() +
		", nonErased: " + si.nonErased.String() +
		", quantity: " + si.quantity.String() +
		", acquired: " + si.acquired.String() +
	"}"
}

func (si *ShoppingItem) ToProto() *g01.ShoppingItem {
	return &g01.ShoppingItem{
		Name:      ((*crdt.StringMVReg)(si.name)).ToProto(),
		Quantity:  si.quantity.ToProto(),
		Acquired:  si.acquired.ToProto(),
		NonErased: si.nonErased.ToProto(),
	}
}

func ShoppingItemFromProto(protoItem *g01.ShoppingItem, replicaID string, itemID string, ctx *crdt.DotContext) *ShoppingItem {
	name := (*crdt.MVReg[string])(crdt.StringMVRegFromProto(protoItem.GetName(), replicaID, ctx))
	quantity := crdt.CCounterFromProto(protoItem.GetQuantity(), replicaID, ctx)
	acquired := crdt.CCounterFromProto(protoItem.GetAcquired(), replicaID, ctx)
	nonErased := crdt.EWFlagFromProto(protoItem.GetNonErased(), replicaID, ctx)

	return &ShoppingItem{
		replicaID:  replicaID,
		dotContext: ctx,
		itemID:     itemID,
		name:       name,
		quantity:   quantity,
		acquired:   acquired,
		nonErased:  nonErased,
	}
}
