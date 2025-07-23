# Fans.tech - Web3 Creator Marketplace Platform

A cutting-edge Web3 social platform revolutionizing creator-brand interactions through advanced blockchain-powered marketplace technologies.

## 🚀 Project Overview

Fans.tech is a comprehensive Web3 platform that enables OnlyFans and Instagram creators to tokenize their influence through bonding curve mechanics and token-gated communities. The platform provides social authentication, creator token trading, real-time chat, portfolio management, and cross-channel advertising dashboard functionality.

## 🏗️ Architecture

### Technology Stack
- **Frontend**: React + TypeScript with Vite
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom glass morphism design
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Real-time Communication**: WebSockets for chat functionality
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Web3 Integration**: Wagmi, Viem, RainbowKit

### Key Features
- 🎭 **Creator Profile System**: Complete friend.tech-style creator profiles with bonding curve trading
- 💱 **Multi-chain DEX**: Cross-chain trading support for 30+ blockchains via Li.Fi integration
- 📊 **Portfolio Management**: Comprehensive wallet tracking and Web3 identity management
- 💰 **DeFi Integration**: Staking, lending, and yield farming with professional-grade interfaces
- 📱 **Cross-Channel Advertising**: Complete PLAI.IO-style advertising dashboard for creators
- 🌐 **Brand-Creator Marketplace**: Advanced filtering and partnership management system
- 💬 **Real-time Chat**: WebSocket-powered messaging with token-gated access
- 🔗 **Social Integration**: Connection to Instagram, OnlyFans, TikTok, and other platforms

## 📁 Project Structure

```
fans-tech/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route components
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
├── server/                # Express.js backend
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Data storage interface
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schema definitions
├── drizzle.config.ts      # Database configuration
├── vite.config.ts         # Frontend build configuration
├── tailwind.config.ts     # Styling configuration
└── package.json           # Dependencies and scripts
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Git

### Quick Start
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see Environment Variables section)
4. Push database schema: `npm run db:push`
5. Start development server: `npm run dev`

### Environment Variables
```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/fanstech

# Optional: Stripe Integration
STRIPE_SECRET_KEY=sk_test_...
VITE_STRIPE_PUBLIC_KEY=pk_test_...

# Optional: API Keys for enhanced features
OPENAI_API_KEY=sk-...
```

## 🌐 Coinbase Developer Platform Integration

This project is designed for seamless integration with the Coinbase Developer Kit for smart contract development.

### Smart Contract Integration Points

1. **Creator Token Contracts**
   - Bonding curve implementation for creator keys
   - ERC-20 token standard for $FANS utility token
   - Access control for token-gated communities

2. **Marketplace Contracts**
   - Brand-creator partnership escrow system
   - Revenue sharing and commission distribution
   - Campaign performance tracking on-chain

3. **DeFi Protocol Integration**
   - Staking contract for $FANS token rewards
   - Lending protocol for creator advance funding
   - Cross-chain bridge contracts via Li.Fi

### Recommended Smart Contract Architecture

```solidity
// Core contracts to implement
contracts/
├── FansToken.sol           # Main utility token
├── CreatorBondingCurve.sol # Creator key pricing
├── MarketplaceEscrow.sol   # Brand partnership escrow
├── StakingRewards.sol      # Token staking rewards
└── AccessControl.sol       # Token-gated features
```

## 📦 Export to Coinbase Developer Platform

### Method 1: Git/GitHub Integration (Recommended)

1. **Initialize Git in Replit**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Fans.tech Web3 platform"
   ```

2. **Create GitHub Repository**
   - Go to GitHub and create new repository: `fans-tech-web3`
   - Connect Replit to GitHub via Tools → Git
   - Push code to GitHub repository

3. **Clone in Coinbase Developer Kit**
   ```bash
   git clone https://github.com/yourusername/fans-tech-web3.git
   cd fans-tech-web3
   npm install
   ```

### Method 2: Direct File Export

1. **Download Core Files**
   - Download entire `client/` directory
   - Download entire `server/` directory  
   - Download `shared/` directory
   - Download configuration files: `package.json`, `vite.config.ts`, `tailwind.config.ts`, `drizzle.config.ts`

2. **Transfer to Coinbase Developer Kit**
   - Create new project in Coinbase Developer Kit
   - Upload all downloaded files
   - Run `npm install` to restore dependencies

## 🔗 Smart Contract Development Workflow

1. **Set up Coinbase Developer Kit environment**
2. **Install additional dependencies for smart contracts**:
   ```bash
   npm install @openzeppelin/contracts hardhat @coinbase/coinbase-sdk
   ```
3. **Create smart contract directory structure**
4. **Implement core contracts (see architecture above)**
5. **Deploy to Base testnet for testing**
6. **Integrate contract addresses into frontend**

## 🛠️ Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:push      # Push schema changes to database

# Type checking
npm run check        # Run TypeScript type checking
```

## 🎯 Key Integration Points for Smart Contracts

### Frontend Integration
- **Wallet Connection**: Already integrated with RainbowKit/Wagmi
- **Token Operations**: Ready for smart contract interaction
- **Trading Interface**: Prepared for bonding curve contract calls
- **Staking Interface**: Ready for staking contract integration

### Backend Integration
- **API Routes**: Structured for blockchain event listening
- **Database Schema**: Designed for on-chain data synchronization
- **WebSocket Events**: Ready for real-time blockchain updates

## 📈 Next Steps for Coinbase Developer Kit

1. **Deploy Base Smart Contracts**
   - Creator bonding curve contracts
   - $FANS token contract
   - Marketplace escrow system

2. **Integrate Frontend with Contracts**
   - Connect trading interface to bonding curve
   - Link staking interface to rewards contract
   - Implement marketplace payments

3. **Add On-chain Analytics**
   - Track creator token performance
   - Monitor marketplace volume
   - Display real-time DeFi metrics

## 🤝 Contributing

This project is optimized for Web3 development and Coinbase Developer Kit integration. The modular architecture allows for easy smart contract integration while maintaining a professional user experience.

## 📄 License

MIT License - see LICENSE file for details

---

**Ready for Coinbase Developer Kit Integration**  
This codebase is structured for seamless smart contract development and blockchain integration.