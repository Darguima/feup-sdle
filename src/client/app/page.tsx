"use client";

import { useRouter } from "next/navigation";
import { ShoppingListHome } from "@/components/shopping-list-home";
import { db } from "@/lib/storage/db";

export default function HomePage() {
	const router = useRouter();

	return (
		<ShoppingListHome
			onSelect={(list) => router.push(`/list/${list.getListId()}`)}
			onDelete={async (list) => {
				await db.deleteList(list.getListId());
			}}
		/>
	);
}
