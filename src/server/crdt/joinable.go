package crdt

type DotContextCrdt[T any] interface {
	Context() *DotContext[string]

	// Create a new empty instance of the same type
	// Necessary for the join operation of ORMap
	NewEmpty(id string) T

	Join(other T)
	Reset() T
}