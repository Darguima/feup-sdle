export interface ShoppingItem {
    id: string;
    name: string;
    totalQuantity: number;
    acquiredQuantity: number;
}

export interface ShoppingList {
    id: string;
    name: string;
    items: ShoppingItem[];
    createdAt: Date;
}