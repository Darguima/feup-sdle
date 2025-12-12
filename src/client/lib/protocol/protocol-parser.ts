import ProtocolRequest from "./protocol-entity";

interface ProtocolParser {
    parse(data: Uint8Array): ProtocolRequest
}