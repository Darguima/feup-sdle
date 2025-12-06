package main

import (
	"os"
	"os/signal"
	"sdle-server/node"
	"syscall"
	"time"
)

func create_node(id string) *node.Node {
	dataDir := "./data/" + id

	node, err := node.New(id, dataDir)

	if err != nil {
		panic(err)
	}

	return node
}

func main() {
	// wsHandler := websocket.NewWebSocketHandler()
	//
	// // Register handlers
	// http.Handle("/ws", wsHandler)
	//
	// log.Println("Starting server on :8080")
	// err := http.ListenAndServe(":8080", nil)
	// if err != nil {
	// 	log.Fatal("Failed to start server on port 8080: ", err)
	// }

	nodes := []*node.Node{
		create_node("localhost:5000"),
		create_node("localhost:5001"),
		create_node("localhost:5002"),
		create_node("localhost:5003"),
	}

	errCh := make(chan error, 2)
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, os.Interrupt, syscall.SIGTERM)

	// Start nodes concurrently so Start() doesn't block the rest of main
	for i, nd := range nodes {
		go func(i int, n *node.Node) {
			if err := n.StartReceiving(); err != nil {
				errCh <- err
			}
		}(i, nd)

		time.Sleep(300 * time.Millisecond)

		nd.JoinToRing(nodes[0].GetAddress())

	}

	// Wait for shutdown signal
	select {
	case <-sigCh:
		println("\nReceived interrupt signal, shutting down...")
	case err := <-errCh:
		println("Error occurred:", err.Error())
	}

	// Gracefully close all nodes
	for _, nd := range nodes {
		if err := nd.StopReceiving(); err != nil {
			println("Error closing node:", err.Error())
		}
	}
	println("All nodes closed successfully")
}
