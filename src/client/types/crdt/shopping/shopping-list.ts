import { ClientRequest, StringMVReg } from "@/lib/proto/client";
import DotContext from "../generic/dot-context";
import ORMap from "../generic/ormap";
import ShoppingItem from "./shopping-item";
import {
    ShoppingList as ShoppingListProto,
    ShoppingItem as ShoppingItemProto,
    DotContext as DotContextProto,
} from "@/lib/proto/global";
import ProtocolRequest from "@/lib/protocol/protocol-entity";
import MVReg from "../generic/mvreg";

export default class ShoppingList implements ProtocolRequest {
    private replicaId: string;
    private listId: string;
    private name: MVReg<string>;
    private items: ORMap<string, ShoppingItem>
    private dotContext: DotContext;

    constructor(replicaId: string, listId: string) {
        this.replicaId = replicaId;
        this.listId = listId;
        this.dotContext = new DotContext();

        this.name = new MVReg<string>(replicaId);
        this.name.setContext(this.dotContext);

        this.items = new ORMap<string, ShoppingItem>(
            this.replicaId,
            (replicaId: string) => new ShoppingItem(replicaId, ""),
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
        // Assume single value for name
        return this.name.read().at(0) || "";
    }

    public setName(name: string): ShoppingList {
        const delta = new ShoppingList(this.replicaId, this.listId);

        delta.name = this.name.write(name);
        delta.setContext(delta.name.getContext());

        return delta;
    }

    public getContext(): DotContext {
        return this.dotContext;
    }

    public setContext(context: DotContext): void {
        this.dotContext = context;
        this.name.setContext(context);
        this.items.setContext(context);
    }

    public getItems(): ShoppingItem[] {
        return Array.from(this.items.keys())
            .map((itemId: string) => this.items.get(itemId).clone())
            .filter((item: ShoppingItem) => !item.isDeleted());
    }

    public getItem(itemId: string): ShoppingItem | undefined {
        const item = this.items.get(itemId);
        if (item.isNull()) {
            return undefined;
        }
        return item.clone();
    }

    public putItem(itemId: string, quantityDiff: number, acquiredDiff: number, name?: string): ShoppingList {
        const delta = new ShoppingList(this.replicaId, this.listId);

        const itemsDelta = this.items.apply(itemId, (item: ShoppingItem) => {
            item.setItemId(itemId);

            const itemDelta = item.incQuantity(quantityDiff);
            itemDelta.join(item.incAcquired(acquiredDiff));
            itemDelta.join(item.restore());

            if (name !== undefined) {
                itemDelta.join(item.setName(name));
            }

            return itemDelta;
        });

        delta.items = itemsDelta;
        delta.setContext(itemsDelta.getContext());

        return delta;
    }

    public removeItem(itemId: string): ShoppingList {
        const delta = new ShoppingList(this.replicaId, this.listId);

        const itemsDelta = this.items.apply(itemId, (item: ShoppingItem) => {
            return item.delete();
        });

        delta.items = itemsDelta;
        delta.setContext(itemsDelta.getContext());

        return delta;
    }

    public join(other: ShoppingList): void {
        const originalCtx = this.dotContext.clone();

        this.name.join(other.name);
        this.dotContext.copy(originalCtx);

        this.items.join(other.items);
        // No need to restore context here

        this.dotContext.join(other.getContext());
    }

    public clone(): ShoppingList {
        const clone = new ShoppingList(this.replicaId, this.listId);

        clone.name = this.name.clone();
        clone.items = this.items.clone();
        clone.setContext(this.dotContext.clone());

        return clone;
    }

    public toProto(): ShoppingListProto {
        const nameProto = this.name.toStringProto();

        const itemProtos: { [key: string]: ShoppingItemProto } = {};

        for (const itemId of this.items.keys()) {
            const item = this.items.get(itemId);
            itemProtos[itemId] = item.toProto();
        }

        return ShoppingListProto.create({
            id: this.listId,
            name: nameProto,
            items: itemProtos,
            dotContext: this.dotContext.toProto(),
        });
    }

    public static fromProto(proto: ShoppingListProto, replicaId: string): ShoppingList {
        const ctx = DotContext.fromProto(proto.dotContext as DotContextProto);

        const itemMap = new Map<string, ShoppingItem>();
        for (const itemId in proto.items) {
            const itemProto = proto.items[itemId] as ShoppingItemProto;
            const item = ShoppingItem.fromProto(itemProto, replicaId, itemId, ctx);
            itemMap.set(itemId, item);
        }

        const items = new ORMap<string, ShoppingItem>(
            replicaId,
            (replicaId: string) => new ShoppingItem(replicaId, ""),
            ctx,
            itemMap
        );

        const shoppingList = new ShoppingList(replicaId, proto.id);
        shoppingList.setContext(ctx);

        shoppingList.name = MVReg.fromStringProto(proto.name as StringMVReg, replicaId, ctx);
        shoppingList.name.setContext(ctx);

        shoppingList.items = items;
        shoppingList.items.setContext(ctx);

        return shoppingList;
    }

    public toClientRequest(): ClientRequest {
        return ClientRequest.create({
            shoppingList: this.toProto(),
        });
    }
}