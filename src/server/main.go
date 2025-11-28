package main

import (
	"log"
	"net/http"
	"sdle-server/communication/websocket"
)

func main() {
	wsHandler := websocket.NewWebSocketHandler()

	// Register handlers
	http.Handle("/ws", wsHandler)

	log.Println("Starting server on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Failed to start server on port 8080: ", err)
	}
}