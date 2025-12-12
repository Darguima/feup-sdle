package node

import (
	"errors"
	"time"

	pb "sdle-server/proto"

	"github.com/pebbe/zmq4"
	"google.golang.org/protobuf/proto"
)

func (n *Node) sendRequest(peerAddr string, request proto.Message, timeout time.Duration) (*pb.Response, error) {
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
	return n.sendRequest(peerAddr, pingReq, 5*time.Second)
}

func (n *Node) sendFetchRing(peerAddr string) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_FetchRing{
			FetchRing: &pb.RequestFetchRing{},
		},
	}
	return n.sendRequest(peerAddr, req, 5*time.Second)
}

func (n *Node) sendGetHashSpace(peerAddr string, startHashSpace uint64, endHashSpace uint64) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.addr,
		RequestType: &pb.Request_GetHashSpace{
			GetHashSpace: &pb.RequestGetHashSpace{
				StartHashSpace: startHashSpace,
				EndHashSpace:   endHashSpace,
			},
		},
	}
	return n.sendRequest(peerAddr, req, 5*time.Second)
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
	return n.sendRequest(peerAddr, req, 5*time.Second)
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

func (n *Node) sendReplicaPutRequest(peerAddr string, key string, value []byte) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.id,
		RequestType: &pb.Request_ReplicaPut{
			ReplicaPut: &pb.RequestReplicaPut{Key: key, Value: value},
		},
	}
	return n.sendRequest(peerAddr, req, 5*time.Second)
}

func (n *Node) sendStoreHintRequest(peerAddr string, intendedNode string, key string, value []byte) (*pb.Response, error) {
	req := &pb.Request{
		Origin: n.id,
		RequestType: &pb.Request_StoreHint{
			StoreHint: &pb.RequestStoreHint{
				IntendedNode: intendedNode,
				Key:          key,
				Value:        value,
			},
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
