import type { Express } from "express";
import { createServer, type Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { storage } from "./storage";
import { insertChatMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // WebSocket server for real-time chat
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });
  
  wss.on('connection', (ws) => {
    console.log('Client connected to WebSocket');
    
    ws.on('message', async (data) => {
      try {
        const { type, payload } = JSON.parse(data.toString());
        
        if (type === 'send_message') {
          const { roomId, content } = payload;
          
          // For demo purposes, use a default sender ID
          const senderId = 1; // In real app, get from authenticated user
          
          const messageData = {
            roomId: parseInt(roomId),
            senderId,
            content,
          };
          
          const validatedData = insertChatMessageSchema.parse(messageData);
          const message = await storage.createChatMessage(validatedData);
          
          // Get sender info
          const sender = await storage.getUser(senderId);
          const messageWithSender = { ...message, sender };
          
          // Broadcast to all connected clients
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({
                type: 'new_message',
                payload: messageWithSender,
              }));
            }
          });
        }
      } catch (error) {
        console.error('WebSocket message error:', error);
      }
    });
    
    ws.on('close', () => {
      console.log('Client disconnected from WebSocket');
    });
  });

  // API Routes
  
  // Stats endpoint
  app.get('/api/stats', async (req, res) => {
    try {
      const creators = await storage.getAllCreators();
      const stats = {
        totalVolume: '2.4M',
        activeCreators: creators.length.toString() + 'K',
        tokenHolders: '89.7K',
        satisfaction: '94%',
      };
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch stats' });
    }
  });

  // Creator endpoints
  app.get('/api/creators', async (req, res) => {
    try {
      const filter = req.query.filter as string;
      let creators = await storage.getAllCreators();
      
      // Apply filters (mock implementation)
      switch (filter) {
        case 'rising':
          creators = creators.filter(c => c.ranking > 3);
          break;
        case 'high-value':
          creators = creators.filter(c => parseFloat(c.totalVolume) > 30000);
          break;
        case 'vip':
          creators = creators.filter(c => c.ranking <= 5);
          break;
        default: // trending
          break;
      }
      
      res.json(creators);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch creators' });
    }
  });

  app.get('/api/creators/top', async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const creators = await storage.getTopCreators(limit);
      res.json(creators);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch top creators' });
    }
  });

  app.get('/api/creators/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const creator = await storage.getCreator(id);
      if (!creator) {
        return res.status(404).json({ error: 'Creator not found' });
      }
      res.json(creator);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch creator' });
    }
  });

  // Chat endpoints
  app.get('/api/chat/rooms', async (req, res) => {
    try {
      const rooms = await storage.getChatRooms();
      
      // Enrich with creator data
      const roomsWithCreators = await Promise.all(
        rooms.map(async (room) => {
          const creator = await storage.getCreator(room.creatorId);
          return { ...room, creator };
        })
      );
      
      res.json(roomsWithCreators);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch chat rooms' });
    }
  });

  app.get('/api/chat/messages/:roomId', async (req, res) => {
    try {
      const roomId = parseInt(req.params.roomId);
      const messages = await storage.getChatMessages(roomId);
      
      // Enrich with sender data
      const messagesWithSenders = await Promise.all(
        messages.map(async (message) => {
          const sender = await storage.getUser(message.senderId);
          return { ...message, sender };
        })
      );
      
      res.json(messagesWithSenders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  });

  // Wallet endpoints
  app.get('/api/wallet/portfolio', async (req, res) => {
    try {
      // Mock portfolio data for demo
      const userId = 4; // Demo user
      const userTokens = await storage.getUserTokens(userId);
      const creators = await storage.getAllCreators();
      
      const holdings = creators.slice(0, 2).map((creator, index) => ({
        creator,
        tokens: (15.2 - index * 6.5).toFixed(1),
        value: (4560 - index * 1950).toString(),
        change: index === 0 ? '+8.2' : '+12.1',
      }));
      
      const portfolio = {
        totalValue: '12847',
        dayChange: '+18.3',
        keysOwned: 23,
        holdings,
      };
      
      res.json(portfolio);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch portfolio' });
    }
  });

  return httpServer;
}
