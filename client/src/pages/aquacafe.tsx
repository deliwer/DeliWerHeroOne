import { useState } from "react";
import { Star, ShoppingCart, Gift, CheckCircle, Zap, Shield, Award, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DeviceSimulator } from "@/components/device-simulator";
import { InstantImpactUnlocks } from "@/components/instant-impact-unlocks";
import { Navigation } from "@/components/navigation";
import type { TradeCalculation } from "@/types/hero";

interface ProductFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProductFeature({ icon, title, description }: ProductFeatureProps) {
  return (
    <div className="text-center p-6 glass rounded-xl border border-slate-600">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

export default function AquaCafe() {
  const [calculation, setCalculation] = useState<TradeCalculation | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>("premium");

  const plans = [
    {
      id: "starter",
      name: "AquaCafe Starter",
      price: 299,
      originalPrice: 399,
      features: [
        "Basic water filtration system",
        "6-month filter supply",
        "Planet Hero Level 1 status",
        "500 starter points",
        "Email support"
      ],
      badge: "🌱 ECO STARTER"
    },
    {
      id: "premium",
      name: "AquaCafe Hero Edition",
      price: 599,
      originalPrice: 799,
      features: [
        "Premium 5-stage filtration",
        "12-month filter supply",
        "Planet Hero Level 2 status",
        "1500 starter points + 2X multiplier",
        "Priority phone support",
        "Smart water quality monitoring",
        "Exclusive Hero badge"
      ],
      badge: "⚡ MOST POPULAR",
      popular: true
    },
    {
      id: "family",
      name: "AquaCafe Family Guardian",
      price: 999,
      originalPrice: 1299,
      features: [
        "Whole-home filtration system",
        "24-month filter supply",
        "Planet Hero Level 3 status",
        "3000 starter points + 3X multiplier",
        "24/7 VIP support",
        "Smart home integration",
        "Family protection badges",
        "Free annual maintenance"
      ],
      badge: "🏆 ULTIMATE PROTECTION"
    }
  ];

  const productFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400 mx-auto" />,
      title: "99.9% Filtration",
      description: "Removes chlorine, heavy metals, bacteria, and microplastics"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400 mx-auto" />,
      title: "Family Safe",
      description: "NSF certified, BPA-free materials, child-safe design"
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500 mx-auto" />,
      title: "Smart Monitoring",
      description: "Real-time water quality tracking with mobile alerts"
    },
    {
      icon: <Award className="w-8 h-8 text-hero-green-500 mx-auto" />,
      title: "Dubai Approved",
      description: "DEWA certified, meets UAE water safety standards"
    }
  ];

  const handleOrderNow = (planId: string) => {
    // In a real implementation, this would integrate with Shopify
    alert(`Ordering ${plans.find(p => p.id === planId)?.name}! This would integrate with Shopify checkout.`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4" data-testid="aquacafe-hero">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center glass rounded-full px-6 py-3 mb-6 border border-hero-green-500/30">
            <Star className="w-5 h-5 text-amber-500 mr-2" />
            <span className="text-white font-medium">DUBAI'S #1 WATER FILTRATION SYSTEM</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AquaCafe
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Premium Water Systems
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Transform your old iPhone into premium clean water for your family. 
            Join 12,000+ Dubai families already protecting their health with AquaCafe.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-hero-green-500 mr-2" />
              DEWA Certified
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-hero-green-500 mr-2" />
              NSF International
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-hero-green-500 mr-2" />
              ISO 9001 Quality
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-hero-green-500 mr-2" />
              5 Year Warranty
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Grid */}
      <section className="py-16 px-4" data-testid="product-features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why 12,000+ Dubai Families Choose AquaCafe</h2>
            <p className="text-gray-300 text-lg">Premium filtration technology meets Dubai's water challenges</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productFeatures.map((feature, index) => (
              <ProductFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Device Trade-In Section */}
      <section className="py-16 px-4 bg-slate-800/50" data-testid="trade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              💰 INSTANT TRADE-IN VALUE CALCULATOR
            </h2>
            <p className="text-gray-300 text-lg">
              See exactly how much your iPhone is worth towards your AquaCafe system
            </p>
          </div>
          
          <DeviceSimulator onCalculation={setCalculation} />
          
          {calculation && (
            <div className="text-center mt-8">
              <div className="glass rounded-xl p-6 border border-hero-green-500/30 inline-block">
                <p className="text-white text-lg mb-2">
                  🎉 Your iPhone in {calculation.condition} condition is worth:
                </p>
                <div className="text-3xl font-bold text-amber-500 mb-2">
                  AED {calculation.tradeValue.toLocaleString()}
                </div>
                <p className="text-gray-300 text-sm">
                  Plus {calculation.points.toLocaleString()} Planet Points and exclusive benefits!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4" data-testid="pricing-plans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              🏆 CHOOSE YOUR HERO PACKAGE
            </h2>
            <p className="text-gray-300 text-lg">
              Every package includes your iPhone trade-in value as instant credit
            </p>
            
            {calculation && (
              <div className="inline-flex items-center bg-hero-green-500/20 border border-hero-green-500/50 rounded-full px-6 py-3 mt-4">
                <Gift className="w-5 h-5 text-hero-green-500 mr-2" />
                <span className="text-hero-green-500 font-bold">
                  Your Trade Credit: AED {calculation.tradeValue.toLocaleString()}
                </span>
              </div>
            )}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => {
              const finalPrice = plan.price - (calculation?.tradeValue || 0);
              const savings = plan.originalPrice - plan.price + (calculation?.tradeValue || 0);
              
              return (
                <Card 
                  key={plan.id} 
                  className={`relative glass border-slate-600 overflow-hidden ${
                    plan.popular ? 'border-amber-500/50 scale-105' : ''
                  }`}
                  data-testid={`plan-${plan.id}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-center py-2 font-bold text-sm">
                      {plan.badge}
                    </div>
                  )}
                  
                  <CardContent className="p-8 pt-12">
                    {!plan.popular && (
                      <div className="text-center mb-4">
                        <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs font-bold">
                          {plan.badge}
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      
                      <div className="mb-4">
                        <div className="text-gray-400 line-through text-lg mb-1">
                          AED {plan.originalPrice.toLocaleString()}
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">
                          AED {plan.price.toLocaleString()}
                        </div>
                        {calculation && (
                          <div className="text-hero-green-500 font-bold text-lg">
                            Your Price: AED {Math.max(0, finalPrice).toLocaleString()}
                          </div>
                        )}
                        <div className="text-sm text-amber-500 font-bold">
                          Save AED {savings.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-hero-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      onClick={() => handleOrderNow(plan.id)}
                      className={`w-full py-3 font-bold text-lg rounded-xl transition-all ${
                        plan.popular
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black'
                          : 'bg-hero-green-500 hover:bg-hero-green-600 text-white'
                      }`}
                      data-testid={`button-order-${plan.id}`}
                    >
                      <ShoppingCart className="mr-2 w-5 h-5" />
                      ORDER NOW
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Money Back Guarantee */}
          <div className="text-center">
            <div className="glass rounded-xl p-6 border border-slate-600 inline-block">
              <Shield className="w-12 h-12 text-hero-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">30-Day Money Back Guarantee</h3>
              <p className="text-gray-300">
                Not satisfied? Get your full refund + keep your Planet Hero points
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Impact Unlocks */}
      <InstantImpactUnlocks calculation={calculation || undefined} onOrderNow={() => handleOrderNow(selectedPlan)} />

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-slate-800/30" data-testid="final-cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            🚀 JOIN 12,000+ DUBAI PLANET HEROES TODAY
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-hero-green-500 mb-2">99.9%</div>
              <div className="text-gray-300">Filtration Rate</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-400 mb-2">5 Year</div>
              <div className="text-gray-300">Warranty</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-amber-500 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleOrderNow("premium")}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black px-12 py-4 rounded-xl font-bold text-xl transform hover:scale-105 transition-all"
              data-testid="button-order-hero"
            >
              <Target className="mr-2 w-6 h-6" />
              ORDER HERO EDITION NOW
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-hero-green-500 text-hero-green-500 hover:bg-hero-green-500 hover:text-white px-12 py-4 rounded-xl font-bold text-xl transition-all"
              data-testid="button-chat-hero"
            >
              💬 CHAT WITH HERO CONCIERGE
            </Button>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            🔒 Secure Checkout • 🚚 Free Dubai Delivery • 🌍 Carbon Neutral Shipping
          </p>
        </div>
      </section>
    </div>
  );
}