package crdt

import "sdle-server/crdt/generic"

type ShoppingList struct {
	crdtID     string
	name       string
	dotContext *crdt.DotContext
	items      *crdt.ORMap[string, *ShoppingItem]
}

func NewShoppingList(crdtID string, name string) *ShoppingList {
	dotContext := crdt.NewDotContext()
	items := crdt.NewORMap[string, *ShoppingItem](crdtID)
	items.SetContext(dotContext)

	return &ShoppingList{
		crdtID:     crdtID,
		name:       name,
		dotContext: dotContext,
		items:      items,
	}
}

func (sl *ShoppingList) CRDTID() string {
	return sl.crdtID
}

func (sl *ShoppingList) Name() string {
	return sl.name
}

func (sl *ShoppingList) Items() *crdt.ORMap[string, *ShoppingItem] {
	return sl.items
}

func (sl *ShoppingList) Context() *crdt.DotContext {
	return sl.dotContext
}

func (sl *ShoppingList) SetContext(ctx *crdt.DotContext) {
	sl.dotContext = ctx
	sl.items.SetContext(ctx)
}