// UNUSED IMPLEMENTATION: USE WITH CAUTION

package crdt

import "fmt"

type PNCounter struct {
	positive *GCounter
	negative *GCounter
}

func NewPNCounter(id string) *PNCounter {
	return &PNCounter{
		positive: NewGCounter(id),
		negative: NewGCounter(id),
	}
}

func (pnc *PNCounter) Read() uint64 {
	return pnc.positive.Read() - pnc.negative.Read()
}

func (pnc *PNCounter) Inc(diff uint64) *PNCounter {
	delta := NewPNCounter(pnc.positive.id)
	delta.positive = pnc.positive.Inc(diff)
	return delta
}

func (pnc *PNCounter) Dec(diff uint64) *PNCounter {
	delta := NewPNCounter(pnc.negative.id)
	delta.negative = pnc.negative.Inc(diff)
	return delta
}

func (pnc *PNCounter) Join(other *PNCounter) {
	pnc.positive.Join(other.positive)
	pnc.negative.Join(other.negative)
}

func (pnc *PNCounter) String() string {
	return fmt.Sprintf("PNCounter{positive: %v, negative: %v}", pnc.positive, pnc.negative)
}
