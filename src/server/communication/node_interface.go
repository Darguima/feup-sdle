package communication

import (
	crdt "sdle-server/crdt/shopping"
	pb "sdle-server/proto"

	"github.com/gorilla/websocket"
)

type NodeInterface interface {
	ID() string
	HandleShoppingList(list *crdt.ShoppingList) error
	GetShoppingList(id string) (*pb.ShoppingList, error)
	SubscribeShoppingList(listID string, messageID string, conn *websocket.Conn) error
	UnsubscribeShoppingList(listID string, messageID string) error
}
