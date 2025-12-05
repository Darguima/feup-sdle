import { ShoppingItem, ShoppingList } from "@/types";
import ProtocolListener from "./protocol-listener";

export default class DefaultProtocolListener implements ProtocolListener {
    defaultOn(entity: ProtocolEntity): void {}

    onShoppingList(shoppingList: ShoppingList): void {
        this.defaultOn(shoppingList);
    }

    onShoppingItem(shoppingItem: ShoppingItem): void {
        this.defaultOn(shoppingItem);
    }
}