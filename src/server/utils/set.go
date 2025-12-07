package utils

import "fmt"

type Set[T comparable] map[T]struct{}

func NewSet[T comparable](items ...T) Set[T] {
	s := Set[T]{}
	for _, item := range items {
		s.Add(item)
	}
	return s
}

func (s Set[T]) Add(item T) {
	s[item] = struct{}{}
}

func (s Set[T]) Remove(item T) {
	delete(s, item)
}

func (s Set[T]) Contains(item T) bool {
	_, exists := s[item]
	return exists
}

func (s Set[T]) Size() int {
	return len(s)
}

func (s Set[T]) String() string {
	str := "{"
	first := true
	for item := range s {
		if !first {
			str += ", "
		}
		str += fmt.Sprintf("%v", item)
		first = false
	}
	str += "}"
	return str
}