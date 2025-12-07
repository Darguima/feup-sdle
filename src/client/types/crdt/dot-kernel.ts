import Dot from "./dot";
import DotContext from "./dot-context";

export default class DotKernel<T> {
    private dotValues: Map<string, T>;  // Objects do not work as Map keys, so we use their string representation
    private dotContext: DotContext;

    constructor() {
        this.dotValues = new Map<string, T>();
        this.dotContext = new DotContext();
    }

    public getContext(): DotContext {
        return this.dotContext;
    }

    public setContext(context: DotContext): void {
        this.dotContext = context;
    }

    public getValues(): Iterable<[string, T]> {
        return this.dotValues.entries()
    }

    public dotAdd(id: string, value: T): Dot {
        const dot = this.dotContext.makeDot(id);
        this.dotValues.set(dot.toKey(), value);
        return dot;
    }

    public add(id: string, value: T): DotKernel<T> {
        const dot = this.dotAdd(id, value);

        const delta = new DotKernel<T>();
        delta.dotValues.set(dot.toKey(), value);
        delta.dotContext.insertDot(dot);

        return delta
    }

    public removeDot(dot: Dot): DotKernel<T> {
        const delta = new DotKernel<T>();

        const dotKey = dot.toKey();
        if (this.dotValues.has(dotKey)) {
            this.dotValues.delete(dotKey);
            delta.dotContext.insertDot(dot);
        }

        return delta;
    }

    // Removes any dot with a matching value
    public removeValue(value: T): DotKernel<T> {
        const delta = new DotKernel<T>();

        this.dotValues.forEach((dotValue, dotKey) => {
            if (dotValue === value) {
                this.dotValues.delete(dotKey);
                delta.dotContext.insertDot(Dot.fromKey(dotKey), false);
            }
        })

        delta.dotContext.compact();
        return delta;
    }

    public reset(): DotKernel<T> {
        const delta = new DotKernel<T>();

        this.dotValues.forEach((_, dotKey) => {
            delta.dotContext.insertDot(Dot.fromKey(dotKey), false);
        });

        delta.dotContext.compact();
        this.dotValues.clear();
        return delta;
    }

    // Merges the kernel with another, preferring the values of other on conflicts
    public join(other: DotKernel<T>): void {
        this.dotValues.forEach((_ , dotKey) => {
            const dot = Dot.fromKey(dotKey);

            // If dot is not present in other and is known by other, it means it was removed
            if (other.dotContext.knows(dot) && !other.dotValues.has(dotKey)) {
                this.dotValues.delete(dotKey);
            }
        });

        other.dotValues.forEach((value, dotKey) => {
            // If dot is not present locally, add it
            if (!this.dotValues.has(dotKey)) {
                this.dotValues.set(dotKey, value);
            }
        });

        this.dotContext.join(other.dotContext);
    }

    public clone(): DotKernel<T> {
        const clone = new DotKernel<T>();

        clone.dotContext = this.dotContext.clone();
        clone.dotValues = new Map<string, T>(this.dotValues);

        return clone;
    }
}