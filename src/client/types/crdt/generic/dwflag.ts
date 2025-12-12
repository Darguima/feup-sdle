import { isIterableEmpty } from "@/lib/utils";
import DotContext from "./dot-context";
import DotKernel from "./dot-kernel";
import { EmptyDotKernel, DWFlag as DWFlagProto } from "@/lib/proto/client";

export default class DWFlag {
    replicaId: string;
    dotKernel: DotKernel<null>;

    constructor(replicaId: string) {
        this.replicaId = replicaId;
        this.dotKernel = new DotKernel<null>();
    }

    public getContext() {
        return this.dotKernel.getContext();
    }

    public setContext(context: DotContext): void {
        this.dotKernel.setContext(context);
    }

    public read(): boolean {
        return isIterableEmpty(this.dotKernel.getValues());
    }

    public disable(): DWFlag {
        const delta = new DWFlag(this.replicaId);

        delta.dotKernel = this.dotKernel.reset();
        delta.dotKernel.join(this.dotKernel.add(this.replicaId, null));

        return delta;
    }

    public enable(): DWFlag {
        const delta = new DWFlag(this.replicaId);

        delta.dotKernel = this.dotKernel.reset();

        return delta;
    }

    public join(other: DWFlag): void {
        this.dotKernel.join(other.dotKernel);
    }

    public isNull(): boolean {
        return isIterableEmpty(this.dotKernel.getValues());
    }

    public clone(): DWFlag {
        const clone = new DWFlag(this.replicaId);
        clone.dotKernel = this.dotKernel.clone();
        return clone;
    }

    public toProto(): DWFlagProto {
        const stringDotKernel = this.dotKernel.toEmptyProto();
        return DWFlagProto.create({
            dotKernel: stringDotKernel,
        });
    }

    public static fromProto(proto: DWFlagProto, replicaId: string): DWFlag {
        const dotKernel = DotKernel.fromEmptyProto(proto.dotKernel as EmptyDotKernel, new DotContext());

        const flag = new DWFlag(replicaId);
        flag.dotKernel = dotKernel;

        return flag;
    }
}