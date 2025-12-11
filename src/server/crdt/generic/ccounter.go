package crdt

import (
	"fmt"
	g01 "sdle-server/proto"
)

type CCounter struct {
	replicaID string
	dotKernel *DotKernel[int64]
}

func NewCCounter(replicaID string) *CCounter {
	return &CCounter{
		replicaID: replicaID,
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
	for dot, value := range cc.dotKernel.dotValues {
		if dot.id == cc.replicaID { // There should be only one dot
			delta.dotKernel.Join(cc.dotKernel.RemoveDot(dot))
			return value
		}
	}

	return 0
}

func (cc *CCounter) Inc(diff int64) *CCounter {
	delta := NewCCounter(cc.replicaID)

	oldValue := cc.removeOldDot(delta)
	newValue := oldValue + diff

	delta.dotKernel.Join(cc.dotKernel.Add(cc.replicaID, newValue))
	return delta
}

func (cc *CCounter) Reset() *CCounter {
	delta := NewCCounter(cc.replicaID)
	delta.dotKernel = cc.dotKernel.Reset()

	return delta
}

func (cc *CCounter) Join(other *CCounter) {
	cc.dotKernel.Join(other.dotKernel)
}

func (cc *CCounter) String() string {
	return fmt.Sprintf("CCounter{id %s, dotKernel: %v}", cc.replicaID, cc.dotKernel)
}

func (cc *CCounter) NewEmpty(replicaId string) *CCounter {
	return NewCCounter(replicaId)
}

func (cc *CCounter) IsNull() bool {
	return len(cc.dotKernel.dotValues) == 0
}

func (cc *CCounter) Clone() *CCounter {
	clone := NewCCounter(cc.replicaID)
	clone.dotKernel = cc.dotKernel.Clone()
	return clone
}

func (cc *CCounter) ToProto() *g01.CCounter {
	return &g01.CCounter{
		DotKernel: (*Int64DotKernel)(cc.dotKernel).ToProto(),
	}
}

func CCounterFromProto(protoCounter *g01.CCounter, replicaId string, ctx *DotContext) *CCounter {
	dotKernel := IntDotKernelFromProto(protoCounter.GetDotKernel(), ctx)

	return &CCounter{
		replicaID: replicaId,
		dotKernel: (*DotKernel[int64])(dotKernel),
	}
}
