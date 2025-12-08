import ShoppingItem from './shopping-item';
import DotContext from '../generic/dot-context';

describe('ShoppingItem', () => {
  it('should create a new ShoppingItem', () => {
    const item = new ShoppingItem('replica1', 'item1', 'Milk');

    expect(item.getReplicaId()).toBe('replica1');
    expect(item.getItemId()).toBe('item1');
    expect(item.getName()).toBe('Milk');
    expect(item.getQuantity()).toBe(0);
    expect(item.getAcquired()).toBe(0);
  });

  it('should increment and decrement quantity', () => {
    const item1 = new ShoppingItem('replica1', 'item1', 'Milk');
    const item2 = item1.clone();

    const delta1 = item1.incQuantity(5);
    expect(item1.getQuantity()).toBe(5);

    const delta2 = item1.incQuantity(-3);
    expect(item1.getQuantity()).toBe(2);

    const delta3 = item1.incQuantity(-10); // Should not go below 0
    expect(item1.getQuantity()).toBe(0);

    item2.join(delta1);
    item2.join(delta2);
    item2.join(delta3);

    expect(item1).toEqual(item2);
  });

  it('should increment and decrement acquired', () => {
    const item1 = new ShoppingItem('replica1', 'item1', 'Milk');
    item1.incQuantity(10);
    const item2 = item1.clone();

    const delta = item1.incAcquired(3);
    expect(item1.getAcquired()).toBe(3);

    const delta2 = item1.incAcquired(-2);
    expect(item1.getAcquired()).toBe(1);

    const delta3 = item1.incAcquired(-5); // Should not go below 0
    expect(item1.getAcquired()).toBe(0);

    const delta4 = item1.incAcquired(15); // Should not exceed quantity
    expect(item1.getAcquired()).toBe(10);

    item2.join(delta);
    item2.join(delta2);
    item2.join(delta3);
    item2.join(delta4);

    expect(item1).toEqual(item2);
  });

  it('should set a new context', () => {
    const item = new ShoppingItem('replica1', 'item1', 'Milk');
    const newContext = new DotContext();

    item.setContext(newContext);

    expect(item.getContext()).toBe(newContext);
    expect(item['quantity'].getContext()).toBe(newContext);
    expect(item['acquired'].getContext()).toBe(newContext);
  });

  it('should reset the item', () => {
    const item1 = new ShoppingItem('replica1', 'item1', 'Milk');
    item1.incAcquired(5);
    item1.incAcquired(2);
    const item2 = item1.clone();

    const delta = item1.reset();

    expect(item1.getQuantity()).toBe(0);
    expect(item1.getAcquired()).toBe(0);

    item2.join(delta);
    expect(item1).toEqual(item2);
  });

  it('should check if the item is null after reset', () => {
    const item = new ShoppingItem('replica1', 'item1', 'Milk');
    item.incQuantity(5);

    expect(item.isNull()).toBe(false);

    item.reset();

    expect(item.isNull()).toBe(true);
  });

  it('should join two items', () => {
    const item1 = new ShoppingItem('replica1', 'item1', 'Milk');
    item1.incQuantity(3);
    item1.incAcquired(2);

    const item2 = new ShoppingItem('replica2', 'item1', 'Milk');
    item2.incQuantity(5);
    item2.incAcquired(4);

    item1.join(item2);

    expect(item1.getQuantity()).toBe(8);
    expect(item1.getAcquired()).toBe(6);
  });

  it('should join with an empty item', () => {
    const item1 = new ShoppingItem('replica1', 'item1', 'Milk');
    item1.incQuantity(5);
    item1.incAcquired(2);

    const item2 = new ShoppingItem('replica2', 'item2', 'Bread');

    item1.join(item2);

    expect(item1.getQuantity()).toBe(5);
    expect(item1.getAcquired()).toBe(2);
  });

  it('should handle concurrent updates', () => {
    const item1 = new ShoppingItem('replica1', 'item1', 'Milk');
    const item2 = new ShoppingItem('replica2', 'item1', 'Milk');

    const delta1 = item1.incQuantity(5);
    const delta21 = item2.incQuantity(5);
    const delta22 = item2.incAcquired(3);

    item1.join(delta21);
    item1.join(delta22);
    item2.join(delta1);

    expect(item1.getQuantity()).toBe(10);
    expect(item1.getAcquired()).toBe(3);
    expect(item2.getQuantity()).toBe(10);
    expect(item2.getAcquired()).toBe(3);
  });
});