package storage

import (
	"errors"
	"os"
	"path/filepath"

	"github.com/dgraph-io/badger/v4"
)

type Store struct {
	db *badger.DB
}

func Open(dirPath string) (*Store, error) {
	if err := os.MkdirAll(filepath.Clean(dirPath), 0o700); err != nil {
		return nil, err
	}

	opts := badger.DefaultOptions(dirPath).WithLogger(nil)
	db, err := badger.Open(opts)
	if err != nil {
		return nil, err
	}
	return &Store{db: db}, nil
}

func (s *Store) Close() error {
	if s == nil || s.db == nil {
		return nil
	}
	return s.db.Close()
}

func (s *Store) Put(key, value []byte) error {
	return s.db.Update(func(txn *badger.Txn) error {
		return txn.Set(key, value)
	})
}

func (s *Store) Get(key []byte) ([]byte, error) {
	var out []byte
	err := s.db.View(func(txn *badger.Txn) error {
		item, err := txn.Get(key)
		if err != nil {
			return err
		}
		v, err := item.ValueCopy(nil)
		if err != nil {
			return err
		}

		out = v
		return nil
	})
	return out, err
}

func (s *Store) Delete(key []byte) error {
	return s.db.Update(func(txn *badger.Txn) error {
		return txn.Delete(key)
	})
}

func (s *Store) Has(key []byte) (bool, error) {
	err := s.db.View(func(txn *badger.Txn) error {
		_, err := txn.Get(key)
		return err
	})
	if err == nil {
		return true, nil
	}
	if errors.Is(err, badger.ErrKeyNotFound) {
	return false, nil}

	return false, err
}