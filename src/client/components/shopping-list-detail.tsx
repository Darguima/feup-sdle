"use client";

import { ArrowLeft, Plus } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { ShoppingListItem } from "@/components/shopping-list-item";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { type ShoppingList, store } from "@/lib/store";

interface ShoppingListDetailProps {
	listId: string;
	onBack: () => void;
}

export function ShoppingListDetail({
	listId,
	onBack,
}: ShoppingListDetailProps) {
	const [list, setList] = useState<ShoppingList | null>(null);
	const [itemName, setItemName] = useState("");
	const [itemQuantity, setItemQuantity] = useState("1");

	const refreshList = useCallback(() => {
		const updated = store.getList(listId);
		if (updated) {
			setList({ ...updated });
		}
	}, [listId]);

	useEffect(() => {
		refreshList();
	}, [refreshList]);

	const handleAddItem = (e: React.FormEvent) => {
		e.preventDefault();
		if (!list || !itemName.trim() || !itemQuantity) return;

		const quantity = Number.parseInt(itemQuantity, 10);
		if (quantity <= 0) return;

		store.addItem(list.id, itemName, quantity);
		setItemName("");
		setItemQuantity("1");
		refreshList();
	};

	const handleAcquireItem = (itemId: string, quantity: number) => {
		if (!list) return;
		store.acquireItems(list.id, itemId, quantity);
		refreshList();
	};

	const handleUpdateTotalQuantity = (itemId: string, change: number) => {
		if (!list) return;
		const item = list.items.find((i) => i.id === itemId);
		if (!item) return;

		const newTotal = item.totalQuantity + change;
		if (newTotal < item.acquiredQuantity || newTotal < 1) return;

		store.updateItemQuantity(list.id, itemId, newTotal, item.acquiredQuantity);
		refreshList();
	};

	const handleDeleteItem = (itemId: string) => {
		if (!list) return;
		store.deleteItem(list.id, itemId);
		refreshList();
	};

	if (!list) {
		return <div>List not found</div>;
	}

	const totalItems = list.items.reduce(
		(sum, item) => sum + item.totalQuantity,
		0,
	);
	const acquiredItems = list.items.reduce(
		(sum, item) => sum + item.acquiredQuantity,
		0,
	);
	const progress = totalItems > 0 ? (acquiredItems / totalItems) * 100 : 0;

	return (
		<main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
			<div className="max-w-3xl mx-auto">
				<Button variant="ghost" onClick={onBack} className="mb-4">
					<ArrowLeft className="w-4 h-4 mr-2" />
					Back to Lists
				</Button>

				<Card className="mb-6">
					<CardHeader>
						<CardTitle className="text-2xl">{list.name}</CardTitle>
						<CardDescription>
							{acquiredItems} of {totalItems} items acquired (
							{Math.round(progress)}%)
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
							<div
								className="bg-indigo-600 h-full transition-all duration-300"
								style={{ width: `${progress}%` }}
							/>
						</div>
					</CardContent>
				</Card>

				<Card className="mb-6">
					<CardHeader>
						<CardTitle>Add Item</CardTitle>
						<CardDescription>
							Add a new item to your shopping list
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleAddItem} className="flex gap-2">
							<Input
								type="text"
								placeholder="Item name"
								value={itemName}
								onChange={(e) => setItemName(e.target.value)}
								className="flex-1"
							/>
							<Input
								type="number"
								placeholder="Qty"
								value={itemQuantity}
								onChange={(e) => setItemQuantity(e.target.value)}
								min="1"
								className="w-20"
							/>
							<Button
								type="submit"
								disabled={!itemName.trim() || !itemQuantity}
							>
								<Plus className="w-4 h-4 mr-2" />
								Add
							</Button>
						</form>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Items</CardTitle>
						<CardDescription>
							{list.items.length === 0
								? "No items yet"
								: `${list.items.length} ${list.items.length === 1 ? "item" : "items"} in your list`}
						</CardDescription>
					</CardHeader>
					<CardContent>
						{list.items.length === 0 ? (
							<p className="text-center text-muted-foreground py-8">
								Add your first item to get started!
							</p>
						) : (
							<div className="space-y-3">
								{list.items.map((item) => (
									<ShoppingListItem
										key={item.id}
										item={item}
										onUpdateTotalQuantity={handleUpdateTotalQuantity}
										onAcquireItem={handleAcquireItem}
										onDelete={handleDeleteItem}
									/>
								))}
							</div>
						)}
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
