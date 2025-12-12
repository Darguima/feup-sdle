package replication

import (
	"encoding/json"
	"fmt"

	"github.com/dgraph-io/badger/v4"
)

const hintPrefix = "hint:"

// Hint represents a write that couldn't reach its intended node.
// Each node stores hints in its own database for data that should have been written to other nodes and were temporarily unavailable.
// Hints use prefix hint: to avoid collision with regular data keys
type Hint struct {
	IntendedNode string
	Key          string
	Value        []byte
}

// HintStore manages hints in a node's local database.
// Uses the same DB instance as the regular data store.
type HintStore struct {
	db *badger.DB
}

func NewHintStore(db *badger.DB) *HintStore {
	return &HintStore{db: db}
}

func (h *HintStore) StoreHint(hint Hint) error {
	// format: hint:{intended_node}:{original_key}
	hintKey := fmt.Sprintf("%s%s:%s", hintPrefix, hint.IntendedNode, hint.Key)

	data, err := json.Marshal(hint)
	if err != nil {
		return fmt.Errorf("failed to marshal hint: %w", err)
	}

	return h.db.Update(func(txn *badger.Txn) error {
		return txn.Set([]byte(hintKey), data)
	})
}

// Retrieves all hints stored in this node's DB that are intended for a specific node
func (h *HintStore) GetHintsFor(nodeId string) ([]Hint, error) {
	prefix := []byte(fmt.Sprintf("%s%s:", hintPrefix, nodeId))
	hints := []Hint{}

	err := h.db.View(func(txn *badger.Txn) error {
		opts := badger.DefaultIteratorOptions
		opts.Prefix = prefix
		it := txn.NewIterator(opts)
		defer it.Close()

		for it.Rewind(); it.Valid(); it.Next() {
			item := it.Item()

			err := item.Value(func(val []byte) error {
				var hint Hint
				if err := json.Unmarshal(val, &hint); err != nil {
					return err
				}
				hints = append(hints, hint)
				return nil
			})

			if err != nil {
				return err
			}
		}
		return nil
	})

	return hints, err
}

// Removes a hint from this node's DB after successful delivery
func (h *HintStore) DeleteHint(nodeId, key string) error {
	hintKey := fmt.Sprintf("%s%s:%s", hintPrefix, nodeId, key)

	return h.db.Update(func(txn *badger.Txn) error {
		return txn.Delete([]byte(hintKey))
	})
}

// Returns all hints in this node's DB, grouped by intended node
func (h *HintStore) GetAllHints() (map[string][]Hint, error) {
	result := make(map[string][]Hint)

	err := h.db.View(func(txn *badger.Txn) error {
		opts := badger.DefaultIteratorOptions
		opts.Prefix = []byte(hintPrefix)
		it := txn.NewIterator(opts)
		defer it.Close()

		for it.Rewind(); it.Valid(); it.Next() {
			item := it.Item()

			err := item.Value(func(val []byte) error {
				var hint Hint
				if err := json.Unmarshal(val, &hint); err != nil {
					return err
				}

				result[hint.IntendedNode] = append(result[hint.IntendedNode], hint)
				return nil
			})

			if err != nil {
				return err
			}
		}
		return nil
	})

	return result, err
}

// Returns the total number of hints stored in this node's DB
func (h *HintStore) CountHints() (int, error) {
	count := 0

	err := h.db.View(func(txn *badger.Txn) error {
		opts := badger.DefaultIteratorOptions
		opts.Prefix = []byte(hintPrefix)
		it := txn.NewIterator(opts)
		defer it.Close()

		for it.Rewind(); it.Valid(); it.Next() {
			count++
		}
		return nil
	})

	return count, err
}
