package crdt

import (
	"reflect"
	"testing"
)

// === Tests ===

func TestDotContext_NewDotContext(t *testing.T) {
	ctx := NewDotContext()
	if ctx == nil {
		t.Fatal("NewDotContext() returned nil")
	}
	if len(ctx.versionVector) != 0 {
		t.Errorf("Expected compactContext to be empty, got %v", ctx.versionVector)
	}
	if ctx.dotCloud.Size() != 0 {
		t.Errorf("Expected dots to be empty, got %v", ctx.dotCloud)
	}
}

func TestDotContext_MakeDot(t *testing.T) {
	ctx := NewDotContext()
	dot := ctx.MakeDot("node1")

	if dot.id != "node1" {
		t.Errorf("Expected dot.id to be 'node1', got %s", dot.id)
	}
	if dot.seq != 1 {
		t.Errorf("Expected dot.seq to be 1, got %d", dot.seq)
	}

	dot2 := ctx.MakeDot("node1")
	if dot2.seq != 2 {
		t.Errorf("Expected dot2.seq to be 2, got %d", dot2.seq)
	}
}

func TestDotContext_CompactCase1(t *testing.T) {
	ctx := NewDotContext()
	ctx.InsertDotCompact(NewDot("node1", 1), false)
	ctx.Compact() // Assume this works

	ctx.InsertDotCompact(NewDot("node1", 2), false)
	ctx.Compact()

	if seq, ok := ctx.versionVector["node1"]; !ok || seq != 2 {
		t.Errorf("Expected compactContext[node1] to be 2, got %d", seq)
	}
	if ctx.dotCloud.Size() != 0 {
		t.Errorf("Expected dots to be empty after compact, got %v", ctx.dotCloud)
	}
}

func TestDotContext_CompactCase2(t *testing.T) {
	ctx := NewDotContext()
	ctx.InsertDotCompact(NewDot("node1", 1), false)
	ctx.Compact() // Assume this works

	ctx.Compact()

	if seq, ok := ctx.versionVector["node1"]; !ok || seq != 1 {
		t.Errorf("Expected compactContext[node1] to be 1, got %d", seq)
	}
	if ctx.dotCloud.Size() != 0 {
		t.Errorf("Expected dots to be empty after compact, got %v", ctx.dotCloud)
	}
}

func TestDotContext_CompactCase3(t *testing.T) {
	ctx := NewDotContext()
	ctx.InsertDotCompact(NewDot("node1", 1), false)
	ctx.Compact()

	if seq, ok := ctx.versionVector["node1"]; !ok || seq != 1 {
		t.Errorf("Expected compactContext[node1] to be 1, got %d", seq)
	}
	if seq, ok := ctx.versionVector["node2"]; ok {
		t.Errorf("Did not expect compactContext to have entry for node2, got %d", seq)
	}
	if ctx.dotCloud.Size() != 0 {
		t.Errorf("Expected dots to be empty after compact, got %v", ctx.dotCloud)
	}

	ctx.InsertDotCompact(NewDot("node2", 1), false)
	ctx.Compact()

	if seq, ok := ctx.versionVector["node1"]; !ok || seq != 1 {
		t.Errorf("Expected compactContext[node1] to be 1, got %d", seq)
	}
	if seq, ok := ctx.versionVector["node2"]; !ok || seq != 1 {
		t.Errorf("Expected compactContext[node2] to be 1, got %d", seq)
	}
	if ctx.dotCloud.Size() != 0 {
		t.Errorf("Expected dots to be empty after compact, got %v", ctx.dotCloud)
	}
}

func TestDotContext_CompactCase4(t *testing.T) {
	ctx := NewDotContext()
	ctx.InsertDotCompact(NewDot("node1", 2), false)
	ctx.Compact()

	if seq, ok := ctx.versionVector["node1"]; ok {
		t.Errorf("Did not expect compactContext to have entry for node1, got %d", seq)
	}
	if ctx.dotCloud.Size() != 1 {
		t.Errorf("Expected dots to have size 1 after compact, got %v", ctx.dotCloud)
	}

	ctx.InsertDotCompact(NewDot("node1", 1), false)
	ctx.Compact()

	if seq, ok := ctx.versionVector["node1"]; !ok || seq != 2 {
		t.Errorf("Expected compactContext[node1] to be 2, got %d", seq)
	}
	if ctx.dotCloud.Size() != 0 {
		t.Errorf("Expected dots to be empty after compact, got %v", ctx.dotCloud)
	}
}

func TestDotContext_CompactComplex(t *testing.T) {
	ctx := NewDotContext()
	ctx.InsertDot(NewDot("node1", 1))
	ctx.InsertDot(NewDot("node2", 1))
	ctx.InsertDot(NewDot("node2", 3))
	ctx.Compact()

	if !ctx.Knows(NewDot("node1", 1)) {
		t.Errorf("Expected ctx to know Dot(node1, 1)")
	}
	if !ctx.Knows(NewDot("node2", 1)) {
		t.Errorf("Expected ctx to know Dot(node2, 1)")
	}
	if ctx.Knows(NewDot("node1", 2)) {
		t.Errorf("Did not expect ctx to know Dot(node1, 2)")
	}
	if !ctx.Knows(NewDot("node2", 3)) {
		t.Errorf("Expected ctx to know Dot(node2, 3)")
	}
	if ctx.Knows(NewDot("node2", 2)) {
		t.Errorf("Did not expect ctx to know Dot(node2, 2)")
	}

	ctx.InsertDot(NewDot("node2", 2))
	ctx.Compact()

	if !ctx.Knows(NewDot("node2", 2)) {
		t.Errorf("Expected ctx to know Dot(node2, 2) after inserting it")
	}
	if !ctx.Knows(NewDot("node2", 3)) {
		t.Errorf("Expected ctx to know Dot(node2, 3) after inserting Dot(node2,2) and compacting")
	}
}

func TestDotContext_InsertDot(t *testing.T) {
	ctx := NewDotContext()
	dot := NewDot("node1", 1)
	ctx.InsertDot(dot)

	if _, ok := ctx.versionVector["node1"]; !ok {
		t.Errorf("Expected dots to contain %v, but it does not", dot)
	}
	if seq, ok := ctx.versionVector["node1"]; !ok || seq != 1 {
		t.Errorf("Expected compactContext[node1] to be 1, got %d", seq)
	}
}

func TestDotContext_Join(t *testing.T) {
	ctx1 := NewDotContext()
	ctx1.InsertDot(NewDot("node1", 1))
	ctx1.InsertDot(NewDot("node2", 1))
	ctx1.InsertDot(NewDot("node2", 2))

	ctx2 := NewDotContext()
	ctx2.InsertDot(NewDot("node1", 1))
	ctx2.InsertDot(NewDot("node1", 2))
	ctx2.InsertDot(NewDot("node1", 3))
	ctx2.InsertDot(NewDot("node3", 1))

	ctx1.Join(ctx2)

	if !ctx1.Knows(NewDot("node1", 3)) {
		t.Errorf("Expected ctx1 to know Dot(node1, 3)")
	}
	if !ctx1.Knows(NewDot("node2", 2)) {
		t.Errorf("Expected ctx1 to know Dot(node2, 2)")
	}
	if !ctx1.Knows(NewDot("node3", 1)) {
		t.Errorf("Expected ctx1 to know Dot(node3, 1)")
	}
	if ctx1.Knows(NewDot("node1", 4)) {
		t.Errorf("Did not expect ctx1 to know Dot(node1, 4)")
	}
	if ctx1.Knows(NewDot("node2", 3)) {
		t.Errorf("Did not expect ctx1 to know Dot(node2, 3)")
	}
	if ctx1.Knows(NewDot("node3", 2)) {
		t.Errorf("Did not expect ctx1 to know Dot(node3, 2)")
	}

	// Test commutativity

	if reflect.DeepEqual(ctx1, ctx2) {
		t.Errorf("Expected ctx1 and ctx2 to be different before joining")
	}

	ctx2.Join(ctx1)

	if !reflect.DeepEqual(ctx1, ctx2) {
		t.Errorf("Expected ctx1 and ctx2 to be equal after joining")
	}
}

func TestDotContext_ConcurrentUpdates(t *testing.T) {
	ctx1 := NewDotContext()
	ctx2 := NewDotContext()

	// Simulate concurrent updates
	ctx1.InsertDot(NewDot("node1", 1))
	ctx1.InsertDot(NewDot("node2", 1))
	ctx1.InsertDot(NewDot("node2", 2))
	ctx2.InsertDot(NewDot("node1", 1))
	ctx2.InsertDot(NewDot("node1", 2))
	ctx2.InsertDot(NewDot("node2", 1))

	// ctx1 knows (1, 1) and (2, 2), ctx2 knows (1, 2) and (2, 1)

	ctx1.Join(ctx2)

	if !ctx1.Knows(NewDot("node1", 2)) {
		t.Errorf("Expected ctx1 to know Dot(node1, 2) after join")
	}
	if !ctx1.Knows(NewDot("node2", 2)) {
		t.Errorf("Expected ctx1 to know Dot(node2, 2) after join")
	}
}

func TestDotContext_OverlappingContexts(t *testing.T) {
	ctx1 := NewDotContext()
	ctx2 := NewDotContext()

	ctx1.InsertDot(NewDot("node1", 1))
	ctx1.InsertDot(NewDot("node1", 2))
	ctx2.InsertDot(NewDot("node1", 2))
	ctx2.InsertDot(NewDot("node1", 3))

	ctx1.Join(ctx2)

	if !ctx1.Knows(NewDot("node1", 3)) {
		t.Errorf("Expected ctx1 to know Dot(node1, 3) after join")
	}
	if ctx1.dotCloud.Size() != 0 {
		t.Errorf("Expected ctx1.dots to be empty after compacting overlapping contexts, got %v", ctx1.dotCloud)
	}
}

func TestDotContext_EmptyJoin(t *testing.T) {
	ctx1 := NewDotContext()
	ctx2 := NewDotContext()

	ctx1.InsertDot(NewDot("node1", 1))

	ctx1.Join(ctx2)

	if !ctx1.Knows(NewDot("node1", 1)) {
		t.Errorf("Expected ctx1 to still know Dot(node1, 1) after joining with empty context")
	}
	if ctx1.dotCloud.Size() != 0 {
		t.Errorf("Expected ctx1.dots to be empty after compacting, got %v", ctx1.dotCloud)
	}
}

func TestDotContext_JoinWithGaps(t *testing.T) {
	ctx1 := NewDotContext()
	ctx2 := NewDotContext()

	ctx1.InsertDot(NewDot("node1", 1))
	ctx2.InsertDot(NewDot("node1", 3))

	ctx1.Join(ctx2)
	t.Logf("After first join: %+v", ctx1)

	if !ctx1.Knows(NewDot("node1", 1)) {
		t.Errorf("Expected ctx1 to know Dot(node1, 1)")
	}
	if ctx1.Knows(NewDot("node1", 2)) {
		t.Errorf("Did not expect ctx1 to know Dot(node1, 2)")
	}
	if !ctx1.Knows(NewDot("node1", 3)) {
		t.Errorf("Expected ctx1 to know Dot(node1, 3)")
	}

	ctx2.InsertDot(NewDot("node1", 2))
	ctx1.Join(ctx2)

	if !ctx1.Knows(NewDot("node1", 2)) {
		t.Errorf("Expected ctx1 to know Dot(node1, 2) after inserting it into ctx2 and joining again")
	}
	if !ctx1.Knows(NewDot("node1", 3)) {
		t.Errorf("Expected ctx1 to know Dot(node1, 3) after inserting Dot(node1,2) into ctx2 and joining again")
	}
}

func TestDotContext_JoinIdempotence(t *testing.T) {
	ctx := NewDotContext()

	ctx.InsertDot(NewDot("node1", 1))
	ctx.Join(ctx)

	if !ctx.Knows(NewDot("node1", 1)) {
		t.Errorf("Expected ctx to know Dot(node1, 1) after joining with itself")
	}
	if ctx.Knows(NewDot("node1", 2)) {
		t.Errorf("Did not expect ctx to know Dot(node1, 2) after joining with itself")
	}
	if ctx.dotCloud.Size() != 0 {
		t.Errorf("Expected ctx.dots to be empty after self-join, got %v", ctx.dotCloud)
	}
}

func TestDotContext_JoinCommutativity(t *testing.T) {
	ctx1 := NewDotContext()
	ctx2 := NewDotContext()

	ctx1.InsertDot(NewDot("node1", 1))
	ctx2.InsertDot(NewDot("node1", 2))

	ctx1Copy := ctx1.Clone()
	ctx2Copy := ctx2.Clone()

	ctx1.Join(ctx2)
	ctx2Copy.Join(ctx1Copy)

	if !reflect.DeepEqual(ctx1, ctx2Copy) {
		t.Errorf("Expected ctx1 and ctx2Copy to be equal after joining in different orders")
	}
}

func TestDotContext_JoinIndependence(t *testing.T) {
	ctx1 := NewDotContext()
	ctx2 := NewDotContext()

	ctx1.InsertDot(NewDot("node1", 1))
	ctx2.InsertDot(NewDot("node2", 1))

	ctx1.Join(ctx2)

	if ctx2.Knows(NewDot("node1", 1)) {
		t.Errorf("Did not expect ctx2 to know Dot(node1, 1) after joining ctx1 into ctx2")
	}
}

func TestDotContext_Clone(t *testing.T) {
	ctx := NewDotContext()
	ctx.InsertDot(NewDot("node1", 1))
	ctx.InsertDot(NewDot("node2", 1))
	ctx.InsertDot(NewDot("node2", 2))

	clone := ctx.Clone()

	if !reflect.DeepEqual(ctx.versionVector, clone.versionVector) {
		t.Errorf("Expected clone.compactContext to equal to ctx.compactContext")
	}

	if !reflect.DeepEqual(ctx.dotCloud, clone.dotCloud) {
		t.Errorf("Expected clone.dots to equal to ctx.dots")
	}
}

func TestDotContext_Copy(t *testing.T) {
	ctx1 := NewDotContext()
	ctx1.InsertDot(NewDot("node1", 1))
	ctx1.InsertDot(NewDot("node2", 2))

	ctx2 := NewDotContext()
	ctx2.Copy(ctx1)

	if len(ctx2.versionVector) != len(ctx1.versionVector) {
		t.Errorf("Expected ctx2.compactContext to have length %d, got %d", len(ctx1.versionVector), len(ctx2.versionVector))
	}
	if ctx2.dotCloud.Size() != ctx1.dotCloud.Size() {
		t.Errorf("Expected ctx2.dots to have size %d, got %d", ctx1.dotCloud.Size(), ctx2.dotCloud.Size())
	}
}

func TestDotContext_CloneIndependence(t *testing.T) {
	ctx := NewDotContext()
	ctx.InsertDot(NewDot("node1", 1))

	clone := ctx.Clone()
	clone.InsertDot(NewDot("node1", 2))

	if ctx.Knows(NewDot("node1", 2)) {
		t.Errorf("Expected original ctx to not know Dot(node1, 2) after modifying clone")
	}
	if !clone.Knows(NewDot("node1", 2)) {
		t.Errorf("Expected clone to know Dot(node1, 2)")
	}
}
