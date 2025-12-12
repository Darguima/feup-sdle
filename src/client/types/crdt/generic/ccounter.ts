import { isIterableEmpty } from "@/lib/utils";
import Dot from "./dot";
import DotContext from "./dot-context";
import DotKernel from "./dot-kernel";
import ORMapValue from "./ormap-value";
import { CCounter as CCounterProto, IntDotKernel } from "@/lib/proto/global";

export default class CCounter implements ORMapValue<CCounter> {
    private replicaId: string;
    private dotKernel: DotKernel<number>;

    constructor(replicaId: string) {
        this.replicaId = replicaId;
        this.dotKernel = new DotKernel<number>();
    }

    public getContext() {
        return this.dotKernel.getContext();
    }

    public setContext(context: DotContext): void {
        this.dotKernel.setContext(context);
    }

    public read(): number {
        let total = 0;
        for (const [, value] of this.dotKernel.getValues()) {
            total += value;
        }
        return total;
    }

    // Removes the old dot for this replica, if any, applies the difference to the
    // delta, and returns the old value (or zero if absent)
    public removeOldDot(delta: CCounter): number {
        for (const [dotKey, value] of this.dotKernel.getValues()) {
            const dot = Dot.fromKey(dotKey);
            if (dot.id === this.replicaId) {
                delta.dotKernel.join(this.dotKernel.removeDot(dot));
                return value;
            }
        }

        return 0;
    }

    public inc(diff: number): CCounter {
        const delta = new CCounter(this.replicaId);

        const oldValue = this.removeOldDot(delta);
        const newValue = oldValue + diff;

        const addDelta = this.dotKernel.add(this.replicaId, newValue);
        delta.dotKernel.join(addDelta)

        return delta;
    }

    public reset(): CCounter {
        const delta = new CCounter(this.replicaId);
        delta.dotKernel = this.dotKernel.reset();
        return delta;
    }

    public join(other: CCounter): void {
        this.dotKernel.join(other.dotKernel);
    }

    public isNull(): boolean {
        return isIterableEmpty(this.dotKernel.getValues());
    }

    public clone(): CCounter {
        const clone = new CCounter(this.replicaId);
        clone.dotKernel = this.dotKernel.clone();
        return clone;
    }

    public newEmpty<V>(replicaId: string): V {
        return new CCounter(replicaId) as V;
    }

    public toProto(): CCounterProto {
        return CCounterProto.create({
            dotKernel: this.dotKernel.toIntProto(),
        })
    }

    public static fromProto(proto: CCounterProto, replicaId: string, ctx: DotContext): CCounter {
        const dotKernel = DotKernel.fromIntProto(proto.dotKernel as IntDotKernel, ctx);

        const counter = new CCounter(replicaId);
        counter.dotKernel = dotKernel;

        return counter;
    }
}