.PHONY: client server proxy

client:
	cd client && npm run dev
server:
	cd server && go run main.go

all:
	make -j2 client server

