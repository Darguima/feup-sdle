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
	quantity.SetContext(dotContext)

	acquired := crdt.NewCCounter(crdtID)
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

func (si *ShoppingItem) Quantity() int64 {
	return si.quantity.Read()
}

func (si *ShoppingItem) IncQuantity(amount uint64) *ShoppingItem {
	delta := NewShoppingItem(si.crdtID, "", "")

	quantityDelta := si.quantity.Inc(amount)
	delta.quantity = quantityDelta
	delta.SetContext(quantityDelta.Context())

	return delta
}

func (si *ShoppingItem) DecQuantity(amount uint64) *ShoppingItem {
	delta := NewShoppingItem(si.crdtID, "", "")

	quantityDelta := si.quantity.Dec(amount)
	delta.quantity = quantityDelta
	delta.SetContext(quantityDelta.Context())

	return delta
}

func (si *ShoppingItem) Acquired() int64 {
	return si.acquired.Read()
}

func (si *ShoppingItem) IncAcquired(amount uint64) *ShoppingItem {
	delta := NewShoppingItem(si.crdtID, "", "")

	acquiredDelta := si.acquired.Inc(amount)
	delta.acquired = acquiredDelta
	delta.SetContext(acquiredDelta.Context())

	return delta
}

func (si *ShoppingItem) DecAcquired(amount uint64) *ShoppingItem {
	delta := NewShoppingItem(si.crdtID, "", "")

	acquiredDelta := si.acquired.Dec(amount)
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

func (si *ShoppingItem) Clone() *ShoppingItem {
	clone := NewShoppingItem(si.crdtID, si.itemID, si.name)
	clone.dotContext = si.dotContext.Clone()
	clone.quantity = si.quantity.Clone()
	clone.acquired = si.acquired.Clone()

	clone.quantity.SetContext(clone.dotContext)
	clone.acquired.SetContext(clone.dotContext)

	return clone
}

func (si *ShoppingItem) String() string {
	return "ShoppingItem{" +
		"crdtID: " + si.crdtID +
		", itemID: " + si.itemID +
		", name: " + si.name +
		", quantity: " + si.quantity.String() +
		", acquired: " + si.acquired.String() +
	"}"
}
