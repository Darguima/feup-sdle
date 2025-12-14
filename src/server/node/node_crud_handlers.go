package node

import (
	pb "sdle-server/proto"
	"sdle-server/replication"
)

func (n *Node) handleGet(req *pb.Request) error {
	n.logInfo("Received GET from " + req.Origin)
	getReq := req.GetGet()
	if getReq == nil {
		n.logError("Invalid GET request from " + req.Origin)
		return n.sendResponseError("invalid get request")
	}

	// This node is coordinator orchestrate quorum read
	value, err := n.coordinateReplicatedGet(getReq.Key)
	if err != nil {
		n.logError("Failed to coordinate replicated GET for key " + getReq.Key + ": " + err.Error())
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
	n.logInfo("Received PUT from " + req.Origin)
	putReq := req.GetPut()
	if putReq == nil {
		n.logError("Invalid PUT request from " + req.Origin)
		return n.sendResponseError("invalid put request")
	}

	// This node is coordinator, orchestrate replication
	err := n.coordinateReplicatedPut(putReq.Key, putReq.Value)
	if err != nil {
		n.logError("Failed to coordinate replicated PUT for key " + putReq.Key + ": " + err.Error())
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
	n.logInfo("Received REPLICA_PUT from " + req.Origin)
	replicaReq := req.GetReplicaPut()
	if replicaReq == nil {
		n.logError("Invalid REPLICA_PUT request from " + req.Origin)
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

func (n *Node) handleReplicaGet(req *pb.Request) error {
	n.logInfo("Received REPLICA_GET from " + req.Origin)
	replicaReq := req.GetReplicaGet()
	if replicaReq == nil {
		n.logError("Invalid REPLICA_GET request from " + req.Origin)
		return n.sendResponseError("invalid replica get request")
	}

	value, err := n.store.Get([]byte(replicaReq.Key))
	if err != nil {
		return n.sendResponseError(err.Error())
	}

	return n.sendResponseOK(&pb.Response{
		Origin: n.id,
		Ok:     true,
		ResponseType: &pb.Response_ReplicaGet{
			ReplicaGet: &pb.ResponseReplicaGet{Value: value},
		},
	})
}

// Handles a request to store a hint for another node
func (n *Node) handleStoreHint(req *pb.Request) error {
	n.logInfo("Received STORE_HINT from " + req.Origin)
	hintReq := req.GetStoreHint()
	if hintReq == nil {
		n.logError("Invalid STORE_HINT request from " + req.Origin)
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

	n.logSuccess("Stored hint for node " + hintReq.IntendedNode + " (key: " + hintReq.Key + ")")

	return n.sendResponseOK(&pb.Response{
		Origin: n.id,
		Ok:     true,
		ResponseType: &pb.Response_StoreHint{
			StoreHint: &pb.ResponseStoreHint{},
		},
	})
}
