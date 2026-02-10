<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Distributed Key-Value Store & Offline-First Shopping Lists</h3>

  <p align="center">
    A Dynamo-inspired, peer-to-peer key-value store powering an offline-first shopping list app.
    <br />
    <br />
    <a href="#-demo">View Demo</a>
    &middot;
    <a href="#-getting-started-with-development">Start Developing</a>
  </p>

<h4 align="center">
⭐ Don't forget to Starring ⭐
</h4>

  <div align="center">

[![React.js][React.js-badge]][React-url]
[![Go][Go-badge]][Go-url]
![Distributed Systems][DistSys-badge]
![CRDT][CRDT-badge]

  </div>

  <div align="center">

![University][university-badge]
![Subject][subject-badge]
![Grade][grade-badge]

  </div>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>📋 Table of Contents</summary>

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Usage](#-usage)
- [Getting Started with Development](#-getting-started-with-development)
- [Project Structure](#️-project-structure)
- [Contributing](#-contributing)
- [Developed by](#-developed-by)
</details>



## 🔍 About The Project

### 🎯 The goal

Build a highly available, partition-tolerant shopping list system that continues to work offline and converges through eventual consistency when nodes reconnect.

### ⚙️ How it works?

The backend is a decentralized peer-to-peer ring inspired by the Amazon Dynamo architecture. Data is replicated across $N$ nodes using configurable read/write quorums ($R/W$) and anti-entropy mechanisms. Shopping lists are modeled with CRDTs to guarantee convergence under concurrent updates. The frontend is a Next.js app that persists data locally for offline use and syncs through a WebSocket-based protocol with the backend.

### 🎬 Demo

See the screenshots and presentation slides in the project deliverables, or check our [demo video](https://youtu.be/-PeL98AcpD4) for a walkthrough of the system in action.

[![Watch the video](https://img.youtube.com/vi/-PeL98AcpD4/maxresdefault.jpg)](https://youtu.be/-PeL98AcpD4)

### 🧩 Features

- Dynamo-inspired replication with $N/R/W$ quorums
- CRDT-based shopping lists for conflict-free merges
- Offline-first UX with local storage and background sync
- Membership and ring management for node join/leave



## 📖 Usage

1. Start at least three backend nodes (see instructions below).
2. Launch the frontend app and connect to the seed node.
3. Create shopping lists, add items, and edit concurrently across clients.
4. Disconnect/reconnect clients or nodes to observe eventual convergence.



## 🚀 Getting Started with Development

To get a local copy up and running follow these simple example steps.

### 1. Prerequisites

- [Git](https://git-scm.com/downloads)
- [Go](https://go.dev/dl/) 1.25.4+
- [Node.js](https://nodejs.org/) 18+

### 2. Cloning

Now clone the repository to your local machine. You can do this using Git:

```bash
$ git clone git@github.com:darguima/feup-sdle.git
# or
$ git clone https://github.com/darguima/feup-sdle.git
```

### 3. Dependencies

Backend dependencies:

```bash
cd src/server
go mod download
```

Frontend dependencies:

```bash
cd src/client
npm install
```

### 4. Setup

Create the frontend environment file:

```bash
cd src/client
cp .env.example .env
```

Optional configuration (backend):

See `src/server/config/config.go` for $N/R/W$ and timing parameters.

### 5. Building & Running

#### Backend

```bash
cd src/server
go run . localhost:5000 localhost:5000
```

In separate terminals, join additional nodes:

```bash
cd src/server
go run . localhost:5001 localhost:5000
go run . localhost:5002 localhost:5000
```

#### Frontend

```bash
cd src/client
npm run build
npm run start
```

Open http://localhost:3000



## 🏗️ Project Structure

```
feup-sdle/
├── README.md                  - Project overview
├── doc/                       - Documentation assets
├── statement/                 - Assignment statement and references
└── src/
  ├── client/                - Next.js frontend (offline-first UI)
  ├── server/                - Go backend (Dynamo-inspired store)
  └── proto/                 - Protocol buffer definitions
```



## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 👨‍💻 Developed by

- [Process-ing](https://github.com/Process-ing)
- [Darguima](https://github.com/darguima)
- [HenriqueSFernandes](https://github.com/henriqueSFernandes)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[university-badge]: https://img.shields.io/badge/University-FEUP-B22222?style=for-the-badge
[subject-badge]: https://img.shields.io/badge/Subject-SDLE-blue?style=for-the-badge
[grade-badge]: https://img.shields.io/badge/Grade-20%2F20-brightgreen?style=for-the-badge

[React.js-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Go-badge]: https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white
[Go-url]: https://go.dev/

[DistSys-badge]: https://img.shields.io/badge/Distributed%20Systems-333333?style=for-the-badge

[CRDT-badge]: https://img.shields.io/badge/CRDT-FFD700?style=for-the-badge