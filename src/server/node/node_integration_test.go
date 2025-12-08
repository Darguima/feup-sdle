package node

import (
	"fmt"
	"os"
	"strings"
	"testing"
	"time"
)

func create_node(t *testing.T, id string) *Node {
	dataDir, err := os.MkdirTemp("", "sdle-test-")
	if err != nil {
		t.Fatalf("Failed to create temp dir: %v", err)
	}

	t.Cleanup(func() {
		os.RemoveAll(dataDir)
	})

	node, err := New(id, dataDir)
	if err != nil {
		t.Fatalf("Failed to create node %s: %v", id, err)
	}

	return node
}

func TestIntegration_FullCRUD(t *testing.T) {
	nodes := []*Node{
		create_node(t, "localhost:5010"),
		create_node(t, "localhost:5011"),
		create_node(t, "localhost:5012"),
		create_node(t, "localhost:5013"),
	}

	errCh := make(chan error, len(nodes))

	for _, nd := range nodes {
		nodeInstance := nd
		go func() {
			if err := nodeInstance.StartReceiving(); err != nil {
				if !isErrClosing(err) {
					errCh <- err
				}
			}
		}()
		t.Cleanup(func() {
			nodeInstance.StopReceiving()
		})
	}

	for _, nd := range nodes {
		time.Sleep(100 * time.Millisecond)
		nd.JoinToRing(nodes[0].GetAddress())
	}

	time.Sleep(2 * time.Second)
	fmt.Println("\n--- Ring stabilized, starting test ---")

	coordinatorNode := nodes[0]
	testKey := "my-integration-test-key"
	testValue := []byte("my-super-secret-value")

	// HAS (should be false)
	t.Run("HAS before PUT", func(t *testing.T) {
		has, err := coordinatorNode.Has(testKey)
		if err == nil && has {
			t.Fatalf("HAS check failed: key '%s' should not exist yet, but it does", testKey)
		}
		t.Logf("HAS check successful: key '%s' does not exist", testKey)
	})

	// PUT
	t.Run("PUT", func(t *testing.T) {
		if err := coordinatorNode.Put(testKey, testValue); err != nil {
			t.Fatalf("PUT failed for key '%s': %v", testKey, err)
		}
		t.Logf("PUT successful for key '%s'", testKey)
	})

	// HAS (should be true)
	t.Run("HAS after PUT", func(t *testing.T) {
		has, err := coordinatorNode.Has(testKey)
		if err != nil {
			t.Fatalf("HAS check failed after PUT for key '%s': %v", testKey, err)
		}
		if !has {
			t.Fatalf("HAS check failed after PUT: key '%s' should exist, but it doesn't", testKey)
		}
		t.Logf("HAS check successful: key '%s' exists", testKey)
	})

	// GET
	t.Run("GET", func(t *testing.T) {
		retrievedValue, err := coordinatorNode.Get(testKey)
		if err != nil {
			t.Fatalf("GET failed for key '%s': %v", testKey, err)
		}
		if string(retrievedValue) != string(testValue) {
			t.Fatalf("GET failed: expected value '%s', but got '%s'", string(testValue), string(retrievedValue))
		}
		t.Logf("GET successful for key '%s'", testKey)
	})

	// DELETE
	t.Run("DELETE", func(t *testing.T) {
		if err := coordinatorNode.Delete(testKey); err != nil {
			t.Fatalf("DELETE failed for key '%s': %v", testKey, err)
		}
		t.Logf("DELETE successful for key '%s'", testKey)
	})

	// HAS (should be false again)
	t.Run("HAS after DELETE", func(t *testing.T) {
		has, err := coordinatorNode.Has(testKey)
		if err == nil && has {
			t.Fatalf("HAS check failed after DELETE: key '%s' should not exist, but it does", testKey)
		}
		t.Logf("HAS check successful: key '%s' no longer exists", testKey)
	})

	select {
	case err := <-errCh:
		t.Errorf("Received unexpected error from a node: %v", err)
	default:
	}
}

// isErrClosing is a helper to check for the specific error that zmq returns when a socket is closed.
// This is not an actual error in our case, as we are closing the socket intentionally.
func isErrClosing(err error) bool {
	if err == nil {
		return false
	}
	// This is a bit brittle as it relies on the error string from the zmq library.
	// In a real project, you might use more robust error checking if the library provides it.
	return strings.Contains(err.Error(), "operation was interrupted") || strings.Contains(err.Error(), "context was terminated")
}
