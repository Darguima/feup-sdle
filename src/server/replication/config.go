package replication

import (
	"errors"
	"time"
)

type Config struct {
	N int // Replication factor
	W int // Write quorum
	R int // Read quorum

	HintDeliveryInterval time.Duration // Interval between handoff tries
}

func DefaultConfig() Config {
	return Config{
		N:                    3,
		W:                    2,
		R:                    2,
		HintDeliveryInterval: 10 * time.Second,
	}
}

func (c Config) Validate() error {
	if c.N < 1 {
		return errors.New("N must be at least 1")
	}
	if c.W < 1 || c.W > c.N {
		return errors.New("W must be between 1 and N")
	}
	if c.R < 1 || c.R > c.N {
		return errors.New("R must be between 1 and N")
	}
	return nil
}
