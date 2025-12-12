package crdt

import (
	"fmt"
	g01 "sdle-server/proto"
)

type DWFlag struct {
	replicaID string
	dotKernel *DotKernel[struct{}]
}

func NewDWFlag(replicaID string) *DWFlag {
	return &DWFlag{
		replicaID: replicaID,
		dotKernel: NewDotKernel[struct{}](),
	}
}

func (flag *DWFlag) Context() *DotContext {
	return flag.dotKernel.Context()
}

func (flag *DWFlag) SetContext(ctx *DotContext) {
	flag.dotKernel.SetContext(ctx)
}

func (flag *DWFlag) Read() bool {
	return len(flag.dotKernel.dotValues) == 0
}

func (flag *DWFlag) Disable() *DWFlag {
	delta := NewDWFlag(flag.replicaID)

	delta.dotKernel = flag.dotKernel.Reset()
	delta.dotKernel.Join(flag.dotKernel.Add(flag.replicaID, struct{}{}))

	return delta
}

func (flag *DWFlag) Enable() *DWFlag {
	delta := NewDWFlag(flag.replicaID)

	delta.dotKernel = flag.dotKernel.Reset()

	return delta
}

func (flag *DWFlag) Reset() *DWFlag {
	delta := NewDWFlag(flag.replicaID)
	delta.dotKernel = flag.dotKernel.Reset()
	return delta
}

func (flag *DWFlag) Join(other *DWFlag) {
	flag.dotKernel.Join(other.dotKernel)
}

func (flag *DWFlag) IsNull() bool {
	return len(flag.dotKernel.dotValues) == 0
}

func (flag *DWFlag) Clone() *DWFlag {
	clone := NewDWFlag(flag.replicaID)
	clone.dotKernel = flag.dotKernel.Clone()
	return clone
}

func (flag *DWFlag) String() string {
	return fmt.Sprintf("EWFlag{replicaID: %s, dotKernel: %v}", flag.replicaID, flag.dotKernel)
}

func (flag *DWFlag) ToProto() *g01.DWFlag {
	return &g01.DWFlag{
		DotKernel: (*EmptyDotKernel)(flag.dotKernel).ToProto(),
	}
}

func DWFlagFromProto(protoFlag *g01.DWFlag, replicaId string, ctx *DotContext) *DWFlag {
	dotKernel := EmptyDotKernelFromProto(protoFlag.GetDotKernel(), ctx)

	return &DWFlag{
		replicaID: replicaId,
		dotKernel: (*DotKernel[struct{}])(dotKernel),
	}
}
