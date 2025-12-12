package node

import (
	"fmt"
	crdt "sdle-server/crdt/shopping"
	pb "sdle-server/proto"

	"google.golang.org/protobuf/proto"
	"github.com/gorilla/websocket"
)

func (n *Node) HandleShoppingList(delta *crdt.ShoppingList) error {
	n.log(fmt.Sprintf("received shopping list %s", delta.ListID()))

	var oldList *crdt.ShoppingList

	// Use distributed GET instead of direct store access
	if oldListData, err := n.Get("shoppinglist_" + delta.ListID()); err == nil {
		var oldListProto pb.ShoppingList

		proto.Unmarshal(oldListData, &oldListProto)
		oldList = crdt.ShoppingListFromProto(&oldListProto, n.id)
	} else {
		oldList = crdt.NewShoppingList(n.id, delta.ListID())
	}

	oldList.Join(delta)

	newListProto := oldList.ToProto()
	newListData, err := proto.Marshal(newListProto)

	if err != nil {
		return err
	}

	// Use distributed PUT instead of direct store access
	if err := n.Put("shoppinglist_"+delta.ListID(), newListData); err != nil {
		return err
	}

	n.subController.NotifySubscribers(delta.ListID(), *delta)

	return nil
}

func (n *Node) GetShoppingList(listID string) (*pb.ShoppingList, error) {
	n.log(fmt.Sprintf("get shopping list %s", listID))

	// Use distributed GET instead of direct store access
	listData, err := n.Get("shoppinglist_" + listID)
	if err != nil {
		return nil, err
	}

	var listProto pb.ShoppingList
	if err := proto.Unmarshal(listData, &listProto); err != nil {
		return nil, err
	}

	return &listProto, nil
}

func (n *Node) SubscribeShoppingList(listID string, messageID string, conn *websocket.Conn) error {
	n.log(fmt.Sprintf("handle subscribe shopping list %s", listID))
	n.subController.AddSubscriber(listID, messageID, conn)
	return nil
}

func (n *Node) UnsubscribeShoppingList(listID string, messageID string) error {
	n.log(fmt.Sprintf("handle unsubscribe shopping list %s", listID))
	n.subController.RemoveSubscriber(listID, messageID)
	return nil
}
