import { ShoppingItem as ShoppingItemProto } from "@/lib/proto/global";

export default class ShoppingItem {
    id: string;
    name: string;
    totalQuantity: number;
    acquiredQuantity: number;

    constructor(id: string, name: string, totalQuantity: number, acquiredQuantity: number) {
        this.id = id;
        this.name = name;
        this.totalQuantity = totalQuantity;
        this.acquiredQuantity = acquiredQuantity;
    }

    toProto(): ShoppingItemProto {
        return new ShoppingItemProto({
            totalQuantity: this.totalQuantity,
            acquiredQuantity: this.acquiredQuantity,
        });
    }
}