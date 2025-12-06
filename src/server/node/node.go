package node

import (
	"fmt"
	"path/filepath"
	"sdle-server/ringview"
	"sdle-server/storage"

	"github.com/pebbe/zmq4"
)

type Node struct {
	id   string
	addr string

	ringView *ringview.RingView

	store   storage.Store
	repSock *zmq4.Socket
}

func New(id string, baseDir string) (*Node, error) {
	addr := idToAddr(id)

	ringView := ringview.New()

	dir := filepath.Join(baseDir, id)
	store, err := storage.Open(dir)

	if err != nil {
		return nil, err
	}

	rep, err := zmq4.NewSocket(zmq4.REP)
	if err != nil {
		_ = store.Close()
		return nil, err
	}

	if err := rep.Bind(addr); err != nil {
		_ = rep.Close()
		_ = store.Close()
		return nil, err
	}

	return &Node{
		id:       id,
		addr:     addr,
		ringView: ringView,
		store:    *store,
		repSock:  rep,
	}, nil
}

func idToAddr(id string) string {
	return "tcp://" + id
}

// Get the current ring view from a target node and update the local ring view
func (n *Node) UpdateRingView(targetAddr string) error {
	resp, err := n.sendFetchRing(targetAddr)

	if err != nil {
		return err
	}

	fetchRingResp := resp.GetFetchRing()
	if fetchRingResp == nil {
		return nil
	}

	// Create new RingView from received tokenToNode map
	newRingView := ringview.NewFromTokenMap(fetchRingResp.TokenToNode)
	n.ringView = newRingView

	println("Node " + n.id + " updated its ring view. " + n.ringView.ToString())

	return nil
}

// Adds the new node to the ring - first get the current ring view from a target node, then imports the data for its tokens and finally adds itself to the ring (using gossip to inform other nodes)
func (n *Node) JoinToRing(targetAddr string) error {
	n.UpdateRingView(targetAddr)

	tokens := n.ringView.JoinToRing(n.GetID())

	fmt.Println("Node "+n.id+" joined the ring with tokens:", tokens)

	for _, token := range tokens {
		// TODO:
		// The code should find the node responsible for the given token,
		// request the data for that token from the responsible node,
		// and then store the received data in the local storage.

		fmt.Println("Node " + n.id + " would request data for token " + fmt.Sprint(token) + " from the responsible node.")
	}

	gossipAddrs := n.ringView.GetGossipNeighborsNodes(n.GetID())
	for _, nodeId := range gossipAddrs {
		nodeAddr := idToAddr(nodeId)
		n.sendJoinGossip(nodeAddr, n.GetID(), tokens)
	}

	return nil
}

func (n *Node) GetAddress() string {
	return n.addr
}

func (n *Node) GetID() string {
	return n.id
}
