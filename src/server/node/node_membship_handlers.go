package node

import (
	pb "sdle-server/proto"
)

func (n *Node) handlePing(req *pb.Request) error {
	println("Node " + n.addr + " received Ping from " + req.Origin)

	response := &pb.Response{
		ResponseType: &pb.Response_Ping{
			Ping: &pb.ResponsePing{
				PongMessage: "Pong from " + n.addr,
			},
		},
	}

	return n.sendResponseOK(response)
}

func (n *Node) handleFetchRing(req *pb.Request) error {
	println("Node " + n.addr + " received FetchRing from " + req.Origin)

	response := &pb.Response{
		ResponseType: &pb.Response_FetchRing{
			FetchRing: &pb.ResponseFetchRing{
				TokenToNode: n.ringView.GetTokenToNode(),
			},
		},
	}

	return n.sendResponseOK(response)
}

func (n *Node) handleGetHashSpace(req *pb.Request) error {
	println("Node " + n.addr + " received GetHashSpace from " + req.Origin)
	return n.sendResponseError("GetHashSpace not implemented")
}

func (n *Node) handleGossipJoin(req *pb.Request) error {
	gossipReq := req.GetGossipJoin()
	// print("Node " + n.addr + " received GossipJoin from " + req.Origin)
	success := n.ringView.AddNode(gossipReq.NewNodeId, gossipReq.Tokens)
	// print(" (success " + fmt.Sprintf("%v", success) + ")\n")

	if !success {
		return n.sendResponseError("Node already exists in ring view")
	}

	// println("Node " + n.addr + " has this new ring view: " + n.ringView.ToString())

	gossipAddrs := n.ringView.GetGossipNeighborsNodes(n.GetID())
	// fmt.Println("Node "+n.id+" will gossip message from "+gossipReq.NewNodeId+" to nodes:", gossipAddrs)
	for _, nodeId := range gossipAddrs {
		nodeAddr := idToAddr(nodeId)
		_ = nodeAddr
		// n.sendJoinGossip(nodeAddr, gossipReq.NewNodeId, gossipReq.Tokens)
	}

	return n.sendResponseOK(&pb.Response{})
}
