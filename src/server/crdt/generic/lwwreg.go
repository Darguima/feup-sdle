// UNUSED IMPLEMENTATION: USE WITH CAUTION

package crdt

import "fmt"

type LWWReg[T any] struct {
	timestamp uint64
	value     T
}

func NewLWWReg[T any](value T) *LWWReg[T] {
	return &LWWReg[T] {
		timestamp: 0,
		value: value,
	}
}

func (reg *LWWReg[T]) Read() T {
	return reg.value
}

func (reg *LWWReg[T]) Write(timestamp uint64, value T) *LWWReg[T] {
	delta := NewLWWReg(value)
	delta.timestamp = timestamp

	reg.Join(delta)

	return delta
}

func (reg *LWWReg[T]) Join(other *LWWReg[T]) {
	if (other.timestamp > reg.timestamp) {
		reg.timestamp = other.timestamp
		reg.value = other.value
	}
}

func (reg *LWWReg[T]) String() string {
	return fmt.Sprintf("LWWReg {timestamp: %d, value: %v}", reg.timestamp, reg.value)
}