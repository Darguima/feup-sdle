package crdt

import (
	"fmt"
	"sdle-server/utils"
)

type DotContext struct {
	compactContext map[string]int
	dots           utils.Set[Dot]
}

func NewDotContext() *DotContext {
	return &DotContext{
		compactContext: make(map[string]int),
		dots:           utils.NewSet[Dot](),
	}
}

func (ctx *DotContext) Knows(dot Dot) bool {
	if localSeq, ok := ctx.compactContext[dot.id]; ok {
		return dot.seq <= localSeq
	}

	return false
}

func (ctx *DotContext) MakeDot(id string) Dot {
	if localSeq, ok := ctx.compactContext[id]; ok {
		localSeq++
		ctx.compactContext[id] = localSeq
		return NewDot(id, localSeq)
	} else {
		ctx.compactContext[id] = 1
		return NewDot(id, 1)
	}
}

func (ctx *DotContext) InsertDot(dot Dot) {
	ctx.InsertDotCompact(dot, true)
}

func (ctx *DotContext) InsertDotCompact(dot Dot, compact bool) {
	ctx.dots.Add(dot)
	if compact {
		ctx.Compact()
	}
}

func (ctx *DotContext) Compact() {
	dotAdded := true
	for dotAdded {
		dotAdded = false

		for dot := range ctx.dots {
			if localSeq, ok := ctx.compactContext[dot.id]; ok { // Has entry in compact context
				if dot.seq == localSeq + 1 { // Dot is sequentially after, can compact
					ctx.compactContext[dot.id] = dot.seq
					ctx.dots.Remove(dot)
					dotAdded = true

				} else if dot.seq <= localSeq { // Dot is already included, ignore
					ctx.dots.Remove(dot)
				}

			} else { // No entry in compact context exists
				if dot.seq == 1 { // Can compact
					delete(ctx.compactContext, dot.id)
					ctx.dots.Remove(dot)
					dotAdded = true
				}
			}
		}
	}
}

func (ctx *DotContext) Join(other *DotContext) {
	if ctx == other {
		return
	}

	for id, otherSeq := range other.compactContext {
		if localSeq, ok := ctx.compactContext[id]; ok {
			ctx.compactContext[id] = max(localSeq, otherSeq)
		} else {
			ctx.compactContext[id] = otherSeq
		}
	}

	for otherDot := range other.dots {
		ctx.dots.Add(otherDot)
	}

	ctx.Compact()
}

func (ctx *DotContext) Clone() *DotContext {
	clone := NewDotContext()

	for id, seq := range ctx.compactContext {
		clone.compactContext[id] = seq
	}

	for dot := range ctx.dots {
		clone.dots.Add(dot)
	}

	return clone
}

func (ctx *DotContext) Copy(other *DotContext) {
	ctx.compactContext = make(map[string]int)
	for id, seq := range other.compactContext {
		ctx.compactContext[id] = seq
	}

	ctx.dots = utils.NewSet[Dot]()
	for dot := range other.dots {
		ctx.dots.Add(dot)
	}
}

func (ctx *DotContext) String() string {
	return fmt.Sprintf("DotContext{compactContext: %v, dots: %v}", ctx.compactContext, ctx.dots)
}
