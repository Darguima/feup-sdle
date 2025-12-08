// UNUSED IMPLEMENTATION: USE WITH CAUTION

package crdt

type GCounter struct {
	m  map[string]uint64
	id string
}

func NewGCounter(id string) *GCounter {
	return &GCounter{
		m:  make(map[string]uint64),
		id: id,
	}
}

func (gc *GCounter) Read() uint64 {
	res := uint64(0)
	for _, val := range gc.m {
		res += val
	}
	return res
}

func (gc *GCounter) Inc(diff uint64) *GCounter {
	delta := NewGCounter(gc.id)

	gc.m[gc.id] += diff
	delta.m[gc.id] = gc.m[gc.id]

	return delta
}

func (gc *GCounter) Join(other *GCounter) {
	for otherId, otherVal := range other.m {
		gc.m[otherId] = max(gc.m[otherId], otherVal)
	}
}
