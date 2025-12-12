import { ServerResponse } from "../proto/client";
import ProtocolRequest from "./protocol-entity";

export default interface ProtocolSocket {
    send(entity: ProtocolRequest, onRes: (response: ServerResponse) => Promise<boolean>): void;
    // onRes returns whether the handler is done and can be removed

    isConnected(): boolean;
}