package main

import (
	"fmt"
	"github.com/zeromq/goczmq"
)

func main() {
	socket, err := goczmq.NewSub("tcp://localhost:12345", "")
	if err != nil {
		fmt.Println("Error creating socket:", err)
		return
	}
	defer socket.Destroy()

	for {
		msg, err := socket.RecvMessage()
		if err != nil {
			fmt.Println("Error receiving message:", err)
			return
		}
		fmt.Println("Received message:", string(msg[0]))
	}
}
