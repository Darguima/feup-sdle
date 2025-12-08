import { splitOnceFromEnd } from "@/lib/utils";
import { Dot as DotProto } from "@/lib/proto/global";

export default class Dot {
    public id: string;
    public seq: number;

    constructor(id: string, seq: number) {
        this.id = id;
        this.seq = seq;
    }

    toKey(): string {
        return `${this.id}:${this.seq}`;
    }

    static fromKey(key: string): Dot {
        const [id, seqStr] = splitOnceFromEnd(key, ":");
        return new Dot(id, parseInt(seqStr, 10));
    }

    toProto(): DotProto {
        return DotProto.create({ id: this.id, seq: this.seq });
    }

    static fromProto(proto: DotProto): Dot {
        return new Dot(proto.id, proto.seq);
    }
}