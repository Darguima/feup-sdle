import CCounter from "../generic/ccounter";
import DotContext from "../generic/dot-context";
import { ShoppingItem as ShoppingItemProto, CCounter as CCounterProto } from "@/lib/proto/global";

export default class ShoppingItem {
    private replicaId: string;
    private itemId: string;
    private name: string;
    private quantity: CCounter;
    private acquired: CCounter;
    private dotContext: DotContext;

    constructor(replicaId: string, itemId: string, name: string) {
        this.replicaId = replicaId;
        this.itemId = itemId;
        this.name = name;
        this.quantity = new CCounter(replicaId);
        this.acquired = new CCounter(replicaId);
        this.dotContext = new DotContext();

        this.quantity.setContext(this.dotContext);
        this.acquired.setContext(this.dotContext);
    }

    public getReplicaId(): string {
        return this.replicaId;
    }

    public getItemId(): string {
        return this.itemId;
    }

    public setItemId(itemId: string): void {
        this.itemId = itemId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getContext(): DotContext {
        return this.dotContext;
    }

    public setContext(context: DotContext): void {
        this.dotContext = context;
        this.quantity.setContext(context);
        this.acquired.setContext(context);
    }

    public getQuantity(): number {
        return this.quantity.read();
    }

    public incQuantity(amount: number): ShoppingItem {
        const delta = new ShoppingItem(this.replicaId, this.itemId, this.name);

        // Prevent negative quantity values
        amount = Math.max(-this.quantity.read(), amount);

        const quantityDelta = this.quantity.inc(amount);
        delta.quantity = quantityDelta;
        delta.setContext(quantityDelta.getContext());

        return delta;
    }

    public getAcquired(): number {
        return this.acquired.read();
    }

    public incAcquired(amount: number): ShoppingItem {
        const delta = new ShoppingItem(this.replicaId, this.itemId, this.name);

        const currQuantity = this.quantity.read();
        const currAcquired = this.acquired.read();

        // Prevent negative acquired values
        amount = Math.max(-currAcquired, amount);

        // Prevent acquired from exceeding quantity
        amount = Math.min(currQuantity - currAcquired, amount);

        const acquiredDelta = this.acquired.inc(amount);
        delta.acquired = acquiredDelta;
        delta.setContext(acquiredDelta.getContext());

        return delta;
    }

    public reset(): ShoppingItem {
        const delta = new ShoppingItem(this.replicaId, this.itemId, this.name);

        const quantityDelta = this.quantity.reset();
        delta.quantity = quantityDelta;

        const acquiredDelta = this.acquired.reset();
        delta.acquired = acquiredDelta;

        delta.getContext().join(quantityDelta.getContext());
        delta.getContext().join(acquiredDelta.getContext());

        return delta;
    }

    public isNull(): boolean {
        return this.quantity.read() === 0;  // Quantity must normally be positive
    }

    public join(other: ShoppingItem): void {
        const originalCtx = this.dotContext.clone();

        // Merge itemID and name if they are empty
        // This is needed when empty items are created automatically by ORMap
        if (this.itemId === "") {
            this.itemId = other.itemId;
        }
        if (this.name === "") {
            this.name = other.name;
        }

        this.quantity.join(other.quantity);
        this.dotContext.copy(originalCtx);

        this.acquired.join(other.acquired);
        // No need to restore context here

        this.dotContext.join(other.getContext());
    }

    public clone(): ShoppingItem {
        const clone = new ShoppingItem(this.replicaId, this.itemId, this.name);

        clone.dotContext = this.dotContext.clone();
        clone.quantity = this.quantity.clone();
        clone.acquired = this.acquired.clone();

        clone.quantity.setContext(clone.dotContext);
        clone.acquired.setContext(clone.dotContext);

        return clone;
    }

    public toProto(): ShoppingItemProto {
        return ShoppingItemProto.create({
            name: this.name,
            quantity: this.quantity.toProto(),
            acquired: this.acquired.toProto(),
        });
    }

    public static fromProto(proto: ShoppingItemProto, replicaId: string, itemId: string, ctx: DotContext): ShoppingItem {
        const item = new ShoppingItem(replicaId, itemId, proto.name);

        item.setContext(ctx);
        item.quantity = CCounter.fromProto(proto.quantity as CCounterProto, replicaId, ctx);
        item.acquired = CCounter.fromProto(proto.acquired as CCounterProto, replicaId, ctx);

        return item;
    }
}