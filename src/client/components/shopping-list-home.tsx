"use client";

import { Plus, ShoppingCart } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingList } from "@/types";
import { db } from "@/lib/storage/db";
import { useProtocolSocket } from "./provider/protocol-socket";

interface ShoppingListHomeProps {
	onSelect: (list: ShoppingList) => void;
}

export function ShoppingListHome({ onSelect }: ShoppingListHomeProps) {
	const [lists, setLists] = useState<ShoppingList[]>([]);
	const [listName, setListName] = useState("");
	const socket = useProtocolSocket();

	useEffect(() => {
		const fetchLists = async () => {
			setLists(await db.getAllLists());
		};
		fetchLists();
	}, []);

	const handleCreateList = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!listName.trim()) return;

		const newList = await db.createList(listName);
		socket.send(newList);

		setLists(await db.getAllLists());
		setListName("");
		onSelect(newList);
	};

	return (
		<div>
			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Create New List</CardTitle>
					<CardDescription>
						Start a new shopping list to organize your items
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleCreateList} className="flex gap-2">
						<Input
							type="text"
							placeholder="Enter list name (e.g., Weekly Groceries)"
							value={listName}
							onChange={(e) => setListName(e.target.value)}
							className="flex-1"
						/>
						<Button type="submit" disabled={!listName.trim()}>
							<Plus className="w-4 h-4 mr-2" />
							Create
						</Button>
					</form>
				</CardContent>
			</Card>

			{lists.length > 0 && (
				<Card>
					<CardHeader>
						<CardTitle>Your Lists</CardTitle>
						<CardDescription>
							Click on a list to view and manage items
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							{lists.map((list) =>
								<button
									type="button"
									key={list.getListId()}
									onClick={() => onSelect(list)}
									className="w-full text-left p-4 rounded-lg border border-border hover:bg-accent transition-colors"
								>
									<div className="flex items-center justify-between">
										<div>
											<h3 className="font-semibold text-foreground">
												{list.getName()}
											</h3>
											<p className="text-sm text-muted-foreground">
												{list.getItems().length}{" "}
												{list.getItems().length === 1 ? "item" : "items"}
											</p>
										</div>
										<ShoppingCart className="w-5 h-5 text-muted-foreground" />
									</div>
								</button>
							)}
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
