import { ShoppingItem, ShoppingList } from "@/types";
import ProtocolListener from "./protocol-listener";
import ProtocolEntity from "./protocol-entity";

export default class DefaultProtocolListener implements ProtocolListener {
    defaultOn(entity: ProtocolEntity): void {}

    onShoppingList(shoppingList: ShoppingList): void {
        this.defaultOn(shoppingList);
    }
}