# Fans.tech - Web3 Creator Token Platform

## Overview

Fans.tech is a Web3 platform that enables OnlyFans and Instagram creators to tokenize their influence through bonding curve mechanics and token-gated communities. The platform provides social authentication, creator token trading, real-time chat, and portfolio management functionality.

## System Architecture

### Technology Stack
- **Frontend**: React + TypeScript with Vite
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom glass morphism design
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Real-time Communication**: WebSockets for chat functionality
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

### Architecture Pattern
The application follows a full-stack TypeScript monorepo structure with clear separation between client, server, and shared code. The frontend uses a component-based architecture with custom UI components extending shadcn/ui, while the backend implements a RESTful API with WebSocket support for real-time features.

## Key Components

### Frontend Components
- **Navigation System**: Glass morphism navigation with mobile responsiveness
- **Creator Cards**: Display creator profiles with token metrics and ranking
- **Trading Panel**: Bonding curve token trading interface
- **Chat Interface**: Real-time messaging with WebSocket integration
- **Portfolio Management**: User wallet and token holdings display

### Backend Services
- **Storage Layer**: In-memory storage implementation with interface for future database integration
- **WebSocket Server**: Real-time chat message broadcasting
- **API Routes**: RESTful endpoints for creators, tokens, trades, and chat
- **Express Server**: Main application server with middleware for logging and error handling

### Database Schema
- **Users**: User profiles with social authentication support
- **Creators**: Creator profiles with token metadata and social links
- **Tokens**: Token holdings and purchase history
- **Trades**: Trading history with buy/sell operations
- **Chat**: Real-time messaging system with rooms and messages
- **Wallets**: User wallet balances and transaction history

## Data Flow

### Authentication Flow
The system is designed to support social authentication through providers like Apple, Google, Twitter, Instagram, and OnlyFans. User sessions are managed through the backend with plans for integration with services like Privy for Web3 authentication.

### Token Trading Flow
1. Users browse creator profiles and token metrics
2. Trading panel calculates prices based on bonding curve mechanics
3. Trade execution updates token supply and user holdings
4. Portfolio reflects updated balances and transaction history

### Real-time Chat Flow
1. WebSocket connection established on chat page load
2. Messages sent through WebSocket interface
3. Server broadcasts messages to all connected clients
4. Chat history persisted in database

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Backend Dependencies
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL provider
- **Express**: Web framework
- **WebSocket**: Real-time communication

### Planned Integrations
- **Social APIs**: OnlyFans, Instagram, Twitter, Snapchat, Rumble
- **Authentication**: Privy for Web3 social login
- **Staking**: Team Finance staking widget integration

## Deployment Strategy

The application uses a modern deployment approach with:
- **Development**: Vite dev server with hot module replacement
- **Production Build**: Static asset compilation with server bundling
- **Database**: PostgreSQL with migration support through Drizzle
- **Environment**: Node.js with ES modules

The build process compiles the frontend to static assets and bundles the server code, with database migrations handled through the Drizzle CLI.

## Changelog

```
Changelog:
- June 29, 2025. Initial setup
- June 29, 2025. Completed saucy glassmorphism design implementation with:
  * Glass morphism UI components with backdrop blur effects
  * Pink-to-purple gradient color scheme
  * Responsive navigation with mobile menu
  * Creator card components with ranking system
  * Trading panel with bonding curve visualization
  * Portfolio management with token holdings display
  * Real-time chat interface with WebSocket integration
  * Floating animations and hover effects
  * Custom scrollbar styling
- June 29, 2025. Built complete Planable-style social media management dashboard:
  * Full workspace sidebar with navigation sections (Search, Notifications, Content, Campaigns, Analytics, Engagement)
  * Connected channels management for Twitter, Instagram, OnlyFans
  * Interactive compose modal with platform tabs, AI generation, and media tools
  * Media upload slide panel with Canva integration and content library
  * Post feed with status indicators (published, scheduled, draft) and engagement stats
  * Professional clean interface matching Planable's exact design patterns
- June 30, 2025. Implemented professional crypto icons throughout entire platform:
  * Created professional SVG crypto icons matching CoinMarketCap/friend.tech standards
  * Updated all platform icons (Twitter, Instagram, OnlyFans) to use authentic designs
  * Replaced all childish text symbols with proper cryptocurrency icons (ETH, BTC, USDC, BASE)
  * Implemented $FANS token branding consistently across all components
  * Updated wallet interfaces, trading panels, bridge functionality, and social posting tools
  * Ensured all icons follow friend.tech's professional appearance standards
- June 30, 2025. Built complete club creation flow with friend.tech-style interface:
  * Created "Introducing Clubs" information modal with $FANS branding
  * Built comprehensive club creation form matching friend.tech's exact layout
  * Implemented proper bonding curve visualization with cubic Bézier curves
  * Added photo upload, name/ticker fields, description, and price curve selection
  * Enhanced curves to show authentic exponential growth patterns (Casual, Standard, Exclusive)
  * Integrated $FANS token pricing and balance display throughout creation flow
- June 30, 2025. Implemented comprehensive blockchain functionality and multi-chain DEX:
  * Built PulseChain integration with multi-chain support (Ethereum, BSC, Polygon, Arbitrum, Base, Avalanche, PulseChain, Optimism, Fantom, Cronos)
  * Created comprehensive token database with 3000+ trading pairs across all major blockchains
  * Implemented professional token selector with search, filtering, and favorites functionality
  * Built smart contract ABIs for FANS token, bonding curve, and creator keys contracts
  * Created React hooks for blockchain interactions including wallet connection, token operations, and bonding curve trading
  * Updated trading interface with multi-chain token selection and cross-chain bridge functionality
  * Integrated authentic token data with proper chain identification and category filtering
- July 02, 2025. Updated UI with consistent chart gradient color scheme:
  * Extracted teal-to-purple gradient colors from user's provided chart image
  * Applied consistent gradient (teal → cyan → purple → violet) across all interactive elements
  * Updated all buttons, navigation active states, and platform tabs to use chart gradient
  * Maintained darker professional aesthetic while adding the user's preferred color scheme
  * Enhanced visual consistency across trading, wallet, bridge, and social posting interfaces
- July 02, 2025. Built comprehensive Kiln.fi staking widget integration:
  * Created complete staking page with Overview, Earn, and Withdraw screens matching Kiln.fi widget functionality
  * Implemented authentic staking positions display with real APR rates and reward calculations
  * Added comprehensive token support (ETH, USDT, USDC, DAI) with proper crypto icons
  * Built interactive deposit/withdraw interfaces with amount inputs and asset selection
  * Integrated pending requests and claimable rewards sections with realistic data
  * Applied platform's chart gradient styling throughout all staking components
  * Added proper staking navigation link in sidebar with "New" badge
  * Maintained professional dark glassmorphism aesthetic while showcasing DeFi earning opportunities
- July 02, 2025. Integrated Li.Fi cross-chain bridge widget with professional trading interface:
  * Installed and configured @lifi/widget package for authentic cross-chain bridging functionality
  * Created custom theme matching platform's dark glassmorphism aesthetic with chart gradient colors
  * Built professional candlestick trading chart with TradingView-style interface and controls
  * Integrated real Li.Fi widget supporting 200+ tokens across 30+ blockchains
  * Applied custom styling with teal-to-purple gradient on buttons and interactive elements
  * Enhanced bridge page with larger widget size for better visualization and usability
  * Added authentic cross-chain infrastructure with 0.5% platform fee integration
  * Maintained consistent styling while providing professional DEX trading experience
- July 02, 2025. Built comprehensive referral program system for business growth:
  * Added referral navigation link in sidebar with "Earn" badge to attract user attention
  * Created compelling welcome modal explaining earning potential (150 tokens + 15% commission for 6 months)
  * Built complete referral page with invite link generation, sharing options, and tier progression
  * Implemented referral code and link copying functionality with toast notifications
  * Added current volume tracking (trading: 0 ETH, token status: not created)
  * Created referral tier system (Bronze, Silver, Gold, Platinum) with escalating commission rates
  * Integrated social sharing buttons for Email, Twitter, Instagram, and messaging platforms
  * Applied consistent chart gradient styling throughout referral components and modal interface
- July 02, 2025. Built comprehensive user profile system with social media integration:
  * Created detailed user profile pages showing wallet data, net worth, portfolio, and transaction history
  * Implemented realistic social media influencer profiles (Bella Thorne, Tana Mongeau, Amouranth, Mia Khalifa, etc.)
  * Added clickable creator cards that link to individual profile pages with full wallet visualization
  * Built social media verification system for Twitter, Instagram, and OnlyFans account connection
  * Integrated authentic follower metrics and social influence data to drive platform engagement
  * Created account management page with social verification benefits and trading fee tracking
  * Enhanced creator cards with social media follower badges and verification indicators
  * Populated platform with realistic creator data showing millions of followers across platforms
- July 02, 2025. Simplified trading interface by consolidating Bridge and Trade functionality:
  * Renamed "Bridge" button to "Trade" in main navigation with "Hot" badge
  * Eliminated separate trading screen (/trading route) to reduce interface complexity
  * Consolidated all trading functionality into single interface at /bridge route
  * Updated page headers to reflect unified "Trade" experience with professional chart analysis
  * Maintained Li.Fi cross-chain widget integration alongside TradingView-style candlestick chart
  * Streamlined user experience with one-click access to comprehensive trading tools
- July 02, 2025. White-labeled staking interface to remove all third-party branding:
  * Replaced "Powered by Kiln" badge with "Fans.tech Staking" branding
  * Updated main widget header from "kiln" to "Fans.tech Staking" with $FANS icon
  * Changed "KILN DEDICATED STAKING" to "FANS.TECH SECURE STAKING PROTOCOL"
  * Simplified technical descriptions to be more user-friendly and brand-appropriate
  * Updated footer branding from "kiln" to "POWERED BY FANS.TECH" with teal accent
  * Removed ExternalLink imports to prevent any third-party call-to-actions
  * Maintained all functionality while ensuring complete brand consistency
- July 02, 2025. Completed platform white-labeling by removing Li.Fi branding from trading page:
  * Changed "Li.Fi Powered" badge to "Fans.tech Trading" with consistent teal accent
  * Updated trading widget description from "Li.Fi cross-chain infrastructure" to "Fans.tech cross-chain infrastructure"
  * Maintained all cross-chain trading functionality while presenting unified Fans.tech branding
  * Completed comprehensive white-labeling across entire platform for professional brand consistency
- July 03, 2025. Built comprehensive wallet tracker system for Web3 identity and portfolio management:
  * Created dedicated wallet tracker page with multi-wallet support and portfolio visualization
  * Implemented wallet connection flow for Ethereum, PulseChain, Polygon, and BSC networks
  * Added comprehensive portfolio tracking with token holdings, NFTs, and transaction history
  * Built market prediction system allowing users to make and track trading forecasts
  * Created Web3 identity profiles with achievements, success rates, and social connections
  * Integrated activity feed tracking trades, predictions, and social interactions across platform
  * Enhanced user capabilities for comprehensive portfolio management and Web3 social identity
- July 04, 2025. Completed comprehensive creator profile system matching friend.tech functionality:
  * Built detailed creator profile pages with back navigation, Chat/Buy buttons, and key pricing display
  * Implemented comprehensive profile stats (Holders, Holding, Followers, Following) with realistic numbers
  * Created tabbed interface (Clubs, Activity, Holders, Holding, Followers, Following) matching reference design
  * Built professional Trade Keys modal with buy/sell functionality and ETH pricing calculations
  * Added follow/unfollow functionality and creator bio display with last seen status
  * Integrated creator clubs display with FT token numbers and descriptions
  * Updated all creator card links to use new creator profile route (/creator/:userId)
  * Applied consistent glassmorphism styling with teal-to-purple gradient scheme throughout
- July 04, 2025. Built complete dual-profile ecosystem with individual creators and club communities:
  * Created comprehensive club profile system with group community access and member management
  * Built club profile pages (/club/:clubId) with member lists, activity feeds, and price charts
  * Implemented club card components with key pricing, member counts, and volume statistics
  * Added clubs navigation page with filtering, search, and category organization
  * Created distinct profile types: creator profiles (1-to-1 chat) vs club profiles (group community)
  * Established club key system for group chat access vs creator keys for direct creator access
  * Updated navigation to include clubs section with "Hot" badge for user discovery
  * Applied consistent platform styling across both profile types with proper navigation flow
- July 04, 2025. Implemented professional financial-grade token performance charts:
  * Created realistic token performance chart component with authentic price movement patterns
  * Built charts showing creator token growth phases: launch, adoption, correction, and rally
  * Added professional grid lines, price axes, gradient fills, and interactive elements
  * Integrated charts into home page feed posts, individual creator profiles, and club profiles
  * Implemented different chart variants: compact (feed), detailed (profiles), with proper timeframes
  * Added realistic volatility patterns and growth trends matching influencer token economics
  * Enhanced visual appeal with proper gradient colors and professional financial styling
  * Updated charts to properly reflect profile/club value appreciation as users purchase key access
  * Clarified that charts track the tokenized value of creator influence via key pricing for chat access
- July 06, 2025. Completed comprehensive white-labeling and streamlining of loans page:
  * Replaced all "Teller" mentions with "Our" or generic language throughout loan features
  * Updated loan features icons from "X" to "$" symbol for better visual branding
  * Replaced hero paragraph with user-provided copy emphasizing trustless borrowing and fixed rates
  * Removed all promotional elements: "START BORROWING"/"EXPLORE LENDING" buttons and CTA section
  * Eliminated crypto token strip showing Bitcoin/Ethereum/other token icons
  * Streamlined page to focus solely on core borrowing functionality with custom messaging
  * Maintained glassmorphism design with teal-to-purple gradient scheme throughout
- July 07, 2025. Built comprehensive brand-creator marketplace with advanced filtering system:
  * Created brand-creator marketplace page with creator discovery, deal flow, and 20% platform fee structure
  * Added marketplace navigation button under Creator section with "New" badge and Handshake icon
  * Implemented 3-phase revenue-prioritized filtering system with 15 total filters ranked by business impact
  * Phase 1 (Free): 5 basic filters using OnlyFans/IG APIs and internal platform data
  * Phase 2 (Premium $500/mo): 4 advanced filters using on-chain analytics and geolocation data
  * Phase 3 (Elite $2000/mo): 6 platform lock-in filters measuring creator dependency and loyalty
  * Built subscription paywall system with upgrade modals and tier-based access control
  * Added visual reward system with color-coded badges, data source labels, and achievement indicators
  * Integrated authentic creator data with real filter metrics for Bella Thorne, Amouranth, Mia Khalifa, Tana Mongeau
  * Created escrow protection modal with 50/50 payment split and campaign type selection
  * Established comprehensive lock-in mechanics through watermark compliance penalties and platform-native behavior tracking
- July 10, 2025. Streamlined navigation by consolidating marketplace functionality:
  * Removed redundant marketplace page that was duplicating functionality
  * Renamed "Alpha" navigation item to "Marketplace" and removed "Hot" badge
  * Consolidated all creator marketplace features into single comprehensive page
  * Updated routing to maintain all existing functionality while simplifying user experience
- July 10, 2025. Enhanced Web3 Creator Marketplace with comprehensive filtering and transparent pricing:
  * Built complete leaderboard system with performance metrics (engagement, conversion, ROI) for data-driven brand decisions
  * Implemented sophisticated filtering system with 8 advanced filters: category, followers, engagement, conversion, geography, verification, price range, and audience demographics
  * Created transparent fee structure with three tiers: Starter (0.05 ETH), Professional (0.15 ETH), Enterprise (0.5 ETH)
  * Added detailed creator analytics including campaign history, recent partnerships, and audience demographics
  * Enhanced creator cards with comprehensive performance data and partnership tools
  * Integrated smooth scrolling navigation and dynamic filter state management
  * Built value proposition section highlighting verified creators, proven ROI, and smart matching capabilities
  * Added audience demographic display showing top countries and age ranges for better brand-creator alignment
  * Reverted alpha page to stable state with working review system, campaigns, and leaderboards after complex filters caused runtime issues
  * Transformed platform to focus on content creators from OnlyFans, Instagram, and TikTok for brand partnerships
  * Featured 12 top-tier creators including Bella Thorne, Mia Khalifa, Charli D'Amelio, Addison Rae, Tana Mongeau, Amouranth, Kylie Jenner, Dixie D'Amelio, Loren Gray, Pokimane, Corinna Kopf, and Belle Delphine
  * Updated platform messaging to emphasize sponsorship marketplace fees paid by Web3 brands to access premium creators
  * Enhanced Creator DAO section with fee structure voting and revenue distribution governance
  * Adjusted statistics to reflect creator-focused platform with 1.2B total followers across all creators
  * Repositioned as Brand-Partner Management Platform for transparent marketplace fee structure
  * Built comprehensive creator marketplace directly in alpha page with browsing and filtering system
  * Created powerful filtering system (platform, followers, category, engagement rate) for brands to find ideal creators
  * Added transparent platform fee structure (0.05 ETH single creator, 0.15 ETH for 5 creators, 0.5 ETH unlimited access)
  * Implemented detailed creator cards with key metrics: followers, engagement rate, campaign ROI, response time
  * Built partnership modal showing platform fee, creator details, and estimated campaign value with 400x-1600x ROI
  * Enhanced creator marketplace with "Partner with [Creator]" buttons for easy brand connection and payment flow
  * Integrated brand-focused messaging emphasizing Web3 user onboarding acceleration through creator partnerships
  * Significantly expanded creator database with 24 high-profile influencers across multiple platforms
  * Added major YouTubers: Logan Paul, Jake Paul, MrBeast, James Charles, Emma Chamberlain, Nikocado Avocado, Valkyrae
  * Added TikTok stars: Charli D'Amelio, Addison Rae, Dixie D'Amelio, Loren Gray
  * Added gaming personalities: Pokimane, Valkyrae, Corinna Kopf
  * Added beauty influencers: James Charles, Bretman Rock
  * Added adult content creators: Belle Delphine, Lana Rhoades, Riley Reid
  * Added high-profile celebrities: Kylie Jenner
  * Enhanced filtering system to support YouTube and Twitch platforms
  * Expanded category filters to include: Music, Business, Comedy, Food, Cosplay, Philanthropy, Controversy, Youth, LGBTQ+, Coffee
  * Increased card minimum height to 480px with larger profile images and better button layout
  * Added comprehensive "Book Call" modal with professional scheduling form including company info, call types, budget ranges, and project descriptions
- July 23, 2025. Prepared comprehensive Coinbase Developer Platform export package:
  * Created detailed README.md with complete project documentation and architecture overview
  * Built comprehensive COINBASE_EXPORT_GUIDE.md with step-by-step export instructions for both GitHub and direct download methods
  * Prepared smart contract templates: FansToken (ERC-20), CreatorBondingCurve, BrandCreatorEscrow, StakingRewards contracts
  * Created automated export preparation script with Git initialization and smart contract directory structure
  * Added Hardhat configuration template for Base network deployment (testnet and mainnet)
  * Documented complete integration points for frontend-backend-blockchain connectivity
  * Created .env.example template with all required environment variables for Coinbase Developer Kit
  * Updated .gitignore for proper version control excluding development artifacts and node_modules
  * Prepared project for seamless smart contract development workflow with Coinbase Developer Kit
- July 23, 2025. Updated social media platform icons with authentic brand logos:
  * Replaced text-based platform icons with real social media symbols using react-icons library
  * Added authentic Instagram, Facebook, Twitter, TikTok, YouTube, LinkedIn, Pinterest, OnlyFans, Twitch, Discord, Reddit, and Snapchat icons
  * Applied proper brand colors including Instagram's gradient, YouTube red, Twitter blue, and other authentic platform colors
  * Enhanced platform connection cards with hover effects and proper visual indicators
  * Improved user experience in advertising dashboard with recognizable social media branding
- July 23, 2025. Successfully exported complete project to GitHub repository:
  * Created GitHub repository: https://github.com/oaksoftdigital/FansTech-Web3-Platform
  * Configured Git remote connection and proper authentication with GitHub Settings profile
  * Repository ready for Coinbase Developer Kit integration with complete project structure
  * All documentation, smart contract templates, and configuration files properly organized
  * Version control history preserved for future collaboration and deployment
```

## User Preferences

Preferred communication style: Simple, everyday language.