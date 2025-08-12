import { Droplets, Leaf, Coins, Users } from "lucide-react";
import { useImpactStats } from "@/hooks/use-impact-stats";
import { Skeleton } from "@/components/ui/skeleton";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  testId: string;
}

function StatCard({ icon, value, label, color, testId }: StatCardProps) {
  return (
    <div className="glass rounded-xl p-6 text-center" data-testid={testId}>
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-2" data-testid={`${testId}-value`}>{value}</div>
      <div className="text-gray-400" data-testid={`${testId}-label`}>{label}</div>
    </div>
  );
}

export function ImpactStats() {
  const { data: stats, isLoading, error } = useImpactStats();

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }, (_, i) => (
          <Skeleton key={i} className="h-48 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="text-center text-gray-400 py-8">
        <p>Unable to load impact statistics</p>
        <p className="text-sm">Environmental data will be updated soon!</p>
      </div>
    );
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const formatCurrency = (fils: number) => {
    const aed = fils / 100;
    return `AED ${formatNumber(aed)}`;
  };

  const formatWeight = (grams: number) => {
    const tons = grams / 1000000;
    return tons >= 1 ? `${tons.toFixed(1)}T` : `${(grams / 1000).toFixed(1)}kg`;
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" data-testid="impact-stats">
      <StatCard
        icon={<Droplets className="w-8 h-8 text-blue-500" />}
        value={formatNumber(stats.totalBottlesPrevented)}
        label="Plastic Bottles Prevented"
        color="bg-blue-500/20"
        testId="stat-bottles"
      />
      
      <StatCard
        icon={<Leaf className="w-8 h-8 text-hero-green-500" />}
        value={formatWeight(stats.totalCo2Saved)}
        label="CO₂ Saved"
        color="bg-hero-green-500/20"
        testId="stat-co2"
      />
      
      <StatCard
        icon={<Coins className="w-8 h-8 text-amber-500" />}
        value={formatCurrency(stats.totalRewards)}
        label="Total Hero Rewards"
        color="bg-amber-500/20"
        testId="stat-rewards"
      />
      
      <StatCard
        icon={<Users className="w-8 h-8 text-purple-500" />}
        value={formatNumber(stats.activeHeroes)}
        label="Active Planet Heroes"
        color="bg-purple-500/20"
        testId="stat-heroes"
      />
    </div>
  );
}
