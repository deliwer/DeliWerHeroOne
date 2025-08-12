export interface DeviceOption {
  model: string;
  baseValue: number;
}

export interface ConditionOption {
  condition: string;
  multiplier: number;
  label: string;
}

export interface TradeCalculation {
  tradeValue: number;
  bottlesPrevented: number;
  co2Saved: number;
  points: number;
  level: string;
  phoneModel: string;
  condition: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  options?: string[];
}

export interface HeroFormData {
  name: string;
  email: string;
  phoneModel: string;
  phoneCondition: string;
  tradeValue: number;
}

export const DEVICE_OPTIONS: DeviceOption[] = [
  { model: "iPhone 15 Pro Max", baseValue: 1500 },
  { model: "iPhone 15 Pro", baseValue: 1400 },
  { model: "iPhone 15", baseValue: 1200 },
  { model: "iPhone 14 Pro Max", baseValue: 1300 },
  { model: "iPhone 14 Pro", baseValue: 1200 },
  { model: "iPhone 14", baseValue: 1000 },
  { model: "iPhone 13 Pro Max", baseValue: 1100 },
  { model: "iPhone 13 Pro", baseValue: 1000 },
  { model: "iPhone 13", baseValue: 900 },
  { model: "iPhone 12 Pro Max", baseValue: 900 },
  { model: "iPhone 12 Pro", baseValue: 800 },
  { model: "iPhone 12", baseValue: 700 },
  { model: "iPhone 11 Pro Max", baseValue: 700 },
  { model: "iPhone 11 Pro", baseValue: 600 },
  { model: "iPhone 11", baseValue: 500 },
];

export const CONDITION_OPTIONS: ConditionOption[] = [
  { condition: "excellent", multiplier: 1.0, label: "Excellent - Like new" },
  { condition: "good", multiplier: 0.85, label: "Good - Minor wear" },
  { condition: "fair", multiplier: 0.65, label: "Fair - Visible wear" },
  { condition: "poor", multiplier: 0.4, label: "Poor - Heavy wear" },
];
