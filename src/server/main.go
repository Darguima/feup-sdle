package main

import (
	"fmt"
	"os"
	"os/signal"
	"sdle-server/node"
	"syscall"
	"time"
)

func main() {
	if len(os.Args) != 3 {
		fmt.Fprintln(os.Stderr, "usage: server <nodeID> <entryNodeID>")
		os.Exit(1)
	}

	nodeID := os.Args[1]
	entryID := os.Args[2]

	dataDir := "./data/" + nodeID
	n, err := node.NewNode(nodeID, dataDir)

	if err != nil {
		fmt.Fprintln(os.Stderr, "Error creating node - ", err.Error())
		os.Exit(1)
	}

	// Setup channels for errors and OS signals
	errCh := make(chan error, 2)
	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, os.Interrupt, syscall.SIGTERM)

	n.Start(errCh)

	// Try to join the ring via the entry node
	time.Sleep(200 * time.Millisecond) // Give the listeners a brief moment to bind before attempting join.
	joinTargetAddr := node.NodeIdToZMQAddr(entryID)
	if err := n.JoinToRing(joinTargetAddr); err != nil {
		fmt.Fprintln(os.Stderr, "failed to join ring:", err)
		os.Exit(1)
	}

	// Wait for interrupt signal or error
	select {
	case <-sigCh:
		fmt.Println("\nReceived interrupt signal, shutting down...")
	case err := <-errCh:
		fmt.Fprintln(os.Stderr, "Error occurred:", err.Error())
	}

	// Close the node gracefully
	if err := n.Stop(); err != nil {
		fmt.Fprintln(os.Stderr, "Error closing node:", err.Error())
	} else {
		fmt.Println("Node closed successfully")
	}
}
