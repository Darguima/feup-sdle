// Mock store for shopping lists and items
export interface ShoppingItem {
	id: string;
	name: string;
	totalQuantity: number;
	acquiredQuantity: number;
}

export interface ShoppingList {
	id: string;
	name: string;
	items: ShoppingItem[];
	createdAt: Date;
}

// In-memory store (mock implementation)
const lists = new Map<string, ShoppingList>();

export const store = {
	createList: (name: string): ShoppingList => {
		const id = Math.random().toString(36).substring(2, 9);
		const list: ShoppingList = {
			id,
			name,
			items: [],
			createdAt: new Date(),
		};
		lists.set(id, list);
		return list;
	},

	getList: (id: string): ShoppingList | undefined => {
		return lists.get(id);
	},

	getAllLists: (): ShoppingList[] => {
		return Array.from(lists.values());
	},

	addItem: (
		listId: string,
		name: string,
		quantity: number,
	): ShoppingItem | null => {
		const list = lists.get(listId);
		if (!list) return null;

		const item: ShoppingItem = {
			id: Math.random().toString(36).substring(2, 9),
			name,
			totalQuantity: quantity,
			acquiredQuantity: 0,
		};

		list.items.push(item);
		return item;
	},

	updateItemQuantity: (
		listId: string,
		itemId: string,
		totalQuantity: number,
		acquiredQuantity: number,
	): boolean => {
		const list = lists.get(listId);
		if (!list) return false;

		const item = list.items.find((i) => i.id === itemId);
		if (!item) return false;

		item.totalQuantity = totalQuantity;
		item.acquiredQuantity = Math.min(acquiredQuantity, totalQuantity);
		return true;
	},

	acquireItems: (listId: string, itemId: string, quantity: number): boolean => {
		const list = lists.get(listId);
		if (!list) return false;

		const item = list.items.find((i) => i.id === itemId);
		if (!item) return false;

		item.acquiredQuantity = Math.min(
			item.acquiredQuantity + quantity,
			item.totalQuantity,
		);
		return true;
	},

	deleteItem: (listId: string, itemId: string): boolean => {
		const list = lists.get(listId);
		if (!list) return false;

		const index = list.items.findIndex((i) => i.id === itemId);
		if (index === -1) return false;

		list.items.splice(index, 1);
		return true;
	},
};
