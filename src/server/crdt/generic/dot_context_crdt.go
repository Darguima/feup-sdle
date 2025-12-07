package crdt

type DotContextCRDT[T any] interface {
	Context() *DotContext
	SetContext(ctx *DotContext)

	// Create a new empty instance of the same type
	// Necessary for the join operation of ORMap
	NewEmpty(id string) T

	Join(other T)
	Reset() T
	IsNull() bool
	Clone() T
}