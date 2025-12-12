import { ShoppingItem, ShoppingList } from "@/types";
import ProtocolListener from "./protocol-listener";
import ProtocolRequest from "./protocol-entity";

export default class DefaultProtocolListener implements ProtocolListener {
    defaultOn(entity: ProtocolRequest): void { }

    onShoppingList(shoppingList: ShoppingList): void {
        this.defaultOn(shoppingList);
    }
}