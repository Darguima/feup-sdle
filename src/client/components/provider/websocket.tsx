'use client';

import { createContext, useContext, useEffect, useRef, useState } from "react";

export const WebSocketContext = createContext<WebSocket | null>(null);

export const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const websocketUrl = "ws://localhost:8080/ws";
    const websocket = new WebSocket(websocketUrl);

    websocket.onopen = () => {
      console.log("Connected to server");
    };

    websocket.onmessage = (event: { data: string; }) => {
      const data = JSON.parse(event.data);
      console.log("Received data:", data);
    };

    websocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setWs(websocket);
    console.log("WebSocket initialized");

    return () => {
      websocket.close();
      console.log("WebSocket connection closed on unmount");
    };
  }, []);

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
    </WebSocketContext.Provider>
  )
}

export const useWebSocket = (): WebSocket => {
  const webSocket = useContext(WebSocketContext);
  if (!webSocket) {
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  }
  return webSocket;
}
