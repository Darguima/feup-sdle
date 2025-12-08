import DotContext from "./dot-context";

export default interface ORMapValue<V> {
    getContext(): DotContext;
    setContext(context: DotContext): void;

    join(other: V): void;
    reset(): V;
    isNull(): boolean;
    clone(): V;
}