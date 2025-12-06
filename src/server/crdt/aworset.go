package crdt

import "fmt"

type AWORset[E comparable, V comparable] struct {
	id        E
	dotKernel *DotKernel[E, V]
}

func NewAWORset[E comparable, V comparable](id E) *AWORset[E, V] {
	return &AWORset[E, V]{
		dotKernel: NewDotKernel[E, V](),
		id:        id,
	}
}

func (set *AWORset[E, V]) GetAll() []V {
	values := make([]V, 0)
	for _, value := range set.dotKernel.dotValues {
		values = append(values, value)
	}
	return values
}

func (set *AWORset[E, V]) Contains(value V) bool {
	for _, dotValue := range set.dotKernel.dotValues {
		if dotValue == value {
			return true
		}
	}

	return false
}

func (set *AWORset[E, V]) Add(value V) *AWORset[E, V] {
	delta := NewAWORset[E, V](set.id)

	delta.dotKernel = set.dotKernel.RemoveValue(value) // Remove existing value to avoid duplicates
	dkAdd := set.dotKernel.Add(set.id, value)
	delta.dotKernel.Join(dkAdd)

	return delta
}

func (set *AWORset[E, V]) Remove(value V) *AWORset[E, V] {
	delta := NewAWORset[E, V](set.id)
	delta.dotKernel = set.dotKernel.RemoveValue(value)
	return delta
}

func (set *AWORset[E, V]) Reset() *AWORset[E, V] {
	delta := NewAWORset[E, V](set.id)
	delta.dotKernel = set.dotKernel.Reset()
	return delta
}

func (set *AWORset[E, V]) Merge(other *AWORset[E, V]) {
	set.dotKernel.Join(other.dotKernel)
}

func (set *AWORset[E, V]) String() string {
	return fmt.Sprintf("AWORSet{id: %v, dotKernel: %v}", set.id, set.dotKernel)
}
