package crdt

type ORMapValue[T any] interface {
	Context() *DotContext
	SetContext(ctx *DotContext)

	Join(other T)
	Reset() T
	IsNull() bool
	Clone() T
}
