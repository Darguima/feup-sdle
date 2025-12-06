import ProtocolEntity from "./protocol-entity";

export default interface ProtocolSocket {
    send(entity: ProtocolEntity): void;  // TODO: Change to use proper node identification
}