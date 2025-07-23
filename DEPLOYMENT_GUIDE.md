# GlassySauce Deployment Guide

## Quick Start

1. **Upload to GitHub**
   - Download the `GlassySauce` folder
   - Create new repository on GitHub: `GlassySauce`
   - Upload all files to the repository

2. **Environment Setup**
   - Copy `.env.example` to `.env`
   - Fill in your API keys and configuration values
   - Set up PostgreSQL database

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Database Setup**
   ```bash
   npm run db:push
   ```

5. **Smart Contract Deployment**
   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network baseSepolia
   ```

6. **Start Application**
   ```bash
   npm run dev
   ```

## Project Structure

```
GlassySauce/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Application pages
│   │   └── lib/           # Utilities
├── server/                # Express backend
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data layer
├── shared/                # Shared types
│   └── schema.ts          # Database schema
├── contracts/             # Smart contracts
│   ├── FansToken.sol
│   ├── CreatorBondingCurve.sol
│   ├── BrandCreatorEscrow.sol
│   └── StakingRewards.sol
├── package.json
├── README.md
└── COINBASE_EXPORT_GUIDE.md
```

## Key Features

- **Web3 Creator Marketplace**: Connect brands with influencers
- **Bonding Curve Trading**: Dynamic pricing for creator keys
- **Cross-Chain Trading**: Multi-blockchain support
- **Staking Rewards**: Token staking with APY
- **Escrow System**: Secure brand-creator payments
- **Social Dashboard**: Multi-platform advertising management

## Smart Contracts (Base Network)

- **FansToken.sol**: ERC-20 token with minting/burning
- **CreatorBondingCurve.sol**: Exponential pricing for creator keys
- **BrandCreatorEscrow.sol**: Milestone-based payment system
- **StakingRewards.sol**: Token staking with time-locked pools

## Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL + Drizzle ORM
- **Blockchain**: Base Network (Ethereum L2)
- **UI**: shadcn/ui + Tailwind CSS
- **Smart Contracts**: Solidity + Hardhat

## Ready for Production

✅ Complete frontend with glassmorphism UI
✅ Express backend with API routes
✅ Production-ready smart contracts
✅ Database schema and migrations
✅ Cross-chain trading integration
✅ Comprehensive documentation
✅ Coinbase Developer Kit ready