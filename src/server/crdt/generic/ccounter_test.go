package crdt

import (
	"reflect"
	"testing"
)

func TestCCounter_NewCCounter(t *testing.T) {
    counter := NewCCounter("node1")
    if counter == nil {
        t.Fatal("NewCCounter() returned nil")
    }
    if counter.id != "node1" {
        t.Errorf("Expected counter.id to be 'node1', got %s", counter.id)
    }
    if counter.Read() != 0 {
        t.Errorf("Expected initial counter value to be 0, got %d", counter.Read())
    }
}

func TestCCounter_Inc(t *testing.T) {
    cc1 := NewCCounter("node1")
	cc2 := cc1.Clone()

    delta := cc1.Inc(5)
	t.Log(cc1)

    if cc1.Read() != 5 {
        t.Errorf("Expected counter value to be 5, got %d", cc1.Read())
    }

	cc2.Join(delta)
	if !reflect.DeepEqual(cc1, cc2) {
		t.Errorf("Expected cc1 and cc2 to be equal after joining with delta")
	}
}

func TestCCounter_IncMultiple(t *testing.T) {
	counter := NewCCounter("node1")
	counter.Inc(3)
	counter.Inc(7)

	if counter.Read() != 10 {
		t.Errorf("Expected counter value to be 10 after multiple increments, got %d", counter.Read())
	}
}

func TestCCounter_Dec(t *testing.T) {
    cc1 := NewCCounter("node1")
	cc2 := cc1.Clone()

    delta := cc1.Dec(4)

    if cc1.Read() != -4 {
        t.Errorf("Expected counter value to be -4, got %d", cc1.Read())
    }

	cc2.Join(delta)
	if !reflect.DeepEqual(cc1, cc2) {
		t.Errorf("Expected cc1 and cc2 to be equal after joining with delta")
	}
}

func TestCCounter_DecMultiple(t *testing.T) {
	counter := NewCCounter("node1")
	counter.Dec(2)
	counter.Dec(3)

	if counter.Read() != -5 {
		t.Errorf("Expected counter value to be -5 after multiple decrements, got %d", counter.Read())
	}
}

func TestCCounter_IncDec(t *testing.T) {
	counter := NewCCounter("node1")
	counter.Inc(10)
	counter.Dec(4)

	if counter.Read() != 6 {
		t.Errorf("Expected counter value to be 6 after increment and decrement, got %d", counter.Read())
	}
}

func TestCCounter_IncDecToZero(t *testing.T) {
	counter := NewCCounter("node1")
	counter.Inc(7)
	counter.Dec(7)

	if counter.Read() != 0 {
		t.Errorf("Expected counter value to be 0 after incrementing and decrementing to zero, got %d", counter.Read())
	}
}

func TestCCounter_Reset(t *testing.T) {
    cc1 := NewCCounter("node1")
    cc1.Inc(10)
	cc2 := cc1.Clone()

    delta := cc1.Reset()

    if cc1.Read() != 0 {
        t.Errorf("Expected counter value to be 0 after reset, got %d", cc1.Read())
    }

	cc2.Join(delta)
	if !reflect.DeepEqual(cc1, cc2) {
		t.Errorf("Expected cc1 and cc2 to be equal after joining with delta")
	}
}

func TestCCounter_ResetAfterIncDec(t *testing.T) {
	counter := NewCCounter("node1")
	counter.Inc(15)
	counter.Dec(5)
	counter.Reset()

	if counter.Read() != 0 {
		t.Errorf("Expected counter value to be 0 after reset following increments and decrements, got %d", counter.Read())
	}
}

func TestCCounter_ResetEmpty(t *testing.T) {
	counter := NewCCounter("node1")
	counter.Reset()

	if counter.Read() != 0 {
		t.Errorf("Expected counter value to remain 0 after resetting an empty counter, got %d", counter.Read())
	}
}

func TestCCounter_Join(t *testing.T) {
    counter1 := NewCCounter("node1")
    counter1.Inc(5)

    counter2 := NewCCounter("node2")
    counter2.Inc(10)

    counter1.Join(counter2)

    if counter1.Read() != 15 {
        t.Errorf("Expected counter1 value to be 15 after join, got %d", counter1.Read())
    }
    if counter2.Read() != 10 {
        t.Errorf("Expected counter2 value to remain 10, got %d", counter2.Read())
    }
}

func TestCCounter_JoinWithConflicts(t *testing.T) {
    cc1 := NewCCounter("node1")
    cc1.Inc(5)

    cc2 := NewCCounter("node2")
    cc2.Inc(10)

    cc1.Join(cc2)

    if cc1.Read() != 15 {
        t.Errorf("Expected counter1 value to be 15 after join, got %d", cc1.Read())
    }
    if cc2.Read() != 10 {
        t.Errorf("Expected counter2 value to remain 10, got %d", cc2.Read())
    }
}

func TestCCounter_ConcurrentUpdates(t *testing.T) {
    counter1 := NewCCounter("node1")
    counter2 := NewCCounter("node2")

    delta1 := counter1.Inc(5)
    delta2 := counter2.Inc(10)

    counter1.Join(delta2)
    counter2.Join(delta1)

    if counter1.Read() != 15 {
        t.Errorf("Expected counter1 value to be 15 after concurrent updates, got %d", counter1.Read())
    }
    if counter2.Read() != 15 {
        t.Errorf("Expected counter2 value to be 15 after concurrent updates, got %d", counter2.Read())
    }
}

func TestCCounter_JoinWithEmptyCounter(t *testing.T) {
    counter1 := NewCCounter("node1")
    counter1.Inc(5)

    counter2 := NewCCounter("node2")

    counter1.Join(counter2)

    if counter1.Read() != 5 {
        t.Errorf("Expected counter1 value to remain 5 after joining with empty counter, got %d", counter1.Read())
    }
    if counter2.Read() != 0 {
        t.Errorf("Expected counter2 value to remain 0, got %d", counter2.Read())
    }
}
