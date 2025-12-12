package crdt

import (
	"fmt"
	g01 "sdle-server/proto"
)

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
	for dot := range dk.dotValues {
		// If dot is not present in other and is known by other, it means it was removed
		if _, ok := other.dotValues[dot]; !ok && other.dotContext.Knows(dot) {
			delete(dk.dotValues, dot)
		}
	}

	for dot, value := range other.dotValues {
		// If dot is not known locally, add it
		if !dk.dotContext.Knows(dot) {
			dk.dotValues[dot] = value
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

// Necessary type aliases for protobuf conversion
type Int64DotKernel DotKernel[int64]
type StringDotKernel DotKernel[string]
type EmptyDotKernel DotKernel[struct{}]

func (dk *Int64DotKernel) ToProto() *g01.IntDotKernel {
	protoDotKeys := make([]*g01.Dot, 0)
	protoDotValues := make([]int64, 0)

	for dot, value := range dk.dotValues {
		protoDot := dot.ToProto()
		protoDotKeys = append(protoDotKeys, protoDot)
		protoDotValues = append(protoDotValues, value)
	}

	return &g01.IntDotKernel{
		DotKeys:    protoDotKeys,
		DotValues:  protoDotValues,
	}
}

func IntDotKernelFromProto(protoDotKernel *g01.IntDotKernel, ctx *DotContext) *Int64DotKernel {
	if len(protoDotKernel.GetDotKeys()) != len(protoDotKernel.GetDotValues()) {
		panic("DotKernelFromProto: mismatched lengths of dot keys and values")
	}

	dk := NewDotKernel[int64]()

	for i, protoDot := range protoDotKernel.GetDotKeys() {
		dot := DotFromProto(protoDot)
		value := protoDotKernel.GetDotValues()[i]
		dk.dotValues[dot] = value
	}

	dk.SetContext(ctx)

	return (*Int64DotKernel)(dk)
}

func (dk *StringDotKernel) ToProto() *g01.StringDotKernel {
	protoDotKeys := make([]*g01.Dot, 0)
	protoDotValues := make([]string, 0)

	for dot, value := range dk.dotValues {
		protoDot := dot.ToProto()
		protoDotKeys = append(protoDotKeys, protoDot)
		protoDotValues = append(protoDotValues, value)
	}

	return &g01.StringDotKernel{
		DotKeys:    protoDotKeys,
		DotValues:  protoDotValues,
	}
}

func StringDotKernelFromProto(protoDotKernel *g01.StringDotKernel, ctx *DotContext) *StringDotKernel {
	if len(protoDotKernel.GetDotKeys()) != len(protoDotKernel.GetDotValues()) {
		panic("StringDotKernelFromProto: mismatched lengths of dot keys and values")
	}

	dk := NewDotKernel[string]()

	for i, protoDot := range protoDotKernel.GetDotKeys() {
		dot := DotFromProto(protoDot)
		value := protoDotKernel.GetDotValues()[i]
		dk.dotValues[dot] = value
	}

	dk.SetContext(ctx)

	return (*StringDotKernel)(dk)
}

func (dk *EmptyDotKernel) ToProto() *g01.EmptyDotKernel {
	protoDotKeys := make([]*g01.Dot, 0)

	for dot := range dk.dotValues {
		protoDot := dot.ToProto()
		protoDotKeys = append(protoDotKeys, protoDot)
	}

	return &g01.EmptyDotKernel{
		DotKeys:    protoDotKeys,
	}
}

func EmptyDotKernelFromProto(protoDotKernel *g01.EmptyDotKernel, ctx *DotContext) *EmptyDotKernel {
	dk := NewDotKernel[struct{}]()

	for _, protoDot := range protoDotKernel.GetDotKeys() {
		dot := DotFromProto(protoDot)
		dk.dotValues[dot] = struct{}{}
	}

	dk.SetContext(ctx)

	return (*EmptyDotKernel)(dk)
}