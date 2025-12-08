import CCounter from './ccounter';

describe('CCounter', () => {
  it('should create a new CCounter', () => {
    const counter = new CCounter('node1');
    expect(counter).not.toBeNull();
    expect(counter['replicaId']).toBe('node1');
    expect(counter.read()).toBe(0);
  });

  it('should increment the counter', () => {
    const cc1 = new CCounter('replica1');
    const cc2 = cc1.clone();

    const delta = cc1.inc(5);

    expect(cc1.read()).toBe(5);

    cc2.join(delta);
    expect(cc1).toEqual(cc2);
  });

  it('should handle multiple increments', () => {
    const cc1 = new CCounter('replica1');
    const cc2 = cc1.clone();

    const delta1 = cc1.inc(3);
    const delta2 = cc1.inc(7);

    expect(cc1.read()).toBe(10);

    cc2.join(delta1);
    cc2.join(delta2);
    expect(cc1).toEqual(cc2);
  });

  it('should decrement the counter', () => {
    const cc1 = new CCounter('replica1');
    const cc2 = cc1.clone();

    const delta = cc1.inc(-4);

    expect(cc1.read()).toBe(-4);

    cc2.join(delta);
    expect(cc1).toEqual(cc2);
  });

  it('should handle multiple decrements', () => {
    const cc1 = new CCounter('replica1');
    const cc2 = cc1.clone();

    const delta1 = cc1.inc(-2);
    const delta2 = cc1.inc(-3);

    expect(cc1.read()).toBe(-5);

    cc2.join(delta1);
    cc2.join(delta2);
    expect(cc1).toEqual(cc2);
  });

  it('should handle increment and decrement', () => {
    const cc1 = new CCounter('replica1');
    const cc2 = cc1.clone();

    const delta1 = cc1.inc(10);
    const delta2 = cc1.inc(-4);

    expect(cc1.read()).toBe(6);

    cc2.join(delta1);
    cc2.join(delta2);
    expect(cc1).toEqual(cc2);
  });

  it('should increment and decrement to zero', () => {
    const cc1 = new CCounter('replica1');
    const cc2 = cc1.clone();

    const delta1 = cc1.inc(7);
    const delta2 = cc1.inc(-7);

    expect(cc1.read()).toBe(0);

    cc2.join(delta1);
    cc2.join(delta2);
    expect(cc1).toEqual(cc2);
  });

  it('should handle complex increments and decrements', () => {
    const cc1 = new CCounter('replica1');
    const cc2 = cc1.clone();

    const delta1 = cc1.inc(10);
    expect(cc1.read()).toBe(10);

    const delta2 = cc1.inc(-5);
    expect(cc1.read()).toBe(5);

    const delta3 = cc1.inc(0);
    expect(cc1.read()).toBe(5);

    const delta4 = cc1.inc(-5);
    expect(cc1.read()).toBe(0);

    const delta5 = cc1.inc(-5);
    expect(cc1.read()).toBe(-5);

    cc2.join(delta1);
    cc2.join(delta2);
    cc2.join(delta3);
    cc2.join(delta4);
    cc2.join(delta5);

    expect(cc1).toEqual(cc2);
  });

  it('should reset the counter', () => {
    const cc1 = new CCounter('replica1');
    cc1.inc(10);
    const cc2 = cc1.clone();

    const delta = cc1.reset();

    expect(cc1.read()).toBe(0);

    cc2.join(delta);
    expect(cc1).toEqual(cc2);
  });

  it('should reset after increments and decrements', () => {
    const counter = new CCounter('replica1');
    counter.inc(15);
    counter.inc(-5);
    counter.reset();

    expect(counter.read()).toBe(0);
  });

  it('should reset an empty counter', () => {
    const counter = new CCounter('replica1');
    counter.reset();

    expect(counter.read()).toBe(0);
  });

  it('should join two counters', () => {
    const counter1 = new CCounter('replica1');
    counter1.inc(5);

    const counter2 = new CCounter('replica2');
    counter2.inc(10);

    counter1.join(counter2);

    expect(counter1.read()).toBe(15);
    expect(counter2.read()).toBe(10);
  });

  it('should join counters with conflicts', () => {
    const cc1 = new CCounter('replica1');
    cc1.inc(5);

    const cc2 = new CCounter('replica2');
    cc2.inc(10);

    cc1.join(cc2);

    expect(cc1.read()).toBe(15);
    expect(cc2.read()).toBe(10);
  });

  it('should handle concurrent updates', () => {
    const counter1 = new CCounter('replica1');
    const counter2 = new CCounter('replica2');

    const delta1 = counter1.inc(5);
    const delta2 = counter2.inc(10);

    counter1.join(delta2);
    counter2.join(delta1);

    expect(counter1.read()).toBe(15);
    expect(counter2.read()).toBe(15);
  });

  it('should join with an empty counter', () => {
    const counter1 = new CCounter('replica1');
    counter1.inc(5);

    const counter2 = new CCounter('replica2');

    counter1.join(counter2);

    expect(counter1.read()).toBe(5);
    expect(counter2.read()).toBe(0);
  });
});