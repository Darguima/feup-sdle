package crdt

import "fmt"

type DotKernel[V comparable] struct {
	dotValues  map[Dot]V
	dotContext *DotContext
}

func NewDotKernel[V comparable]() *DotKernel[V] {
	return &DotKernel[V]{
		dotValues:  make(map[Dot]V),
		dotContext: NewDotContext(),
	}
}

func (dk *DotKernel[V]) Context() *DotContext {
	return dk.dotContext
}

func (dk *DotKernel[V]) SetContext(ctx *DotContext) {
	dk.dotContext = ctx
}

func (dk *DotKernel[V]) DotAdd(id string, value V) Dot {
	dot := dk.dotContext.MakeDot(id)
	dk.dotValues[dot] = value
	return dot
}

func (dk *DotKernel[V]) Add(id string, value V) *DotKernel[V] {
	dot := dk.DotAdd(id, value)

	delta := NewDotKernel[V]()
	delta.dotValues[dot] = value
	delta.dotContext.InsertDot(dot)

	return delta
}

func (dk *DotKernel[V]) RemoveDot(dot Dot) *DotKernel[V] {
	delta := NewDotKernel[V]()

	if _, ok := dk.dotValues[dot]; ok {
		delete(dk.dotValues, dot)
		delta.dotContext.InsertDot(dot)
	}

	return delta
}

// Removes any dot that has matching value
func (dk *DotKernel[V]) RemoveValue(value V) *DotKernel[V] {
	delta := NewDotKernel[V]()

	for dot, dotValue := range dk.dotValues {
		if dotValue == value { // Remove value
			delete(dk.dotValues, dot)
			delta.dotContext.InsertDotCompact(dot, false)
		}
	}

	delta.dotContext.Compact()
	return delta
}

func (dk *DotKernel[V]) Reset() *DotKernel[V] {
	delta := NewDotKernel[V]()

	for dot := range dk.dotValues {
		delta.dotContext.InsertDotCompact(dot, false)
	}

	delta.dotContext.Compact()
	clear(dk.dotValues)
	return delta
}

// Merges the kernel with another, preferring the values of other on conflicts
func (dk *DotKernel[V]) Join(other *DotKernel[V]) {
	for dot, value := range other.dotValues {
		// Values not known by dk are added
		if !dk.dotContext.Knows(dot) {
			dk.dotValues[dot] = value
		}
	}

	for dot := range dk.dotValues {
		// If dot is not present in other and is known by other, it means it was removed
		if _, ok := other.dotValues[dot]; !ok && other.dotContext.Knows(dot) {
			delete(dk.dotValues, dot)
		}
	}

	dk.dotContext.Join(other.dotContext)
}

func (dk *DotKernel[V]) Clone() *DotKernel[V] {
	clone := NewDotKernel[V]()
	clone.dotContext = dk.dotContext.Clone()

	for dot, value := range dk.dotValues {
		clone.dotValues[dot] = value
	}

	return clone
}

func (dk *DotKernel[V]) String() string {
	return fmt.Sprintf("DotKernel{dotValues: %v, dotContext: %v}", dk.dotValues, dk.dotContext)
}
