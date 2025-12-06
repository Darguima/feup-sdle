package ringview

import "testing"

func TestLookupDeterministic(t *testing.T) {
	r := New()

	nodes := []string{
		"localhost:5000",
		"localhost:5001",
		"localhost:5002",
	}
	for _, n := range nodes {
		r.JoinToRing(n)
	}

	keys := []string{"apple", "banana", "cherry", "durian", "eggplant"}

	for _, k := range keys {
		n1, ok1 := r.Lookup(k)
		n2, ok2 := r.Lookup(k)

		if !ok1 || !ok2 {
			t.Fatalf("expected lookups to succeed for key %q", k)
		}
		if n1 != n2 {
			t.Fatalf("inconsistent lookup for key %q: got %s and %s", k, n1, n2)
		}
	}

}
