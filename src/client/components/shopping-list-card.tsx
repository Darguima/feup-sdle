import { ShoppingList } from "@/types";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface ShoppingListCardProps {
  list: ShoppingList;
  onSelect: (list: ShoppingList) => void;
  onDelete: (list: ShoppingList) => Promise<void>;
}

export function ShoppingListCard({ list, onSelect, onDelete }: ShoppingListCardProps) {
  const items = list.getItems();

  return <>
    <div
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
            {items.length}{" "}
            {items.length === 1 ? "item" : "items"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={event => {
              event.stopPropagation();
              onDelete(list)
            }}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </>
}