package crdt

import "sdle-server/crdt/generic"

type ShoppingItem struct {
	crdtID     string
	dotContext *crdt.DotContext
	itemID     string
	name       string
	quantity   *crdt.CCounter
	acquired   *crdt.CCounter
}

func NewShoppingItem(crdtID string, itemID string, name string) *ShoppingItem {
	dotContext := crdt.NewDotContext()

	quantity := crdt.NewCCounter(crdtID)
	acquired := crdt.NewCCounter(crdtID)
	quantity.SetContext(dotContext)
	acquired.SetContext(dotContext)

	return &ShoppingItem{
		crdtID: crdtID,
		dotContext: dotContext,
		itemID: itemID,
		name: name,
		quantity: quantity,
		acquired: acquired,
	}
}

func (si *ShoppingItem) CRDTID() string {
	return si.crdtID
}

func (si *ShoppingItem) Name() string {
	return si.name
}

func (si *ShoppingItem) ItemID() string {
	return si.itemID
}

func (si *ShoppingItem) Quantity() *crdt.CCounter {
	return si.quantity
}

func (si *ShoppingItem) Acquired() *crdt.CCounter {
	return si.acquired
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
	delta := NewShoppingItem(si.crdtID, "", "")

	quantityDelta := si.quantity.Reset()
	acquiredDelta := si.acquired.Reset()

	delta.dotContext.Join(quantityDelta.Context())
	delta.dotContext.Join(acquiredDelta.Context())

	return delta
}

func (si *ShoppingItem) Join(other *ShoppingItem) {
	originalContext := si.dotContext.Clone()

	si.quantity.Join(other.quantity)
	si.dotContext.Copy(originalContext)

	si.acquired.Join(other.acquired)
	// No need to restore original context here

	si.dotContext.Join(other.dotContext)
}
