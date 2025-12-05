import { ShoppingItem, ShoppingList } from "@/types";

export default interface ProtocolListener {
    onShoppingList(shoppingList: ShoppingList): void;
    onShoppingItem(shoppingItem: ShoppingItem): void;
}