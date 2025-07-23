import { 
  users, creators, tokens, trades, chatRooms, chatMessages, wallets, events, eventBookings, reviews, partnerships,
  type User, type InsertUser, type Creator, type InsertCreator,
  type Token, type InsertToken, type Trade, type InsertTrade,
  type ChatRoom, type ChatMessage, type InsertChatMessage, type Wallet,
  type Event, type InsertEvent, type EventBooking, type InsertEventBooking,
  type Review, type InsertReview, type Partnership, type InsertPartnership
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Creators
  getCreator(id: number): Promise<Creator | undefined>;
  getCreatorByUserId(userId: number): Promise<Creator | undefined>;
  getAllCreators(): Promise<Creator[]>;
  getTopCreators(limit?: number): Promise<Creator[]>;
  createCreator(creator: InsertCreator): Promise<Creator>;
  updateCreator(id: number, updates: Partial<Creator>): Promise<Creator | undefined>;
  
  // Tokens
  getUserTokens(userId: number): Promise<Token[]>;
  getCreatorTokens(creatorId: number): Promise<Token[]>;
  createToken(token: InsertToken): Promise<Token>;
  
  // Trades
  getTradesByCreator(creatorId: number): Promise<Trade[]>;
  getTradesByUser(userId: number): Promise<Trade[]>;
  createTrade(trade: InsertTrade): Promise<Trade>;
  
  // Chat
  getChatRooms(): Promise<ChatRoom[]>;
  getChatRoom(id: number): Promise<ChatRoom | undefined>;
  getChatMessages(roomId: number): Promise<ChatMessage[]>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  
  // Wallet
  getUserWallet(userId: number): Promise<Wallet | undefined>;
  createWallet(userId: number): Promise<Wallet>;
  updateWallet(userId: number, updates: Partial<Wallet>): Promise<Wallet | undefined>;
  
  // Events
  getEvent(id: number): Promise<Event | undefined>;
  getEventsByHost(hostId: number): Promise<Event[]>;
  getAllEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: number, updates: Partial<Event>): Promise<Event | undefined>;
  
  // Event Bookings
  getEventBookings(eventId: number): Promise<EventBooking[]>;
  getUserBookings(userId: number): Promise<EventBooking[]>;
  createEventBooking(booking: InsertEventBooking): Promise<EventBooking>;
  
  // Reviews
  getEventReviews(eventId: number): Promise<Review[]>;
  getHostReviews(hostId: number): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  
  // Partnerships
  getPartnership(id: number): Promise<Partnership | undefined>;
  getBrandPartnerships(brandId: number): Promise<Partnership[]>;
  getCreatorPartnerships(creatorId: number): Promise<Partnership[]>;
  createPartnership(partnership: InsertPartnership): Promise<Partnership>;
  updatePartnership(id: number, updates: Partial<Partnership>): Promise<Partnership | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private creators: Map<number, Creator> = new Map();
  private tokens: Map<number, Token> = new Map();
  private trades: Map<number, Trade> = new Map();
  private chatRooms: Map<number, ChatRoom> = new Map();
  private chatMessages: Map<number, ChatMessage> = new Map();
  private wallets: Map<number, Wallet> = new Map();
  private events: Map<number, Event> = new Map();
  private eventBookings: Map<number, EventBooking> = new Map();
  private reviews: Map<number, Review> = new Map();
  private partnerships: Map<number, Partnership> = new Map();
  
  private currentUserId = 1;
  private currentCreatorId = 1;
  private currentTokenId = 1;
  private currentTradeId = 1;
  private currentChatRoomId = 1;
  private currentChatMessageId = 1;
  private currentWalletId = 1;
  private currentEventId = 1;
  private currentEventBookingId = 1;
  private currentReviewId = 1;
  private currentPartnershipId = 1;

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Create sample users
    const sampleUsers = [
      { username: "sophia_rose", email: "sophia@example.com", isCreator: true, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { username: "luna_star", email: "luna@example.com", isCreator: true, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { username: "aria_divine", email: "aria@example.com", isCreator: true, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
      { username: "fan_user1", email: "fan1@example.com", isCreator: false },
      { username: "fan_user2", email: "fan2@example.com", isCreator: false },
    ];

    sampleUsers.forEach(userData => {
      const user: User = { 
        id: this.currentUserId++, 
        ...userData, 
        socialId: null, 
        provider: null, 
        createdAt: new Date().toISOString() 
      };
      this.users.set(user.id, user);
    });

    // Create sample creators - Real social media influencers and OnlyFans creators
    const sampleCreators = [
      {
        userId: 1,
        displayName: "Bella Thorne",
        bio: "Actress, Director, OnlyFans Creator. 24M Instagram followers. Building Web3 empire 🚀",
        profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        tokenSymbol: "BELLA",
        currentPrice: "0.089",
        totalVolume: "892000",
        holderCount: 8900,
        chatMemberCount: 4200,
        isOnline: true,
        ranking: 1,
      },
      {
        userId: 2,
        displayName: "Tana Mongeau",
        bio: "YouTuber, OnlyFans Creator, Podcast Host. 5.4M YouTube subs. Chaos queen turned crypto queen 💎",
        profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        tokenSymbol: "TANA",
        currentPrice: "0.067",
        totalVolume: "456000",
        holderCount: 6700,
        chatMemberCount: 3100,
        isOnline: true,
        ranking: 2,
      },
      {
        userId: 3,
        displayName: "Amouranth",
        bio: "Top OnlyFans Creator, Twitch Streamer, Business Mogul. 6M+ across platforms. ASMR to Assets 📈",
        profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        tokenSymbol: "AMOUR",
        currentPrice: "0.078",
        totalVolume: "723000",
        holderCount: 7800,
        chatMemberCount: 3800,
        isOnline: false,
        ranking: 3,
      },
      {
        userId: 4,
        displayName: "Mia Khalifa",
        bio: "OnlyFans Creator, Sports Commentator, Business Owner. 27M Instagram followers. Redefining influence ⚡",
        profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        tokenSymbol: "MIA",
        currentPrice: "0.092",
        totalVolume: "1200000",
        holderCount: 12000,
        chatMemberCount: 5600,
        isOnline: true,
        ranking: 4,
      },
      {
        userId: 5,
        displayName: "Corinna Kopf",
        bio: "Instagram Model, OnlyFans Star, Twitch Streamer. 6.5M Instagram followers. Gaming meets glamour 🎮",
        profileImage: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        tokenSymbol: "CORI",
        currentPrice: "0.054",
        totalVolume: "340000",
        holderCount: 5400,
        chatMemberCount: 2700,
        isOnline: true,
        ranking: 5,
      },
      {
        userId: 6,
        displayName: "Lana Rhoades",
        bio: "OnlyFans Creator, Entrepreneur, Podcast Host. 16M Instagram followers. Mom boss building empire 👑",
        profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        tokenSymbol: "LANA",
        currentPrice: "0.083",
        totalVolume: "890000",
        holderCount: 8300,
        chatMemberCount: 4100,
        isOnline: false,
        ranking: 6,
      },
      {
        userId: 7,
        displayName: "Riley Reid",
        bio: "OnlyFans Top Creator, Adult Film Star, Business Woman. 4.2M Instagram followers. Authenticity pays 💰",
        profileImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        tokenSymbol: "RILEY",
        currentPrice: "0.076",
        totalVolume: "567000",
        holderCount: 7600,
        chatMemberCount: 3400,
        isOnline: true,
        ranking: 7,
      },
      {
        userId: 8,
        displayName: "Pokimane",
        bio: "Twitch Streamer, Content Creator, OnlyFans Creator. 6.5M Twitch followers. Gaming queen goes Web3 🎯",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        tokenSymbol: "POKI",
        currentPrice: "0.061",
        totalVolume: "423000",
        holderCount: 6100,
        chatMemberCount: 2900,
        isOnline: true,
        ranking: 8,
      },
    ];

    sampleCreators.forEach(creatorData => {
      const creator: Creator = {
        id: this.currentCreatorId++,
        ...creatorData,
        coverImage: null,
        tokenSupply: "1000000",
        socialLinks: null,
        createdAt: new Date().toISOString(),
      };
      this.creators.set(creator.id, creator);
    });

    // Create sample chat rooms
    const sampleChatRooms = [
      { creatorId: 1, name: "Bella's VIP Club", description: "Exclusive content and personal chats with actress & creator", minTokens: "1.0", memberCount: 4200 },
      { creatorId: 2, name: "Tana's Chaos Corner", description: "Unfiltered conversations and exclusive content", minTokens: "1.0", memberCount: 3100 },
      { creatorId: 3, name: "Amouranth's ASMR Lounge", description: "Exclusive ASMR content and business insights", minTokens: "1.0", memberCount: 3800 },
      { creatorId: 4, name: "Mia's Sports Bar", description: "Sports commentary, exclusive content & life updates", minTokens: "1.0", memberCount: 5600 },
      { creatorId: 5, name: "Corinna's Gaming Den", description: "Gaming content, exclusive streams & personal chats", minTokens: "1.0", memberCount: 2700 },
      { creatorId: 6, name: "Lana's Empire", description: "Mom boss content, business tips & exclusive access", minTokens: "1.0", memberCount: 4100 },
      { creatorId: 7, name: "Riley's Authentic Space", description: "Real talk, exclusive content & genuine connections", minTokens: "1.0", memberCount: 3400 },
      { creatorId: 8, name: "Poki's Gaming Lounge", description: "Gaming streams, content creation tips & community", minTokens: "1.0", memberCount: 2900 },
    ];

    sampleChatRooms.forEach(roomData => {
      const room: ChatRoom = {
        id: this.currentChatRoomId++,
        ...roomData,
        createdAt: new Date().toISOString(),
      };
      this.chatRooms.set(room.id, room);
    });

    // Create sample chat messages
    const sampleMessages = [
      { roomId: 1, senderId: 1, content: "Hey beautiful souls! 💕 Just dropped some exclusive content for my VIP members!" },
      { roomId: 1, senderId: 4, content: "Can't wait to see it! You're amazing 🔥" },
      { roomId: 1, senderId: 5, content: "Love being part of this exclusive community! 💎" },
    ];

    sampleMessages.forEach(messageData => {
      const message: ChatMessage = {
        id: this.currentChatMessageId++,
        ...messageData,
        createdAt: new Date().toISOString(),
      };
      this.chatMessages.set(message.id, message);
    });

    // Create sample wallets
    [4, 5].forEach(userId => {
      const wallet: Wallet = {
        id: this.currentWalletId++,
        userId,
        ethBalance: "1.5",
        usdBalance: "2500.00",
        createdAt: new Date().toISOString(),
      };
      this.wallets.set(wallet.id, wallet);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: this.currentUserId++,
      ...insertUser,
      createdAt: new Date().toISOString(),
    };
    this.users.set(user.id, user);
    return user;
  }

  // Creator methods
  async getCreator(id: number): Promise<Creator | undefined> {
    return this.creators.get(id);
  }

  async getCreatorByUserId(userId: number): Promise<Creator | undefined> {
    return Array.from(this.creators.values()).find(creator => creator.userId === userId);
  }

  async getAllCreators(): Promise<Creator[]> {
    return Array.from(this.creators.values()).sort((a, b) => a.ranking - b.ranking);
  }

  async getTopCreators(limit = 10): Promise<Creator[]> {
    return Array.from(this.creators.values())
      .sort((a, b) => a.ranking - b.ranking)
      .slice(0, limit);
  }

  async createCreator(insertCreator: InsertCreator): Promise<Creator> {
    const creator: Creator = {
      id: this.currentCreatorId++,
      ...insertCreator,
      createdAt: new Date().toISOString(),
    };
    this.creators.set(creator.id, creator);
    return creator;
  }

  async updateCreator(id: number, updates: Partial<Creator>): Promise<Creator | undefined> {
    const creator = this.creators.get(id);
    if (!creator) return undefined;
    
    const updatedCreator = { ...creator, ...updates };
    this.creators.set(id, updatedCreator);
    return updatedCreator;
  }

  // Token methods
  async getUserTokens(userId: number): Promise<Token[]> {
    return Array.from(this.tokens.values()).filter(token => token.holderId === userId);
  }

  async getCreatorTokens(creatorId: number): Promise<Token[]> {
    return Array.from(this.tokens.values()).filter(token => token.creatorId === creatorId);
  }

  async createToken(insertToken: InsertToken): Promise<Token> {
    const token: Token = {
      id: this.currentTokenId++,
      ...insertToken,
      createdAt: new Date().toISOString(),
    };
    this.tokens.set(token.id, token);
    return token;
  }

  // Trade methods
  async getTradesByCreator(creatorId: number): Promise<Trade[]> {
    return Array.from(this.trades.values()).filter(trade => trade.creatorId === creatorId);
  }

  async getTradesByUser(userId: number): Promise<Trade[]> {
    return Array.from(this.trades.values()).filter(trade => trade.traderId === userId);
  }

  async createTrade(insertTrade: InsertTrade): Promise<Trade> {
    const trade: Trade = {
      id: this.currentTradeId++,
      ...insertTrade,
      createdAt: new Date().toISOString(),
    };
    this.trades.set(trade.id, trade);
    return trade;
  }

  // Chat methods
  async getChatRooms(): Promise<ChatRoom[]> {
    return Array.from(this.chatRooms.values());
  }

  async getChatRoom(id: number): Promise<ChatRoom | undefined> {
    return this.chatRooms.get(id);
  }

  async getChatMessages(roomId: number): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter(message => message.roomId === roomId)
      .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }

  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const message: ChatMessage = {
      id: this.currentChatMessageId++,
      ...insertMessage,
      createdAt: new Date().toISOString(),
    };
    this.chatMessages.set(message.id, message);
    return message;
  }

  // Wallet methods
  async getUserWallet(userId: number): Promise<Wallet | undefined> {
    return Array.from(this.wallets.values()).find(wallet => wallet.userId === userId);
  }

  async createWallet(userId: number): Promise<Wallet> {
    const wallet: Wallet = {
      id: this.currentWalletId++,
      userId,
      ethBalance: "0",
      usdBalance: "0",
      createdAt: new Date().toISOString(),
    };
    this.wallets.set(wallet.id, wallet);
    return wallet;
  }

  async updateWallet(userId: number, updates: Partial<Wallet>): Promise<Wallet | undefined> {
    const wallet = Array.from(this.wallets.values()).find(w => w.userId === userId);
    if (!wallet) return undefined;
    
    const updatedWallet = { ...wallet, ...updates };
    this.wallets.set(wallet.id, updatedWallet);
    return updatedWallet;
  }

  // Event methods
  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async getEventsByHost(hostId: number): Promise<Event[]> {
    return Array.from(this.events.values()).filter(event => event.hostId === hostId);
  }

  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const event: Event = {
      id: this.currentEventId++,
      ...insertEvent,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.events.set(event.id, event);
    return event;
  }

  async updateEvent(id: number, updates: Partial<Event>): Promise<Event | undefined> {
    const event = this.events.get(id);
    if (!event) return undefined;
    
    const updatedEvent = { ...event, ...updates, updatedAt: new Date().toISOString() };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }

  // Event Booking methods
  async getEventBookings(eventId: number): Promise<EventBooking[]> {
    return Array.from(this.eventBookings.values()).filter(booking => booking.eventId === eventId);
  }

  async getUserBookings(userId: number): Promise<EventBooking[]> {
    return Array.from(this.eventBookings.values()).filter(booking => booking.userId === userId);
  }

  async createEventBooking(insertBooking: InsertEventBooking): Promise<EventBooking> {
    const booking: EventBooking = {
      id: this.currentEventBookingId++,
      ...insertBooking,
      createdAt: new Date().toISOString(),
    };
    this.eventBookings.set(booking.id, booking);
    return booking;
  }

  // Review methods
  async getEventReviews(eventId: number): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(review => review.eventId === eventId);
  }

  async getHostReviews(hostId: number): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(review => review.hostId === hostId);
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const review: Review = {
      id: this.currentReviewId++,
      ...insertReview,
      createdAt: new Date().toISOString(),
    };
    this.reviews.set(review.id, review);
    return review;
  }

  // Partnership methods
  async getPartnership(id: number): Promise<Partnership | undefined> {
    return this.partnerships.get(id);
  }

  async getBrandPartnerships(brandId: number): Promise<Partnership[]> {
    return Array.from(this.partnerships.values()).filter(partnership => partnership.brandId === brandId);
  }

  async getCreatorPartnerships(creatorId: number): Promise<Partnership[]> {
    return Array.from(this.partnerships.values()).filter(partnership => partnership.creatorId === creatorId);
  }

  async createPartnership(insertPartnership: InsertPartnership): Promise<Partnership> {
    const partnership: Partnership = {
      id: this.currentPartnershipId++,
      ...insertPartnership,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.partnerships.set(partnership.id, partnership);
    return partnership;
  }

  async updatePartnership(id: number, updates: Partial<Partnership>): Promise<Partnership | undefined> {
    const partnership = this.partnerships.get(id);
    if (!partnership) return undefined;
    
    const updatedPartnership = { ...partnership, ...updates, updatedAt: new Date().toISOString() };
    this.partnerships.set(id, updatedPartnership);
    return updatedPartnership;
  }
}

export const storage = new MemStorage();
