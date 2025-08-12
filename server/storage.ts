import { type Hero, type InsertHero, type TradeIn, type InsertTradeIn, type ImpactStats, type Referral, type UpdateHero } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Hero management
  getHero(id: string): Promise<Hero | undefined>;
  getHeroByEmail(email: string): Promise<Hero | undefined>;
  createHero(hero: InsertHero): Promise<Hero>;
  updateHero(id: string, updates: UpdateHero): Promise<Hero | undefined>;
  getTopHeroes(limit?: number): Promise<Hero[]>;
  getAllHeroes(): Promise<Hero[]>;

  // Trade-in management
  createTradeIn(tradeIn: InsertTradeIn): Promise<TradeIn>;
  getTradeInsByHero(heroId: string): Promise<TradeIn[]>;
  updateTradeInStatus(id: string, status: string): Promise<TradeIn | undefined>;

  // Impact stats
  getImpactStats(): Promise<ImpactStats | undefined>;
  updateImpactStats(stats: Partial<ImpactStats>): Promise<ImpactStats>;

  // Referrals
  createReferral(referrerId: string, refereeId: string): Promise<Referral>;
  getReferralsByHero(heroId: string): Promise<Referral[]>;

  // Utility
  calculateTradeValue(phoneModel: string, condition: string): Promise<number>;
}

export class MemStorage implements IStorage {
  private heroes: Map<string, Hero>;
  private tradeIns: Map<string, TradeIn>;
  private impactStats: ImpactStats;
  private referrals: Map<string, Referral>;

  constructor() {
    this.heroes = new Map();
    this.tradeIns = new Map();
    this.referrals = new Map();
    
    // Initialize impact stats
    this.impactStats = {
      id: randomUUID(),
      totalBottlesPrevented: 847392,
      totalCo2Saved: 423700, // in grams (423.7 tons)
      totalRewards: 89200000, // AED 892K in fils
      activeHeroes: 12847,
      updatedAt: new Date(),
    };

    // Seed some initial heroes for the leaderboard
    this.seedInitialData();
  }

  private seedInitialData() {
    const initialHeroes: Hero[] = [
      {
        id: "hero-1",
        name: "Ahmed K.",
        email: "ahmed@example.com",
        phoneModel: "iPhone 13 Pro",
        phoneCondition: "excellent",
        tradeValue: 1200,
        points: 4890,
        level: "Gold Hero",
        badges: ["Water Warrior", "Eco Champion"],
        bottlesPrevented: 3247,
        co2Saved: 1623, // grams
        referralCount: 5,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "hero-2",
        name: "Sarah M.",
        email: "sarah@example.com",
        phoneModel: "iPhone 14",
        phoneCondition: "good",
        tradeValue: 1100,
        points: 4235,
        level: "Silver Hero",
        badges: ["Water Guardian"],
        bottlesPrevented: 2891,
        co2Saved: 1445,
        referralCount: 3,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "hero-3",
        name: "Omar R.",
        email: "omar@example.com",
        phoneModel: "iPhone 12 Pro",
        phoneCondition: "excellent",
        tradeValue: 950,
        points: 3890,
        level: "Gold Hero",
        badges: ["Planet Protector"],
        bottlesPrevented: 2156,
        co2Saved: 1078,
        referralCount: 4,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    initialHeroes.forEach(hero => this.heroes.set(hero.id, hero));
  }

  async getHero(id: string): Promise<Hero | undefined> {
    return this.heroes.get(id);
  }

  async getHeroByEmail(email: string): Promise<Hero | undefined> {
    return Array.from(this.heroes.values()).find(hero => hero.email === email);
  }

  async createHero(insertHero: InsertHero): Promise<Hero> {
    const id = randomUUID();
    const points = 100; // Base points for trade-in
    const bottlesPrevented = Math.floor(insertHero.tradeValue / 0.5); // ~0.5 AED per bottle
    const co2Saved = Math.floor(bottlesPrevented * 0.5); // 0.5g CO2 per bottle
    
    let level = "Bronze Hero";
    if (points >= 600) level = "Gold Hero";
    else if (points >= 300) level = "Silver Hero";

    const hero: Hero = {
      id,
      ...insertHero,
      points,
      level,
      badges: ["Water Warrior"],
      bottlesPrevented,
      co2Saved,
      referralCount: 0,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    this.heroes.set(id, hero);
    
    // Update impact stats
    this.impactStats.totalBottlesPrevented += bottlesPrevented;
    this.impactStats.totalCo2Saved += co2Saved;
    this.impactStats.totalRewards += insertHero.tradeValue * 100; // Convert to fils
    this.impactStats.activeHeroes += 1;
    this.impactStats.updatedAt = new Date();
    
    return hero;
  }

  async updateHero(id: string, updates: UpdateHero): Promise<Hero | undefined> {
    const hero = this.heroes.get(id);
    if (!hero) return undefined;

    const updatedHero: Hero = {
      ...hero,
      ...updates,
      updatedAt: new Date(),
    };

    this.heroes.set(id, updatedHero);
    return updatedHero;
  }

  async getTopHeroes(limit: number = 10): Promise<Hero[]> {
    return Array.from(this.heroes.values())
      .filter(hero => hero.isActive)
      .sort((a, b) => b.points - a.points)
      .slice(0, limit);
  }

  async getAllHeroes(): Promise<Hero[]> {
    return Array.from(this.heroes.values()).filter(hero => hero.isActive);
  }

  async createTradeIn(insertTradeIn: InsertTradeIn): Promise<TradeIn> {
    const id = randomUUID();
    const tradeIn: TradeIn = {
      id,
      ...insertTradeIn,
      status: "pending",
      completedAt: null,
      createdAt: new Date(),
    };
    
    this.tradeIns.set(id, tradeIn);
    return tradeIn;
  }

  async getTradeInsByHero(heroId: string): Promise<TradeIn[]> {
    return Array.from(this.tradeIns.values()).filter(tradeIn => tradeIn.heroId === heroId);
  }

  async updateTradeInStatus(id: string, status: string): Promise<TradeIn | undefined> {
    const tradeIn = this.tradeIns.get(id);
    if (!tradeIn) return undefined;

    const updatedTradeIn: TradeIn = {
      ...tradeIn,
      status,
      completedAt: status === "completed" ? new Date() : tradeIn.completedAt,
    };

    this.tradeIns.set(id, updatedTradeIn);
    return updatedTradeIn;
  }

  async getImpactStats(): Promise<ImpactStats> {
    return this.impactStats;
  }

  async updateImpactStats(stats: Partial<ImpactStats>): Promise<ImpactStats> {
    this.impactStats = {
      ...this.impactStats,
      ...stats,
      updatedAt: new Date(),
    };
    return this.impactStats;
  }

  async createReferral(referrerId: string, refereeId: string): Promise<Referral> {
    const id = randomUUID();
    const referral: Referral = {
      id,
      referrerId,
      refereeId,
      pointsEarned: 50,
      createdAt: new Date(),
    };
    
    this.referrals.set(id, referral);
    
    // Update referrer's points and referral count
    const referrer = this.heroes.get(referrerId);
    if (referrer) {
      await this.updateHero(referrerId, {
        points: referrer.points + 50,
        referralCount: referrer.referralCount + 1,
      });
    }
    
    return referral;
  }

  async getReferralsByHero(heroId: string): Promise<Referral[]> {
    return Array.from(this.referrals.values()).filter(referral => referral.referrerId === heroId);
  }

  async calculateTradeValue(phoneModel: string, condition: string): Promise<number> {
    const baseValues: Record<string, number> = {
      "iPhone 15 Pro Max": 1500,
      "iPhone 15 Pro": 1400,
      "iPhone 15": 1200,
      "iPhone 14 Pro Max": 1300,
      "iPhone 14 Pro": 1200,
      "iPhone 14": 1000,
      "iPhone 13 Pro Max": 1100,
      "iPhone 13 Pro": 1000,
      "iPhone 13": 900,
      "iPhone 12 Pro Max": 900,
      "iPhone 12 Pro": 800,
      "iPhone 12": 700,
      "iPhone 11 Pro Max": 700,
      "iPhone 11 Pro": 600,
      "iPhone 11": 500,
    };

    const conditionMultipliers: Record<string, number> = {
      "excellent": 1.0,
      "good": 0.85,
      "fair": 0.65,
      "poor": 0.4,
    };

    const baseValue = baseValues[phoneModel] || 300;
    const multiplier = conditionMultipliers[condition] || 0.4;
    
    return Math.floor(baseValue * multiplier);
  }
}

export const storage = new MemStorage();
