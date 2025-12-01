import { ShoppingItem, ShoppingList } from "@/types";
import { db } from "./db";

const lists = new Map<string, ShoppingList>();

const initializeStore = async () => {
	// Load all lists from the database into memory
	const allLists = await db.getAllLists();
	allLists.forEach((list) => {
		lists.set(list.id, { ...list, createdAt: new Date(list.createdAt) });
	});
};

export const store = {
	createList: async (name: string): Promise<ShoppingList> => {
		// Create a new list with a unique ID
		const id = Math.random().toString(36).substring(2, 9);
		const list: ShoppingList = {
			id,
			name,
			items: [],
			createdAt: new Date(),
		};
		await db.createList(list);
		lists.set(id, list);
		return list;
	},

	getList: async (id: string): Promise<ShoppingList | undefined> => {
		// If the list is already in memory, return it
		if (lists.has(id)) {
			return lists.get(id);
		}

		// Otherwise, fetch it from the database
		const list = await db.getList(id);
		if (list) {
			lists.set(list.id, { ...list, createdAt: new Date(list.createdAt) });
		}
		return list;
	},

	getAllLists: (): ShoppingList[] => {
		return Array.from(lists.values());
	},

	addItem: async (
		listId: string,
		name: string,
		quantity: number,
	): Promise<ShoppingItem | null> => {
		// Fetch the list
		const list = await store.getList(listId);
		if (!list) return null;

		// Create the new item
		const item: ShoppingItem = {
			id: Math.random().toString(36).substring(2, 9),
			name,
			totalQuantity: quantity,
			acquiredQuantity: 0,
		};

		// Add the item to the list and update the database
		list.items.push(item);
		await db.updateList(list);
		return item;
	},

	updateItem: async (
		listId: string,
		itemId: string,
		totalQuantity: number,
		acquiredQuantity: number,
	): Promise<boolean> => {
		// Fetch the list
		const list = await store.getList(listId);
		if (!list) return false;

		// Find the item in the list
		const item = list.items.find((i) => i.id === itemId);
		if (!item) return false;

		// Update the fields
		item.totalQuantity = totalQuantity;
		item.acquiredQuantity = Math.min(acquiredQuantity, totalQuantity);
		await db.updateList(list);
		return true;
	},

	incrementItem: async (
		listId: string,
		itemId: string,
		quantity: number,
	): Promise<boolean> => {
		// Fetch the list
		const list = await store.getList(listId);
		if (!list) return false;

		// Find the item in the list
		const item = list.items.find((i) => i.id === itemId);
		if (!item) return false;

		// Increment the acquired quantity
		item.acquiredQuantity = Math.min(
			item.acquiredQuantity + quantity,
			item.totalQuantity,
		);
		await db.updateList(list);
		return true;
	},

	deleteItem: async (listId: string, itemId: string): Promise<boolean> => {
		// Fetch the list
		const list = await store.getList(listId);
		if (!list) return false;

		// Find the index of the item to delete
		const index = list.items.findIndex((i) => i.id === itemId);
		if (index === -1) return false;

		// Remove the item from the list and update the database
		list.items.splice(index, 1);
		await db.updateList(list);
		return true;
	},

	deleteList: async (id: string): Promise<void> => {
		await db.deleteList(id);
		lists.delete(id);
	},
};

initializeStore();
