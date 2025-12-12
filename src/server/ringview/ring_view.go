package ringview

import (
	"crypto/sha1"
	"encoding/binary"
	"maps"
	"slices"
	"sort"
	"strconv"
	"sync"
)

const N_TOKENS_PER_NODE = 3
const HASH_SPACE_SIZE = 64

type RingView struct {
	tokens      []uint64          // sorted list of tokens
	tokenToNode map[uint64]string // maps each token to its node
	nodes       []string          // list of node IDs
	mu          sync.RWMutex      // mutex for concurrent access
}

type TransferredHashSpace struct {
	Start           uint64
	End             uint64
	PreviousOwnerId string
}

type PreferenceList struct {
	Nodes []string // coordinator comes first
	N     int      // replication factor
}

func New() *RingView {

	return &RingView{
		tokens:      make([]uint64, 0),
		nodes:       make([]string, 0),
		tokenToNode: make(map[uint64]string),
	}
}

// Creates a new RingView from a tokenToNode map
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
	slices.Sort(rv.tokens)
	slices.Sort(rv.nodes)

	return rv
}

// Adds a node to the Ring, generating new tokens for it. If the hashSpace needs to be transferred from other nodes, it is returned as a list of transferredHashSpace structs.
func (r *RingView) JoinToRing(nodeId string) (tokens []uint64, transferredHashSpaces []TransferredHashSpace, added bool) {
	r.mu.Lock()
	defer r.mu.Unlock()

	// Check if node already exists
	if slices.Contains(r.nodes, nodeId) {
		return nil, nil, false
	}

	// If this is the first node, there will not be needed to transfer any hash space
	isFirstNode := len(r.tokens) == 0

	generated_tokens := make([]uint64, 0, N_TOKENS_PER_NODE)
	transferredHashSpaces = make([]TransferredHashSpace, 0, N_TOKENS_PER_NODE)

	for range N_TOKENS_PER_NODE {
		newToken := r.generateNewToken(nodeId, generated_tokens)
		generated_tokens = append(generated_tokens, newToken)
	}

	// Sort the generated tokens - this will help determining the hash spaces later
	slices.Sort(generated_tokens)

	// Calculate previous owners (loops can't be merged)
	previousOwners := make([]string, 0, N_TOKENS_PER_NODE)
	if !isFirstNode {
		for _, token := range generated_tokens {
			nextDefinedTokenIdx, _ := r.getNextDefinedTokenIdx(token)
			nextDefinedToken := r.tokens[nextDefinedTokenIdx]

			previousOwnerId := r.tokenToNode[nextDefinedToken]
			previousOwners = append(previousOwners, previousOwnerId)
		}
	}

	// Calculate new hash space ranges and add tokens to the ring
	for i, token := range generated_tokens {
		if !isFirstNode {
			previousDefinedTokenIdx, _ := r.getPreviousDefinedTokenIdx(token)
			previousDefinedToken := r.tokens[previousDefinedTokenIdx]

			start := previousDefinedToken + 1
			end := token

			transferredHashSpaces = append(transferredHashSpaces, TransferredHashSpace{
				Start:           start,
				End:             end,
				PreviousOwnerId: previousOwners[i],
			})
		}

		r.tokenToNode[token] = nodeId
		r.tokens = append(r.tokens, token)
		slices.Sort(r.tokens)
	}

	r.nodes = append(r.nodes, nodeId)
	slices.Sort(r.nodes)

	return generated_tokens, transferredHashSpaces, true
}

// Adds a node with pre-defined tokens to the ring (used when node info is received from other nodes). Returns false if the node already exists.
func (r *RingView) AddNode(nodeId string, tokens []uint64) (added bool) {
	r.mu.Lock()
	defer r.mu.Unlock()

	// Check if node already exists
	if slices.Contains(r.nodes, nodeId) {
		return false
	}

	// Add tokens to the ring
	for _, h := range tokens {
		r.tokenToNode[h] = nodeId
		r.tokens = append(r.tokens, h)
	}

	r.nodes = append(r.nodes, nodeId)

	slices.Sort(r.nodes)
	slices.Sort(r.tokens)

	return true
}

// Given a token, returns the index of the previous defined token in the ring (wraps around). Returns (-1, false) if there are no tokens.
func (r *RingView) getPreviousDefinedTokenIdx(token uint64) (int, bool) {
	nextDefinedTokenIdx, ok := r.getNextDefinedTokenIdx(token)

	if !ok {
		return -1, false
	}

	previousDefinedTokenIdx := (nextDefinedTokenIdx - 1 + len(r.tokens)) % len(r.tokens)

	return previousDefinedTokenIdx, true
}

// Given a token, returns the index of the next defined token in the ring (wraps around). Returns (-1, false) if there are no tokens.
func (r *RingView) getNextDefinedTokenIdx(token uint64) (int, bool) {
	if len(r.tokens) == 0 {
		return -1, false
	}

	nextDefinedTokenIdx := sort.Search(len(r.tokens), func(i int) bool { return r.tokens[i] >= uint64(token) })

	if nextDefinedTokenIdx == len(r.tokens) {
		nextDefinedTokenIdx = 0
	}

	return nextDefinedTokenIdx, true
}

// Returns the node ID responsible for the given key. Returns false if the ring is empty.
func (r *RingView) Lookup(key string) (string, bool) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	if len(r.tokens) == 0 {
		return "", false
	}

	keyHash := HashKey(key)
	nextDefinedToken, err := r.getNextDefinedTokenIdx(keyHash)

	if err {
		return "", false
	}

	nodeId := r.tokenToNode[r.tokens[nextDefinedToken]]

	return nodeId, true
}

// Returns the list of neighbor nodes to gossip with, given an origin node
func (r *RingView) GetGossipNeighborsNodes(originNode string) []string {
	r.mu.RLock()
	defer r.mu.RUnlock()

	originIndex := slices.Index(r.nodes, originNode)

	if originIndex == -1 || len(r.nodes) < 2 {
		return []string{}
	}

	prevIndex := (len(r.nodes) + originIndex - 2) % len(r.nodes)
	succIndex := (originIndex + 1) % len(r.nodes)

	neighbors := make([]string, 0, 2)

	if r.nodes[prevIndex] != originNode {
		neighbors = append(neighbors, r.nodes[prevIndex])
	}

	if r.nodes[succIndex] != originNode {
		neighbors = append(neighbors, r.nodes[succIndex])
	}

	return neighbors
}

// Returns a copy of the tokenToNode map
func (r *RingView) GetTokenToNode() map[uint64]string {
	r.mu.RLock()
	defer r.mu.RUnlock()

	tokenToNodeCopy := make(map[uint64]string, len(r.tokenToNode))
	maps.Copy(tokenToNodeCopy, r.tokenToNode)
	return tokenToNodeCopy
}

// Returns a copy of the known node IDs
func (r *RingView) GetKnownIds() []string {
	r.mu.RLock()
	defer r.mu.RUnlock()

	idsCopy := make([]string, len(r.nodes))
	copy(idsCopy, r.nodes)
	return idsCopy
}

// Returns a string representation of the RingView
func (r *RingView) ToString() string {
	r.mu.RLock()
	defer r.mu.RUnlock()

	if len(r.tokens) == 0 {
		return "RingView is empty"
	}

	result := "RingView:"
	for _, t := range r.tokens { // tokens are kept sorted
		n := r.tokenToNode[t]
		result += "\n\t" + strconv.FormatUint(t, 10) + " -> " + n
	}

	return result
}

// Hashes a string key into the hash space
func HashKey(s string) uint64 {
	sum := sha1.Sum([]byte(s))
	return binary.BigEndian.Uint64(sum[:8]) % HASH_SPACE_SIZE
}

// Generates a new unique token for a node based on the node ID and a counter (counter should be unique per node)
func (r *RingView) generateNewToken(nodeId string, additionalUsedIds []uint64) uint64 {
	var newToken uint64

	usedIds := append(r.tokens, additionalUsedIds...)

	counter := 0

	for {
		virtualKey := nodeId + "#" + strconv.Itoa(counter)
		newToken = HashKey(virtualKey)
		if !slices.Contains(usedIds, newToken) {
			break
		}
		counter++
	}

	return newToken
}

func (r *RingView) GetPreferenceList(key string, N int) PreferenceList {
	r.mu.RLock()
	defer r.mu.RUnlock()

	// if the ring is empty (this should never happen)
	if len(r.tokens) == 0 {
		return PreferenceList{Nodes: []string{}, N: N}
	}

	keyHash := HashKey(key)
	startIdx, _ := r.getNextDefinedTokenIdx(keyHash)

	nodes := make([]string, 0, N)
	seenNodes := make(map[string]bool)

	// Go around the ring to find N distinct nodes
	for i := 0; len(nodes) < N && i < len(r.tokens); i++ {
		idx := (startIdx + i) % len(r.tokens)
		token := r.tokens[idx]
		nodeId := r.tokenToNode[token]

		// Only add if we haven't seen this node yet (since a node can have multiple tokens)
		if !seenNodes[nodeId] {
			nodes = append(nodes, nodeId)
			seenNodes[nodeId] = true
		}
	}

	return PreferenceList{Nodes: nodes, N: N}
}
