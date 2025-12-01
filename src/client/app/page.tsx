"use client";

import { useRouter } from "next/navigation";
import { WebSocketContext } from "@/components/provider/websocket";
import { ShoppingListHome } from "@/components/shopping-list-home";
import { useContext, useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const ws = useContext(WebSocketContext);

  // TODO: Remove this
  useEffect(() => {
    const intervalId = setInterval(() => {
      ws?.send(JSON.stringify({ type: "ping" }));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [ws]);

	return (
		<ShoppingListHome onSelect={(list) => router.push(`/list/${list.id}`)} />
	);
}
