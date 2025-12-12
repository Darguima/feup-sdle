import { ShoppingList as ShoppingListProto, ShoppingItem as ShoppingItemProto, Entity, IEntity } from "@/lib/proto/global";
import ShoppingItem from "./shopping-item";
import ProtocolRequest from "@/lib/protocol/protocol-entity";

export default class ShoppingList implements ProtocolRequest {
    id: string;
    name: string;
    items: Map<string, ShoppingItem>;

    constructor(id: string, name: string, items: Map<string, ShoppingItem> = new Map()) {
        this.id = id;
        this.name = name;
        this.items = items;
    }

    toProto(): IEntity {
        const protoItems: { [key: string]: ShoppingItemProto } = {};

        this.items.forEach((item, key) => {
            protoItems[key] = item.toProto();
        });

        const proto = Entity.create({
            shoppingList: new ShoppingListProto({
                id: this.id,
                name: this.name,
                items: protoItems,
            })
        });

        return proto
    }

    addItem(name: string, quantity: number): ShoppingItem {
        const item = new ShoppingItem(crypto.randomUUID(), name, quantity, 0);
        this.items.set(item.id, item);
        return item;
    }

    removeItem(itemId: string): boolean {
        return this.items.delete(itemId);
    }

    getItem(itemId: string): ShoppingItem | undefined {
        return this.items.get(itemId);
    }

    getAllItems(): ShoppingItem[] {
        return Array.from(this.items.values());
    }
}