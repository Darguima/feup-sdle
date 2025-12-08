package main

import (
	"fmt"
	"math/rand"
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

	nodes := []*node.Node{}

	for i := 5000; i < 5020; i++ {
		node_id := fmt.Sprintf("localhost:%d", i)
		node := create_node(node_id)
		nodes = append(nodes, node)
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

		randomIds := rand.Intn(i+1) - 1
		if randomIds < 0 {
			randomIds = 0
		}

		nd.JoinToRing(nodes[randomIds].GetAddress())
	}

	// Wait for stabilization
	time.Sleep(4 * time.Second)

	// Check ring view of each node
	println("\n=== Ring View After Stabilization ===")
	for _, nd := range nodes {
		knownIds := nd.GetRingView().GetKnownIds()
		fmt.Printf("Node %s knows %d nodes: %v\n", nd.GetID(), len(knownIds), knownIds)
	}
	println("=====================================\n")

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
