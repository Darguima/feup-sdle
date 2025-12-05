import ShoppingList from "@/types/shopping-list";
import ProtocolListener from "./protocol-listener";
import ShoppingItem from "@/types/shopping-item";

class ShoppingListener implements ProtocolListener {
    onShoppingList(shoppingList: ShoppingList): void {
        console.log("Received shopping list:", shoppingList);
    }

    onShoppingItem(shoppingItem: ShoppingItem): void {
        console.log("Received shopping item:", shoppingItem);
    }
}