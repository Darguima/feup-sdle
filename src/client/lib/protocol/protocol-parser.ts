import ProtocolEntity from "./protocol-entity";

interface ProtocolParser {
    parse(data: Uint8Array): ProtocolEntity
}