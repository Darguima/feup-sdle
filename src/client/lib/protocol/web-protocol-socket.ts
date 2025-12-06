import { Entity } from "../proto/global";
import ProtocolEntity from "./protocol-entity";
import ProtocolSocket from "./protocol-socket";

class WebProtocolSocket implements ProtocolSocket {
    private socket: WebSocket;

    constructor(ws: WebSocket) {
        this.socket = ws;
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.onerror = this.onError.bind(this);
        this.socket.onclose = this.onClose.bind(this);
    }

    private onOpen(event: Event): void {
        console.log("WebSocket connection established on " + this.socket.url);
    }

    private onMessage(event: MessageEvent): void {
        console.log("Message received from server:", event.data);
    }

    private onError(event: Event): void {
        console.error("WebSocket error on " + this.socket.url, event);
    }

    private onClose(event: CloseEvent): void {
        console.log("WebSocket connection closed on " + this.socket.url, event);
    }

    send(entity: ProtocolEntity): void {
        const buffer = Entity.encode(entity.toProto()).finish();
        console.log("Sending entity via WebSocket:", buffer);
        this.socket.send(buffer);
    }
}

export default WebProtocolSocket;
