package ringview

import (
	"crypto/sha1"
	"encoding/binary"
	"sort"
	"strconv"
	"sync"
)

const N_TOKENS_PER_NODE = 3

type RingView struct {
	nTokens     int               // number of tokens per node
	tokens      []uint64          // sorted list of tokens
	tokenToNode map[uint64]string // maps each token to its node
	nodes       []string          // list of node IDs
	mu          sync.RWMutex      // mutex for concurrent access
}

func New() *RingView {

	return &RingView{
		nTokens:     N_TOKENS_PER_NODE,
		tokens:      make([]uint64, 0),
		nodes:       make([]string, 0),
		tokenToNode: make(map[uint64]string),
	}
}

// NewFromTokenMap creates a new RingView from a tokenToNode map
func NewFromTokenMap(tokenToNode map[uint64]string) *RingView {
	// Create a new empty RingView
	rv := New()

	tempNodesMap := make(map[string]struct{}) // workaround to avoid duplicates

	// Iterate over the tokenToNode map to populate tokens and nodes
	for token, nodeId := range tokenToNode {
		rv.tokens = append(rv.tokens, token)
		rv.tokenToNode[token] = nodeId
		tempNodesMap[nodeId] = struct{}{}
	}

	for nodeId := range tempNodesMap {
		rv.nodes = append(rv.nodes, nodeId)
	}

	// Sort tokens and nodes
	sort.Slice(rv.tokens, func(i, j int) bool { return rv.tokens[i] < rv.tokens[j] })
	sort.Slice(rv.nodes, func(i, j int) bool { return rv.nodes[i] < rv.nodes[j] })

	return rv
}

// Adds a fresh new node to the ring and generates its tokens (used when a new node is being created)
func (r *RingView) JoinToRing(nodeId string) (tokens []uint64) {
	r.mu.Lock()
	defer r.mu.Unlock()

	// Check if node already exists
	for _, node := range r.nodes {
		if node == nodeId {
			return // Node already exists
		}
	}

	tokens = make([]uint64, 0, r.nTokens)

	for i := 0; i < r.nTokens; i++ {
		counter := 0

		var h uint64

		for {
			virtualKey := nodeId + "#" + strconv.Itoa(i) + "#" + strconv.Itoa(counter)
			h = hashKey(virtualKey)
			if _, exists := r.tokenToNode[h]; !exists {
				tokens = append(tokens, h)
				break
			}
			counter++
		}

		r.tokenToNode[h] = nodeId
		r.tokens = append(r.tokens, h)

	}

	r.nodes = append(r.nodes, nodeId)
	sort.Slice(r.nodes, func(i, j int) bool { return r.nodes[i] < r.nodes[j] })
	sort.Slice(r.tokens, func(i, j int) bool { return r.tokens[i] < r.tokens[j] })

	return tokens
}

// Adds a node with pre-defined tokens to the ring (used when node info is received from other nodes)
func (r *RingView) AddNode(nodeId string, tokens []uint64) {
	r.mu.Lock()
	defer r.mu.Unlock()

	// Check if node already exists
	for _, node := range r.nodes {
		if node == nodeId {
			return // Node already exists
		}
	}

	for _, h := range tokens {
		r.tokenToNode[h] = nodeId
		r.tokens = append(r.tokens, h)
	}

	r.nodes = append(r.nodes, nodeId)
	sort.Slice(r.nodes, func(i, j int) bool { return r.nodes[i] < r.nodes[j] })
	sort.Slice(r.tokens, func(i, j int) bool { return r.tokens[i] < r.tokens[j] })
}

func (r *RingView) Lookup(key string) (string, bool) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	if len(r.tokens) == 0 {
		return "", false
	}

	h := hashKey(key)
	nextDefinedToken := sort.Search(len(r.tokens), func(i int) bool { return r.tokens[i] >= h })

	if nextDefinedToken == len(r.tokens) {
		nextDefinedToken = 0
	}

	nodeId := r.tokenToNode[r.tokens[nextDefinedToken]]

	return nodeId, true
}

func hashKey(s string) uint64 {
	sum := sha1.Sum([]byte(s))
	return binary.BigEndian.Uint64(sum[:8])
}

// GetTokenToNode returns a copy of the tokenToNode map
func (r *RingView) GetTokenToNode() map[uint64]string {
	r.mu.RLock()
	defer r.mu.RUnlock()

	tokenToNodeCopy := make(map[uint64]string, len(r.tokenToNode))
	for k, v := range r.tokenToNode {
		tokenToNodeCopy[k] = v
	}
	return tokenToNodeCopy
}

func (r *RingView) ToString() string {
	r.mu.RLock()
	defer r.mu.RUnlock()

	if len(r.tokens) == 0 {
		return "RingView is empty"
	}

	result := "RingView:\n"

	for t, n := range r.tokenToNode {
		result += "Mapping: " + strconv.FormatUint(t, 10) + " -> " + n + "\n"
	}

	return result
}
