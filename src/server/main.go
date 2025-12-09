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

	node, err := node.NewNode(id, dataDir)

	if err != nil {
		panic(err)
	}

	return node
}

func main() {
	// Server nodes list
	nodes := []*node.Node{}
	for i := 4000; i < 4004; i++ {
		node_id := fmt.Sprintf("localhost:%d", i)
		node := create_node(node_id)
		nodes = append(nodes, node)

	}

	errCh := make(chan error, len(nodes)*2)
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, os.Interrupt, syscall.SIGTERM)

	// Starting nodes concurrently
	for i, nd := range nodes {
		nd.Start(errCh)
		time.Sleep(300 * time.Millisecond)
		randomId := max(rand.Intn(i+1)-1, 0)
		nd.JoinToRing(nodes[randomId].GetAddress())
	}

	// Wait for stabilization
	time.Sleep(4 * time.Second)

	// Check ring view of each node
	println("\n=== Ring View After Stabilization ===")
	for _, nd := range nodes {
		view := nd.GetRingView()
		println("Node", nd.GetID(), "sees ", view.ToString())
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
		if err := nd.Stop(); err != nil {
			println("Error closing node:", err.Error())
		}
	}
	println("All nodes closed successfully")
}
