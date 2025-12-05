class WebProtocolSocket implements ProtocolSocket {
    private socket: WebSocket;

    constructor(url: string) {
        this.socket = new WebSocket(url);
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

    sendTo(entity: ProtocolEntity, recipientId: string): void {
        const buffer = entity.serialize();
        this.socket.send(buffer);
    }
}

export default WebProtocolSocket;
