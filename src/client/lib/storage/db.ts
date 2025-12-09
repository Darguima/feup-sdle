import { type DBSchema, type IDBPDatabase, openDB } from "idb";
import { ShoppingList } from "@/types";
import { ShoppingList as ShoppingListProto } from "@/lib/proto/global";

const DB_NAME = "shopping-lists-db";
const DB_VERSION = 4;
const CLIENT_ID = "client-id";
const LIST_STORE_NAME = "shopping-lists";

interface ShoppingListDB extends DBSchema {
	[LIST_STORE_NAME]: {
		key: string;
		value: Uint8Array;
	};
	[CLIENT_ID]: {
		key: string;
		value: { id: string };
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
					db.createObjectStore(LIST_STORE_NAME);
				}
				if (!db.objectStoreNames.contains(CLIENT_ID)) {
					db.createObjectStore(CLIENT_ID);
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

	public async getClientId(): Promise<string> {
		const db = await this.getDB();
		let clientId = await db.get(CLIENT_ID, "id");
		if (!clientId) {
			const newId = crypto.randomUUID();
			await db.put(CLIENT_ID, { id: newId }, "id");
			clientId = { id: newId };
		}
		return clientId.id;
	}

	async getAllLists(): Promise<ShoppingList[]> {
		const db = await this.getDB();
		const lists = (await db.getAll(LIST_STORE_NAME)).map((data) => {
			const list = ShoppingList.fromProto(ShoppingListProto.decode(data));
			return list;
		});

		return lists;
	}

	async getList(id: string): Promise<ShoppingList | undefined> {
		const db = await this.getDB();
		const data = await db.get(LIST_STORE_NAME, id);

		if (!data) {
			return undefined;
		}

		const shoppingList = ShoppingList.fromProto(ShoppingListProto.decode(data));

		return shoppingList;
	}

	async createList(name: string): Promise<ShoppingList> {
		const db = await this.getDB();
		const clientId = await this.getClientId();

		const list = new ShoppingList(clientId, crypto.randomUUID(), name);
		const data = ShoppingListProto.encode(list.toProto() as ShoppingListProto).finish();

		await db.add(LIST_STORE_NAME, data, list.getListId());
		return list;
	}

	async updateList(list: ShoppingList): Promise<void> {
		const db = await this.getDB();

		const data = ShoppingListProto.encode(list.toProto() as ShoppingListProto).finish();
		await db.put(LIST_STORE_NAME, data, list.getListId());
	}

	async deleteList(id: string): Promise<void> {
		const db = await this.getDB();
		await db.delete(LIST_STORE_NAME, id);
	}
}

export const db = new DB();
