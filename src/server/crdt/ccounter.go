package crdt

import "fmt"

type CCounter struct {
	id 	      string
	dotKernel *DotKernel[string, uint64]
}

func NewCCounter(id string) *CCounter {
	return &CCounter{
		id: id,
		dotKernel: NewDotKernel[string, uint64](),
	}
}

func (cc *CCounter) Read() uint64 {
	total := uint64(0)
	for _, value := range cc.dotKernel.dotValues {
		total += value
	}
	return total
}

// Removes the old dot for this replica, if any, applies the difference to the
// delta, and returns the old value (or zero if absent)
func (cc *CCounter) removeOldDot(delta *CCounter) uint64 {
	for dot := range cc.dotKernel.dotValues {
		if dot.id == cc.id {  // There should be only one dot
			oldValue := cc.dotKernel.dotValues[dot]
			delta.dotKernel.Join(cc.dotKernel.RemoveDot(dot))
			return oldValue
		}
	}

	return 0
}

func (cc *CCounter) Inc(diff uint64) *CCounter {
	delta := NewCCounter(cc.id)

	oldValue := cc.removeOldDot(delta)
	newValue := oldValue + diff

	delta.dotKernel.Add(cc.id, newValue)
	return delta
}

func (cc *CCounter) Dec(diff uint64) *CCounter {
	delta := NewCCounter(cc.id)

	oldValue := cc.removeOldDot(delta)
	newValue := oldValue - diff
	
	delta.dotKernel.Add(cc.id, newValue)
	return delta
}

func (cc *CCounter) Reset() *CCounter {
	delta := NewCCounter(cc.id)
	delta.dotKernel = cc.dotKernel.Reset()
	return delta
}

func (cc *CCounter) Join(other *CCounter) {
	cc.dotKernel.Join(other.dotKernel)
}

func (cc *CCounter) String() string {
	return fmt.Sprintf("CCounter{id %s, dotKernel: %v}", cc.id, cc.dotKernel)
}