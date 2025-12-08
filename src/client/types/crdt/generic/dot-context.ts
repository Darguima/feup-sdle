import Dot from "./dot";
import { DotContext as DotContextProto, Dot as DotProto } from "@/lib/proto/global";

export default class DotContext {
    private versionVector: Map<string, number>;
    private dots: Set<string>;  // Using string representation, since objects do not work as Set keys

    constructor() {
        this.versionVector = new Map<string, number>();
        this.dots = new Set<string>();
    }

    public knows(dot: Dot): boolean {
        const localSeq = this.versionVector.get(dot.id) || 0;
        return dot.seq <= localSeq || this.dots.has(dot.toKey());
    }

    public makeDot(id: string): Dot {
        const localSeq = this.versionVector.get(id) || 0;
        const newSeq = localSeq + 1;

        this.versionVector.set(id, newSeq);
        return new Dot(id, newSeq);
    }

    public insertDot(dot: Dot, compact: boolean = true): void {
        this.dots.add(dot.toKey());
        if (compact) {
            this.compact();
        }
    }

    public compact(): void {
        let changed = true;

        while (changed) {
            changed = false;

            this.dots.forEach((dotKey) => {
                const dot = Dot.fromKey(dotKey);
                const localSeq = this.versionVector.get(dot.id) || 0;

                if (dot.seq === localSeq + 1) {  // Sequential order, can be merged into version vector
                    this.versionVector.set(dot.id, dot.seq);
                    this.dots.delete(dotKey);
                    changed = true;

                } else if (dot.seq <= localSeq) {  // Already known, can be removed
                    this.dots.delete(dotKey);
                    changed = true;
                }
            });
        }
    }

    public join(other: DotContext): void {
        // Optimization for complex CRDTs, which frequently join a context with itself
        if (this === other) {
            return;
        }

        // Pointwise maximum of version vectors
        other.versionVector.forEach((otherSeq, id) => {
            const localSeq = this.versionVector.get(id) || 0;
            this.versionVector.set(id, Math.max(localSeq, otherSeq));
        })

        this.dots = this.dots.union(other.dots);
        this.compact();
    }

    public clone(): DotContext {
        const newCtx = new DotContext();

        this.versionVector.forEach((seq, id) => {
            newCtx.versionVector.set(id, seq);
        });

        this.dots.forEach((dot) => {
            newCtx.dots.add(dot);
        });

        return newCtx;
    }

    public copy(other: DotContext): void {
        if (this === other) {
            return;
        }

        this.versionVector = new Map<string, number>(other.versionVector);
        this.dots = new Set<string>(other.dots);
    }

    public toProto(): DotContextProto {
        const protoDots = Array.from(this.dots).map(dotKey => {
            return Dot.fromKey(dotKey).toProto();
        });

        const protoVersionVector: { [key: string]: number } = {};
        this.versionVector.forEach((seq, id) => {
            protoVersionVector[id] = seq;
        });

        return DotContextProto.create({
            versionVector: protoVersionVector,
            dots: protoDots,
        });
    }

    public static fromProto(proto: DotContextProto): DotContext {
        const context = new DotContext();

        for (const id in proto.versionVector) {
            context.versionVector.set(id, proto.versionVector[id]);
        }

        for (const dotProto of proto.dots) {
            const dot = Dot.fromProto(dotProto as DotProto);
            context.dots.add(dot.toKey());
        }

        return context;
    }
}