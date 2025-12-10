import { ClientRequest } from "../proto/client";
import ProtocolRequest from "./protocol-entity";

export default class SubscribeShoppingListRequest implements ProtocolRequest {
    private listId: string;

    constructor(id: string) {
        this.listId = id;
    }

    public toClientRequest(): ClientRequest {
        return ClientRequest.create({
            messageId: crypto.randomUUID(),
            subscribeShoppingList: {
                id: this.listId
            }
        });
    }
}