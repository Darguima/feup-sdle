import ORMap from './ormap';
import CCounter from './ccounter';
import DotContext from './dot-context';

function equalORMaps<K>(a: ORMap<K, CCounter>, b: ORMap<K, CCounter>): boolean {
    if (JSON.stringify(a.getContext()) !== JSON.stringify(b.getContext())) {
        return false;
    }

    const aKeys = Array.from(a.keys());
    const bKeys = Array.from(b.keys());

    if (aKeys.length !== bKeys.length) {
        return false;
    }

    for (const key of aKeys) {
        const valueA = a.get(key);
        const valueB = b.get(key);

        if (JSON.stringify(valueA['dotKernel']) !== JSON.stringify(valueB['dotKernel'])) {
            return false;
        }
    }

    return true;
}

describe('ORMap', () => {
    it('should create a new ORMap', () => {
        const ormap = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));

        expect(ormap['replicaId']).toBe('replica1');
        expect(ormap['valueMap'].size).toBe(0);
        expect(ormap.getContext()).not.toBeNull();
    });

    it('should get a value from the ORMap', () => {
        const ormap = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));

        const value1 = ormap.get('key1');
        expect(value1.isNull()).toBe(true);

        value1.inc(10);
        expect(ormap.get('key1').read()).toBe(10);
    });

    it('should return the keys of the ORMap', () => {
        const ormap = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap.get('key1').inc(10);
        ormap.get('key2').inc(20);

        const keys = Array.from(ormap.keys()).sort();
        expect(keys).toEqual(['key1', 'key2']);
    });

    it('should return keys excluding null values', () => {
        const ormap = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap.get('key1').inc(5);
        ormap.get('key2'); // This will be null

        const keys = Array.from(ormap.keys());
        expect(keys).toEqual(['key1']);
    });

    it('should apply an operation to a value in the ORMap', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        const ormap2 = ormap1.clone();

        const delta = ormap1.apply('key1', (value) => value.inc(5));

        const value = ormap1.get('key1');
        expect(value.read()).toBe(5);

        const deltaValue = delta.get('key1');
        expect(deltaValue.read()).toBe(5);

        ormap2.join(delta);
        expect(equalORMaps(ormap1, ormap2)).toBe(true);
    });

    it('should remove a value from the ORMap', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        const ormap2 = ormap1.clone();

        const delta = ormap1.remove('key1');

        expect(ormap1['valueMap'].size).toBe(0);

        ormap2.join(delta);
        expect(equalORMaps(ormap1, ormap2)).toBe(true);
    });

    it('should reset the ORMap', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap1.get('key1').inc(5);
        ormap1.get('key2').inc(10);

        const delta = ormap1.reset();

        expect(ormap1.get('key1').read()).toBe(0);
        expect(ormap1.get('key2').read()).toBe(0);

        const deltaValue1 = delta.get('key1');
        const deltaValue2 = delta.get('key2');
        expect(deltaValue1.read()).toBe(0);
        expect(deltaValue2.read()).toBe(0);

        const ormap2 = ormap1.clone();
        ormap2.join(delta);
        expect(equalORMaps(ormap1, ormap2)).toBe(true);
    });

    it('should join two ORMaps', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap1.get('key1').inc(5);

        const ormap2 = new ORMap<string, CCounter>('replica2', (replicaId) => new CCounter(replicaId));
        ormap2.get('key1').inc(10);
        ormap2.get('key2').inc(5);

        ormap1.join(ormap2);

        expect(ormap1.get('key1').read()).toBe(15);
        expect(ormap1.get('key2').read()).toBe(5);
    });

    it('should join with an empty ORMap', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap1.get('key1').inc(5);

        const ormap2 = new ORMap<string, CCounter>('replica2', (replicaId) => new CCounter(replicaId));

        ormap1.join(ormap2);

        expect(Array.from(ormap1.keys()).length).toBe(1);
        expect(ormap1.get('key1').read()).toBe(5);
    });

    it('should be idempotent when joining with itself', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap1.get('key1').inc(5);

        const ormap2 = ormap1.clone();
        ormap1.join(ormap2);

        expect(equalORMaps(ormap1, ormap2)).toBe(true);
    });

    it('should be commutative when joining', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap1.get('key1').inc(5);

        const ormap2 = new ORMap<string, CCounter>('replica2', (replicaId) => new CCounter(replicaId));
        ormap2.get('key1').inc(10);
        ormap2.get('key2').inc(5);

        const joined1 = ormap1.clone();
        joined1.join(ormap2);

        const joined2 = ormap2.clone();
        joined2.join(ormap1);

        expect(equalORMaps(joined1, joined2)).toBe(true);
    });

    it('should maintain independence after joining', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap1.get('key1').inc(5);

        const ormap2 = new ORMap<string, CCounter>('replica2', (replicaId) => new CCounter(replicaId));
        ormap2.get('key2').inc(10);

        const joined1 = ormap1.clone();
        joined1.join(ormap2);

        ormap2.get('key2').inc(10);

        expect(joined1.get('key2').read()).toBe(10);
    });

    it('should handle joining after a removal', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap1.get('key1').inc(5);

        const ormap2 = ormap1.clone();
        const delta = ormap1.remove('key1');

        ormap2.join(delta);

        expect(equalORMaps(ormap1, ormap2)).toBe(true);
    });

    it('should clone the ORMap', () => {
        const ormap1 = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap1.get('key1').inc(5);

        const ormap2 = ormap1.clone();

        expect(equalORMaps(ormap1, ormap2)).toBe(true);

        ormap2.get('key1').inc(10);
        expect(ormap1.get('key1').read()).toBe(5);
    });

    it('should set a new context', () => {
        const ormap = new ORMap<string, CCounter>('replica1', (replicaId) => new CCounter(replicaId));
        ormap.get('key1').inc(5);

        const newContext = new DotContext();
        ormap.setContext(newContext);

        expect(ormap.getContext()).toBe(newContext);
        expect(ormap.get('key1').getContext()).toBe(newContext);
    });
});