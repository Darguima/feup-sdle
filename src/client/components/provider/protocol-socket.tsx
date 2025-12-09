'use client';

import NullProtocolSocket from "@/lib/protocol/null-protocol-socket";
import ProtocolSocket from "@/lib/protocol/protocol-socket";
import WebProtocolSocket from "@/lib/protocol/web-protocol-socket";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const ProtocolSocketContext = createContext<ProtocolSocket>(new NullProtocolSocket());

export const WebProtocolSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const socketRef = useRef<ProtocolSocket | null>(null);

  if (!socketRef.current) {
    // Initialize the WebSocket connection only once
    socketRef.current = new WebProtocolSocket(new WebSocket("ws://localhost:8000/ws"));
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
