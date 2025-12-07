.PHONY: client server

client:
	cd client && npm run dev
server:
	cd server && go run main.go

all:
	make -j2 client server

server-test:
	cd server && go test ./...

server-crdt-test:
	cd server && go test ./crdt/...
client-crdt-test:
	cd client && npm run test -- types/crdt
