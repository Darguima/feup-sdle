"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ShoppingItem as ShoppingListItemType } from "@/lib/store";

interface ShoppingListItemProps {
	item: ShoppingListItemType;
	onUpdateTotalQuantity: (itemId: string, change: number) => void;
	onAcquireItem: (itemId: string, quantity: number) => void;
	onDelete: (itemId: string) => void;
}

export function ShoppingListItem({
	item,
	onUpdateTotalQuantity,
	onAcquireItem,
	onDelete,
}: ShoppingListItemProps) {
	return (
		<div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
			<div className="flex-1">
				<h3 className="font-semibold text-foreground">{item.name}</h3>
				<p
					className={`text-sm font-medium ${item.acquiredQuantity == item.totalQuantity ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
				>
					{item.acquiredQuantity} / {item.totalQuantity} acquired
				</p>
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-1">
					<span className="text-xs text-muted-foreground min-w-12">Total:</span>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => onUpdateTotalQuantity(item.id, -1)}
						disabled={item.totalQuantity <= item.acquiredQuantity}
						className="h-7 w-7 p-0"
					>
						<Minus className="w-3 h-3" />
					</Button>
					<span className="text-sm font-medium min-w-8 text-center">
						{item.totalQuantity}
					</span>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => onUpdateTotalQuantity(item.id, 1)}
						className="h-7 w-7 p-0"
					>
						<Plus className="w-3 h-3" />
					</Button>
				</div>

				<div className="flex items-center gap-1">
					<span className="text-xs text-muted-foreground min-w-12">Got:</span>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => onAcquireItem(item.id, -1)}
						disabled={item.acquiredQuantity === 0}
						className="h-7 w-7 p-0"
					>
						<Minus className="w-3 h-3" />
					</Button>
					<span className="text-sm font-medium min-w-8 text-center">
						{item.acquiredQuantity}
					</span>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => onAcquireItem(item.id, 1)}
						disabled={item.acquiredQuantity >= item.totalQuantity}
						className="h-7 w-7 p-0"
					>
						<Plus className="w-3 h-3" />
					</Button>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<Button
					size="sm"
					variant="destructive"
					onClick={() => onDelete(item.id)}
				>
					<Trash2 className="w-4 h-4" />
				</Button>
			</div>
		</div>
	);
}
