import { ClientRequest, ServerResponse } from "../proto/client";
import ProtocolRequest from "./protocol-entity";
import ProtocolSocket from "./protocol-socket";

class WebProtocolSocket implements ProtocolSocket {
    private socket: WebSocket;
    private isOpen: Promise<void>;
    private resHandlers: Map<string, (response: ServerResponse) => Promise<boolean>> = new Map();

    constructor(ws: WebSocket, onError: (event: Event) => void) {
        this.socket = ws;

        this.isOpen = new Promise((resolve, reject) => {
            this.socket.onopen = (event: Event) => {
                console.log("WebSocket connection established on " + this.socket.url);
                resolve();
            };

            this.socket.onerror = onError;
        });

        // Create a Promise that resolves when the WebSocket is open
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onclose = this.onClose.bind(this);
    }

    private async onMessage(event: MessageEvent): Promise<void> {
        const buffer = await (event.data as Blob).arrayBuffer();
        const response = ServerResponse.decode(new Uint8Array(buffer));

        console.log("Received message via WebSocket:", response);

        const handler = this.resHandlers.get(response.messageId!);
        if (!handler) {
            console.warn("No handler found for message ID:", response.messageId);
            return;
        }

        const done = await handler(response);
        if (done) {
            this.resHandlers.delete(response.messageId!);
        }
    }

    private onClose(event: CloseEvent): void {
        console.log("WebSocket connection closed on " + this.socket.url, event);
    }

    async send(request: ProtocolRequest, onRes: (response: ServerResponse) => Promise<boolean>): Promise<void> {
        // Wait for the WebSocket to be open
        await this.isOpen;

        if (this.socket.readyState !== WebSocket.OPEN) {
            console.error("WebSocket is not open. Current state:", this.socket.readyState);
            return;
        }

        const clientReq = request.toClientRequest();
        const buffer = ClientRequest.encode(clientReq).finish();

        console.log("Sending entity via WebSocket:", buffer);

        this.resHandlers.set(clientReq.messageId!, onRes);
        this.socket.send(buffer);
    }

    isConnected(): boolean {
        return this.socket.readyState === WebSocket.OPEN;
    }
}

export default WebProtocolSocket;
