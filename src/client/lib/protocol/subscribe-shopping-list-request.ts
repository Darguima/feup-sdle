import { randomUUID } from "crypto";
import { ClientRequest, IClientRequest } from "../proto/client";
import ProtocolEntity from "./protocol-entity";

export default class SubscribeShoppingListRequest implements ProtocolEntity {
    private listId: string;

    constructor(id: string) {
        this.listId = id;
    }

    public toClientRequest(): IClientRequest {
        return ClientRequest.create({
            messageId: randomUUID(),
            subscribeShoppingList: {
                id: this.listId
            }
        });
    }
}