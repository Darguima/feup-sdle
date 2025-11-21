"use client";

import { useParams, useRouter } from "next/navigation";
import { ShoppingListDetail } from "@/components/shopping-list-detail";
import { useEffect } from "react";

export default function ListPage() {
    const router = useRouter();
		const { id }: { id: string } = useParams();

    return (
        <ShoppingListDetail
            listId={id}
            onBack={() => router.push("/")}
        />
    );
}