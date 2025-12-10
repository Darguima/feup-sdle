import { ClientRequest, IClientRequest } from "../proto/client";
import ProtocolEntity from "./protocol-entity";

export default class GetShoppingListRequest implements ProtocolEntity {
    private listId: string;

    constructor(listId: string) {
        this.listId = listId;
    }

    public getListId(): string {
        return this.listId;
    }

    public toClientRequest(): IClientRequest {
        return ClientRequest.create({
            messageId: crypto.randomUUID(),
            getShoppingList: {
                id: this.listId
            }
        })

    }
}
