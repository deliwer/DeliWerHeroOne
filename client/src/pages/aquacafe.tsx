import { useState } from "react";
import { Star, ShoppingCart, Gift, CheckCircle, Zap, Shield, Award, Heart, Target, Truck, Users, Recycle, Store, Phone, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DeviceSimulator } from "@/components/device-simulator";
import { InstantImpactUnlocks } from "@/components/instant-impact-unlocks";
import type { TradeCalculation } from "@/types/hero";

interface ProductFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProductFeature({ icon, title, description }: ProductFeatureProps) {
  return (
    <div className="text-center p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-xl border border-slate-600/70 shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">{title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function AquaCafe() {
  const [calculation, setCalculation] = useState<TradeCalculation | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string>("premium");

  const plans = [
    {
      id: "hero-starter",
      name: "AquaCafe Hero Starter",
      price: 999,
      originalPrice: 1399,
      features: [
        "Premium 3-stage filtration system",
        "12-month filter supply",
        "Planet Hero Level 2 status",
        "1000 starter points + Hero multiplier",
        "Priority support",
        "Smart monitoring app",
        "Hero member exclusive badge"
      ],
      badge: "🌟 HERO ENTRY"
    },
    {
      id: "hero-premium",
      name: "AquaCafe Hero Premium",
      price: 1499,
      originalPrice: 1999,
      features: [
        "Advanced 5-stage filtration",
        "18-month filter supply",
        "Planet Hero Level 3 status",
        "2500 starter points + 2X multiplier",
        "24/7 priority phone support",
        "Smart water quality monitoring",
        "Exclusive Hero premium badge",
        "Free home installation"
      ],
      badge: "⚡ MOST POPULAR",
      popular: true
    },
    {
      id: "hero-elite",
      name: "AquaCafe Hero Elite",
      price: 2299,
      originalPrice: 2999,
      features: [
        "Ultimate 7-stage whole-home system",
        "36-month filter supply",
        "Planet Hero Level 4 Elite status",
        "5000 starter points + 3X multiplier",
        "24/7 VIP concierge support",
        "AI-powered smart home integration",
        "Elite Hero platinum badges",
        "Free annual maintenance & upgrades",
        "Carbon footprint certificate"
      ],
      badge: "🏆 ULTIMATE HERO"
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
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900/95 to-slate-800/90 backdrop-blur-sm" data-testid="aquacafe-hero">
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
      <section className="py-16 px-4 bg-gradient-to-br from-blue-950/40 to-slate-900/60 backdrop-blur-sm" data-testid="product-features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-md">Why 12,000+ Dubai Families Choose AquaCafe</h2>
            <p className="text-gray-200 text-lg leading-relaxed">Premium filtration technology meets Dubai's water challenges</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productFeatures.map((feature, index) => (
              <ProductFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Device Trade-In Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-950/30 to-slate-800/70 backdrop-blur-sm border-y border-slate-700/50" data-testid="trade-in-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
              💰 INSTANT TRADE-IN VALUE CALCULATOR
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed">
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
      <section className="py-16 px-4 bg-gradient-to-br from-amber-950/20 to-slate-900/80 backdrop-blur-sm" data-testid="pricing-plans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
              🏆 CHOOSE YOUR HERO PACKAGE
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed">
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
                  className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/95 backdrop-blur-sm border-slate-600/70 overflow-hidden shadow-xl ${
                    plan.popular ? 'border-amber-500/50 scale-105 ring-2 ring-amber-500/30' : ''
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

      {/* Partnership Programs */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-950/30 to-slate-900/70 backdrop-blur-sm border-y border-slate-700/50" data-testid="partnership-programs">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-md">
              🤝 DeliWer Partnership Ecosystem
            </h2>
            <p className="text-gray-100 text-lg leading-relaxed">Join our sustainable trade network - Multiple partnership opportunities available</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Delivery Agent Program */}
            <Card className="glass border-slate-600">
              <CardContent className="p-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">DeliWer Agent Program</h3>
                  <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/30">
                    MOST POPULAR
                  </Badge>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Earn AED 150-300 per day
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Flexible schedule - work when you want
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Handle iPhone pickups & AquaCafe deliveries
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Use your vehicle or rent our eco-fleet
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3" />
                    Weekly payouts + environmental bonuses
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-xl font-bold text-amber-500">247</div>
                    <div className="text-xs text-gray-400">Active Agents</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-xl font-bold text-amber-500">4.8★</div>
                    <div className="text-xs text-gray-400">Agent Rating</div>
                  </div>
                </div>

                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black py-3 font-bold">
                  <Users className="mr-2 w-5 h-5" />
                  BECOME A DELIVERY AGENT
                </Button>
              </CardContent>
            </Card>

            {/* Eco-Trade Recycling Partner */}
            <Card className="glass border-slate-600">
              <CardContent className="p-8 bg-gradient-to-br from-hero-green-500/10 to-dubai-blue-500/10 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-hero-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Eco-Trade Recycling Partner</h3>
                  <Badge className="bg-hero-green-500/20 text-hero-green-500 border-hero-green-500/30">
                    ECO IMPACT
                  </Badge>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-hero-green-500 mr-3" />
                    Process iPhone trade-ins sustainably
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-hero-green-500 mr-3" />
                    AED 50-150 per device processed
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-hero-green-500 mr-3" />
                    Certified e-waste management training
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-hero-green-500 mr-3" />
                    Partnership with Dubai Municipality
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-hero-green-500 mr-3" />
                    Environmental impact certificates
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-xl font-bold text-hero-green-500">89</div>
                    <div className="text-xs text-gray-400">Active Partners</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                    <div className="text-xl font-bold text-hero-green-500">15T</div>
                    <div className="text-xs text-gray-400">CO₂ Prevented</div>
                  </div>
                </div>

                <Button className="w-full bg-hero-green-500 hover:bg-hero-green-600 text-white py-3 font-bold">
                  <Recycle className="mr-2 w-5 h-5" />
                  JOIN ECO-RECYCLING PROGRAM
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Restaurant Collection Partner */}
          <Card className="glass border-slate-600 mb-12">
            <CardContent className="p-8 bg-gradient-to-br from-dubai-blue-500/10 to-slate-900/10 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-dubai-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Store className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Restaurant Collection Partner</h3>
                    <Badge className="bg-dubai-blue-500/20 text-dubai-blue-500 border-dubai-blue-500/30">
                      BUSINESS SOLUTION
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-dubai-blue-500 mr-3" />
                      Host AquaCafe collection point
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-dubai-blue-500 mr-3" />
                      Earn 10% commission on all sales
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-dubai-blue-500 mr-3" />
                      Free promotional materials
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-dubai-blue-500 mr-3" />
                      Enhance your green reputation
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Perfect for:</h4>
                  <div className="space-y-3 mb-6">
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <div className="font-semibold text-white">Cafes & Restaurants</div>
                      <div className="text-sm text-gray-400">High foot traffic locations</div>
                    </div>
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <div className="font-semibold text-white">Shopping Centers</div>
                      <div className="text-sm text-gray-400">Mall kiosks and stores</div>
                    </div>
                    <div className="p-3 bg-slate-700/30 rounded-lg">
                      <div className="font-semibold text-white">Office Buildings</div>
                      <div className="text-sm text-gray-400">Corporate sustainability programs</div>
                    </div>
                  </div>

                  <Button className="w-full bg-dubai-blue-500 hover:bg-dubai-blue-600 text-white py-3 font-bold">
                    <Store className="mr-2 w-5 h-5" />
                    BECOME A COLLECTION PARTNER
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-950/40 to-slate-800/80 backdrop-blur-sm" data-testid="contact-support">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
            <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-md">24/7 Partner & Customer Support</h2>
            <p className="text-gray-100 leading-relaxed">Multiple ways to get help, schedule deliveries, or join our partnership programs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/95 backdrop-blur-sm border-slate-600/70 shadow-lg">
              <CardContent className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/80 backdrop-blur-sm text-center">
                <Phone className="w-12 h-12 text-dubai-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Emergency Support</h3>
                <a href="tel:+971523946311" className="text-dubai-blue-500 hover:underline text-lg">
                  +971 52 394 6311
                </a>
                <p className="text-sm text-gray-400 mt-2">24/7 Hotline for urgent issues</p>
                <div className="mt-4 space-y-2 text-sm text-gray-300">
                  <div>• Delivery emergencies</div>
                  <div>• Technical support</div>
                  <div>• Partnership inquiries</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/95 backdrop-blur-sm border-slate-600/70 shadow-lg">
              <CardContent className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/80 backdrop-blur-sm text-center">
                <Mail className="w-12 h-12 text-hero-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Business Partnerships</h3>
                <a href="mailto:partners@deliwer.com" className="text-hero-green-500 hover:underline text-lg">
                  partners@deliwer.com
                </a>
                <p className="text-sm text-gray-400 mt-2">Partnership applications & support</p>
                <div className="mt-4 space-y-2 text-sm text-gray-300">
                  <div>• Agent program applications</div>
                  <div>• Restaurant partnerships</div>
                  <div>• Bulk order inquiries</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/95 backdrop-blur-sm border-slate-600/70 shadow-lg">
              <CardContent className="p-6 bg-gradient-to-br from-slate-800/70 to-slate-900/80 backdrop-blur-sm text-center">
                <MessageSquare className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">WhatsApp Support</h3>
                <a href="https://wa.me/971523946311" className="text-amber-500 hover:underline text-lg">
                  Chat Now
                </a>
                <p className="text-sm text-gray-400 mt-2">Instant messaging support</p>
                <div className="mt-4 space-y-2 text-sm text-gray-300">
                  <div>• Order tracking</div>
                  <div>• Schedule deliveries</div>
                  <div>• Quick questions</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Partnership Contact Form */}
          <Card className="glass border-slate-600">
            <CardContent className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/90 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Quick Partnership Inquiry</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-hero-green-500 focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-hero-green-500 focus:outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-hero-green-500 focus:outline-none"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Partnership Type</label>
                      <select className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-hero-green-500 focus:outline-none">
                        <option value="">Select partnership type</option>
                        <option value="delivery-agent">Delivery Agent</option>
                        <option value="eco-recycling">Eco-Recycling Partner</option>
                        <option value="restaurant-collection">Restaurant Collection</option>
                        <option value="other">Other Partnership</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                      <textarea
                        className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-hero-green-500 focus:outline-none h-24 resize-none"
                        placeholder="Tell us about your interest and experience..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-gradient-to-r from-hero-green-500 to-dubai-blue-500 hover:from-hero-green-600 hover:to-dubai-blue-600 text-white px-8 py-3 font-bold">
                  <Send className="mr-2 w-5 h-5" />
                  Submit Partnership Inquiry
                </Button>
                <p className="text-sm text-gray-400 mt-4">
                  We typically respond within 4-6 hours during business hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-950/30 to-slate-900/90 backdrop-blur-sm border-t border-slate-700/50" data-testid="final-cta">
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
            <a 
              href="https://www.deliwer.com/products/aquacafe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black px-12 py-4 rounded-xl font-bold text-xl transform hover:scale-105 transition-all"
              data-testid="button-order-hero"
            >
              <Target className="mr-2 w-6 h-6" />
              ORDER AQUACAFE - AED 99
            </a>
            <a 
              href="https://wa.me/971523946311"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-hero-green-500 text-hero-green-500 hover:bg-hero-green-500 hover:text-white px-12 py-4 rounded-xl font-bold text-xl transition-all"
              data-testid="button-chat-hero"
            >
              💬 CHAT WITH HERO CONCIERGE
            </a>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            🔒 Secure Checkout • 🚚 Free Dubai Delivery • 🌍 Carbon Neutral Shipping
          </p>
        </div>
      </section>
    </div>
  );
}