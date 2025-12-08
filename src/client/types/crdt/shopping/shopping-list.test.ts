import ShoppingList from './shopping-list';
import DotContext from '../generic/dot-context';
import util from 'util';

function listsEqual(a: ShoppingList, b: ShoppingList): boolean {
    if (a.getListId() !== b.getListId() || a.getName() !== b.getName()) {
        return false;
    }

    if (JSON.stringify(a.getContext()) !== JSON.stringify(b.getContext())) {
        return false;
    }

    const aKeys = Array.from(a['items'].keys());
    const bKeys = Array.from(b['items'].keys());

    if (aKeys.length !== bKeys.length) {
        return false;
    }

    aKeys.forEach((key) => {
        const itemA = a['items'].get(key);
        const itemB = b['items'].get(key);

        if (
            itemA.getQuantity() !== itemB.getQuantity() ||
            itemA.getAcquired() !== itemB.getAcquired()
        ) {
            return false;
        }
    });

    return true;
}

describe('ShoppingList', () => {
    it('should create a new ShoppingList', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');

        expect(list.getReplicaId()).toBe('replica1');
        expect(list.getName()).toBe('Groceries');
        expect(list.getItems().length).toBe(0);
        expect(list.getContext()).not.toBeNull();
    });

    it('should add an item to the ShoppingList', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        const list2 = list1.clone();

        const delta = list1.putItem('item1', 'Milk', 5, 2);

        const items = list1.getItems();
        expect(items.length).toBe(1);
        expect(items[0].getItemId()).toBe('item1');
        expect(items[0].getName()).toBe('Milk');
        expect(items[0].getQuantity()).toBe(5);
        expect(items[0].getAcquired()).toBe(2);

        list2.join(delta);
        expect(listsEqual(list1, list2)).toBe(true);
    });

    it('should remove an item from the ShoppingList', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        list1.putItem('item1', 'Milk', 5, 2);
        const list2 = list1.clone();

        const delta = list1.removeItem('item1');

        const items = list1.getItems();
        expect(items.length).toBe(0);

        list2.join(delta);
        expect(listsEqual(list1, list2)).toBe(true);
    });

    it('should join two ShoppingLists', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        list1.putItem('item1', 'Milk', 5, 2);

        const list2 = new ShoppingList('replica2', 'list2', 'Groceries');
        list2.putItem('item2', 'Bread', 3, 1);

        list1.join(list2);

        const items = list1.getItems();
        expect(items.length).toBe(2);

        const item1 = items.find((item) => item.getItemId() === 'item1');
        const item2 = items.find((item) => item.getItemId() === 'item2');

        expect(item1?.getQuantity()).toBe(5);
        expect(item1?.getAcquired()).toBe(2);

        expect(item2?.getQuantity()).toBe(3);
        expect(item2?.getAcquired()).toBe(1);
    });

    it('should set a new context', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');
        const newContext = new DotContext();

        list.setContext(newContext);

        expect(list.getContext()).toBe(newContext);
    });

    it('should handle concurrent updates', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        const list2 = new ShoppingList('replica2', 'list1', 'Groceries');

        const delta1 = list1.putItem('item1', 'Milk', 5, 2);
        const delta2 = list2.putItem('item2', 'Bread', 3, 1);

        list1.join(delta2);
        list2.join(delta1);

        expect(listsEqual(list1, list2)).toBe(true);

        const items = list1.getItems();
        expect(items.length).toBe(2);
    });

    it('should handle conflicting updates', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        list1.putItem('item1', 'Milk', 5, 2);

        const list2 = new ShoppingList('replica2', 'list1', 'Groceries');
        list2.putItem('item1', 'Milk', 10, 4);

        list1.join(list2);

        const item = list1.getItem('item1');
        expect(item).not.toBeUndefined();
        expect(item?.getQuantity()).toBe(15);
        expect(item?.getAcquired()).toBe(6);
    });

    it('should clone a ShoppingList', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');
        list.putItem('item1', 'Milk', 5, 2);

        const clone = list.clone();

        expect(listsEqual(list, clone)).toBe(true);

        list.putItem('item2', 'Bread', 3, 1);
        expect(clone.getItems().length).toBe(1);
    });

    it('should serialize and deserialize an empty ShoppingList', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');

        const proto = list.toProto();
        const converted = ShoppingList.fromProto(proto);

        expect(listsEqual(list, converted)).toBe(true);
    });

    it('should serialize and deserialize a ShoppingList with items', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');
        list.putItem('item1', 'Milk', 5, 2);
        list.putItem('item2', 'Bread', 3, 1);

        const proto = list.toProto();
        const converted = ShoppingList.fromProto(proto);

        expect(listsEqual(list, converted)).toBe(true);
    });

    it('should join with an empty ShoppingList', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        list1.putItem('item1', 'Milk', 5, 2);

        const list2 = new ShoppingList('replica2', 'list2', 'Groceries');

        list1.join(list2);

        const items = list1.getItems();
        expect(items.length).toBe(1);
        expect(items[0].getItemId()).toBe('item1');
    });

    it('should join with multiple updates', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        list1.putItem('item1', 'Milk', 5, 2);

        const list2 = new ShoppingList('replica2', 'list2', 'Groceries');
        list2.putItem('item1', 'Milk', 10, 4);
        list2.putItem('item2', 'Bread', 3, 1);

        list1.join(list2);

        const items = list1.getItems();
        expect(items.length).toBe(2);

        const item1 = list1.getItem('item1');
        expect(item1?.getQuantity()).toBe(15);
        expect(item1?.getAcquired()).toBe(6);

        const item2 = list1.getItem('item2');
        expect(item2?.getQuantity()).toBe(3);
        expect(item2?.getAcquired()).toBe(1);
    });

    it('should maintain clone independence', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        list1.putItem('item1', 'Milk', 5, 2);
        const list2 = list1.clone();

        list1.putItem('item2', 'Bread', 3, 1);

        expect(list2.getItems().length).toBe(1);
    });

    it('should get an item from the ShoppingList', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');
        list.putItem('item1', 'Milk', 5, 2);

        const item = list.getItem('item1');
        expect(item).not.toBeUndefined();
        expect(item?.getItemId()).toBe('item1');
        expect(item?.getName()).toBe('Milk');
        expect(item?.getQuantity()).toBe(5);
        expect(item?.getAcquired()).toBe(2);

        const nonExistentItem = list.getItem('item2');
        expect(nonExistentItem).toBeUndefined();
    });

    it('should handle removing a non-existent item', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        const list2 = list1.clone();

        const delta = list1.removeItem('item1');

        expect(list1.getItems().length).toBe(0);

        list2.join(delta);
        expect(listsEqual(list1, list2)).toBe(true);
    });

    it('should handle putting an item with negative values', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        const list2 = list1.clone();

        const delta = list1.putItem('item1', 'Milk', -5, -2);

        expect(list1.getItems().length).toBe(0);

        list2.join(delta);
        expect(listsEqual(list1, list2)).toBe(true);
    });

    it('should remove an item while keeping other items intact', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        list1.putItem('item1', 'Milk', 5, 2);
        list1.putItem('item2', 'Bread', 3, 1);
        const list2 = list1.clone();

        const delta = list1.removeItem('item2');

        const items = list1.getItems();
        expect(items.length).toBe(1);
        expect(items[0].getItemId()).toBe('item1');

        list2.join(delta);
        expect(list2.getItems().length).toBe(1);
        expect(listsEqual(list1, list2)).toBe(true);
    });

    it('should handle removing an item after putting it', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        const list2 = list1.clone();

        const delta1 = list1.putItem('item1', 'Milk', 5, 2);
        const delta2 = list1.removeItem('item1');

        expect(list1.getItems().length).toBe(0);

        list2.join(delta1);
        list2.join(delta2);

        expect(listsEqual(list1, list2)).toBe(true);
    });

    it('should handle putting an item multiple times', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        list1.putItem('item1', 'Milk', 5, 2);
        const list2 = list1.clone();

        const delta = list1.putItem('item1', 'Milk', 3, 1);

        const items = list1.getItems();
        expect(items.length).toBe(1);
        expect(items[0].getQuantity()).toBe(8);
        expect(items[0].getAcquired()).toBe(3);

        list2.join(delta);
        expect(listsEqual(list1, list2)).toBe(true);
    });

    it('should serialize and deserialize a ShoppingList with multiple items', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');
        list.putItem('item1', 'Milk', 5, 2);
        list.putItem('item2', 'Bread', 3, 1);

        const proto = list.toProto();
        const converted = ShoppingList.fromProto(proto);

        expect(listsEqual(list, converted)).toBe(true);
    });

    it('should serialize and deserialize a ShoppingList with an empty item', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');
        list.putItem('item1', 'Milk', 0, 0);

        const proto = list.toProto();
        const converted = ShoppingList.fromProto(proto);

        expect(listsEqual(list, converted)).toBe(true);
    });

    it('should serialize and deserialize a ShoppingList with conflicting updates', () => {
        const list1 = new ShoppingList('replica1', 'list1', 'Groceries');
        list1.putItem('item1', 'Milk', 5, 2);

        const list2 = new ShoppingList('replica2', 'list1', 'Groceries');
        list2.putItem('item1', 'Milk', 10, 4);

        list1.join(list2);

        const proto = list1.toProto();
        const converted = ShoppingList.fromProto(proto);

        expect(listsEqual(list1, converted)).toBe(true);
    });

    it('should serialize and deserialize a ShoppingList after removing an item', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');
        list.putItem('item1', 'Milk', 5, 2);
        list.putItem('item2', 'Bread', 3, 1);

        list.removeItem('item1');

        const proto = list.toProto();
        const converted = ShoppingList.fromProto(proto);

        expect(listsEqual(list, converted)).toBe(true);
    });

    it('should serialize and deserialize a complex ShoppingList scenario', () => {
        const list = new ShoppingList('replica1', 'list1', 'Groceries');
        list.putItem('item1', 'Milk', 5, 2);
        list.putItem('item2', 'Bread', 3, 1);
        list.putItem('item3', 'Eggs', 12, 6);

        list.removeItem('item2');
        list.putItem('item4', 'Butter', 2, 0);

        const proto = list.toProto();
        const converted = ShoppingList.fromProto(proto);

        expect(listsEqual(list, converted)).toBe(true);
    });
});