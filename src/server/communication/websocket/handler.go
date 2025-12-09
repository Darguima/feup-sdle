package websocket

import (
	"log"
	"net/http"
	crdt "sdle-server/crdt/shopping"
	pb "sdle-server/proto"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

type WebSocketHandler struct {
	upgrader websocket.Upgrader
	node     NodeInterface
}

func NewWebSocketHandler(node NodeInterface) *WebSocketHandler {
	return &WebSocketHandler{
		upgrader: websocket.Upgrader{
			ReadBufferSize:  1024,
			WriteBufferSize: 1024,
			CheckOrigin: func(r *http.Request) bool {
				// In real environments, we should check the origin here
				// but since this project is going to be ran locally only,
				// we can just allow all origins.
				return true
			},
		},
		node: node,
	}
}

func (h *WebSocketHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	conn, err := h.upgrader.Upgrade(w, r, nil)
	if err != nil {
		http.Error(w, "Could not open websocket connection", http.StatusBadRequest)
		return
	}
	defer conn.Close()

	log.Printf("WebSocket connection established from %s", r.RemoteAddr)

	for {
		messageType, message, err := conn.ReadMessage()
		if err != nil {
			log.Println("Error reading message:", err)
			break
		}

		if messageType != websocket.BinaryMessage {
			log.Println("Received non-binary message, ignoring")
			continue
		}

		var req pb.ClientRequest
		if err := proto.Unmarshal(message, &req); err != nil {
			log.Println("Failed to unmarshal client request:", err)
			continue
		}

		switch req.GetRequestType().(type) {
			case *pb.ClientRequest_ShoppingList:
				list := crdt.ShoppingListFromProto(req.GetShoppingList())

				if err := h.node.HandleShoppingList(list); err != nil {
					log.Println("Error handling shopping list:", err)
				}

			case *pb.ClientRequest_GetShoppingList_:
				list, err := h.node.GetShoppingList(req.GetGetShoppingList_().GetId())
				if err != nil {
					log.Println("Error getting shopping list:", err)
					continue
				}

				// Send the shopping list back to the client
				serverResp := &pb.ServerResponse{
					ResponseType: &pb.ServerResponse_ShoppingList{
						ShoppingList: list,
					},
				}
				
				respBytes, err := proto.Marshal(serverResp)
				if err != nil {
					log.Println("Failed to marshal shopping list:", err)
					continue
				}

				if err := conn.WriteMessage(websocket.BinaryMessage, respBytes); err != nil {
					log.Println("Error writing message:", err)
					break
				}

			default:
				log.Println("Unknown request type")
		}
	}
}

