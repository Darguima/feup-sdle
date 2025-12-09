import { ShoppingList } from "@/types";
import { ClientRequest, ServerResponse, ShoppingList as ShoppingListProto } from "../proto/client";
import ProtocolEntity from "./protocol-entity";
import ProtocolSocket from "./protocol-socket";

class WebProtocolSocket implements ProtocolSocket {
    private socket: WebSocket;
    private isOpen: Promise<void>;
    private onShoppingList: (list: ShoppingList) => void = () => {};

    constructor(ws: WebSocket) {
        this.socket = ws;

        this.isOpen = new Promise((resolve, reject) => {
            this.socket.onopen = (event: Event) => {
                console.log("WebSocket connection established on " + this.socket.url);
                resolve();
            };

            this.socket.onerror = (event: Event) => {
                console.error("WebSocket error on " + this.socket.url, event);
                reject(new Error("WebSocket connection failed"));
            };
        });

        // Create a Promise that resolves when the WebSocket is open
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onclose = this.onClose.bind(this);
    }

    private async onMessage(event: MessageEvent): Promise<void> {
        const buffer = await (event.data as Blob).arrayBuffer();
        const response = ServerResponse.decode(new Uint8Array(buffer));

        switch (response.responseType) {
            case "shoppingList":
                const shoppingList = ShoppingList.fromProto(response.shoppingList as ShoppingListProto)
                this.onShoppingList(shoppingList);
                break;
        }
    }

    private onClose(event: CloseEvent): void {
        console.log("WebSocket connection closed on " + this.socket.url, event);
    }

    async send(entity: ProtocolEntity): Promise<void> {
        // Wait for the WebSocket to be open
        await this.isOpen;

        if (this.socket.readyState !== WebSocket.OPEN) {
            console.error("WebSocket is not open. Current state:", this.socket.readyState);
            return;
        }

        const buffer = ClientRequest.encode(entity.toClientRequest()).finish();

        console.log("Sending entity via WebSocket:", buffer);

        this.socket.send(buffer);
    }

    setOnShoppingListCallback(callback: (list: ShoppingList) => void): void {
        this.onShoppingList = callback;
    }
}

export default WebProtocolSocket;
