# 📦 Changelog

## [v0.1.0] - Initial Release

### 🚀 Features
- Solidity smart contract for credential issuance and revocation
- Node.js DID issuer API with Verifiable Credential JWT output
- React-based DApp to issue, preview, and export credentials
- Rust SHA-256 hash utility library (ZK-ready)
- IPFS metadata storage support via web3.storage
- ENS resolution and CSV export of issued credentials
- Hardhat deployment scripts and test coverage
- GitHub Actions CI for automated builds

### 📁 Directory Structure
- `contracts/` – Solidity smart contracts (Hardhat)
- `issuer-api/` – DID credential issuing server (Express + ethr-did)
- `app/` – React DApp (Next.js + ethers.js + Tailwind)
- `zkhashlib/` – Rust hash module (SHA-256)
