package crdt

import "fmt"

type DotKernel[E comparable, V comparable] struct {
	dotValues  map[Dot[E]]V
	dotContext *DotContext[E]
}

func NewDotKernel[E comparable, V comparable]() *DotKernel[E, V] {
	return &DotKernel[E, V]{
		dotValues:  make(map[Dot[E]]V),
		dotContext: NewDotContext[E](),
	}
}

func (dk *DotKernel[E, V]) Context() *DotContext[E] {
	return dk.dotContext
}

func (dk *DotKernel[E, V]) DotAdd(replicaID E, value V) Dot[E] {
	dot := dk.dotContext.MakeDot(replicaID)
	dk.dotValues[dot] = value
	return dot
}

func (dk *DotKernel[E, V]) Add(replicaID E, value V) *DotKernel[E, V] {
	dot := dk.DotAdd(replicaID, value)

	delta := NewDotKernel[E, V]()
	delta.dotValues[dot] = value
	delta.dotContext.InsertDot(dot)

	return delta
}

func (dk *DotKernel[E, V]) RemoveDot(dot Dot[E]) *DotKernel[E, V] {
	delta := NewDotKernel[E, V]()

	if _, ok := dk.dotValues[dot]; ok {
		delete(dk.dotValues, dot)
		delta.dotContext.InsertDot(dot)
	}

	return delta
}

// Removes any dot that has matching value
func (dk *DotKernel[E, V]) RemoveValue(value V) *DotKernel[E, V] {
	delta := NewDotKernel[E, V]()

	for dot, dotValue := range dk.dotValues {
		if dotValue == value { // Remove value
			delete(dk.dotValues, dot)
			delta.dotContext.InsertDot(dot)
		}
	}

	return delta
}

func (dk *DotKernel[E, V]) Reset() *DotKernel[E, V] {
	delta := NewDotKernel[E, V]()

	for dot := range dk.dotValues {
		delta.dotContext.InsertDotCompact(dot, false)
	}

	delta.dotContext.Compact()
	clear(dk.dotValues)
	return delta
}

// Merges the kernel with another, preferring the values of other on conflicts
func (dk *DotKernel[E, V]) Join(other *DotKernel[E, V]) {
	for dot := range dk.dotValues {
		if other.dotContext.Knows(dot) { // If in context, remove
			delete(dk.dotValues, dot)
		}
		// Values that are mot known by other are kept
	}

	for dot, value := range other.dotValues {
		if !dk.dotContext.Knows(dot) { // Values not known by dk are added
			dk.dotValues[dot] = value
		}
	}

	dk.dotContext.Join(other.dotContext)
}

func (dk *DotKernel[E, V]) String() string {
	return fmt.Sprintf("DotKernel{dotValues: %v, dotContext: %v}", dk.dotValues, dk.dotContext)
}
