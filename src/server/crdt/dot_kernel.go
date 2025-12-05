package crdt

type DotKernel[T comparable, U comparable] struct {
	dotValues  map[Dot[T]]U
	dotContext *DotContext[T]
}

func NewDotKernel[T comparable, U comparable]() DotKernel[T, U] {
	return DotKernel[T, U]{
		dotValues:  make(map[Dot[T]]U),
		dotContext: NewDotContext[T](),
	}
}

func (dk *DotKernel[T, U]) DotAdd(replicaID T, value U) Dot[T] {
	dot := dk.dotContext.MakeDot(replicaID)
	dk.dotValues[dot] = value
	return dot
}

func (dk *DotKernel[T, U]) Add(replicaID T, value U) DotKernel[T, U] {
	dot := dk.DotAdd(replicaID, value)

	delta := NewDotKernel[T, U]()
	delta.dotValues[dot] = value
	delta.dotContext.InsertDot(dot)

	return delta
}

func (dk *DotKernel[T, U]) RemoveDot(dot Dot[T]) DotKernel[T, U] {
	delta := NewDotKernel[T, U]()

	if _, ok := dk.dotValues[dot]; ok {
		delete(dk.dotValues, dot)
		delta.dotContext.InsertDot(dot)
	}

	return delta
}

// Removes any dot that has matching value
func (dk *DotKernel[T, U]) RemoveValue(value U) DotKernel[T, U] {
	delta := NewDotKernel[T, U]()

	for dot, dotValue := range dk.dotValues {
		if dotValue == value {  // Remove value
			delete(dk.dotValues, dot)
			delta.dotContext.InsertDot(dot)
		}
	}

	return delta
}

func (dk *DotKernel[T, U]) Reset() DotKernel[T, U] {
	delta := NewDotKernel[T, U]()

	for dot := range dk.dotValues {
		delta.dotContext.InsertDotCompact(dot, false)
	}

	delta.dotContext.Compact()
	clear(dk.dotValues)
	return delta
}

// Merges the kernel with another, preferring the values of other on conflicts
func (dk *DotKernel[T, U]) Merge(other *DotKernel[T, U]) {
	for dot := range dk.dotValues {
		if other.dotContext.In(dot) {  // If in context, remove
			delete(dk.dotValues, dot)
		}
		// Values that are mot known by other are kept
	}

	for dot, value := range other.dotValues {
		if !dk.dotContext.In(dot) {  // Values not known by dk are added
			dk.dotValues[dot] = value
		}
	}

	dk.dotContext.Merge(other.dotContext)
}


