package node

import pb "sdle-server/proto"

func (n *Node) handleGet(req *pb.Request) error {
	n.log("Received GET from " + req.Origin)
	getReq := req.GetGet()
	if getReq == nil {
		return n.sendResponseError("invalid get request")
	}

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
