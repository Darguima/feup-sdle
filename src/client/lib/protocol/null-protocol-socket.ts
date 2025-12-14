import ProtocolRequest from "./protocol-entity";
import ProtocolSocket from "./protocol-socket";

export default class NullProtocolSocket implements ProtocolSocket {
    send(entity: ProtocolRequest): void {
        console.warn("Socket not connected. Cannot send entity:", entity);
    }

    async connect(): Promise<void> {
        console.warn("NullProtocolSocket cannot connect.");
    }

    close(): void {
        console.warn("NullProtocolSocket cannot be closed because it is not connected.");
    }

    getUrl(): string {
        return "null://";
    }

    isConnected(): boolean {
        return false;
    }
}