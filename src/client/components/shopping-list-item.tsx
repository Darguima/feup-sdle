"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ShoppingItem } from "@/types";

interface ShoppingListItemProps {
	item: ShoppingItem;
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
				<h3 className="font-semibold text-foreground">{item.getName()}</h3>
				<p
					className={`text-sm font-medium ${item.getAcquired() === item.getQuantity() ? "text-green-600 dark:text-green-400" : "text-muted-foreground"}`}
				>
					{item.getAcquired()} / {item.getQuantity()} acquired
				</p>
			</div>

			<div className="flex flex-col gap-2">
				<div className="flex items-center gap-1">
					<span className="text-xs text-muted-foreground min-w-12">Total:</span>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => onUpdateTotalQuantity(item.getItemId(), -1)}
						disabled={item.getQuantity() <= item.getAcquired()}
						className="h-7 w-7 p-0"
					>
						<Minus className="w-3 h-3" />
					</Button>
					<span className="text-sm font-medium min-w-8 text-center">
						{Math.max(1, item.getQuantity())}
					</span>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => onUpdateTotalQuantity(item.getItemId(), 1)}
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
						onClick={() => onAcquireItem(item.getItemId(), -1)}
						disabled={item.getAcquired() === 0}
						className="h-7 w-7 p-0"
					>
						<Minus className="w-3 h-3" />
					</Button>
					<span className="text-sm font-medium min-w-8 text-center">
						{Math.max(0, Math.min(item.getQuantity(), item.getAcquired()))}
					</span>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => onAcquireItem(item.getItemId(), 1)}
						disabled={item.getAcquired() >= item.getQuantity()}
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
					onClick={() => onDelete(item.getItemId())}
				>
					<Trash2 className="w-4 h-4" />
				</Button>
			</div>
		</div>
	);
}
