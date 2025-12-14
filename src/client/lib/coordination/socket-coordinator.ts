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

    // Initialize ring view with a simple mapping for the seeder nodes
    // In case of error during updateMembership, we have at least seeder nodes to connect to
    this.ringView = {};
    this.knownNodeIds.forEach((id, index) => {
      const HASH_SPACE_SIZE = Number.parseInt(process.env.NEXT_PUBLIC_HASH_SPACE_SIZE || "65536", 10);
      const token = Math.floor((index + 1) * (HASH_SPACE_SIZE / (this.knownNodeIds.length + 1)));
      this.ringView[token] = id;
      this.knownTokens.push(token);
      this.knownTokens.sort((a, b) => a - b);
    });

    console.log("[Socket-Coordinator] - Initial faked ring view:", this.ringView);

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
          console.log("[Socket-Coordinator] - Updated ring view:", this.ringView);

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
  private async connectSocket(url: string, timeoutMs: number = 500): Promise<WebProtocolSocket | null> {
    let ws: WebSocket | null = null;
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (this.socket instanceof WebProtocolSocket && this.socket.getUrl() === url && this.socket.isConnected()) {
      return this.socket;
    } else if (this.socket instanceof WebProtocolSocket && this.socket.isConnected()) {
      this.socket.close();
    }

    try {
      ws = new WebSocket(url);
      const socket = new WebProtocolSocket(ws, () => { });

      // Enforce timeout for the connect() promise
      await Promise.race([
        socket.connect(),
        new Promise<never>((_, reject) => {
          timer = setTimeout(() => reject(new Error("CONNECT_TIMEOUT")), timeoutMs);
        }),
      ]);

      if (timer) clearTimeout(timer);

      this.socket = socket;
      return socket;

    } catch (error) {
      if (timer) clearTimeout(timer);
      try { ws?.close(); } catch { /* noop */ }
      return null;
    }
  }

  private async getRandomSocket(): Promise<WebProtocolSocket> {
    if (this.socket instanceof WebProtocolSocket && this.socket.isConnected()) {
      return this.socket;
    }

    // Shuffle knownNodeIds to randomize connection attempts (kinda a load balancing strategy to not overload first node)
    const shuffledIds = this.knownNodeIds
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    for (const id of shuffledIds) {
      try {
        const url = this.idToUrl(id);

        const socket = await this.connectSocket(url);
        if (socket) {
          return socket;
        }
      } catch (error) {
        // socket not reachable, try next
      }
    }

    throw new Error("Unable to connect to any known URLs.");
  }

  private async hashKey(s: string): Promise<number> {
    const HASH_SPACE_SIZE = Number.parseInt(process.env.NEXT_PUBLIC_HASH_SPACE_SIZE || "65536", 10);

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

  private async getResponsibleNodes(listId: string): Promise<string[]> {
    const PREFERENCE_LIST_SIZE = Number.parseInt(process.env.NEXT_PUBLIC_PREFERENCE_LIST_SIZE || "3", 10);
    
    listId = `shoppinglist_${listId}`;

    const listHashKey = await this.hashKey(listId);

    // Find first responsible node
    let startIdx = 0;
    for (let i = 0; i < this.knownTokens.length; i++) {
      if (this.knownTokens[i] >= listHashKey) {
        startIdx = i;
        break;
      }
    }

    const nodes: string[] = [];
    const seen: Record<string, boolean> = {};

    // Iterate around the ring collecting distinct node IDs
    for (let i = 0; nodes.length < PREFERENCE_LIST_SIZE && i < this.knownTokens.length; i++) {
      const idx = (startIdx + i) % this.knownTokens.length;
      const token = this.knownTokens[idx];
      const nodeId = this.ringView[token];

      if (nodeId && !seen[nodeId]) {
        nodes.push(nodeId);
        seen[nodeId] = true;
      }
    }

    return nodes;
  }

  public async getBestSocketForList(listId: string): Promise<ProtocolSocket> {
    const preferenceListUrls = (await this.getResponsibleNodes(listId)).map(id => this.idToUrl(id));
    console.log("[Socket-Coordinator] - Preference nodes list:", preferenceListUrls);

    if (preferenceListUrls.length === 0) {
      throw new Error("No responsible nodes available");
    }

    for (const nodeUrl of preferenceListUrls) {
      try {
        const newSocket = await this.connectSocket(nodeUrl);

        if (!newSocket) {
          continue;
        }

        console.log(`[Socket-Coordinator] - Connected to node at preference list index ${preferenceListUrls.indexOf(nodeUrl)}: ${nodeUrl}`);

        return newSocket;
      } catch (error) {
        // try next node
      }
    }

    throw new Error("Unable to connect to any responsible nodes for list: " + listId);
  }
}
