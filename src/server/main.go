package main

import (
	"sdle-server/communication/websocket"
	// "sdle-server/node"
	"log"
	"net/http"
)

// func create_node(id string) *node.Node {
// 	dataDir := "./data/" + id

// 	node, err := node.New(id, dataDir)

// 	if err != nil {
// 		panic(err)
// 	}

// 	return node
// }

func main() {
	wsHandler := websocket.NewWebSocketHandler()

	// Register handlers
	http.Handle("/ws", wsHandler)

	log.Println("Starting server on :8080")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Failed to start server on port 8080: ", err)
	}

	// nodes := []*node.Node{
	// 	create_node("localhost:5000"),
	// 	create_node("localhost:5001"),
	// 	create_node("localhost:5002"),
	// 	create_node("localhost:5003"),
	// }

	// errCh := make(chan error, 2)
	// sigCh := make(chan os.Signal, 1)
	// signal.Notify(sigCh, os.Interrupt, syscall.SIGTERM)

	// // Start nodes concurrently so Start() doesn't block the rest of main
	// for i, nd := range nodes {
	// 	go func(i int, n *node.Node) {
	// 		if err := n.Start(); err != nil {
	// 			errCh <- err
	// 		}
	// 	}(i, nd)

	// 	time.Sleep(1 * time.Second)

	// 	if i == 0 {
	// 		continue
	// 	}

	// 	nd.SendFetchRing(nodes[0].GetAddress())
	// 	nd.SendGetHashSpace(nodes[0].GetAddress(), 0, 100)
	// 	nd.SendJoinGossip(nodes[0].GetAddress(), nd.GetAddress(), []uint64{101})

	// }
}
