# SDLE Assignment

SDLE Assignment of group T02G01

Group members:

1. Bruno Oliveira (up202208700@up.pt)
2. Dário Guimarães (up202502543@up.pt)
3. Henrique Fernandes (up202204988@up.pt)

## Project Description

This project implements a distributed shopping list system inspired by Amazon's Dynamo paper. It features a decentralized, peer-to-peer architecture with eventual consistency, allowing users to manage shopping lists across multiple nodes with high availability and partition tolerance.

### Configuration

Default configuration can be found in `src/server/config/config.go`:

- **N = 3**: Replication factor
- **W = 2**: Write quorum
- **R = 2**: Read quorum
- **RequestTimeout**: 250ms
- **HintDeliveryInterval**: 10s

## Running the Backend

The backend is a Go application that runs distributed nodes in a peer-to-peer network.

### Prerequisites

- Go 1.25.4 or higher

### Instructions

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
go mod download
```

3. Run the first node (seed node):

```bash
go run . localhost:5000 localhost:5000
```

The first node uses the same address for both the node URL and seed URL since it's the initial node in the network.

4. Run additional nodes (in separate terminals):

```bash
# Second node
go run . localhost:5001 localhost:5000

# Third node
go run . localhost:5002 localhost:5000

# And so on...
```

Each subsequent node should use a previous node (typically `localhost:5000`) as the seed to join the network.

**Command format:**

```bash
go run . <node_url:port> <seed_url:port>
```

## Running the Frontend

The frontend is a Next.js application that provides the user interface for managing shopping lists.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Instructions

1. Navigate to the client directory:

```bash
cd client
```

2. Copy the environment configuration:

```bash
cp .env.example .env
```

3. Install dependencies:

```bash
npm install
```

4. Build and launch the client:

```bash
npm run build
npm run start
```

5. Open your browser and navigate to:

```
http://localhost:3000
```

### Environment Variables

The `.env` file contains configuration for:

- `NEXT_PUBLIC_WEBSOCKET_RETRY_INTERVAL`: WebSocket reconnection interval (default: 5000ms)
- `NEXT_PUBLIC_SEED_ID`: Initial seed node address (default: localhost:5000)
- `NEXT_PUBLIC_MEMBERSHIP_UPDATE_INTERVAL`: Membership update interval (default: 10000ms)

## Testing Workflow

1. Start the backend nodes (at least N nodes)
2. Start the frontend server
3. Connect to the frontend and begin creating / amanaging shopping lists
