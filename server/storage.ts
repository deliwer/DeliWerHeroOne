import { 
  type Hero, type InsertHero, type TradeIn, type InsertTradeIn, 
  type ImpactStats, type Referral, type UpdateHero 
} from "@shared/schema";
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
  private heroes: Map<string, Hero> = new Map();
  private tradeIns: Map<string, TradeIn> = new Map();
  private impactStats: ImpactStats;
  private referrals: Map<string, Referral> = new Map();

  constructor() {
    this.impactStats = {
      id: randomUUID(),
      totalBottlesPrevented: 847392,
      totalCo2Saved: 423700,
      totalRewards: 89200000,
      activeHeroes: 12847,
      updatedAt: new Date(),
    };

    this.seedInitialData();
  }

  private seedInitialData() {
    // Add your initial heroes here
    const initialHeroes: Hero[] = [];
    initialHeroes.forEach(hero => this.heroes.set(hero.id, hero));
  }

  // ----------------- Hero methods -----------------
  async getHero(id: string): Promise<Hero | undefined> {
    return this.heroes.get(id);
  }

  async getHeroByEmail(email: string): Promise<Hero | undefined> {
    return Array.from(this.heroes.values()).find(h => h.email === email);
  }

  async createHero(insertHero: InsertHero): Promise<Hero> {
    const id = randomUUID();
    const points = 100;
    const bottlesPrevented = Math.floor(insertHero.tradeValue / 0.5);
    const co2Saved = Math.floor(bottlesPrevented * 0.5);

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

    this.impactStats.totalBottlesPrevented += bottlesPrevented;
    this.impactStats.totalCo2Saved += co2Saved;
    this.impactStats.totalRewards += insertHero.tradeValue * 100;
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
      .filter(h => h.isActive)
      .sort((a, b) => b.points - a.points)
      .slice(0, limit);
  }

  async getAllHeroes(): Promise<Hero[]> {
    return Array.from(this.heroes.values()).filter(h => h.isActive);
  }

  // ----------------- Trade-in methods -----------------
  async createTradeIn(tradeIn: InsertTradeIn): Promise<TradeIn> {
    const id = randomUUID();
    const newTradeIn: TradeIn = {
      id,
      ...tradeIn,
      status: "pending",
      completedAt: null,
      createdAt: new Date(),
      pickupAddress: tradeIn.pickupAddress ?? null,
      pickupDate: tradeIn.pickupDate ?? null,
    };
    this.tradeIns.set(id, newTradeIn);
    return newTradeIn;
  }

  async getTradeInsByHero(heroId: string): Promise<TradeIn[]> {
    return Array.from(this.tradeIns.values()).filter(t => t.heroId === heroId);
  }

  async updateTradeInStatus(id: string, status: string): Promise<TradeIn | undefined> {
    const tradeIn = this.tradeIns.get(id);
    if (!tradeIn) return undefined;
    const updated: TradeIn = {
      ...tradeIn,
      status,
      completedAt: status === "completed" ? new Date() : tradeIn.completedAt,
    };
    this.tradeIns.set(id, updated);
    return updated;
  }

  // ----------------- Impact stats -----------------
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

  // ----------------- Referrals -----------------
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
    return Array.from(this.referrals.values()).filter(r => r.referrerId === heroId);
  }

  // ----------------- Utility -----------------
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
      excellent: 1.0,
      good: 0.85,
      fair: 0.65,
      poor: 0.4,
    };
    const base = baseValues[phoneModel] || 300;
    const multiplier = conditionMultipliers[condition] || 0.4;
    return Math.floor(base * multiplier);
  }
}

export const storage = new MemStorage();
