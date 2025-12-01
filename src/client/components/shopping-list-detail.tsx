"use client";

import { ArrowLeft, Frown, Plus } from "lucide-react";
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
import { useWebSocket } from "./provider/websocket";
import { ShoppingListDetailSkeleton } from "./shopping-list-detail-skeleton";

interface ShoppingListDetailProps {
	listId: string;
	onBack: () => void;
}

export function ShoppingListDetail({
	listId,
	onBack,
}: ShoppingListDetailProps) {
	const [list, setList] = useState<ShoppingList | null>(null);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);
	const [itemName, setItemName] = useState("");
	const [itemQuantity, setItemQuantity] = useState("1");
	const webSocket = useWebSocket();

	const refreshList = useCallback(async () => {
		const updated = await store.getList(listId);
		if (updated) {
			setList({ ...updated });
		} else {
			setNotFound(true);
		}
		setLoading(false);
	}, [listId]);

	useEffect(() => {
		const doRefresh = async () => {
			await refreshList();
		};
		doRefresh();
	}, [refreshList]);

	const handleAddItem = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!list || !itemName.trim() || !itemQuantity) return;

		const quantity = Number.parseInt(itemQuantity, 10);
		if (quantity <= 0) return;

		await store.addItem(list.id, itemName, quantity);
		setItemName("");
		setItemQuantity("1");
		await refreshList();

		// TODO(Process-ing): Remove this
		webSocket.send(JSON.stringify({
			type: "new_item",
			listId: list.id,
			item: {
				name: itemName,
				quantity: quantity,
			},
		}));
	};

	const handleAcquireItem = async (itemId: string, quantity: number) => {
		if (!list) return;
		await store.incrementItem(list.id, itemId, quantity);
		await refreshList();
	};

	const handleUpdateTotalQuantity = async (itemId: string, change: number) => {
		if (!list) return;
		const item = list.items.find((i) => i.id === itemId);
		if (!item) return;

		const newTotal = item.totalQuantity + change;
		if (newTotal < item.acquiredQuantity || newTotal < 1) return;

		await store.updateItem(list.id, itemId, newTotal, item.acquiredQuantity);
		await refreshList();
	};

	const handleDeleteItem = async (itemId: string) => {
		if (!list) return;
		await store.deleteItem(list.id, itemId);
		await refreshList();
	};

	if (loading) {
		return <ShoppingListDetailSkeleton />;
	}

	if (notFound) {
		return (
			<div className="text-center">
				<Frown className="mx-auto mb-4 h-24 w-24 text-gray-400 dark:text-gray-500" />
				<h1 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">
					List Not Found
				</h1>
				<p className="mb-6 text-gray-600 dark:text-gray-300">
					Sorry, we couldn't find the shopping list you're looking for.
				</p>
				<Button onClick={onBack}>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Go Back to Lists
				</Button>
			</div>
		);
	}

	if (!list) {
		// This should ideally not be reached if loading and notFound are handled correctly,
		// but as a fallback:
		return <div>Something went wrong.</div>;
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
		<div>
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
						<Button type="submit" disabled={!itemName.trim() || !itemQuantity}>
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
							: `${list.items.length} ${
									list.items.length === 1 ? "item" : "items"
								} in your list`}
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
	);
}
