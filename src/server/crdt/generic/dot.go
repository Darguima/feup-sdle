package crdt

import "fmt"

type Dot struct {
	id  string
	seq int
}

func NewDot(id string, seq int) Dot {
	return Dot{id: id, seq: seq}
}

func (d Dot) String() string {
	return fmt.Sprintf("Dot{id %v, seq %d}", d.id, d.seq)
}
