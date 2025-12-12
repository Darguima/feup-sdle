package crdt

import (
	"fmt"
	g01 "sdle-server/proto"
)

type MVReg[T comparable] struct {
	id        string
	dotKernel *DotKernel[T]
}

func NewMVReg[T comparable](id string) *MVReg[T] {
	return &MVReg[T] {
		id: id,
		dotKernel: NewDotKernel[T](),
	}
}

func (reg *MVReg[T]) Context() *DotContext {
	return reg.dotKernel.Context()
}

func (reg *MVReg[T]) SetContext(ctx *DotContext) {
	reg.dotKernel.SetContext(ctx)
}

func (reg *MVReg[T]) Read() []T {
	values := make([]T, 0)

	for _, value := range reg.dotKernel.dotValues {
		values = append(values, value)
	}

	return values
}

func (reg *MVReg[T]) Write(value T) *MVReg[T] {
	delta := NewMVReg[T](reg.id)

	delta.dotKernel = reg.dotKernel.Reset()
	delta.dotKernel.Join(reg.dotKernel.Add(reg.id, value))

	return delta
}

func (reg *MVReg[T]) Reset() *MVReg[T] {
	delta := NewMVReg[T](reg.id)
	delta.dotKernel = reg.dotKernel.Reset()
	return delta
}

func (reg *MVReg[T]) Join(other *MVReg[T]) {
	reg.dotKernel.Join(other.dotKernel)
}

// Collapses all the values in the MVReg into a single value using the provided comparison function
// Assumes that the compared type has a total ordering
func (reg *MVReg[T]) Collapse(maxFn func(a, b T) T) *MVReg[T] {
	delta := NewMVReg[T](reg.id)

	// Find max value in current reg
	var maxValue T
	first := true
	for _, value := range reg.dotKernel.dotValues {
		if first {
			maxValue = value
			first = false
		} else {
			maxValue = maxFn(maxValue, value)
		}
	}

	for _, value := range reg.dotKernel.dotValues {
		if value != maxValue {
			delta.dotKernel.Join(reg.dotKernel.RemoveValue(value))
		}
	}

	return delta
}

func (reg *MVReg[T]) IsNull() bool {
	return len(reg.dotKernel.dotValues) == 0
}

func (reg *MVReg[T]) Clone() *MVReg[T] {
	clone := NewMVReg[T](reg.id)
	clone.dotKernel = reg.dotKernel.Clone()
	return clone
}

func (reg *MVReg[T]) String() string {
	return fmt.Sprintf("MVReg{id: %s, dotKernel: %v}", reg.id, reg.dotKernel)
}

type StringMVReg MVReg[string]

func (reg *StringMVReg) ToProto() *g01.StringMVReg {
	return &g01.StringMVReg{
		DotKernel: (*StringDotKernel)(reg.dotKernel).ToProto(),
	}
}

func StringMVRegFromProto(protoReg *g01.StringMVReg, replicaId string, ctx *DotContext) *StringMVReg {
	dotKernel := StringDotKernelFromProto(protoReg.GetDotKernel(), ctx)

	return &StringMVReg{
		id:        replicaId,
		dotKernel: (*DotKernel[string])(dotKernel),
	}
}