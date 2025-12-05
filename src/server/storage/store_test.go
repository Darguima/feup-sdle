package storage

import (
	"bytes"
	"errors"
	"testing"

	"github.com/dgraph-io/badger/v4"
)

func TestStore_PutGetDeleteHas(t *testing.T) {
	dir := t.TempDir()
	s, err := Open(dir)
	if err != nil {
		t.Fatalf("failed to open store: %v", err)
	}

	defer s.Close()

	key := []byte("test-key")
	val := []byte("test-value")

	if err := s.Put(key, val); err != nil {
		t.Fatalf("failed to put: %v", err)
	}

	got, err := s.Get(key)
	if err != nil {
		t.Fatalf("failed to get: %v", err)
	}

	if !bytes.Equal(got, val) {
		t.Fatalf("got %v want %v", got, val)
	}

	has, err := s.Has(key)
	if err != nil {
		t.Fatalf("failed to has: %v", err)
	}

	if err := s.Delete(key); err != nil {
		t.Fatalf("failed to delete: %v", err)
	}
	has, err = s.Has(key)
	if err != nil {
		t.Fatalf("failed to has after delete: %v", err)
	}
	if has {
		t.Fatalf("got %v want false", got)
	}

	_, err = s.Get(key)
	if !errors.Is(err, badger.ErrKeyNotFound) {
		t.Fatalf("got %v want %v", err, badger.ErrKeyNotFound)
	}
}

func TestStore_PersistenceAcrossReopen(t *testing.T) {
	dir := t.TempDir()
	s, err := Open(dir)
	if err != nil {
		t.Fatalf("Open: %v", err)
	}

	key := []byte("persist-key")
	val := []byte("persist-value")
	if err := s.Put(key, val); err != nil {
		s.Close()
		t.Fatalf("Put: %v", err)
	}
	if err := s.Close(); err != nil {
		t.Fatalf("Close: %v", err)
	}

	// Reopen and verify value is still there
	s2, err := Open(dir)
	if err != nil {
		t.Fatalf("Reopen: %v", err)
	}
	defer s2.Close()

	got, err := s2.Get(key)
	if err != nil {
		t.Fatalf("Get after reopen: %v", err)
	}
	if !bytes.Equal(got, val) {
		t.Fatalf("value mismatch after reopen: got %q want %q", got, val)
	}
}
