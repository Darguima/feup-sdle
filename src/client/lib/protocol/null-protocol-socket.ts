import ProtocolRequest from "./protocol-entity";
import ProtocolSocket from "./protocol-socket";

export default class NullProtocolSocket implements ProtocolSocket {
    send(entity: ProtocolRequest): void {
        console.warn("Socket not connected. Cannot send entity:", entity);
    }

    isConnected(): boolean {
        return false;
    }
}