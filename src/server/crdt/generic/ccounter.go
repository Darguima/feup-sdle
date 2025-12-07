package crdt

import "fmt"

type CCounter struct {
	id 	      string
	dotKernel *DotKernel[int64]
}
// Implements DotContextCRDT[uint64]

func NewCCounter(id string) *CCounter {
	return &CCounter{
		id: id,
		dotKernel: NewDotKernel[int64](),
	}
}

func (cc *CCounter) Context() *DotContext {
	return cc.dotKernel.Context()
}

func (cc *CCounter) SetContext(ctx *DotContext) {
	cc.dotKernel.SetContext(ctx)
}

func (cc *CCounter) Read() int64 {
	total := int64(0)
	for _, value := range cc.dotKernel.dotValues {
		total += int64(value)
	}
	return total
}

// Removes the old dot for this replica, if any, applies the difference to the
// delta, and returns the old value (or zero if absent)
func (cc *CCounter) removeOldDot(delta *CCounter) int64 {
	for dot := range cc.dotKernel.dotValues {
		if dot.id == cc.id {  // There should be only one dot
			oldValue := cc.dotKernel.dotValues[dot]
			delta.dotKernel.Join(cc.dotKernel.RemoveDot(dot))
			return oldValue
		}
	}

	return 0
}

func (cc *CCounter) Inc(diff int64) *CCounter {
	delta := NewCCounter(cc.id)

	oldLocalValue := cc.removeOldDot(delta)
	newLocalValue := oldLocalValue + diff

	delta.dotKernel.Join(cc.dotKernel.Add(cc.id, newLocalValue))
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

func (cc *CCounter) NewEmpty(id string) *CCounter {
	return NewCCounter(id)
}

func (cc *CCounter) IsNull() bool {
	return len(cc.dotKernel.dotValues) == 0
}

func (cc *CCounter) Clone() *CCounter {
	clone := NewCCounter(cc.id)
	clone.dotKernel = cc.dotKernel.Clone()
	return clone
}