import { useQuery } from "@tanstack/react-query";
import type { ImpactStats } from "@shared/schema";

export function useImpactStats() {
  return useQuery<ImpactStats>({
    queryKey: ["/api/impact-stats"],
    refetchInterval: 10000, // Refetch every 10 seconds for real-time updates
  });
}
