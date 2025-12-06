import { type DBSchema, type IDBPDatabase, openDB } from "idb";
import { ShoppingItem, ShoppingList } from "@/types";

const DB_NAME = "shopping-lists-db";
const DB_VERSION = 3;
const LIST_STORE_NAME = "shopping-lists";

interface DBItem {
	name: string;
	totalQuantity: number;
	acquiredQuantity: number;
}

interface DBList {
	id: string;
	name: string;
	items: Map<string, DBItem>;
}

interface ShoppingListDB extends DBSchema {
	[LIST_STORE_NAME]: {
		key: string;
		value: DBList;
	};
}

class DB {
	private dbPromise: Promise<IDBPDatabase<ShoppingListDB>> | null = null;

	constructor() {
		if (typeof window !== "undefined") {
			this.dbPromise = this.initDB();
		}
	}

	private async initDB(): Promise<IDBPDatabase<ShoppingListDB>> {
		return openDB<ShoppingListDB>(DB_NAME, DB_VERSION, {
			upgrade(db) {
				if (!db.objectStoreNames.contains(LIST_STORE_NAME)) {
					db.createObjectStore(LIST_STORE_NAME, { keyPath: "id" });
				}
			},
		});
	}

	private async getDB(): Promise<IDBPDatabase<ShoppingListDB>> {
		if (!this.dbPromise) {
			throw new Error("Database not initialized");
		}
		return this.dbPromise;
	}

	async getAllLists(): Promise<ShoppingList[]> {
		const db = await this.getDB();
		const lists = await db.getAll(LIST_STORE_NAME);

		return lists.map(
			(list) => new ShoppingList(
				list.id,
				list.name,
				this.parseItems(list.items)
			)
		);
	}

	async getList(id: string): Promise<ShoppingList | undefined> {
		const db = await this.getDB();
		const list = await db.get(LIST_STORE_NAME, id);
		if (!list) return undefined;

		return new ShoppingList(
			list.id,
			list.name,
			this.parseItems(list.items)
		);
	}

	private parseItems(items: Map<string, DBItem>): Map<string, ShoppingItem> {
		const parsedItems = new Map<string, ShoppingItem>();

		items.forEach((item, key) => {
			parsedItems.set(key, new ShoppingItem(key, item.name, item.totalQuantity, item.acquiredQuantity));
		});

		return parsedItems;
	}

	async createList(name: string): Promise<ShoppingList> {
		const db = await this.getDB();

		const list = new ShoppingList(
			crypto.randomUUID(),
			name,
			new Map<string, ShoppingItem>()
		);

		await db.add(LIST_STORE_NAME, list);
		return list;
	}

	async updateList(list: ShoppingList): Promise<void> {
		const db = await this.getDB();
		await db.put(LIST_STORE_NAME, list);
	}

	async deleteList(id: string): Promise<void> {
		const db = await this.getDB();
		await db.delete(LIST_STORE_NAME, id);
	}
}

export const db = new DB();
