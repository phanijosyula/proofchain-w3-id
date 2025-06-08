# Web3 ID Issuer

A full-stack decentralized identity and verifiable credentials system powered by Solidity, React, Node.js, and Rust.

## 🔐 Features

- ✅ DID-based credential signing using `ethr-did`
- ✅ W3C-compliant Verifiable Credentials
- ✅ Revocation registry smart contract
- ✅ IPFS metadata storage via web3.storage
- ✅ Credential issuance + verification via React DApp
- ✅ CSV export and ENS name resolution
- ✅ Rust-based Poseidon/Merkle hashing lib (ZK-ready)

## 📦 Components

- `contracts/`: Solidity smart contracts
- `issuer-api/`: Node.js Express issuer backend with DID support
- `app/`: React frontend DApp
- `zkhashlib/`: Rust crypto lib for ZK credential proofs

## 🚀 Getting Started

Each folder includes its own README and setup scripts. See `/app`, `/issuer-api`, and `/contracts`.

## 📄 License

MIT
