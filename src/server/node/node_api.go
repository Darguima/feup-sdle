package node

import (
	"errors"
	"fmt"
)

func (n *Node) Get(key string) ([]byte, error) {
	prefList := n.ringView.GetPreferenceList(key, n.replConfig.N)
	if len(prefList.Nodes) == 0 {
		return nil, errors.New("no node available for key")
	}

	// Find the position on the preference list. If the node is not in the preference list, forward to coordinator. Otherwise, try to find the first alive node in the preference list. If the current node is the first alive node, it becomes the coordinator.
	coordinatorId := prefList.Nodes[0] // First node is coordinator

	// Find the earliest alive node in the preference list
	for _, nodeId := range prefList.Nodes {
		if n.isNodeAlive(nodeId) || nodeId == n.id {
			coordinatorId = nodeId
			break
		}
	}

	n.log("Coordinator " + coordinatorId + " is responsible for key '" + key + "'")

	if coordinatorId == n.id {
		n.log("This node (" + n.id + ") is coordinator. Orchestrating quorum read.")
		return n.coordinateReplicatedGet(key, prefList)
	}

	// Forward the request to the coordinator
	n.log("Forwarding GET request for key '" + key + "' to coordinator " + coordinatorId + ".")
	coordinatorAddr := NodeIdToZMQAddr(coordinatorId)
	resp, err := n.sendGet(coordinatorAddr, key)

	if err != nil {
		return nil, err
	}

	return resp.GetGet().Value, nil
}

func (n *Node) Put(key string, value []byte) error {
	// Get preference list to determine coordinator
	prefList := n.ringView.GetPreferenceList(key, n.replConfig.N)
	if len(prefList.Nodes) == 0 {
		return errors.New("no node available for key")
	}

	// Find the position on the preference list. If the node is not in the preference list, forward to coordinator. Otherwise, try to find the first alive node in the preference list. If the current node is the first alive node, it becomes the coordinator.
	coordinatorId := prefList.Nodes[0] // First node is coordinator

	// Find the earliest alive node in the preference list
	for _, nodeId := range prefList.Nodes {
		if n.isNodeAlive(nodeId) || nodeId == n.id {
			coordinatorId = nodeId
			break
		}
	}

	n.log("Coordinator " + coordinatorId + " is responsible for key '" + key + "'")

	if coordinatorId == n.id {
		// This node is the coordinator, so orchestrate replication
		n.log("This node (" + n.id + ") is coordinator. Orchestrating replication.")
		return n.coordinateReplicatedPut(key, value)
	}

	// Forward the request to the coordinator
	n.log("Forwarding PUT request for key '" + key + "' to coordinator " + coordinatorId + ".")
	coordinatorAddr := NodeIdToZMQAddr(coordinatorId)
	_, err := n.sendPut(coordinatorAddr, key, value)
	return err
}

// TODO: delete this later
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
	responsibleNodeAddr := NodeIdToZMQAddr(responsibleNodeId)
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
	responsibleNodeAddr := NodeIdToZMQAddr(responsibleNodeId)
	resp, err := n.sendHas(responsibleNodeAddr, key)
	if err != nil {
		return false, err
	}

	return resp.GetHas().HasKey, nil

}
