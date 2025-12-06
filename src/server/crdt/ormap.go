package crdt

import "fmt"

type ORMap[K comparable, V DotContextCRDT[V]] struct {
    id         string
    dotContext *DotContext[string]
    valueMap   map[K]V // Store pointers to V
}

func NewORMap[K comparable, V DotContextCRDT[V]](id string) *ORMap[K, V] {
    return &ORMap[K, V]{
        id:         id,
        dotContext: NewDotContext[string](),
        valueMap:   make(map[K]V),
    }
}

func (ormap *ORMap[K, V]) Get(key K) *V {
    if value, ok := ormap.valueMap[key]; ok {
        return &value
    }
    return nil
}

func (ormap *ORMap[K, V]) Remove(key K) *ORMap[K, V] {
    delta := NewORMap[K, V](ormap.id)

    if value, ok := ormap.valueMap[key]; ok {
        valueDelta := value.Reset()
		delta.dotContext = valueDelta.Context().Clone()
		delete(ormap.valueMap, key)
    }

    return delta
}

func (ormap *ORMap[K, V]) Reset() *ORMap[K, V] {
	delta := NewORMap[K, V](ormap.id)

	for _, value := range ormap.valueMap {
		valueDelta := value.Reset()
		delta.dotContext.Join(valueDelta.Context())
	}

	return delta
}

func (ormap *ORMap[K, V]) Join(other *ORMap[K, V]) {
	for _, value := range ormap.valueMap {
		// Must invalidate local entries known by the other context
		emptyValue := value.NewEmpty(ormap.id)
		value.Join(emptyValue)
	}

	for key, otherValue := range other.valueMap {
		if localValue, ok := ormap.valueMap[key]; ok {
			localValue.Join(otherValue)
		} else {
			ormap.valueMap[key] = otherValue.NewEmpty(ormap.id)
			ormap.valueMap[key].Join(otherValue)
		}
	}

	ormap.dotContext.Join(other.dotContext)
}

func (ormap *ORMap[K, V]) String() string {
    return fmt.Sprintf("ORMap{id: %s, dotContext: %v, valueMap: %v}", ormap.id, ormap.dotContext, ormap.valueMap)
}