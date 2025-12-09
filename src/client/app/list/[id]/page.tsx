"use client";

import { useParams, useRouter } from "next/navigation";
import { ShoppingListDetail } from "@/components/shopping-list-detail";
import { useProtocolSocket } from "@/components/provider/protocol-socket";

export default function ListPage() {
	const router = useRouter();
	const { id }: { id: string } = useParams();

	const socket = useProtocolSocket();

	return <ShoppingListDetail listId={id} onBack={() => router.push("/")} />
}
