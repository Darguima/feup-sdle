import CCounter from "../generic/ccounter";
import DotContext from "../generic/dot-context";
import { ShoppingItem as ShoppingItemProto, CCounter as CCounterProto, StringMVReg, DWFlag as DWFlagProto } from "@/lib/proto/global";
import DWFlag from "../generic/dwflag";
import MVReg from "../generic/mvreg";

export default class ShoppingItem {
    private replicaId: string;
    private itemId: string;
    private name: MVReg<string>;
    private quantity: CCounter;
    private acquired: CCounter;
    private deleted: DWFlag;
    private dotContext: DotContext;

    constructor(replicaId: string, itemId: string) {
        this.replicaId = replicaId;
        this.itemId = itemId;
        this.name = new MVReg<string>(replicaId);
        this.quantity = new CCounter(replicaId);
        this.acquired = new CCounter(replicaId);
        this.deleted = new DWFlag(replicaId);
        this.dotContext = new DotContext();

        this.quantity.setContext(this.dotContext);
        this.acquired.setContext(this.dotContext);
        this.deleted.setContext(this.dotContext);
        this.name.setContext(this.dotContext);
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
        // Assume single value for name
        return this.name.read().at(0) || "";
    }

    public setName(name: string): ShoppingItem {
        const delta = new ShoppingItem(this.replicaId, this.itemId);

        delta.name = this.name.write(name);
        delta.setContext(delta.name.getContext());

        return delta;
    }

    public getContext(): DotContext {
        return this.dotContext;
    }

    public setContext(context: DotContext): void {
        this.dotContext = context;
        this.quantity.setContext(context);
        this.acquired.setContext(context);
        this.deleted.setContext(context);
        this.name.setContext(context);
    }

    public getQuantity(): number {
        return this.quantity.read();
    }

    public incQuantity(amount: number): ShoppingItem {
        const delta = new ShoppingItem(this.replicaId, this.itemId);

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
        const delta = new ShoppingItem(this.replicaId, this.itemId);

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

    public isDeleted(): boolean {
        return this.deleted.read();
    }

    public delete(): ShoppingItem {
        const delta = new ShoppingItem(this.replicaId, this.itemId);

        const deletedDelta = this.deleted.enable();
        delta.deleted = deletedDelta;
        delta.setContext(deletedDelta.getContext());

        return delta;
    }

    public restore(): ShoppingItem {
        const delta = new ShoppingItem(this.replicaId, this.itemId);

        const deletedDelta = this.deleted.disable();
        delta.deleted = deletedDelta;
        delta.setContext(deletedDelta.getContext());

        return delta;
    }

    public reset(): ShoppingItem {
        const delta = new ShoppingItem(this.replicaId, this.itemId);

        delta.name = this.name.reset();
        delta.quantity = this.quantity.reset();
        delta.acquired = this.acquired.reset();
        delta.deleted = this.deleted.enable();

        delta.getContext().join(delta.name.getContext());
        delta.getContext().join(delta.quantity.getContext());
        delta.getContext().join(delta.acquired.getContext());
        delta.getContext().join(delta.deleted.getContext());
        delta.setContext(delta.getContext());  // Set the context for new children

        return delta;
    }

    public isNull(): boolean {
        return this.name.isNull() && this.quantity.isNull() && this.acquired.isNull() && this.deleted.isNull();
    }

    public join(other: ShoppingItem): void {
        const originalCtx = this.dotContext.clone();

        // Merge itemID if it are empty
        // This is needed when empty items are created automatically by ORMap
        if (this.itemId === "") {
            this.itemId = other.itemId;
        }

        this.name.join(other.name);
        this.dotContext.copy(originalCtx);

        this.quantity.join(other.quantity);
        this.dotContext.copy(originalCtx);

        this.acquired.join(other.acquired);
        this.dotContext.copy(originalCtx);

        this.deleted.join(other.deleted);
        // No need to restore context here

        this.dotContext.join(other.getContext());
    }

    public clone(): ShoppingItem {
        const clone = new ShoppingItem(this.replicaId, this.itemId);

        clone.dotContext = this.dotContext.clone();
        clone.name = this.name.clone();
        clone.quantity = this.quantity.clone();
        clone.acquired = this.acquired.clone();
        clone.deleted = this.deleted.clone();

        clone.name.setContext(clone.dotContext);
        clone.quantity.setContext(clone.dotContext);
        clone.acquired.setContext(clone.dotContext);
        clone.deleted.setContext(clone.dotContext);

        return clone;
    }

    public toProto(): ShoppingItemProto {
        return ShoppingItemProto.create({
            name: this.name.toStringProto(),
            deleted: this.deleted.toProto(),
            quantity: this.quantity.toProto(),
            acquired: this.acquired.toProto(),
        });
    }

    public static fromProto(proto: ShoppingItemProto, replicaId: string, itemId: string, ctx: DotContext): ShoppingItem {
        const item = new ShoppingItem(replicaId, itemId);

        item.setContext(ctx);
        item.name = MVReg.fromStringProto(proto.name as StringMVReg, replicaId, ctx);
        item.quantity = CCounter.fromProto(proto.quantity as CCounterProto, replicaId, ctx);
        item.acquired = CCounter.fromProto(proto.acquired as CCounterProto, replicaId, ctx);
        item.deleted = DWFlag.fromProto(proto.deleted as DWFlagProto, replicaId);

        return item;
    }
}