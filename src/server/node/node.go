package node

import (
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
	addr := "tcp://" + id

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

func (n *Node) UpdateRingView(targetAddr string) error {
	resp, err := n.SendFetchRing(targetAddr)

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

func (n *Node) JoinToRing(targetAddr string) error {
	tokens := n.ringView.JoinToRing(n.GetAddress())
	println("Node "+n.id+" joined the ring with tokens:", tokens)
	println("New ring view:", n.ringView.ToString())
	return nil
}
