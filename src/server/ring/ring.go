package ring

import (
	"crypto/sha1"
	"encoding/binary"
	"sort"
	"strconv"
	"sync"
)

type Node struct {
	ID   string
	Addr string
}

type Ring struct {
	nTokens     int             // number of tokens per node
	tokens      []uint64        // sorted list of tokens
	tokenToNode map[uint64]Node // maps each token to its node
	nodes       map[string]Node // maps node ID to Node
	mu          sync.RWMutex    // mutex for concurrent access
}

func New(nTokens int) *Ring {
	if nTokens <= 0 {
		nTokens = 3
	}
	return &Ring{
		nTokens:     nTokens,
		tokens:      make([]uint64, 0),
		tokenToNode: make(map[uint64]Node),
		nodes:       make(map[string]Node),
	}
}

func (r *Ring) AddNode(n Node) {
	r.mu.Lock()
	defer r.mu.Unlock()

	if _, exists := r.nodes[n.ID]; exists {
		return // Node already exists
	}

	for i := 0; i < r.nTokens; i++ {
		counter := 0

		var h uint64

		for {
			virtualKey := n.ID + "#" + strconv.Itoa(i) + "#" + strconv.Itoa(counter)
			h = hashKey(virtualKey)
			if _, exists := r.tokenToNode[h]; !exists {
				break
			}
			counter++
		}
		r.tokenToNode[h] = n
		r.tokens = append(r.tokens, h)
	}

	r.nodes[n.ID] = n
	sort.Slice(r.tokens, func(i, j int) bool { return r.tokens[i] < r.tokens[j] })
}

func (r *Ring) lookup(key string) (Node, bool) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	if len(r.tokens) == 0 {
		return Node{}, false
	}

	h := hashKey(key)
	idx := sort.Search(len(r.tokens), func(i int) bool { return r.tokens[i] >= h })
	if idx == len(r.tokens) {
		idx = 0
	}
	n := r.tokenToNode[r.tokens[idx]]
	return n, true
}

func hashKey(s string) uint64 {
	sum := sha1.Sum([]byte(s))
	return binary.BigEndian.Uint64(sum[:8])
}
