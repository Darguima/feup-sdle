package node

import (
	"fmt"
	"sdle-server/replication"
	"sdle-server/ringview"
)

// coordinateReplicatedPut orchestrates a replicated write operation.
// This node acts as the coordinator and replicates the data to N nodes.
// Strategy:
// 1. Attempt to write to all N nodes in preference list
// 2. For any failed nodes, use hinted handoff to ensure N total replicas
// 3. Return success if W writes succeed (sloppy quorum)
func (n *Node) coordinateReplicatedPut(key string, value []byte) error {
	prefList := n.ringView.GetPreferenceList(key, n.replConfig.N)

	if len(prefList.Nodes) == 0 {
		return fmt.Errorf("no nodes available for key")
	}

	n.log(fmt.Sprintf("Coordinating PUT for key '%s' to preference list: %v (N=%d, W=%d)",
		key, prefList.Nodes, n.replConfig.N, n.replConfig.W))

	successCount := 0
	failedNodes := []string{}
	successfulNodes := []string{}

	// STEP 1: Attempt to write to ALL N nodes in preference list (don't stop early)
	for _, nodeId := range prefList.Nodes {
		var err error

		if nodeId == n.id {
			// Write to local store
			err = n.store.Put([]byte(key), value)
			if err == nil {
				n.log(fmt.Sprintf("✓ Local write successful for key '%s'", key))
			} else {
				n.log(fmt.Sprintf("✗ Local write failed for key '%s': %v", key, err))
			}
		} else {
			// Write to remote replica
			err = n.sendReplicaPut(nodeId, key, value)
			if err == nil {
				n.log(fmt.Sprintf("✓ Replica write to %s successful for key '%s'", nodeId, key))
			} else {
				n.log(fmt.Sprintf("✗ Replica write to %s failed for key '%s': %v", nodeId, key, err))
			}
		}

		if err == nil {
			successCount++
			successfulNodes = append(successfulNodes, nodeId)
		} else {
			failedNodes = append(failedNodes, nodeId)
		}
	}

	n.log(fmt.Sprintf("Preference list writes: %d/%d successful", successCount, n.replConfig.N))

	// STEP 2: Use hinted handoff for ALL failed nodes to ensure N total replicas
	if len(failedNodes) > 0 {
		n.log(fmt.Sprintf("Attempting hinted handoff for %d failed nodes: %v",
			len(failedNodes), failedNodes))

		hintsStored := n.attemptHintedHandoff(key, value, failedNodes)
		successCount += hintsStored

		n.log(fmt.Sprintf("Hinted handoff: stored %d/%d hints", hintsStored, len(failedNodes)))
	}

	// STEP 3: Final check - did we achieve W replicas?
	if successCount >= n.replConfig.W {
		n.log(fmt.Sprintf("✓ SUCCESS: W=%d achieved with %d total replicas (N=%d)",
			n.replConfig.W, successCount, n.replConfig.N))
		return nil
	}

	return fmt.Errorf("%w: only %d/%d replicas achieved (W=%d required)",
		replication.ErrInsufficientReplicas, successCount, n.replConfig.N, n.replConfig.W)
}

func (n *Node) sendAllHintedHandoffs() {
	hints, _ := n.hintStore.GetAllHints()
	if len(hints) == 0 {
		return
	}
	n.log(fmt.Sprintf("Starting hinted handoff delivery process - %d hints to deliver", len(hints)))

	for _, hintList := range hints {
		for _, hint := range hintList {
			n.log("Attempting to deliver hint for key " + hint.Key + " to node " + hint.IntendedNode)
			err := n.sendReplicaPut(hint.IntendedNode, hint.Key, hint.Value)

			if err != nil {
				n.log("Failed to deliver hint for key " + hint.Key + " to node " + hint.IntendedNode + ": " + err.Error())
				continue
			}

			n.log("Successfully delivered hint for key " + hint.Key + " to node " + hint.IntendedNode)
			_ =
				n.hintStore.DeleteHint(hint.IntendedNode, hint.Key)
		}
	}
	n.log("Completed hinted handoff delivery process")

}

// Tries to store hints on additional nodes beyond the preference list
// Returns the number of successful hint stores (counts toward W in sloppy quorum)
func (n *Node) attemptHintedHandoff(key string, value []byte, failedNodes []string) int {
	if len(failedNodes) == 0 {
		return 0
	}

	// Get all known nodes and find candidates for hinted handoff
	allNodes := n.ringView.GetKnownIds()
	prefList := n.ringView.GetPreferenceList(key, n.replConfig.N)

	// Create set of nodes already in preference list
	inPrefList := make(map[string]bool)
	for _, nodeId := range prefList.Nodes {
		inPrefList[nodeId] = true
	}

	// Find candidate nodes (not in preference list)
	candidates := []string{}
	for _, nodeId := range allNodes {
		if !inPrefList[nodeId] && nodeId != n.id {
			candidates = append(candidates, nodeId)
		}
	}

	if len(candidates) == 0 {
		n.log("No candidates available for hinted handoff")
		return 0
	}

	successCount := 0
	candidateIdx := 0

	// For each failed node, try to store a hint on a candidate node
	for _, failedNodeId := range failedNodes {
		if candidateIdx >= len(candidates) {
			break
		}

		candidateNodeId := candidates[candidateIdx]
		candidateIdx++

		hint := replication.Hint{
			IntendedNode: failedNodeId,
			Key:          key,
			Value:        value,
		}

		// Try to send hint to candidate node
		err := n.sendHintToNode(candidateNodeId, hint)
		if err == nil {
			n.log(fmt.Sprintf("✓ Stored hint on %s for intended node %s (key: %s)",
				candidateNodeId, failedNodeId, key))
			successCount++
		} else {
			n.log(fmt.Sprintf("✗ Failed to store hint on %s: %v", candidateNodeId, err))
		}
	}

	return successCount
}

// sendReplicaPut sends a replica write request to a remote node
// Uses ReplicaPut message type to bypass coordinator routing logic
func (n *Node) sendReplicaPut(nodeId, key string, value []byte) error {
	nodeAddr := NodeIdToZMQAddr(nodeId)
	_, err := n.sendReplicaPutRequest(nodeAddr, key, value)
	return err
}

// sendHintToNode sends a hint to a remote node for storage
func (n *Node) sendHintToNode(nodeId string, hint replication.Hint) error {
	// If it's this node, store locally
	if nodeId == n.id {
		return n.hintStore.StoreHint(hint)
	}

	// Send StoreHint request to the remote node
	nodeAddr := NodeIdToZMQAddr(nodeId)
	_, err := n.sendStoreHintRequest(nodeAddr, hint.IntendedNode, hint.Key, hint.Value)
	return err
}

// Orchestrates a replicated read operation.
// This node acts as the coordinator and reads from R replicas.
// Returns the value after reading from R nodes (quorum read).
func (n *Node) coordinateReplicatedGet(key string, prefList ringview.PreferenceList) ([]byte, error) {
	if len(prefList.Nodes) == 0 {
		return nil, fmt.Errorf("no nodes available for key")
	}

	n.log(fmt.Sprintf("Coordinating GET for key '%s' from preference list: %v (R=%d)",
		key, prefList.Nodes, n.replConfig.R))

	type readResult struct {
		nodeId string
		value  []byte
		err    error
	}

	results := []readResult{}

	// Attempt to read from nodes in preference list until we get R successful reads
	for _, nodeId := range prefList.Nodes {
		var value []byte
		var err error

		if nodeId == n.id {
			// Read from local store
			value, err = n.store.Get([]byte(key))
			if err == nil {
				n.log(fmt.Sprintf("✓ Local read successful for key '%s'", key))
			} else {
				n.log(fmt.Sprintf("✗ Local read failed for key '%s': %v", key, err))
			}
		} else {
			// Read from remote replica
			value, err = n.sendReplicaGet(nodeId, key)
			if err == nil {
				n.log(fmt.Sprintf("✓ Replica read from %s successful for key '%s'", nodeId, key))
			} else {
				n.log(fmt.Sprintf("✗ Replica read from %s failed for key '%s': %v", nodeId, key, err))
			}
		}

		// Store result regardless of success/failure
		results = append(results, readResult{
			nodeId: nodeId,
			value:  value,
			err:    err,
		})

		// Check if we have R successful reads
		successCount := 0
		for _, r := range results {
			if r.err == nil {
				successCount++
			}
		}

		if successCount >= n.replConfig.R {
			n.log(fmt.Sprintf("Read quorum R=%d achieved", n.replConfig.R))

			// Maybe we should do read repair here if values differ?
			// For now, just return the first successful value
			for _, r := range results {
				if r.err == nil {
					return r.value, nil
				}
			}
		}
	}

	// Count successful reads
	successCount := 0
	var lastValue []byte
	for _, r := range results {
		if r.err == nil {
			successCount++
			lastValue = r.value
		}
	}

	if successCount >= n.replConfig.R {
		return lastValue, nil
	}

	return nil, fmt.Errorf("%w: only %d/%d reads succeeded",
		replication.ErrQuorumNotMet, successCount, n.replConfig.R)
}

// sendReplicaGet sends a replica read request to a remote node
func (n *Node) sendReplicaGet(nodeId, key string) ([]byte, error) {
	nodeAddr := NodeIdToZMQAddr(nodeId)

	resp, err := n.sendGet(nodeAddr, key)
	if err != nil {
		return nil, err
	}

	return resp.GetGet().Value, nil
}
