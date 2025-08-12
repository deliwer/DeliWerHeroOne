import { Star, Zap, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeviceSimulator } from "./device-simulator";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dubai-blue-900/50 to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-hero-green-500/20 rounded-full blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-amber-500/20 rounded-full blur-xl animate-bounce-slow"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Mission Header */}
        <div className="text-center mb-12" data-testid="mission-header">
          <div className="inline-flex items-center glass-light rounded-full px-6 py-3 mb-6 border border-hero-green-500/30">
            <Star className="w-5 h-5 text-amber-500 mr-2" />
            <span className="text-white font-medium">WELCOME TO MISSION: SAVE DUBAI 2030</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-testid="main-heading">
            Dubai's First <span className="text-hero-green-500">iPhone-to-Water</span> Trade Service
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8" data-testid="main-description">
            Get <span className="text-amber-500 font-bold">AED 1000+</span>{" "}
            <span className="bg-amber-500 text-black px-2 py-1 rounded font-bold">CASHBACK</span>{" "}
            in filtered water systems + meal vouchers | Free pickup anywhere in Dubai with instant WhatsApp valuation.
          </p>
        </div>

        {/* Device Impact Simulator */}
        <div className="mb-12">
          <DeviceSimulator />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-testid="action-buttons">
          <Link href="/leaderboard">
            <Button className="btn-hero px-8 py-4 rounded-xl font-bold text-lg" data-testid="button-activate-hero">
              <Zap className="mr-2 w-5 h-5" />
              ACTIVATE HERO MODE
            </Button>
          </Link>
          <Link href="/leaderboard">
            <Button 
              variant="secondary" 
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg"
              data-testid="button-join-heroes"
            >
              <Users className="mr-2 w-5 h-5" />
              JOIN 12,847 HEROES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
