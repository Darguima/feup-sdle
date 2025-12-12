package node

import (
	pb "sdle-server/proto"
	"sdle-server/replication"
)

func (n *Node) handleGet(req *pb.Request) error {
	n.log("Received GET from " + req.Origin)
	getReq := req.GetGet()
	if getReq == nil {
		return n.sendResponseError("invalid get request")
	}

	// Check if this node is the coordinator
	prefList := n.ringView.GetPreferenceList(getReq.Key, n.replConfig.N)
	if len(prefList.Nodes) > 0 && prefList.Nodes[0] == n.id {
		// This node is coordinator orchestrate quorum read
		value, err := n.coordinateReplicatedGet(getReq.Key, prefList)
		if err != nil {
			return n.sendResponseError(err.Error())
		}

		return n.sendResponseOK(&pb.Response{
			Origin: n.id,
			Ok:     true,
			ResponseType: &pb.Response_Get{
				Get: &pb.ResponseGet{Value: value},
			},
		})
	}

	// Not coordinator, do direct local read (for replica reads during quorum)
	value, err := n.store.Get([]byte(getReq.Key))
	if err != nil {
		return n.sendResponseError(err.Error())
	}

	return n.sendResponseOK(&pb.Response{
		Origin: n.id,
		Ok:     true,
		ResponseType: &pb.Response_Get{
			Get: &pb.ResponseGet{Value: value},
		},
	})
}

func (n *Node) handlePut(req *pb.Request) error {
	n.log("Received PUT from " + req.Origin)
	putReq := req.GetPut()
	if putReq == nil {
		return n.sendResponseError("invalid put request")
	}

	// Check if this node is the coordinator
	prefList := n.ringView.GetPreferenceList(putReq.Key, n.replConfig.N)
	if len(prefList.Nodes) > 0 && prefList.Nodes[0] == n.id {
		// This node is coordinator, orchestrate replication
		err := n.coordinateReplicatedPut(putReq.Key, putReq.Value)
		if err != nil {
			return n.sendResponseError(err.Error())
		}

		return n.sendResponseOK(&pb.Response{
			Origin: n.id,
			Ok:     true,
			ResponseType: &pb.Response_Put{
				Put: &pb.ResponsePut{},
			},
		})
	}

	// Not coordinator, do direct local write (for replica writes)
	err := n.store.Put([]byte(putReq.Key), putReq.Value)
	if err != nil {
		return n.sendResponseError(err.Error())
	}

	return n.sendResponseOK(&pb.Response{
		Origin: n.id,
		Ok:     true,
		ResponseType: &pb.Response_Put{
			Put: &pb.ResponsePut{},
		},
	})
}

func (n *Node) handleDelete(req *pb.Request) error {
	n.log("Received DELETE from " + req.Origin)
	delReq := req.GetDelete()
	if delReq == nil {
		return n.sendResponseError("invalid delete request")
	}

	err := n.store.Delete([]byte(delReq.Key))
	if err != nil {
		return n.sendResponseError(err.Error())
	}

	return n.sendResponseOK(&pb.Response{
		Origin:       n.id,
		Ok:           true,
		ResponseType: &pb.Response_Delete{},
	})
}

func (n *Node) handleHas(req *pb.Request) error {
	n.log("Received HAS from " + req.Origin)
	hasReq := req.GetHas()
	if hasReq == nil {
		return n.sendResponseError("invalid has request")
	}

	value, err := n.store.Has([]byte(hasReq.Key))
	if err != nil {
		return n.sendResponseError(err.Error())
	}

	return n.sendResponseOK(&pb.Response{
		Origin: n.id,
		Ok:     true,
		ResponseType: &pb.Response_Has{
			Has: &pb.ResponseHas{HasKey: value},
		},
	})
}

// Handles a direct replica write (bypasses coordinator logic)
func (n *Node) handleReplicaPut(req *pb.Request) error {
	n.log("Received REPLICA_PUT from " + req.Origin)
	replicaReq := req.GetReplicaPut()
	if replicaReq == nil {
		return n.sendResponseError("invalid replica put request")
	}

	err := n.store.Put([]byte(replicaReq.Key), replicaReq.Value)
	if err != nil {
		return n.sendResponseError(err.Error())
	}

	return n.sendResponseOK(&pb.Response{
		Origin: n.id,
		Ok:     true,
		ResponseType: &pb.Response_ReplicaPut{
			ReplicaPut: &pb.ResponseReplicaPut{},
		},
	})
}

// Handles a request to store a hint for another node
func (n *Node) handleStoreHint(req *pb.Request) error {
	n.log("Received STORE_HINT from " + req.Origin)
	hintReq := req.GetStoreHint()
	if hintReq == nil {
		return n.sendResponseError("invalid store hint request")
	}

	// Store the hint in this node's hint store
	hint := replication.Hint{
		IntendedNode: hintReq.IntendedNode,
		Key:          hintReq.Key,
		Value:        hintReq.Value,
	}

	err := n.hintStore.StoreHint(hint)
	if err != nil {
		return n.sendResponseError(err.Error())
	}

	n.log("Stored hint for node " + hintReq.IntendedNode + " (key: " + hintReq.Key + ")")

	return n.sendResponseOK(&pb.Response{
		Origin: n.id,
		Ok:     true,
		ResponseType: &pb.Response_StoreHint{
			StoreHint: &pb.ResponseStoreHint{},
		},
	})
}
