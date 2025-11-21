"use client";

import { ShoppingListHome } from "@/components/shopping-list-home";
import { useRouter } from "next/navigation";

export default function HomePage() {
		const router = useRouter();

    return <ShoppingListHome onSelect={(list) => router.push(`/list/${list.id}`)} />;
}
