package crdt

import "fmt"

type Dot[T comparable] struct {
	id  T
	seq int
}

func NewDot[T comparable](id T, seq int) Dot[T] {
	return Dot[T]{id: id, seq: seq}
}

func (d Dot[T]) String() string {
	return fmt.Sprintf("Dot{id %v, seq %d}", d.id, d.seq)
}
