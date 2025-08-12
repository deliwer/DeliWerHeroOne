import { useState, useEffect } from "react";
import { Gift, Star, Zap, Award, Target, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { TradeCalculation } from "@/types/hero";

interface InstantImpactUnlocksProps {
  calculation?: TradeCalculation;
  onOrderNow?: () => void;
}

function UnlockAnimation({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
      {children}
    </div>
  );
}

function ImpactMeter({ value, max, label, color }: { value: number; max: number; label: string; color: string }) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className="mb-4" data-testid={`impact-meter-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-300">{label}</span>
        <span className="text-white font-bold">{value.toLocaleString()}</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-3 rounded-full ${color} transition-all duration-2000 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1">Goal: {max.toLocaleString()}</div>
    </div>
  );
}

export function InstantImpactUnlocks({ calculation, onOrderNow }: InstantImpactUnlocksProps) {
  const [showUnlocks, setShowUnlocks] = useState(false);
  const [unlockedItems, setUnlockedItems] = useState<string[]>([]);
  
  useEffect(() => {
    if (calculation) {
      setShowUnlocks(true);
      // Stagger the unlock animations
      const unlocks = ["points", "badge", "filter", "streak"];
      unlocks.forEach((item, index) => {
        setTimeout(() => {
          setUnlockedItems(prev => [...prev, item]);
        }, 1000 + (index * 500));
      });
    }
  }, [calculation]);
  
  const unlockItems = [
    {
      id: "points",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "INSTANT PLANET POWER",
      value: calculation ? `+${calculation.points} Points` : "+2,400 Points",
      bgColor: "bg-amber-500/10 border-amber-500/30"
    },
    {
      id: "badge",
      icon: <Award className="w-8 h-8 text-hero-green-500" />,
      title: "ACHIEVEMENT",
      value: '"Water Warrior"',
      bgColor: "bg-hero-green-500/10 border-hero-green-500/30"
    },
    {
      id: "filter",
      icon: <Gift className="w-8 h-8 text-blue-500" />,
      title: "SURPRISE UNLOCK",
      value: "Premium Filter FREE",
      bgColor: "bg-blue-500/10 border-blue-500/30"
    },
    {
      id: "streak",
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "STREAK BONUS",
      value: "30-Day Challenge",
      bgColor: "bg-orange-500/10 border-orange-500/30"
    }
  ];

  if (!showUnlocks && !calculation) {
    return (
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            💥 INSTANT PLANET POWER UNLOCKS
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            The moment you order AquaCafe Starter Kit, unlock exclusive rewards
          </p>
          
          <div className="glass rounded-2xl p-8 border border-slate-600">
            <div className="text-center mb-8">
              <Sparkles className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <p className="text-xl text-gray-300">Complete your iPhone trade-in to unlock amazing rewards!</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {unlockItems.map((item, index) => (
                <div key={item.id} className={`p-4 rounded-xl border ${item.bgColor} opacity-50`}>
                  <div className="text-center">
                    <div className="mb-3">{item.icon}</div>
                    <div className="text-xs font-bold text-gray-400 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-slate-900/30" data-testid="instant-unlocks">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            💥 INSTANT PLANET POWER UNLOCKS
          </h2>
          <p className="text-gray-300 text-lg">
            The moment you order AquaCafe Starter Kit, unlock exclusive rewards
          </p>
        </div>

        {showUnlocks && (
          <UnlockAnimation>
            <div className="glass rounded-3xl p-8 border border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-orange-500/5 mb-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Gift className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">🎉 CONGRATULATIONS! YOU'VE UNLOCKED:</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {unlockItems.map((item, index) => (
                  <UnlockAnimation key={item.id}>
                    <div className={`p-6 rounded-xl border ${item.bgColor} ${
                      unlockedItems.includes(item.id) ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
                    } transition-all duration-500`}>
                      <div className="text-center">
                        <div className="mb-4">{item.icon}</div>
                        <div className="text-sm font-bold text-gray-300 mb-2">{item.title}</div>
                        <div className="text-lg font-bold text-white">{item.value}</div>
                        {unlockedItems.includes(item.id) && (
                          <div className="mt-2">
                            <div className="inline-flex items-center bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold">
                              <Star className="w-3 h-3 mr-1" />
                              UNLOCKED
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </UnlockAnimation>
                ))}
              </div>
            </div>
          </UnlockAnimation>
        )}

        {/* Your Instant Impact */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="glass border-slate-600" data-testid="instant-impact-stats">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 text-hero-green-500 mr-2" />
                YOUR INSTANT IMPACT
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-gray-300 flex items-center">
                    <span className="text-red-500 mr-2">🚫</span>
                    Plastic Bottles PREVENTED
                  </span>
                  <span className="text-2xl font-bold text-blue-400">
                    {calculation?.bottlesPrevented.toLocaleString() || '2,400'}
                  </span>
                  <span className="text-hero-green-500 text-sm">✅</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-gray-300 flex items-center">
                    <span className="text-green-500 mr-2">🌱</span>
                    CO₂ BLOCKED
                  </span>
                  <span className="text-2xl font-bold text-hero-green-500">
                    {calculation ? (calculation.co2Saved / 1000).toFixed(1) : '1.2'} Tons
                  </span>
                  <span className="text-hero-green-500 text-sm">✅</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-gray-300 flex items-center">
                    <span className="text-amber-500 mr-2">💰</span>
                    Family Savings ACTIVATED
                  </span>
                  <span className="text-2xl font-bold text-amber-500">
                    AED {calculation ? (calculation.bottlesPrevented * 1.5).toLocaleString() : '3,600'}
                  </span>
                  <span className="text-hero-green-500 text-sm">✅</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-gray-300 flex items-center">
                    <span className="text-blue-500 mr-2">🔒</span>
                    Clean Water SECURED
                  </span>
                  <span className="text-2xl font-bold text-blue-400">
                    {calculation ? Math.floor(calculation.bottlesPrevented / 200) : '12'} Months
                  </span>
                  <span className="text-hero-green-500 text-sm">✅</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hero Journey Progress */}
          <Card className="glass border-slate-600" data-testid="hero-journey">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Trophy className="w-6 h-6 text-amber-500 mr-2" />
                YOUR HERO JOURNEY
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-hero-green-500/10 border border-hero-green-500/30 rounded-lg">
                  <div className="w-10 h-10 bg-hero-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">1</div>
                  <div className="flex-1">
                    <div className="text-white font-bold">LEVEL 1: ECO-AWAKENING</div>
                    <div className="text-sm text-hero-green-500 font-bold">ACTIVE</div>
                    <div className="text-xs text-gray-400">AquaCafe Starter Kit → Water Warrior Badge</div>
                  </div>
                  <div className="text-hero-green-500">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-slate-700/30 rounded-lg opacity-60">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">2</div>
                  <div className="flex-1">
                    <div className="text-white font-bold">Level 2: Hydration Hero</div>
                    <div className="text-xs text-gray-400">30 days active</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-slate-700/30 rounded-lg opacity-40">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">3</div>
                  <div className="flex-1">
                    <div className="text-white font-bold">Level 3: Sustainability Sage</div>
                    <div className="text-xs text-gray-400">3 referrals</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-slate-700/30 rounded-lg opacity-30">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">4</div>
                  <div className="flex-1">
                    <div className="text-white font-bold">Level 4: Carbon Crusher</div>
                    <div className="text-xs text-gray-400">6 months</div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-slate-700/30 rounded-lg opacity-20">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">5</div>
                  <div className="flex-1">
                    <div className="text-white font-bold">Level 5: Planet Protector</div>
                    <div className="text-xs text-gray-400">12 months</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={onOrderNow}
            className="bg-gradient-to-r from-hero-green-500 to-hero-green-600 hover:from-hero-green-600 hover:to-hero-green-700 text-white px-12 py-4 rounded-xl font-bold text-xl transform hover:scale-105 transition-all"
            data-testid="button-unlock-rewards"
          >
            <Zap className="mr-2 w-6 h-6" />
            UNLOCK ALL REWARDS - ORDER NOW
          </Button>
        </div>
      </div>
    </section>
  );
}