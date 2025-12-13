import NullProtocolSocket from "../protocol/null-protocol-socket";
import ProtocolSocket from "../protocol/protocol-socket";
import WebProtocolSocket from "../protocol/web-protocol-socket";
import RequestRingView from "../protocol/request-ring-view";

export default class SocketCoordinator {
  private socket: ProtocolSocket = new NullProtocolSocket();

  private knownTokens: number[] = [];
  private knownNodeIds: string[];
  private ringView: { [k: number]: string } = {};

  constructor(seedIds: string[]) {
    if (seedIds.length === 0) {
      throw new Error("At least one seed ID must be provided to initialize SocketCoordinator.");
    }

    this.knownNodeIds = seedIds;
    this.ringView = {};
    // Initialize with a simple mapping for the seed node
    // In case of error during updateMembership, we at least have one node to connect to
    this.ringView[this.knownTokens[0]] = this.knownNodeIds[0];

    this.updateMembership()
  }

  // needs a better error handling strategy here
  public async updateMembership(): Promise<void> {
    const socket = await this.getRandomSocket();

    try {
      const req = new RequestRingView();
      return await socket.send(req, async (response) => {
        if (response.ringView && response.ringView.tokenToNode) {
          this.ringView = response.ringView.tokenToNode;

          this.knownTokens = Object.keys(this.ringView).map(Number).sort((a, b) => a - b);
          this.knownNodeIds = Array.from(new Set(Object.values(this.ringView)));

          return true;
        } else {
          console.warn("Invalid ring view response:", response);
          return false
        }
      });
    } catch (err) {
      console.warn("Failed to request ring view:", err);
    }
  }

  private idToUrl(id: string): string {
    const address = id.slice(0, id.indexOf(":"));
    const port = Number(id.slice(id.indexOf(":") + 1)) + 3000

    const url = `ws://${address}:${port}/ws`;

    return url;
  }

  // expected url format: ws://hostname:port/path
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

    // Shuffle knownNodeIds to randomize connection attempts (kinda a load balancing strategy; don;t overload first node)
    const shuffledIds = this.knownNodeIds
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    for (const id of shuffledIds) {
      try {
        const url = this.idToUrl(id);

        const socket = await this.connectSocket(url);
        this.socket = socket;
        return socket;
      } catch (error) { }
    }

    throw new Error("Unable to connect to any known URLs.");
  }

  private async hashKey(s: string): Promise<number> {
    const HASH_SPACE_SIZE = 12;

    // SHA-1 Hashing (20 bytes)
    const encoder = new TextEncoder();
    const data = encoder.encode(s);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);

    // 2. Truncation and Conversion (Replicating Go's sum[:8] and binary.BigEndian.Uint64)
    const dataView = new DataView(hashBuffer);
    const uint64Value = dataView.getBigUint64(0, false);
    const finalHashKey = Number(uint64Value % BigInt(HASH_SPACE_SIZE));

    return finalHashKey;
  }

  private async getResponsibleNodes(listId: string): Promise<string> {
    const listHashKey = await this.hashKey(listId);

    // Find the first token greater than or equal to listHashKey
    for (const token of this.knownTokens) {
      if (token >= listHashKey) {
        // Return the corresponding node ID
        return this.ringView[token];
      }
    }

    return this.ringView[this.knownTokens[0]];
  }

  public async getBestSocketForList(listId: string): Promise<ProtocolSocket> {
    const currentUrl = this.socket.isConnected() ? this.socket.getUrl() : null;
    const responsibleNode = await this.getResponsibleNodes(listId);
    const responsibleNodeUrl = this.idToUrl(responsibleNode);

    if (currentUrl && currentUrl === responsibleNodeUrl) {
      return this.socket;
    }

    try {
      const newSocket = await this.connectSocket(responsibleNodeUrl);
      this.socket = newSocket;
      return newSocket;
    } catch (error) {
      console.error("Failed to connect to responsible node:", responsibleNodeUrl, error);
    }

    throw new Error("Unable to connect to any responsible nodes for list: " + listId);
  }
}
