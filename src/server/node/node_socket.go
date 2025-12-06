package node

import (
	"errors"
	"time"

	pb "sdle-server/proto"

	"github.com/pebbe/zmq4"
	"google.golang.org/protobuf/proto"
)

func (n *Node) StartReceiving() error {
	println("Node started at " + n.addr)

	for {
		msgBytes, err := n.repSock.RecvBytes(0)

		if err != nil {
			return err
		}

		var req pb.Request
		if err := proto.Unmarshal(msgBytes, &req); err != nil {
			_ = n.SendResponseError("failed to unmarshal request: " + err.Error())
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
			_ = n.SendResponseError("unknown request type")
		}
	}
}

func (n *Node) SendRequest(peerAddr string, request proto.Message, timeout time.Duration) (*pb.Response, error) {
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

func (n *Node) SendPing(peerAddr string) (*pb.Response, error) {
	pingReq := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_Ping{
			Ping: &pb.RequestPing{},
		},
	}
	return n.SendRequest(peerAddr, pingReq, 0)
}

func (n *Node) SendFetchRing(peerAddr string) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_FetchRing{
			FetchRing: &pb.RequestFetchRing{},
		},
	}
	return n.SendRequest(peerAddr, req, 0)
}

func (n *Node) SendGetHashSpace(peerAddr string, startHashSpace int, endHashSpace int) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_GetHashSpace{
			GetHashSpace: &pb.RequestGetHashSpace{
				StartHashSpace: int32(startHashSpace),
				EndHashSpace:   int32(endHashSpace),
			},
		},
	}
	return n.SendRequest(peerAddr, req, 0)
}

func (n *Node) SendJoinGossip(peerAddr string, newNodeAddr string, tokens []int32) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_GossipJoin{
			GossipJoin: &pb.RequestGossipJoin{
				NewNodeAddr: newNodeAddr,
				Tokens:      tokens,
			},
		},
	}
	return n.SendRequest(peerAddr, req, 0)
}

func (n *Node) SendResponseOK(response *pb.Response) error {

	response.Ok = true

	buffer, _ := proto.Marshal(response)
	_, err := n.repSock.SendBytes(buffer, 0)
	return err
}

func (n *Node) SendResponseError(errStr string) error {
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

func (n *Node) GetAddress() string {
	return n.addr
}
