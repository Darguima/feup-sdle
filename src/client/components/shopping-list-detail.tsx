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
import { useProtocolSocket } from "./provider/protocol-socket";
import { ShoppingListDetailSkeleton } from "./shopping-list-detail-skeleton";
import { ShoppingList } from "@/types";
import { db } from "@/lib/storage/db";
import GetShoppingListRequest from "@/lib/protocol/get-shopping-list-request";
import { ServerResponse } from "@/lib/proto/client";

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
	const socket = useProtocolSocket();

	const refreshList = useCallback(async () => {
		const dbList = await db.getList(listId);

		if (dbList) {
			setList(dbList);
		} else {
			setNotFound(true);
		}

		setLoading(false);
	}, [listId]);

	useEffect(() => {
		refreshList();
	}, [refreshList]);


	const handleReceivedList = useCallback(async (listReceived: ShoppingList) => {
		if (listReceived.getListId() !== listId) return;

		let oldList = await db.getList(listId);
		if (!oldList) {  // Create an empty list for merging
			oldList = new ShoppingList(await db.getClientId(), listId, listReceived.getName());
		}
		oldList.join(listReceived);

		await db.updateList(oldList);
		await refreshList();
	}, [listId, refreshList]);

	const handleServerResponse = useCallback(async (serverResponse: ServerResponse) => {
		switch (serverResponse.responseType) {
			case "shoppingList":
				const list = ShoppingList.fromProto(serverResponse.shoppingList!);
				await handleReceivedList(list);
				break;
		}

		return true;
	}, [listId, refreshList]);


	const updateList = useCallback(async (updatedList: ShoppingList, delta: ShoppingList) => {
		await db.updateList(updatedList);
		socket.send(delta, handleServerResponse);
		await refreshList();
	}, [listId]);

	useEffect(() => {
			socket.send(new GetShoppingListRequest(listId), handleServerResponse);
	}, [socket, listId, handleServerResponse]);


	const handleAddItem = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!list || !itemName.trim() || !itemQuantity) return;

		const quantity = Number.parseInt(itemQuantity, 10);
		if (quantity <= 0) return;

		const itemId = crypto.randomUUID();
		const delta = list.putItem(itemId, quantity, 0, itemName.trim());

		setItemName("");
		setItemQuantity("1");

		updateList(list, delta);
	};

	const handleAcquireItem = async (itemId: string, amount: number) => {
		if (!list) return;

		const delta = list.putItem(itemId, 0, amount);
		updateList(list, delta);
	};

	const handleUpdateTotalQuantity = async (itemId: string, amount: number) => {
		if (!list) return;

		const delta = list.putItem(itemId, amount, 0);

		updateList(list, delta);
	};

	const handleDeleteItem = async (itemId: string) => {
		if (!list) return;

		const delta = list.removeItem(itemId);

		updateList(list, delta);
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

	const totalItems = list.getItems().reduce(
		(sum, item) => sum + item.getQuantity(),
		0,
	);
	const acquiredItems = list.getItems().reduce(
		(sum, item) => sum + item.getAcquired(),
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
					<CardTitle className="text-2xl">{list.getName()}</CardTitle>
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
						{list.getItems().length === 0
							? "No items yet"
							: `${list.getItems().length} ${list.getItems().length === 1 ? "item" : "items"
							} in your list`}
					</CardDescription>
				</CardHeader>
				<CardContent>
					{list.getItems().length === 0 ? (
						<p className="text-center text-muted-foreground py-8">
							Add your first item to get started!
						</p>
					) : (
						<div className="space-y-3">
							{list.getItems()
								.sort((a, b) => a.getName().localeCompare(b.getName()))
								.map((item) => (
									<ShoppingListItem
										key={item.getItemId()}
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
