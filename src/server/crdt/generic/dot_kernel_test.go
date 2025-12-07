package crdt

import (
	"reflect"
	"testing"
)

func TestDotKernel_NewDotKernel(t *testing.T) {
    kernel := NewDotKernel[string]()
    if kernel == nil {
        t.Fatal("NewDotKernel() returned nil")
    }
    if len(kernel.dotValues) != 0 {
        t.Errorf("Expected dotValues to be empty, got %v", kernel.dotValues)
    }
    if kernel.dotContext == nil {
        t.Errorf("Expected dotContext to be initialized, got nil")
    }
}

func TestDotKernel_DotAdd(t *testing.T) {
    kernel := NewDotKernel[string]()
    dot := kernel.DotAdd("node1", "value1")

    if dot.id != "node1" {
        t.Errorf("Expected dot.id to be 'node1', got %s", dot.id)
    }
    if dot.seq != 1 {
        t.Errorf("Expected dot.seq to be 1, got %d", dot.seq)
    }
    if kernel.dotValues[dot] != "value1" {
        t.Errorf("Expected dotValues[%v] to be 'value1', got %v", dot, kernel.dotValues[dot])
    }

	dot = kernel.DotAdd("node1", "value2")
	if dot.seq != 2 {
		t.Errorf("Expected dot.seq to be 2 for second addition, got %d", dot.seq)
	}
	if kernel.dotValues[dot] != "value2" {
		t.Errorf("Expected dotValues[%v] to be 'value2', got %v", dot, kernel.dotValues[dot])
	}
}

func TestDotKernel_Add(t *testing.T) {
    dk1 := NewDotKernel[string]()
	dk2 := dk1.Clone()
    delta := dk1.Add("node1", "value1")

    if len(dk1.dotValues) != 1 {
        t.Errorf("Expected delta.dotValues to have 1 entry, got %d", len(delta.dotValues))
    }
    if dk1.dotValues[NewDot("node1", 1)] != "value1" {
        t.Errorf("Expected delta.dotValues to contain 'value1', got %v", delta.dotValues)
    }

	dk2.Join(delta)

	if !reflect.DeepEqual(dk1, dk2) {
		t.Errorf("Expected dk1 and dk2 to be equal after joining with delta")
	}
}

func TestDotKernel_RemoveDot(t *testing.T) {
    dk1 := NewDotKernel[string]()
    dot := dk1.DotAdd("node1", "value1")
	dk2 := dk1.Clone()

    delta := dk1.RemoveDot(dot)

    if len(dk1.dotValues) != 0 {
        t.Errorf("Expected kernel.dotValues to be empty, got %v", dk1.dotValues)
    }
    if !delta.dotContext.Knows(dot) {
        t.Errorf("Expected delta.dotContext to know %v, but it does not", dot)
    }

	dk2.Join(delta)

	if !reflect.DeepEqual(dk1, dk2) {
		t.Errorf("Expected dk1 and dk2 to be equal after joining with delta")
	}
}

func TestDotKernel_RemoveNonExistentDot(t *testing.T) {
    kernel := NewDotKernel[string]()
	kernel.DotAdd("node1", "value1")
    dot := NewDot("node2", 1)

    delta := kernel.RemoveDot(dot)

    if len(delta.dotValues) != 0 {
        t.Errorf("Expected delta.dotValues to be empty, got %v", delta.dotValues)
    }
    if delta.dotContext.Knows(dot) {
        t.Errorf("Did not expect delta.dotContext to know %v", dot)
    }
}

func TestDotKernel_RemoveValue(t *testing.T) {
    dk1 := NewDotKernel[string]()
    dk1.DotAdd("node1", "value1")
    dk1.DotAdd("node2", "value2")
	dk1.DotAdd("node3", "value1")
	dk2 := dk1.Clone()

    delta := dk1.RemoveValue("value1")

    if len(dk1.dotValues) != 1 {
        t.Errorf("Expected kernel.dotValues to have 1 entry, got %d", len(dk1.dotValues))
    }
    if _, ok := dk1.dotValues[NewDot("node1", 1)]; ok {
        t.Errorf("Expected kernel.dotValues to not contain 'value1'")
    }
	if _, ok := dk1.dotValues[NewDot("node3", 1)]; ok {
		t.Errorf("Expected kernel.dotValues to not contain 'value1'")
	}
	if dk1.dotValues[NewDot("node2", 1)] != "value2" {
		t.Errorf("Expected kernel.dotValues to still contain 'value2', got %v", dk1.dotValues[NewDot("node2", 1)])
	}

	dk2.Join(delta)

	if !reflect.DeepEqual(dk1, dk2) {
		t.Errorf("Expected dk1 and dk2 to be equal after joining with delta")
	}
}


func TestDotKernel_RemoveValueNotPresent(t *testing.T) {
    dk1 := NewDotKernel[string]()
    dk1.DotAdd("node1", "value1")
	dk2 := dk1.Clone()

    delta := dk1.RemoveValue("value2")

    if len(delta.dotValues) != 0 {
        t.Errorf("Expected delta.dotValues to be empty, got %v", delta.dotValues)
    }
    if len(dk1.dotValues) != 1 {
        t.Errorf("Expected kernel.dotValues to remain unchanged, got %v", dk1.dotValues)
    }

	dk2.Join(delta)

	if !reflect.DeepEqual(dk1, dk2) {
		t.Errorf("Expected dk1 and dk2 to be equal after joining with delta")
	}
}

func TestDotKernel_Reset(t *testing.T) {
    dk1 := NewDotKernel[int]()
    dk1.DotAdd("node1", 1)
    dk1.DotAdd("node2", 2)
	dk2 := dk1.Clone()

    delta := dk1.Reset()

    if len(dk1.dotValues) != 0 {
        t.Errorf("Expected kernel.dotValues to be empty after reset, got %v", dk1.dotValues)
    }

	dk2.Join(delta)

	if !reflect.DeepEqual(dk1, dk2) {
		t.Errorf("Expected dk1 and dk2 to be equal after joining with delta")
	}
}

func TestDotKernel_ResetEmptyKernel(t *testing.T) {
    kernel := NewDotKernel[string]()

    delta := kernel.Reset()

    if len(delta.dotValues) != 0 {
        t.Errorf("Expected delta.dotValues to be empty, got %v", delta.dotValues)
    }
}

func TestDotKernel_Join(t *testing.T) {
    kernel1 := NewDotKernel[string]()
    kernel1.DotAdd("node1", "value1")
    kernel1.DotAdd("node2", "value2")

    kernel2 := NewDotKernel[string]()
    kernel2.DotAdd("node2", "new_value2")
    kernel2.DotAdd("node3", "value3")

    kernel1.Join(kernel2)
	t.Log(kernel1)

    if len(kernel1.dotValues) != 3 {
        t.Errorf("Expected kernel1.dotValues to have 3 entries, got %d", len(kernel1.dotValues))
    }
	if kernel1.dotValues[NewDot("node1", 1)] != "value1" {
		t.Errorf("Expected kernel1.dotValues[node1] to be 'value1', got %v", kernel1.dotValues[NewDot("node1", 1)])
	}
    if kernel1.dotValues[NewDot("node3", 1)] != "value3" {
        t.Errorf("Expected kernel1.dotValues[node3] to be 'value3', got %v", kernel1.dotValues[NewDot("node3", 1)])
    }
}

func TestDotKernel_JoinConcurrent(t *testing.T) {
	kernel1 := NewDotKernel[string]()
	kernel1.DotAdd("node1", "value1")
	kernel1.DotAdd("node2", "value2")

	kernel2 := NewDotKernel[string]()
	kernel2.DotAdd("node1", "value3")
	kernel2.DotAdd("node2", "value4")

	kernel1.Join(kernel2)

	if len(kernel1.dotValues) != 2 {
		t.Errorf("Expected kernel1.dotValues to have 2 entries, got %d", len(kernel1.dotValues))
	}
	if kernel1.dotValues[NewDot("node1", 1)] != "value1" {  // Must prefer value from itself
		t.Errorf("Expected kernel1.dotValues[node1] to be 'value1', got %v", kernel1.dotValues[NewDot("node1", 1)])
	}
	if kernel1.dotValues[NewDot("node2", 1)] != "value2" {
		t.Errorf("Expected kernel1.dotValues[node2] to be 'value2', got %v", kernel1.dotValues[NewDot("node2", 1)])
	}
}

func TestDotKernel_JoinWithEmptyKernel(t *testing.T) {
    kernel1 := NewDotKernel[string]()
    kernel1.DotAdd("node1", "value1")

    kernel2 := NewDotKernel[string]()

    kernel1.Join(kernel2)

    if len(kernel1.dotValues) != 1 {
        t.Errorf("Expected kernel1.dotValues to have 1 entry, got %d", len(kernel1.dotValues))
    }
    if kernel1.dotValues[NewDot("node1", 1)] != "value1" {
        t.Errorf("Expected kernel1.dotValues[node1] to be 'value1', got %v", kernel1.dotValues[NewDot("node1", 1)])
    }
}

func TestDotKernel_JoinIdempotence(t *testing.T) {
	kernel := NewDotKernel[string]()
	kernel.DotAdd("node1", "value1")
	kernel.DotAdd("node2", "value2")

	kernel.Join(kernel)

	if len(kernel.dotValues) != 2 {
		t.Errorf("Expected kernel.dotValues to have 2 entries after self-join, got %d", len(kernel.dotValues))
	}
	if kernel.dotValues[NewDot("node1", 1)] != "value1" {
		t.Errorf("Expected kernel.dotValues[node1] to be 'value1', got %v", kernel.dotValues[NewDot("node1", 1)])
	}
	if kernel.dotValues[NewDot("node2", 1)] != "value2" {
		t.Errorf("Expected kernel.dotValues[node2] to be 'value2', got %v", kernel.dotValues[NewDot("node2", 1)])
	}
}

func TestDotKernel_JoinCommutativity(t *testing.T) {
	kernel1 := NewDotKernel[string]()
	kernel1.DotAdd("node1", "value1")

	kernel2 := NewDotKernel[string]()
	kernel2.DotAdd("node2", "value2")

	clone1 := kernel1.Clone()
	clone2 := kernel2.Clone()

	clone1.Join(kernel2)
	clone2.Join(kernel1)

	if !reflect.DeepEqual(clone1, clone2) {
		t.Errorf("Expected join to be commutative, but results differ:\nclone1: %v\nclone2: %v", clone1, clone2)
	}
}

func TestDotKernel_JoinIndependence(t *testing.T) {
	kernel1 := NewDotKernel[string]()
	kernel1.DotAdd("node1", "value1")

	kernel2 := NewDotKernel[string]()
	kernel2.DotAdd("node2", "value2")

	kernel1.Join(kernel2)

	// Modify kernel2 after join
	kernel2.DotAdd("node3", "value3")

	if len(kernel1.dotValues) != 2 {
		t.Errorf("Expected kernel1.dotValues to have 2 entries, got %d", len(kernel1.dotValues))
	}
	if _, ok := kernel1.dotValues[NewDot("node3", 1)]; ok {
		t.Errorf("Expected kernel1.dotValues to not contain 'value3'")
	}
}

func TestDotKernel_Clone(t *testing.T) {
	kernel := NewDotKernel[string]()
	kernel.DotAdd("node1", "value1")
	kernel.DotAdd("node2", "value2")

	clone := kernel.Clone()

	if !reflect.DeepEqual(kernel, clone) {
		t.Errorf("Expected cloned kernel to be equal to original")
	}

	// Modify clone and check original is unaffected
	clone.DotAdd("node3", "value3")

	if len(kernel.dotValues) != 2 {
		t.Errorf("Expected original kernel.dotValues to have 2 entries, got %d", len(kernel.dotValues))
	}
	if len(clone.dotValues) != 3 {
		t.Errorf("Expected cloned kernel.dotValues to have 3 entries, got %d", len(clone.dotValues))
	}
}
