'use client';

import NullProtocolSocket from "@/lib/protocol/null-protocol-socket";
import ProtocolSocket from "@/lib/protocol/protocol-socket";
import WebProtocolSocket from "@/lib/protocol/web-protocol-socket";
import { createContext, useContext, useRef } from "react";

const ProtocolSocketContext = createContext<ProtocolSocket>(new NullProtocolSocket());

export const WebProtocolSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const socketRef = useRef<ProtocolSocket>(new NullProtocolSocket());

  const initSocket = () => {
    const websocket = new WebSocket("ws://localhost:8000/ws");
    socketRef.current = new WebProtocolSocket(websocket, onError);
  }

  const onError = (event: Event) => {
    console.error("Connection failed to server: ", event);

    setTimeout(() => {
      initSocket();
    }, 5000);
  }

  if (!(socketRef.current instanceof WebProtocolSocket)) {
    // Initialize the WebSocket connection only once
    initSocket();
  }

  return (
    <ProtocolSocketContext.Provider value={socketRef.current}>
      {children}
    </ProtocolSocketContext.Provider>
  )
}

export const useProtocolSocket = (): ProtocolSocket => {
  const socket = useContext(ProtocolSocketContext);
  return socket;
}
