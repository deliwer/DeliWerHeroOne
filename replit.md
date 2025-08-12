# DeliWer - Dubai's iPhone-to-Water Trade Platform

## Overview

DeliWer is a gamified environmental platform that allows users in Dubai to trade their old iPhones for premium water filtration systems while earning environmental impact points. The application combines e-commerce functionality with social gamification, featuring real-time leaderboards, AI-powered trade valuations, and impact tracking to create an engaging environmental sustainability experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 12, 2025)

### Comprehensive Platform Completion
- **Footer Integration**: Added comprehensive footer with DeliWer ecosystem projects (AquaCafe, EcoTrade, Recycle, Dawn)
- **Delivery Page**: Created complete delivery network page with Dubai zone coverage, live tracking, and eco-fleet features
- **Community Hub**: Built Planet Heroes community with leaderboards, challenges, social features, and achievements
- **Partnership Programs**: Enhanced with delivery agent, eco-recycling, and restaurant collection partner options
- **Contact Integration**: Multiple support channels (WhatsApp, phone, email) with partnership inquiry forms
- **Navigation Updates**: Added Community and Delivery sections to main navigation
- **Real-time Features**: Live impact stats, leaderboard updates, and tracking simulation

## System Architecture

### Frontend Architecture
The application uses a modern React-based frontend built with:
- **Vite** as the build tool for fast development and optimized production builds
- **React 18** with TypeScript for type-safe component development
- **Wouter** for lightweight client-side routing instead of React Router
- **shadcn/ui** component library with Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom Dubai-themed color palette
- **TanStack Query** for server state management, caching, and real-time data synchronization

The frontend follows a component-driven architecture with clear separation between pages, reusable UI components, and business logic hooks. Custom hooks manage specific concerns like leaderboard data (`useLeaderboard`) and impact statistics (`useImpactStats`).

### Backend Architecture
The backend is built with Express.js following a RESTful API pattern:
- **Express.js** server with TypeScript for type safety
- **Modular route handling** with centralized route registration
- **In-memory storage implementation** with interface-based design for easy database migration
- **Error handling middleware** for consistent API responses
- **Request/response logging** for debugging and monitoring

The storage layer uses an interface (`IStorage`) that abstracts data operations, currently implemented with in-memory storage but designed for easy migration to PostgreSQL with Drizzle ORM.

### Database Design
The schema is defined using Drizzle ORM with PostgreSQL-compatible tables:
- **heroes** - User profiles with gamification data (points, level, badges, environmental impact)
- **tradeIns** - Trade transaction records with status tracking
- **impactStats** - Global environmental impact aggregations
- **referrals** - Referral system for viral growth

The schema uses UUIDs for primary keys and includes proper foreign key relationships and indexing considerations.

### AI Integration
- **OpenAI GPT-4** integration for the AI Concierge feature
- **Fallback mechanisms** for when AI services are unavailable
- **Context-aware conversations** for trade valuation and user guidance
- **LangChain** planned for advanced conversation memory and context handling

### Real-time Features
- **Firebase Realtime Database** simulation for live leaderboard updates
- **Polling-based updates** for impact statistics (10-second intervals)
- **Optimistic UI updates** for immediate user feedback

### Authentication & Security
The application currently operates without authentication but includes user identification through email-based hero profiles. The architecture supports future integration of session-based authentication.

### Gamification System
- **Multi-tier hero levels** (Bronze, Silver, Gold Hero) based on points
- **Badge system** with JSON storage for flexible achievement tracking
- **Real-time leaderboards** with environmental impact metrics
- **Social sharing** capabilities for viral growth

## External Dependencies

### Database Services
- **Neon Database** - Serverless PostgreSQL database with connection pooling
- **Drizzle ORM** - Type-safe SQL query builder and schema management
- **Drizzle Kit** - Database migrations and schema synchronization

### AI & ML Services
- **OpenAI API** - GPT-4 integration for conversational AI features
- **LangChain** - Planned integration for advanced AI conversation management

### Frontend Libraries
- **Radix UI** - Comprehensive set of accessible UI primitives
- **Tailwind CSS** - Utility-first CSS framework with custom theming
- **Lucide React** - Icon library for consistent iconography
- **TanStack Query** - Powerful data synchronization and caching

### Development & Deployment
- **Vite** - Modern build tool with fast HMR and optimized bundling
- **Replit** - Development environment with integrated deployment
- **TypeScript** - Static type checking across the entire codebase

### Planned Integrations
- **Shopify Headless** - E-commerce backend with Hydrogen/Oxygen framework
- **Firebase** - Real-time database for live updates and notifications
- **Cloudinary** - Image management for user profiles and badges
- **Google Calendar API** - Scheduling system for device pickup/delivery
- **WhatsApp Business API** - Customer communication and valuation flow

The architecture is designed for scalability with clear separation of concerns, making it easy to add new features like payment processing, inventory management, and advanced gamification mechanics.