package node

import (
	"errors"
	"fmt"
)

func (n *Node) Get(key string) ([]byte, error) {
	// TODO: maybe we should consider storing the responsibilities in the node itself, idk
	responsibleNodeId, ok := n.ringView.Lookup(key)
	if !ok {
		return nil, errors.New("no node available for key")
	}

	n.log("Node " + responsibleNodeId + " is responsible for key '" + key + "'")

	if responsibleNodeId == n.id {
		// This node is responsible, get from local store.
		n.log("This node (" + n.id + ") is responsible. Getting from local store.")
		return n.store.Get([]byte(key))
	}

	// Forward the request to the responsible node.
	n.log("Forwarding GET request for key '" + key + "' to node " + responsibleNodeId + ".")
	responsibleNodeAddr := nodeIdToZMQAddr(responsibleNodeId)
	resp, err := n.sendGet(responsibleNodeAddr, key)
	if err != nil {
		return nil, err
	}

	return resp.GetGet().Value, nil // GetGet is so cursed hahaha
}

func (n *Node) Put(key string, value []byte) error {
	responsibleNodeId, ok := n.ringView.Lookup(key)
	if !ok {
		return errors.New("no node available for key")
	}

	n.log("Node " + responsibleNodeId + " is responsible for key '" + key + "'")

	if responsibleNodeId == n.id {
		// This node is responsible, write to local store.
		n.log("This node (" + n.id + ") is responsible. Putting into local store.")
		return n.store.Put([]byte(key), value)
	}

	// Forward the request to the responsible node.
	n.log("Forwarding PUT request for key '" + key + "' to node " + responsibleNodeId + ".")
	responsibleNodeAddr := nodeIdToZMQAddr(responsibleNodeId)
	_, err := n.sendPut(responsibleNodeAddr, key, value)
	return err
}

func (n *Node) Delete(key string) error {
	responsibleNodeId, ok := n.ringView.Lookup(key)
	if !ok {
		return errors.New("no node available for key")
	}

	n.log("Node " + responsibleNodeId + " is responsible for key '" + key + "'")

	if responsibleNodeId == n.id {
		// This node is responsible, delete from local store.
		n.log("This node (" + n.id + ") is responsible. Deleting from local store.")
		return n.store.Delete([]byte(key))
	}

	// Forward the request to the responsible node.
	n.log("Forwarding DELETE request for key '" + key + "' to node " + responsibleNodeId + ".")
	responsibleNodeAddr := nodeIdToZMQAddr(responsibleNodeId)
	_, err := n.sendDelete(responsibleNodeAddr, key)
	return err
}

func (n *Node) Has(key string) (bool, error) {
	responsibleNodeId, ok := n.ringView.Lookup(key)
	if !ok {
		return false, errors.New("no node available for key")
	}

	fmt.Printf("Node %s is responsible for key '%s'\n", responsibleNodeId, key)

	if responsibleNodeId == n.id {
		// This node is responsible, check local store.
		n.log("This node (" + n.id + ") is responsible. Checking local store.")
		return n.store.Has([]byte(key))
	}

	// Forward the request to the responsible node.
	n.log("Forwarding HAS request for key '" + key + "' to node " + responsibleNodeId + ".")
	responsibleNodeAddr := nodeIdToZMQAddr(responsibleNodeId)
	resp, err := n.sendHas(responsibleNodeAddr, key)
	if err != nil {
		return false, err
	}

	return resp.GetHas().HasKey, nil

}
