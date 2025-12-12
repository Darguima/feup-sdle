"use client";

import { useState, useEffect } from "react";
import { ShoppingListHome } from "@/components/shopping-list-home";
import { ShoppingListDetail } from "@/components/shopping-list-detail";
import { db } from "@/lib/storage/db";
import type { ShoppingList } from "@/types";

export default function HomePage() {
	const [selectedListId, setSelectedListId] = useState<string | null>(null);

	// Read listId from URL hash on mount and when hash changes
	useEffect(() => {
		const readHashRoute = () => {
			const hash = window.location.hash;
			// Support format: #/list/:id
			const match = hash.match(/^#\/list\/(.+)$/);
			if (match) {
				setSelectedListId(match[1]);
			} else {
				setSelectedListId(null);
			}
		};

		// Read on mount
		readHashRoute();

		// Listen for hash changes (back/forward navigation)
		window.addEventListener('hashchange', readHashRoute);

		return () => {
			window.removeEventListener('hashchange', readHashRoute);
		};
	}, []);

	// Update URL hash when selectedListId changes
	const handleSelectList = (list: ShoppingList) => {
		const listId = list.getListId();
		window.location.hash = `/list/${listId}`;
		setSelectedListId(listId);
	};

	const handleBack = () => {
		window.location.hash = '';
		setSelectedListId(null);
	};

	if (selectedListId) {
		return (
			<ShoppingListDetail
				listId={selectedListId}
				onBack={handleBack}
			/>
		);
	}

	return (
		<ShoppingListHome
			onSelect={handleSelectList}
			onDelete={async (list: ShoppingList) => {
				await db.deleteList(list.getListId());
			}}
		/>
	);
}
