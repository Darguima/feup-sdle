package replication

import "errors"

var (
	ErrInvalidN             = errors.New("N must be at least 1")
	ErrInvalidW             = errors.New("W must be between 1 and N")
	ErrInvalidR             = errors.New("R must be between 1 and N")
	ErrInsufficientReplicas = errors.New("insufficient replicas written")
	ErrQuorumNotMet         = errors.New("quorum not met")
)
