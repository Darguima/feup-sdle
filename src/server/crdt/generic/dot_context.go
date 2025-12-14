package crdt

import (
	"fmt"
	g01 "sdle-server/proto"
	"sdle-server/utils"
)

type DotContext struct {
	versionVector map[string]uint32
	dotCloud      utils.Set[Dot]
}

func NewDotContext() *DotContext {
	return &DotContext{
		versionVector: make(map[string]uint32),
		dotCloud:      utils.NewSet[Dot](),
	}
}

func (ctx *DotContext) Knows(dot Dot) bool {
	if localSeq, ok := ctx.versionVector[dot.id]; ok && dot.seq <= localSeq {
		return true
	}

	return ctx.dotCloud.Contains(dot)
}

func (ctx *DotContext) MakeDot(id string) Dot {
	if localSeq, ok := ctx.versionVector[id]; ok {
		localSeq++
		ctx.versionVector[id] = localSeq
		return NewDot(id, localSeq)
	} else {
		ctx.versionVector[id] = 1
		return NewDot(id, 1)
	}
}

func (ctx *DotContext) InsertDot(dot Dot) {
	ctx.InsertDotCompact(dot, true)
}

func (ctx *DotContext) InsertDotCompact(dot Dot, compact bool) {
	ctx.dotCloud.Add(dot)
	if compact {
		ctx.Compact()
	}
}

func (ctx *DotContext) Compact() {
	changed := true
	for changed {
		changed = false

		for dot := range ctx.dotCloud {
			if localSeq, ok := ctx.versionVector[dot.id]; ok { // Has entry in compact context
				if dot.seq == localSeq+1 { // Dot is sequentially after, can compact
					ctx.versionVector[dot.id] = dot.seq
					ctx.dotCloud.Remove(dot)
					changed = true

				} else if dot.seq <= localSeq { // Dot is already included, ignore
					ctx.dotCloud.Remove(dot)
				}

			} else { // No entry in compact context exists
				if dot.seq == 1 { // Can compact
					ctx.versionVector[dot.id] = 1
					ctx.dotCloud.Remove(dot)
					changed = true
				}
			}
		}
	}
}

func (ctx *DotContext) Join(other *DotContext) {
	// Optimization for complex CRDTs, which frequently join a context with itself
	if ctx == other {
		return
	}

	// Create pointwise maximum of compact contexts
	for id, otherSeq := range other.versionVector {
		if localSeq, ok := ctx.versionVector[id]; ok {
			ctx.versionVector[id] = max(localSeq, otherSeq)
		} else {
			ctx.versionVector[id] = otherSeq
		}
	}

	for otherDot := range other.dotCloud {
		ctx.dotCloud.Add(otherDot)
	}

	ctx.Compact()
}

func (ctx *DotContext) Clone() *DotContext {
	clone := NewDotContext()

	for id, seq := range ctx.versionVector {
		clone.versionVector[id] = seq
	}

	for dot := range ctx.dotCloud {
		clone.dotCloud.Add(dot)
	}

	return clone
}

func (ctx *DotContext) Copy(other *DotContext) {
	// Avoid self-copy
	if ctx == other {
		return
	}

	ctx.versionVector = make(map[string]uint32)
	for id, seq := range other.versionVector {
		ctx.versionVector[id] = seq
	}

	ctx.dotCloud = utils.NewSet[Dot]()
	for dot := range other.dotCloud {
		ctx.dotCloud.Add(dot)
	}
}

func (ctx *DotContext) String() string {
	return fmt.Sprintf("DotContext{compactContext: %v, dots: %v}", ctx.versionVector, ctx.dotCloud)
}

func (ctx *DotContext) ToProto() *g01.DotContext {
	protoDots := []*g01.Dot{}
	for dot := range ctx.dotCloud {
		protoDots = append(protoDots, dot.ToProto())
	}

	return &g01.DotContext{
		VersionVector: ctx.versionVector,
		Dots:          protoDots,
	}
}

func DotContextFromProto(protoCtx *g01.DotContext) *DotContext {
	ctx := NewDotContext()

	for id, seq := range protoCtx.GetVersionVector() {
		ctx.versionVector[id] = seq
	}

	for _, protoDot := range protoCtx.GetDots() {
		dot := DotFromProto(protoDot)
		ctx.dotCloud.Add(dot)
	}

	return ctx
}
