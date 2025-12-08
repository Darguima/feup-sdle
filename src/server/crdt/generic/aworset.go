// UNUSED IMPLEMENTATION: USE WITH CAUTION

package crdt

import "fmt"

type AWORset[V comparable] struct {
	id        string
	dotKernel *DotKernel[V]
}

func NewAWORset[V comparable](id string) *AWORset[V] {
	return &AWORset[V]{
		dotKernel: NewDotKernel[V](),
		id:        id,
	}
}

func (set *AWORset[V]) GetAll() []V {
	values := make([]V, 0)
	for _, value := range set.dotKernel.dotValues {
		values = append(values, value)
	}
	return values
}

func (set *AWORset[V]) Contains(value V) bool {
	for _, dotValue := range set.dotKernel.dotValues {
		if dotValue == value {
			return true
		}
	}

	return false
}

func (set *AWORset[V]) Add(value V) *AWORset[V] {
	delta := NewAWORset[V](set.id)

	delta.dotKernel = set.dotKernel.RemoveValue(value) // Remove existing value to avoid duplicates
	dkAdd := set.dotKernel.Add(set.id, value)
	delta.dotKernel.Join(dkAdd)

	return delta
}

func (set *AWORset[V]) Remove(value V) *AWORset[V] {
	delta := NewAWORset[V](set.id)
	delta.dotKernel = set.dotKernel.RemoveValue(value)
	return delta
}

func (set *AWORset[V]) Reset() *AWORset[V] {
	delta := NewAWORset[V](set.id)
	delta.dotKernel = set.dotKernel.Reset()
	return delta
}

func (set *AWORset[V]) Merge(other *AWORset[V]) {
	set.dotKernel.Join(other.dotKernel)
}

func (set *AWORset[V]) String() string {
	return fmt.Sprintf("AWORSet{id: %v, dotKernel: %v}", set.id, set.dotKernel)
}
