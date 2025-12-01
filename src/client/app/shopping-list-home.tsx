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
import { store } from "@/lib/store";
import { ShoppingList } from "@/types";

interface ShoppingListHomeProps {
	onSelect: (list: ShoppingList) => void;
}

export function ShoppingListHome({ onSelect }: ShoppingListHomeProps) {
	const [lists, setLists] = useState<ShoppingList[]>([]);
	const [listName, setListName] = useState("");

	useEffect(() => {
		const fetchLists = async () => {
			await new Promise((resolve) => setTimeout(resolve, 50)); // give time for store to init
			setLists(store.getAllLists());
		};
		fetchLists();
	}, []);

	const handleCreateList = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!listName.trim()) return;

		const newList = await store.createList(listName);
		setLists(store.getAllLists());
		setListName("");
		onSelect(newList);
	};

	return (
		<main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-8">
					<div className="flex items-center justify-center gap-3 mb-4">
						<ShoppingCart className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
						<h1 className="text-4xl font-bold text-gray-900 dark:text-white">
							Shopping Lists
						</h1>
					</div>
					<p className="text-gray-600 dark:text-gray-300">
						Create and manage your shopping lists with ease
					</p>
				</div>

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
								{lists.map((list) => (
									<button
										type="button"
										key={list.id}
										onClick={() => onSelect(list)}
										className="w-full text-left p-4 rounded-lg border border-border hover:bg-accent transition-colors"
									>
										<div className="flex items-center justify-between">
											<div>
												<h3 className="font-semibold text-foreground">
													{list.name}
												</h3>
												<p className="text-sm text-muted-foreground">
													{list.items.length}{" "}
													{list.items.length === 1 ? "item" : "items"}
												</p>
											</div>
											<ShoppingCart className="w-5 h-5 text-muted-foreground" />
										</div>
									</button>
								))}
							</div>
						</CardContent>
					</Card>
				)}
			</div>
		</main>
	);
}
