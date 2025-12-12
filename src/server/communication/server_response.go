package communication

import (
	crdt "sdle-server/crdt/shopping"

	pb "sdle-server/proto"
)

func NewShoppingListResponse(list *crdt.ShoppingList, messageID string) (*pb.ServerResponse, error) {
	return &pb.ServerResponse{
		MessageId: messageID,
		ResponseType: &pb.ServerResponse_ShoppingList{
			ShoppingList: list.ToProto(),
		},
	}, nil
}

func NewErrorResponse(code pb.ErrorCode, messageID string) (*pb.ServerResponse, error) {
	return &pb.ServerResponse{
		ResponseType: &pb.ServerResponse_Error{
			Error: code,
		},
	}, nil
}