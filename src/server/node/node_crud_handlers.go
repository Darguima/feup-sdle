package node

import pb "sdle-server/proto"

func (n *Node) handleGet(req *pb.Request) error {
	println("Node " + n.addr + " received GET from " + req.Origin)
	return n.SendResponseError("Get not implemented")
}

func (n *Node) handlePut(req *pb.Request) error {
	println("Node " + n.addr + " received PUT from " + req.Origin)
	return n.SendResponseError("Put not implemented")
}

func (n *Node) handleDelete(req *pb.Request) error {
	println("Node " + n.addr + " received DELETE from " + req.Origin)
	return n.SendResponseError("Delete not implemented")
}

func (n *Node) handleHas(req *pb.Request) error {
	println("Node " + n.addr + " received HAS from " + req.Origin)
	return n.SendResponseError("Has not implemented")
}
