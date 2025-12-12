import { isIterableEmpty } from "@/lib/utils";
import DotContext from "./dot-context";
import DotKernel from "./dot-kernel";
import { StringDotKernel, StringMVReg } from "@/lib/proto/client";

export default class MVReg<T> {
 	id: string;
 	dotKernel: DotKernel<T>;

 	constructor(id: string) {
 		this.id = id;
 		this.dotKernel = new DotKernel<T>();
 	}

    getContext(): DotContext {
        return this.dotKernel.getContext();
    }

    setContext(ctx: DotContext): void {
        this.dotKernel.setContext(ctx);
    }

    read(): T[] {
        const values: T[] = [];

        for (const [_, value] of this.dotKernel.getValues()) {
            values.push(value);
        }

        return values;
    }

    write(value: T): MVReg<T> {
        const delta = new MVReg<T>(this.id);

        delta.dotKernel = this.dotKernel.reset();
        delta.dotKernel.join(this.dotKernel.add(this.id, value));

        return delta;
    }

    reset(): MVReg<T> {
        const delta = new MVReg<T>(this.id);
        delta.dotKernel = this.dotKernel.reset();
        return delta;
    }

    join(other: MVReg<T>): void {
        this.dotKernel.join(other.dotKernel);
    }

    collapse(maxFn: (a: T, b: T) => T): MVReg<T> {
        const delta = new MVReg<T>(this.id);

        let maxValue: T | null = null;
        for (const [_, value] of this.dotKernel.getValues()) {
            if (maxValue === null) {
                maxValue = value;
            } else {
                maxValue = maxFn(maxValue, value);
            }
        }

        for (const [_, value] of this.dotKernel.getValues()) {
            if (value !== maxValue) {
                delta.dotKernel.join(this.dotKernel.removeValue(value));
            }
        }

        return delta;
    }

    isNull(): boolean {
        return isIterableEmpty(this.dotKernel.getValues());
    }

    clone(): MVReg<T> {
        const clone = new MVReg<T>(this.id);
        clone.dotKernel = this.dotKernel.clone();
        return clone;
    }

    toStringProto(): StringMVReg {
        const stringDotKernel = this.dotKernel.toStringDotKernel();
        return StringMVReg.create({
            dotKernel: stringDotKernel,
        });
    }

    static fromStringProto(proto: StringMVReg, replicaId: string, ctx: DotContext): MVReg<string> {
        const dotKernel = DotKernel.fromStringProto(proto.dotKernel as StringDotKernel, ctx);

        const mvreg = new MVReg<string>(replicaId);
        mvreg.dotKernel = dotKernel;

        return mvreg;
    }
}