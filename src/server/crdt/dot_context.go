package crdt

import (
	"fmt"
	"sdle-server/utils"
)

type DotContext[T comparable] struct {
	compactContext map[T]int
	dots           utils.Set[Dot[T]]
}

func NewDotContext[T comparable]() *DotContext[T] {
	return &DotContext[T]{
		compactContext: make(map[T]int),
		dots:           utils.NewSet[Dot[T]](),
	}
}

func (dc *DotContext[T]) Knows(dot Dot[T]) bool {
	if localSeq, ok := dc.compactContext[dot.id]; ok {
		return dot.seq <= localSeq
	}

	return false
}

func (dc *DotContext[T]) MakeDot(replicaID T) Dot[T] {
	if localSeq, ok := dc.compactContext[replicaID]; ok {
		localSeq++
		dc.compactContext[replicaID] = localSeq
		return NewDot(replicaID, localSeq)
	} else {
		dc.compactContext[replicaID] = 1
		return NewDot(replicaID, 1)
	}
}

func (dc *DotContext[T]) InsertDot(dot Dot[T]) {
	dc.InsertDotCompact(dot, true)
}

func (dc *DotContext[T]) InsertDotCompact(dot Dot[T], compact bool) {
	dc.dots.Add(dot)
	if compact {
		dc.Compact()
	}
}

func (dc *DotContext[T]) Compact() {
	dotAdded := true
	for dotAdded {
		dotAdded = false

		for dot := range dc.dots {
			if localSeq, ok := dc.compactContext[dot.id]; ok { // Has entry in compact context
				if dot.seq == localSeq + 1 { // Dot is sequentially after, can compact
					dc.compactContext[dot.id] = dot.seq
					dc.dots.Remove(dot)
					dotAdded = true

				} else if dot.seq <= localSeq { // Dot is already included, ignore
					dc.dots.Remove(dot)
				}

			} else { // No entry in compact context exists
				if dot.seq == 1 { // Can compact
					delete(dc.compactContext, dot.id)
					dc.dots.Remove(dot)
					dotAdded = true
				}
			}
		}
	}
}

func (dc *DotContext[T]) Join(other *DotContext[T]) {
	if dc == other {
		return
	}

	for replicaID, otherSeq := range other.compactContext {
		if localSeq, ok := dc.compactContext[replicaID]; ok {
			dc.compactContext[replicaID] = max(localSeq, otherSeq)
		} else {
			dc.compactContext[replicaID] = otherSeq
		}
	}

	for otherDot := range other.dots {
		dc.dots.Add(otherDot)
	}

	dc.Compact()
}

func (dc *DotContext[T]) Clone() *DotContext[T] {
	clone := NewDotContext[T]()

	for replicaID, seq := range dc.compactContext {
		clone.compactContext[replicaID] = seq
	}

	for dot := range dc.dots {
		clone.dots.Add(dot)
	}

	return clone
}

func (dc *DotContext[T]) String() string {
	return fmt.Sprintf("DotContext{compactContext: %v, dots: %v}", dc.compactContext, dc.dots)
}
