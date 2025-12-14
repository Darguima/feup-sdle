package node

import (
	"fmt"
	pb "sdle-server/proto"
)

func (n *Node) handlePing(req *pb.Request) error {
	n.logInfo("Received Ping from " + req.Origin)

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
	n.logInfo("Received FetchRing from " + req.Origin)

	response := &pb.Response{
		ResponseType: &pb.Response_FetchRing{
			FetchRing: &pb.ResponseFetchRing{
				RingView: &pb.RingView{
					TokenToNode: n.ringView.GetTokenToNode(),
				},
			},
		},
	}

	return n.sendResponseOK(response)
}

func (n *Node) handleGossipJoin(req *pb.Request) error {
	gossipReq := req.GetGossipJoin()
	n.logInfo("Received GossipJoin (start node: " + gossipReq.NewNodeId + "; received from: " + req.Origin + ")")
	success := n.ringView.AddNode(gossipReq.NewNodeId, gossipReq.Tokens)

	if !success {
		n.log("Node " + gossipReq.NewNodeId + " already exists in ring view. Finishing GossipJoin handling.")
		return n.sendResponseError("Node already exists in ring view")
	}

	n.logInfo("Node " + gossipReq.NewNodeId + " added to ring view successfully.")

	n.logInfo("New ring view: " + n.ringView.ToString())

	gossipAddrs := n.ringView.GetGossipNeighborsNodes(n.GetID())
	n.logInfo("Send gossip message from " + gossipReq.NewNodeId + " to neighbors " + fmt.Sprint(gossipAddrs))

	// Propagate gossip asynchronously so we don't block the response
	go func() {
		for _, nodeId := range gossipAddrs {
			nodeAddr := NodeIdToZMQAddr(nodeId)
			resp, err := n.sendJoinGossip(nodeAddr, gossipReq.NewNodeId, gossipReq.Tokens)

			n.logInfo("Gossip (start node: " + gossipReq.NewNodeId + "; response from:" + nodeAddr + ") Response: Ok=" + fmt.Sprint(resp.Ok) + ", Error='" + fmt.Sprint(err) + "'")
		}
	}()

	return n.sendResponseOK(&pb.Response{})
}

func (n *Node) handleGetHashSpace(req *pb.Request) error {
	n.logInfo("Received GET HASHSPACE from " + req.Origin)
	getReq := req.GetGetHashSpace()

	if getReq == nil {
		n.logError("Invalid GET HASHSPACE request from " + req.Origin)
		return n.sendResponseError("invalid get hash space request")
	}

	startHash := getReq.StartHashSpace
	endHash := getReq.EndHashSpace

	spaceValues, err := n.store.GetHashSpace(startHash, endHash)
	if err != nil {
		return n.sendResponseError(err.Error())
	}

	return n.sendResponseOK(&pb.Response{
		Origin: n.id,
		Ok:     true,
		ResponseType: &pb.Response_GetHashSpace{
			GetHashSpace: &pb.ResponseGetHashSpace{HashSpaceValues: spaceValues},
		},
	})
}
