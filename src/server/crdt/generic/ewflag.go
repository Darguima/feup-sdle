package crdt

type EWFlag struct {
	replicaID string
	dotKernel *DotKernel[struct{}]
}

func NewEWFlag(replicaID string) *EWFlag {
	return &EWFlag{
		replicaID: replicaID,
		dotKernel: NewDotKernel[struct{}](),
	}
}

func (flag *EWFlag) Context() *DotContext {
	return flag.dotKernel.Context()
}

func (flag *EWFlag) SetContext(ctx *DotContext) {
	flag.dotKernel.SetContext(ctx)
}

func (flag *EWFlag) Read() bool {
	return len(flag.dotKernel.dotValues) > 0
}

func (flag *EWFlag) Enable() *EWFlag {
	delta := NewEWFlag(flag.replicaID)

	delta.dotKernel = flag.dotKernel.Reset()
	delta.dotKernel.Join(flag.dotKernel.Add(flag.replicaID, struct{}{}))

	return delta
}

func (flag *EWFlag) Disable() *EWFlag {
	delta := NewEWFlag(flag.replicaID)

	delta.dotKernel = flag.dotKernel.Reset()

	return delta
}

func (flag *EWFlag) Join(other *EWFlag) {
	flag.dotKernel.Join(other.dotKernel)
}

func (flag *EWFlag) IsNull() bool {
	return len(flag.dotKernel.dotValues) == 0
}

func (flag *EWFlag) Clone() *EWFlag {
	clone := NewEWFlag(flag.replicaID)
	clone.dotKernel = flag.dotKernel.Clone()
	return clone
}