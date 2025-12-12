import { ClientRequest } from "../proto/client";

export default interface ProtocolRequest {
    toClientRequest(): ClientRequest;
}
