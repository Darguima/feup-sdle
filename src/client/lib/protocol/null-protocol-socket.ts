import ProtocolEntity from "./protocol-entity";
import ProtocolSocket from "./protocol-socket";

export default class NullProtocolSocket implements ProtocolSocket {
    send(entity: ProtocolEntity): void {
        console.warn("Socket not connected. Cannot send entity:", entity);
    }
}