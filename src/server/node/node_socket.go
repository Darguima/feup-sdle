package node

import (
	"errors"
	"time"

	pb "sdle-server/proto"

	"github.com/pebbe/zmq4"
	"google.golang.org/protobuf/proto"
)

func (n *Node) StartReceiving() error {
	n.log("Socket started at " + n.addr)

	for {
		msgBytes, err := n.repSock.RecvBytes(0)

		if err != nil {
			return err
		}

		var req pb.Request
		if err := proto.Unmarshal(msgBytes, &req); err != nil {
			_ = n.sendResponseError("failed to unmarshal request: " + err.Error())
			continue
		}

		switch req.GetRequestType().(type) {

		case *pb.Request_Ping:
			n.handlePing(&req)

		case *pb.Request_FetchRing:
			n.handleFetchRing(&req)

		case *pb.Request_GetHashSpace:
			n.handleGetHashSpace(&req)

		case *pb.Request_GossipJoin:
			n.handleGossipJoin(&req)

		case *pb.Request_Get:
			n.handleGet(&req)

		case *pb.Request_Put:
			n.handlePut(&req)

		case *pb.Request_Delete:
			n.handleDelete(&req)

		case *pb.Request_Has:
			n.handleHas(&req)

		default:
			_ = n.sendResponseError("unknown request type")
		}
	}
}

func (n *Node) sendRequest(peerAddr string, request proto.Message, timeout time.Duration) (*pb.Response, error) {
	// println("Node " + n.id + " sending request to " + peerAddr)
	reqSock, err := zmq4.NewSocket(zmq4.REQ)
	if err != nil {
		return nil, err
	}
	defer reqSock.Close()

	if err := reqSock.Connect(peerAddr); err != nil {
		return nil, err
	}

	if timeout > 0 {
		_ = reqSock.SetRcvtimeo(timeout)
		_ = reqSock.SetSndtimeo(timeout)
	}

	buffer, _ := proto.Marshal(request)
	if _, err := reqSock.SendBytes(buffer, 0); err != nil {
		return nil, err
	}
	responseBytes, err := reqSock.RecvBytes(0)

	if err != nil {
		return nil, err
	}

	var resp pb.Response
	if err := proto.Unmarshal(responseBytes, &resp); err != nil {
		return nil, err
	}

	if !resp.Ok {
		return &resp, errors.New(resp.Error)
	}
	return &resp, nil
}

func (n *Node) sendPing(peerAddr string) (*pb.Response, error) {
	pingReq := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_Ping{
			Ping: &pb.RequestPing{},
		},
	}
	return n.sendRequest(peerAddr, pingReq, 0)
}

func (n *Node) sendFetchRing(peerAddr string) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_FetchRing{
			FetchRing: &pb.RequestFetchRing{},
		},
	}
	return n.sendRequest(peerAddr, req, 0)
}

func (n *Node) sendGetHashSpace(peerAddr string, startHashSpace int, endHashSpace int) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_GetHashSpace{
			GetHashSpace: &pb.RequestGetHashSpace{
				StartHashSpace: uint64(startHashSpace),
				EndHashSpace:   uint64(endHashSpace),
			},
		},
	}
	return n.sendRequest(peerAddr, req, 0)
}

func (n *Node) sendJoinGossip(peerAddr string, newNodeID string, tokens []uint64) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_GossipJoin{
			GossipJoin: &pb.RequestGossipJoin{
				NewNodeId: newNodeID,
				Tokens:    tokens,
			},
		},
	}
	return n.sendRequest(peerAddr, req, 0)
}

func (n *Node) sendGet(peerAddr string, key string) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.id,
		RequestType: &pb.Request_Get{
			Get: &pb.RequestGet{Key: key},
		},
	}
	return n.sendRequest(peerAddr, req, 5*time.Second)
}

func (n *Node) sendPut(peerAddr string, key string, value []byte) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.id,
		RequestType: &pb.Request_Put{
			Put: &pb.RequestPut{Key: key, Value: value},
		},
	}
	return n.sendRequest(peerAddr, req, 5*time.Second)
}

func (n *Node) sendDelete(peerAddr string, key string) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.id,
		RequestType: &pb.Request_Delete{
			Delete: &pb.RequestDelete{Key: key},
		},
	}
	return n.sendRequest(peerAddr, req, 5*time.Second)
}

func (n *Node) sendHas(peerAddr string, key string) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.id,
		RequestType: &pb.Request_Has{
			Has: &pb.RequestHas{Key: key},
		},
	}
	return n.sendRequest(peerAddr, req, 5*time.Second)
}

func (n *Node) sendResponseOK(response *pb.Response) error {

	response.Ok = true

	buffer, _ := proto.Marshal(response)
	_, err := n.repSock.SendBytes(buffer, 0)
	return err
}

func (n *Node) sendResponseError(errStr string) error {
	resp := &pb.Response{Ok: false, Error: errStr}
	buffer, _ := proto.Marshal(resp)
	_, err := n.repSock.SendBytes(buffer, 0)
	return err
}

func (n *Node) StopReceiving() error {
	var firstErr error
	if n.repSock != nil {
		if err := n.repSock.Close(); err != nil {
			firstErr = err
		}
	}

	if err := n.store.Close(); err != nil && firstErr == nil {
		firstErr = err
	}
	return firstErr
}
