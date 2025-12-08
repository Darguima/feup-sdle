import DotContext from "./dot-context";
import ORMapValue from "./ormap-value";

export default class ORMap<K, V extends ORMapValue<V>> {
    private replicaId: string;
    private dotContext: DotContext;
    private valueMap: Map<K, V>;
    private newEmpty: (replicaId: string) => V;

    constructor(replicaId: string, newEmpty: (replicaId: string) => V, dotContext?: DotContext, valueMap?: Map<K, V>) {
        this.replicaId = replicaId;
        this.newEmpty = newEmpty;
        this.dotContext = dotContext || new DotContext();
        this.valueMap = valueMap || new Map<K, V>();
    }

    public getContext(): DotContext {
        return this.dotContext;
    }

    public setContext(context: DotContext): void {
        this.dotContext = context;

        this.valueMap.forEach((value, _) => {
            value.setContext(context);
        });
    }

    public get(key: K): V {
        let value = this.valueMap.get(key);
        if (value !== undefined) {
            return value;
        }

        value = this.newEmpty(this.replicaId);
        value.setContext(this.dotContext);
        this.valueMap.set(key, value);

        return value;
    }

    public keys(): Iterable<K> {
        return this.valueMap.keys().filter((key) => {
            const value = this.valueMap.get(key);
            return value !== undefined && !value.isNull();
        });
    }

    public apply(key: K, operation: (value: V) => V): ORMap<K, V> {
        const delta = new ORMap<K, V>(this.replicaId, this.newEmpty);

        const value = this.get(key);
        const valueDelta = operation(value);
        delta.valueMap.set(key, valueDelta);

        delta.setContext(valueDelta.getContext());

        return delta;
    }

    public remove(key: K): ORMap<K, V> {
        const delta = new ORMap<K, V>(this.replicaId, this.newEmpty);

        const value = this.valueMap.get(key);
        if (value !== undefined) {
            const valueDelta = value.reset();
            delta.setContext(valueDelta.getContext());
        }

        return delta;
    }

    public reset(): ORMap<K, V> {
        const delta = new ORMap<K, V>(this.replicaId, this.newEmpty);

        this.valueMap.forEach((value, key) => {
            const valueDelta = value.reset();
            delta.dotContext.join(valueDelta.getContext());
            delta.valueMap.set(key, valueDelta);
        });

        return delta;
    }

    public join(other: ORMap<K, V>): void {
        // Need this to allow concurrent joins under a shared context
        const originalContext = this.dotContext.clone();

        this.valueMap.forEach((value, _) => {
            // Must invalidate local entries known by the other context
            const emptyValue = this.newEmpty(this.replicaId);
            emptyValue.setContext(other.dotContext);
            value.join(emptyValue);

            this.dotContext.copy(originalContext);
        });

        other.valueMap.forEach((otherValue, key) => {
            const localValue = this.get(key);
            localValue.join(otherValue);
            this.dotContext.copy(originalContext);
        })

        this.dotContext.join(other.dotContext);
    }

    public clone(): ORMap<K, V> {
        const clone = new ORMap<K, V>(this.replicaId, this.newEmpty);
        clone.dotContext = this.dotContext.clone();

        this.valueMap.forEach((value, key) => {
            const valueClone = value.clone();
            valueClone.setContext(clone.dotContext);
            clone.valueMap.set(key, valueClone);
        });

        return clone;
    }
}