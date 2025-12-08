import DotContext from "../generic/dot-context";
import ORMap from "../generic/ormap";
import ShoppingItem from "./shopping-item";
import {
    ShoppingList as ShoppingListProto,
    ShoppingItem as ShoppingItemProto,
    DotContext as DotContextProto,
} from "@/lib/proto/global";

export default class ShoppingList {
    private replicaId: string;
    private listId: string;
    private name: string;
    private items: ORMap<string, ShoppingItem>
    private dotContext: DotContext;

    constructor(replicaId: string, listId: string, name: string) {
        this.replicaId = replicaId;
        this.listId = listId;
        this.name = name;
        this.dotContext = new DotContext();

        this.items = new ORMap<string, ShoppingItem>(
            this.replicaId,
            (replicaId: string) => new ShoppingItem(replicaId, "", ""),
            this.dotContext
        );
    }

    public getReplicaId(): string {
        return this.replicaId;
    }

    public getListId(): string {
        return this.listId;
    }

    public getName(): string {
        return this.name;
    }

    public getContext(): DotContext {
        return this.dotContext;
    }

    public setContext(context: DotContext): void {
        this.dotContext = context;
        this.items.setContext(context);
    }

    public getItems(): ShoppingItem[] {
        return Array.from(this.items.keys())
            .map((itemId: string) => this.items.get(itemId).clone())
            .filter((item: ShoppingItem) => !item.isNull());
    }

    public getItem(itemId: string): ShoppingItem | undefined {
        const item = this.items.get(itemId);
        if (item.isNull()) {
            return undefined;
        }
        return item.clone();
    }

    public putItem(itemId: string, name: string, quantity: number, acquired: number): ShoppingList {
        const delta = new ShoppingList(this.replicaId, this.listId, this.name);

        const itemsDelta = this.items.apply(itemId, (item: ShoppingItem) => {
            item.setItemId(itemId);
            item.setName(name);

            const itemDelta = item.incQuantity(quantity);
            itemDelta.join(item.incAcquired(acquired));

            return itemDelta;
        });

        delta.items = itemsDelta;
        delta.setContext(itemsDelta.getContext());

        return delta;
    }

    public removeItem(itemId: string): ShoppingList {
        const delta = new ShoppingList(this.replicaId, this.listId, this.name);

        const itemsDelta = this.items.remove(itemId);
        delta.items = itemsDelta;
        delta.setContext(itemsDelta.getContext());

        return delta;
    }

    public join(other: ShoppingList): void {
        this.items.join(other.items);
        this.dotContext.join(other.getContext());
    }

    public clone(): ShoppingList {
        const clone = new ShoppingList(this.replicaId, this.listId, this.name);
        clone.dotContext = this.dotContext.clone();

        clone.items = this.items.clone();
        clone.items.setContext(clone.dotContext);

        return clone;
    }

    public toProto(): ShoppingListProto {
        const itemProtos: { [key: string]: ShoppingItemProto } = {};

        for (const itemId of this.items.keys()) {
            const item = this.items.get(itemId);
            itemProtos[itemId] = item.toProto();
        }

        return ShoppingListProto.create({
            replicaId: this.replicaId,
            id: this.listId,
            name: this.name,
            items: itemProtos,
            dotContext: this.dotContext.toProto(),
        });
    }

    public static fromProto(proto: ShoppingListProto): ShoppingList {
        const ctx = DotContext.fromProto(proto.dotContext as DotContextProto);

        const itemMap = new Map<string, ShoppingItem>();
        for (const itemId in proto.items) {
            const itemProto = proto.items[itemId] as ShoppingItemProto;
            const item = ShoppingItem.fromProto(itemProto, proto.replicaId, itemId, ctx);
            itemMap.set(itemId, item);
        }

        const items = new ORMap<string, ShoppingItem>(
            proto.replicaId,
            (replicaId: string) => new ShoppingItem(replicaId, "", ""),
            ctx,
            itemMap
        );

        const shoppingList = new ShoppingList(proto.replicaId, proto.id, proto.name);
        shoppingList.setContext(ctx);
        shoppingList.items = items;

        return shoppingList;
    }
}