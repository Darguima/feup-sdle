"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, Minus, Check, Trash2 } from "lucide-react"
import { store, type ShoppingList } from "@/lib/store"

export default function ShoppingListPage({ params }: { params: { id: string } }) {
  const { id } = params
  const router = useRouter()
  const [list, setList] = useState<ShoppingList | null>(null)
  const [itemName, setItemName] = useState("")
  const [itemQuantity, setItemQuantity] = useState("1")

  useEffect(() => {
    console.log("[v0] Loading list with id:", id)
    const fetchedList = store.getList(id)
    if (!fetchedList) {
      console.log("[v0] List not found, redirecting to home")
      router.push("/")
      return
    }
    console.log("[v0] List loaded:", fetchedList)
    setList(fetchedList)
  }, [id, router])

  const refreshList = () => {
    const updatedList = store.getList(id)
    if (updatedList) {
      setList({ ...updatedList })
    }
  }

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault()
    if (!itemName.trim() || !itemQuantity) return

    const quantity = Number.parseInt(itemQuantity)
    if (quantity <= 0) return

    store.addItem(id, itemName, quantity)
    setItemName("")
    setItemQuantity("1")
    refreshList()
  }

  const handleAcquireItem = (itemId: string, quantity: number) => {
    store.acquireItems(id, itemId, quantity)
    refreshList()
  }

  const handleUpdateTotalQuantity = (itemId: string, change: number) => {
    const item = list.items.find((i) => i.id === itemId)
    if (!item) return

    const newTotal = item.totalQuantity + change
    // Don't allow total to go below acquired quantity
    if (newTotal < item.acquiredQuantity) return
    if (newTotal < 1) return

    store.updateItemQuantity(id, itemId, newTotal, item.acquiredQuantity)
    refreshList()
  }

  const handleDeleteItem = (itemId: string) => {
    store.deleteItem(id, itemId)
    refreshList()
  }

  if (!list) {
    return null
  }

  const totalItems = list.items.reduce((sum, item) => sum + item.totalQuantity, 0)
  const acquiredItems = list.items.reduce((sum, item) => sum + item.acquiredQuantity, 0)
  const progress = totalItems > 0 ? (acquiredItems / totalItems) * 100 : 0

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" onClick={() => router.push("/")} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Lists
        </Button>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">{list.name}</CardTitle>
            <CardDescription>
              {acquiredItems} of {totalItems} items acquired ({Math.round(progress)}%)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
              <div className="bg-indigo-600 h-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add Item</CardTitle>
            <CardDescription>Add a new item to your shopping list</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddItem} className="flex gap-2">
              <Input
                type="text"
                placeholder="Item name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="flex-1"
              />
              <Input
                type="number"
                placeholder="Qty"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                min="1"
                className="w-20"
              />
              <Button type="submit" disabled={!itemName.trim() || !itemQuantity}>
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Items</CardTitle>
            <CardDescription>
              {list.items.length === 0
                ? "No items yet"
                : `${list.items.length} ${list.items.length === 1 ? "item" : "items"} in your list`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {list.items.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">Add your first item to get started!</p>
            ) : (
              <div className="space-y-3">
                {list.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.acquiredQuantity} / {item.totalQuantity} acquired
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground min-w-[3rem]">Total:</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleUpdateTotalQuantity(item.id, -1)}
                          disabled={item.totalQuantity <= item.acquiredQuantity}
                          className="h-7 w-7 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-medium min-w-[2rem] text-center">{item.totalQuantity}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleUpdateTotalQuantity(item.id, 1)}
                          className="h-7 w-7 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground min-w-[3rem]">Got:</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleAcquireItem(item.id, -1)}
                          disabled={item.acquiredQuantity === 0}
                          className="h-7 w-7 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-medium min-w-[2rem] text-center">{item.acquiredQuantity}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleAcquireItem(item.id, 1)}
                          disabled={item.acquiredQuantity >= item.totalQuantity}
                          className="h-7 w-7 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.acquiredQuantity === item.totalQuantity && (
                        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                      )}

                      <Button size="sm" variant="destructive" onClick={() => handleDeleteItem(item.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
