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

	return n.SendResponseOK(response)
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

	return n.SendResponseOK(response)
}

func (n *Node) handleGetHashSpace(req *pb.Request) error {
	println("Node " + n.addr + " received GetHashSpace from " + req.Origin)
	return n.SendResponseError("GetHashSpace not implemented")
}

func (n *Node) handleGossipJoin(req *pb.Request) error {
	println("Node " + n.addr + " received GossipJoin from " + req.Origin)
	return n.SendResponseError("GossipJoin not implemented")
}
