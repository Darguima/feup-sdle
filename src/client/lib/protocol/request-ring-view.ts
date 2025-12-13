import { ClientRequest } from "../proto/client";
import ProtocolRequest from "./protocol-entity";

export default class RequestRingView implements ProtocolRequest {
    public toClientRequest(): ClientRequest {
        return ClientRequest.create({
            messageId: crypto.randomUUID(),
            ringView: {}
        });
    }
}
