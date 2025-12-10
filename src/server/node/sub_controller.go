package node

import (
	"log"
	"sdle-server/communication"
	crdt "sdle-server/crdt/shopping"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

type SubInfo struct {
	MessageID string
	conn      *websocket.Conn
}

type SubController struct {
	node *Node
	subscribers map[string]([]*SubInfo)
}

func NewSubController(node *Node) *SubController {
	return &SubController{
		subscribers: make(map[string]([]*SubInfo)),
		node: node,
	}
}

func (sc *SubController) Node() *Node {
	return sc.node
}

func (sc *SubController) SetNode(node *Node) {
	sc.node = node
}

func (sc *SubController) AddSubscriber(listID string, messageID string, conn *websocket.Conn) {
	if sc.subscribers[listID] == nil {
		sc.subscribers[listID] = []*SubInfo{}
	}

	for _, existingConn := range sc.subscribers[listID] {
		if existingConn.MessageID == messageID {
			return // Already subscribed
		}
	}

	sc.subscribers[listID] = append(sc.subscribers[listID], &SubInfo{
		MessageID: messageID,
		conn:      conn,
	})
}

func (sc *SubController) RemoveSubscriber(listID string, messageID string) {
	subscribers := sc.subscribers[listID]
	if subscribers == nil {
		return
	}

	for i, existingConn := range subscribers {
		if existingConn.MessageID == messageID {
			sc.subscribers[listID] = append(subscribers[:i], subscribers[i+1:]...)
			break
		}
	}
}

func (sc *SubController) NotifySubscribers(listID string, list crdt.ShoppingList) {
	subscribers := sc.subscribers[listID]
	if subscribers == nil {
		return
	}

	for _, subInfo := range subscribers {
		message, err := communication.NewShoppingListResponse(&list, subInfo.MessageID)
		if err != nil {
			log.Println("Error creating shopping list response:", err)
			return
		}

		data, err := proto.Marshal(message)
		if err != nil {
			log.Println("Error marshaling shopping list response:", err)
			return
		}

		if err := subInfo.conn.WriteMessage(websocket.BinaryMessage, data); err != nil {
			// Handle error, possibly remove subscriber
			log.Println("Error notifying subscriber:", err)
			continue
		}
	}
}