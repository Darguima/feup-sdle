// UNUSED IMPLEMENTATION: USE WITH CAUTION

package crdt

import "fmt"

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
	delta.dotKernel.Add(reg.id, value)

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

func (reg *MVReg[T]) String() string {
	return fmt.Sprintf("MVReg{id: %s, dotKernel: %v}", reg.id, reg.dotKernel)
}