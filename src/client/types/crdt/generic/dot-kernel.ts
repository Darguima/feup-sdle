import Dot from "./dot";
import DotContext from "./dot-context";
import { IntDotKernel, StringDotKernel, EmptyDotKernel, Dot as DotProto } from "@/lib/proto/global";

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
        this.dotValues.forEach((_, dotKey) => {
            const dot = Dot.fromKey(dotKey);

            // If dot is not present in other and is known by other, it means it was removed
            if (other.dotContext.knows(dot) && !other.dotValues.has(dotKey)) {
                this.dotValues.delete(dotKey);
            }
        });

        other.dotValues.forEach((value, dotKey) => {
            // If dot is not known locally, add it
            if (!this.dotContext.knows(Dot.fromKey(dotKey))) {
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

    public toIntProto(): IntDotKernel {
        const protoDotKeys: DotProto[] = [];
        const protoDotValues: number[] = [];

        this.dotValues.forEach((value, dotKey) => {
            const protoDot = Dot.fromKey(dotKey).toProto();
            protoDotKeys.push(protoDot);
            protoDotValues.push(value as number);
        });

        return IntDotKernel.create({
            dotKeys: protoDotKeys,
            dotValues: protoDotValues,
        });
    }

    public toStringDotKernel(): StringDotKernel {
        const protoDotKeys: DotProto[] = [];
        const protoDotValues: string[] = [];

        this.dotValues.forEach((value, dotKey) => {
            const protoDot = Dot.fromKey(dotKey).toProto();
            protoDotKeys.push(protoDot);
            protoDotValues.push(value as string);
        });

        return StringDotKernel.create({
            dotKeys: protoDotKeys,
            dotValues: protoDotValues,
        });
    }

    public toEmptyProto(): EmptyDotKernel {
        const protoDotKeys: DotProto[] = [];

        this.dotValues.forEach((_, dotKey) => {
            const protoDot = Dot.fromKey(dotKey).toProto();
            protoDotKeys.push(protoDot);
        });

        return EmptyDotKernel.create({
            dotKeys: protoDotKeys,
        });
    }

    public static fromIntProto(proto: IntDotKernel, ctx: DotContext): DotKernel<number> {
        if (proto.dotKeys.length !== proto.dotValues.length) {
            throw new Error("DotKernel.fromProto: mismatched dot keys and values lengths");
        }

        const dotKernel = new DotKernel<number>();

        for (let i = 0; i < proto.dotKeys.length; i++) {
            const dot = Dot.fromProto(proto.dotKeys[i] as DotProto);
            const value = proto.dotValues[i];

            dotKernel.dotValues.set(dot.toKey(), value as number);
        }

        dotKernel.setContext(ctx);

        return dotKernel;
    }

    public static fromStringProto(proto: StringDotKernel, ctx: DotContext): DotKernel<string> {
        if (proto.dotKeys.length !== proto.dotValues.length) {
            throw new Error("DotKernel.fromProto: mismatched dot keys and values lengths");
        }

        const dotKernel = new DotKernel<string>();

        for (let i = 0; i < proto.dotKeys.length; i++) {
            const dot = Dot.fromProto(proto.dotKeys[i] as DotProto);
            const value = proto.dotValues[i];

            dotKernel.dotValues.set(dot.toKey(), value as string);
        }

        dotKernel.setContext(ctx);

        return dotKernel;
    }

    public static fromEmptyProto(proto: EmptyDotKernel, ctx: DotContext): DotKernel<null> {
        const dotKernel = new DotKernel<null>();

        for (let i = 0; i < proto.dotKeys.length; i++) {
            const dot = Dot.fromProto(proto.dotKeys[i] as DotProto);
            dotKernel.dotValues.set(dot.toKey(), null);
        }

        dotKernel.setContext(ctx);

        return dotKernel;
    }
}