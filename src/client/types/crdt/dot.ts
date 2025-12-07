import { splitOnceFromEnd } from "@/lib/utils";

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
}