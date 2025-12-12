import NullProtocolSocket from "../protocol/null-protocol-socket";
import ProtocolSocket from "../protocol/protocol-socket";
import WebProtocolSocket from "../protocol/web-protocol-socket";

export default class SocketCoordinator {
  private socket: ProtocolSocket = new NullProtocolSocket();
  private knownUrls: string[];

  constructor(seedUrls: string[]) {
    this.knownUrls = seedUrls;
  }

  private async connectSocket(url: string): Promise<WebProtocolSocket> {
    const ws = new WebSocket(url);
    const socket = new WebProtocolSocket(ws, (event) => {
        console.error("WebSocket error on " + url, event);
    });
    await socket.connect();
    return socket;
  }

  private async getRandomSocket(): Promise<WebProtocolSocket> {
    if (this.socket instanceof WebProtocolSocket && this.socket.isConnected()) {
        return this.socket;
    }

    for (const url of this.knownUrls) {
        try {
            const socket = await this.connectSocket(url);
            this.socket = socket;
            return socket;
        } catch (error) {}
    }

    throw new Error("Unable to connect to any known URLs.");
  }

  public async updateMembership(): Promise<void> {
    const socket = await this.getRandomSocket();

    // Placeholder for membership update logic
    // This could involve sending a request to the server to get updated URLs
  }

  private getResponsibleNodes(listId: string): string[] {
    // Placeholder for consistent hashing logic to get responsible nodes for a list
    return this.knownUrls;
  }

  public async getBestSocketForList(listId: string): Promise<ProtocolSocket> {
    const currentUrl = this.socket.isConnected() ? this.socket.getUrl() : null;
    const responsibleNodes = this.getResponsibleNodes(listId);

    if (currentUrl && responsibleNodes.includes(currentUrl)) {
        return this.socket;
    }

    for (const url of responsibleNodes) {
        try {
            const ws = new WebSocket(url);
            const socket = new WebProtocolSocket(ws, (event) => {
                console.error("WebSocket error on " + url, event);
            });
            await socket.connect();

            this.socket = socket;
            return socket;
        } catch (error) {}
    }

    throw new Error("Unable to connect to any responsible nodes for list: " + listId);
  }
}
