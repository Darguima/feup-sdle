import { ShoppingList } from "@/types";
import { ShoppingCart } from "lucide-react";

interface ShoppingListCardProps {
  list: ShoppingList;
  onSelect: (list: ShoppingList) => void;
}

export function ShoppingListCard({ list, onSelect }: ShoppingListCardProps) {
  return <>
    <button
      type="button"
      key={list.getListId()}
      onClick={() => onSelect(list)}
      className="w-full text-left p-4 rounded-lg border border-border hover:bg-accent transition-colors"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">
            {list.getName()}
          </h3>
          <p className="text-sm text-muted-foreground">
            {list.getItems().length}{" "}
            {list.getItems().length === 1 ? "item" : "items"}
          </p>
        </div>
        <ShoppingCart className="w-5 h-5 text-muted-foreground" />
      </div>
    </button>
  </>
}