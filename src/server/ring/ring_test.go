package ring

import "testing"

func TestLookupDeterministic(t *testing.T) {
	r := New(5)

	nodes := []Node{
		{ID: "node1", Addr: "addr1"},
		{ID: "node2", Addr: "addr2"},
		{ID: "node3", Addr: "addr3"},
	}
	for _, n := range nodes {
		r.AddNode(n)
	}

	keys := []string{"apple", "banana", "cherry", "durian", "eggplant"}

	for _, k := range keys {
		n1, ok1 := r.lookup(k)
		n2, ok2 := r.lookup(k)

		if !ok1 || !ok2 {
			t.Fatalf("expected lookups to succeed for key %q", k)
		}
		if n1.ID != n2.ID {
			t.Fatalf("inconsistent lookup for key %q: got %s and %s", k, n1.ID, n2.ID)
		}
	}

}
