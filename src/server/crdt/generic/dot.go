package crdt

import (
	"fmt"
	g01 "sdle-server/proto"
)

type Dot struct {
	id  string
	seq uint32
}

func NewDot(id string, seq uint32) Dot {
	return Dot{id: id, seq: seq}
}

func (d Dot) String() string {
	return fmt.Sprintf("Dot{id %v, seq %d}", d.id, d.seq)
}

func (d Dot) ToProto() *g01.Dot {
	return &g01.Dot{
		Id:  d.id,
		Seq: d.seq,
	}
}

func DotFromProto(protoDot *g01.Dot) Dot {
	return NewDot(protoDot.GetId(), protoDot.GetSeq())
}