package crdt

import "fmt"

type ORMap[K comparable, V DotContextCRDT[V]] struct {
    id         string
    dotContext *DotContext
    valueMap   map[K]V // Store pointers to V
}

func NewORMap[K comparable, V DotContextCRDT[V]](id string) *ORMap[K, V] {
    return &ORMap[K, V]{
        id:         id,
        dotContext: NewDotContext(),
        valueMap:   make(map[K]V),
    }
}

func (ormap *ORMap[K, V]) Context() *DotContext {
	return ormap.dotContext
}

func (ormap *ORMap[K, V]) SetContext(ctx *DotContext) {
	ormap.dotContext = ctx

	for _, value := range ormap.valueMap {
		value.SetContext(ctx)
	}
}

func (ormap *ORMap[K, V]) Get(key K) V {
    if value, exists := ormap.valueMap[key]; exists {
		return value
	}

	value := (*new(V)).NewEmpty(ormap.id)
	value.SetContext(ormap.dotContext)
	ormap.valueMap[key] = value

	return value
}

func (ormap *ORMap[K, V]) Keys() []K {
	keys := make([]K, 0, len(ormap.valueMap))
	for key, value := range ormap.valueMap {
		if !value.IsNull() {
			keys = append(keys, key)
		}
	}
	return keys
}

func (ormap *ORMap[K, V]) Apply(key K, fn func(V) V) *ORMap[K, V] {
	delta := NewORMap[K, V](ormap.id)

	value := ormap.Get(key)
	valueDelta := fn(value)
	delta.valueMap[key] = valueDelta

	delta.dotContext.Join(valueDelta.Context())

	return delta
}

func (ormap *ORMap[K, V]) Remove(key K) *ORMap[K, V] {
    delta := NewORMap[K, V](ormap.id)

    if value, ok := ormap.valueMap[key]; ok {
        valueDelta := value.Reset()
		delta.SetContext(valueDelta.Context())

		delete(ormap.valueMap, key)
    }

    return delta
}

func (ormap *ORMap[K, V]) Reset() *ORMap[K, V] {
	delta := NewORMap[K, V](ormap.id)

	for key, value := range ormap.valueMap {
		valueDelta := value.Reset()
		delta.dotContext.Join(valueDelta.Context())
		delta.valueMap[key] = valueDelta
	}

	return delta
}

func (ormap *ORMap[K, V]) Join(other *ORMap[K, V]) {
	originalContext := ormap.dotContext.Clone()

	for _, value := range ormap.valueMap {
		// Must invalidate local entries known by the other context
		emptyValue := value.NewEmpty(ormap.id)
		emptyValue.SetContext(other.dotContext)
		value.Join(emptyValue)
		ormap.dotContext.Copy(originalContext)
	}

	for key, otherValue := range other.valueMap {
		// if localValue, ok := ormap.valueMap[key]; ok {
		// 	localValue.Join(otherValue)
		// 	ormap.dotContext.Copy(originalContext)

		// } else {
		// 	newValue := otherValue.NewEmpty(ormap.id)
		// 	newValue.SetContext(ormap.dotContext)
		// 	newValue.Join(otherValue)

		// 	ormap.valueMap[key] = newValue
		// 	ormap.dotContext.Copy(originalContext)
		// }

		localValue := ormap.Get(key)
		localValue.Join(otherValue)
		ormap.dotContext.Copy(originalContext)
	}

	ormap.dotContext.Join(other.dotContext)
}

func (ormap *ORMap[K, V]) Clone() *ORMap[K, V] {
	clone := NewORMap[K, V](ormap.id)
	clone.dotContext = ormap.dotContext.Clone()

	for key, value := range ormap.valueMap {
		valueClone := value.Clone()
		valueClone.SetContext(clone.dotContext)
		clone.valueMap[key] = valueClone
	}

	return clone
}

func (ormap *ORMap[K, V]) String() string {
    return fmt.Sprintf("ORMap{id: %s, dotContext: %v, valueMap: %v}", ormap.id, ormap.dotContext, ormap.valueMap)
}