"use client";

import { useRouter } from "next/navigation";
import { ShoppingListHome } from "@/components/shopping-list-home";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const websocketUrl = "ws://localhost:8080/ws";
    const ws = new WebSocket(websocketUrl);

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received data:", data);
      // Handle incoming messages as needed
    }

    setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify("ping"));
        console.log("Sent ping to server");
      }
    }, 1000);
  }, []);

	return (
		<ShoppingListHome onSelect={(list) => router.push(`/list/${list.id}`)} />
	);
}
