import { useState } from "react";
import { Smartphone, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEVICE_OPTIONS, CONDITION_OPTIONS, type TradeCalculation } from "@/types/hero";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface DeviceSimulatorProps {
  onCalculation?: (result: TradeCalculation) => void;
}

export function DeviceSimulator({ onCalculation }: DeviceSimulatorProps) {
  const [selectedDevice, setSelectedDevice] = useState<string>("iPhone 13 Pro");
  const [selectedCondition, setSelectedCondition] = useState<string>("excellent");
  const [result, setResult] = useState<TradeCalculation | null>(null);

  const calculationMutation = useMutation({
    mutationFn: async ({ phoneModel, condition }: { phoneModel: string; condition: string }) => {
      const response = await apiRequest("POST", "/api/calculate-trade-value", {
        phoneModel,
        condition,
      });
      return await response.json();
    },
    onSuccess: (data) => {
      setResult(data);
      onCalculation?.(data);
    },
  });

  const handleCalculate = () => {
    calculationMutation.mutate({
      phoneModel: selectedDevice,
      condition: selectedCondition,
    });
  };

  return (
    <div className="glass rounded-2xl p-8 border border-slate-600" data-testid="device-simulator">
      <h3 className="text-2xl font-bold text-white text-center mb-8">
        YOUR DEVICE → PLANET IMPACT SIMULATOR
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Device Selection */}
        <div className="text-center" data-testid="device-selection">
          <div className="bg-slate-700 rounded-xl p-6 mb-4 hover:bg-slate-600 transition-colors">
            <Smartphone className="w-12 h-12 text-white mx-auto mb-4" />
            <Select value={selectedDevice} onValueChange={setSelectedDevice}>
              <SelectTrigger className="bg-slate-600 text-white border-slate-500" data-testid="select-device">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DEVICE_OPTIONS.map((device) => (
                  <SelectItem key={device.model} value={device.model}>
                    {device.model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="mt-4">
              <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                <SelectTrigger className="bg-slate-600 text-white border-slate-500" data-testid="select-condition">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CONDITION_OPTIONS.map((condition) => (
                    <SelectItem key={condition.condition} value={condition.condition}>
                      {condition.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="text-gray-400">Your Device</p>
        </div>

        {/* Arrow & Action */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <ArrowRight className="w-8 h-8 text-hero-green-500 animate-pulse" />
          </div>
          <Button
            onClick={handleCalculate}
            disabled={calculationMutation.isPending}
            className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-lg font-bold transition-colors"
            data-testid="button-calculate"
          >
            {calculationMutation.isPending ? "CALCULATING..." : (
              <>LEVEL UP! <Rocket className="ml-1 w-4 h-4" /></>
            )}
          </Button>
        </div>

        {/* Impact Display */}
        <div className="bg-gradient-to-br from-hero-green-500 to-hero-green-600 rounded-xl p-6 text-white" data-testid="impact-display">
          {result ? (
            <>
              <div className="text-sm font-medium mb-2">+{result.points} Planet Points</div>
              <div className="text-sm font-medium mb-2">+1 Water Guardian Badge</div>
              <div className="text-lg font-bold mb-2">+AED {result.tradeValue} Trade Value</div>
              <div className="text-sm">+{Math.floor(result.bottlesPrevented / 200)} Months Family Protection</div>
            </>
          ) : (
            <>
              <div className="text-sm font-medium mb-2">+2,400 Planet Points</div>
              <div className="text-sm font-medium mb-2">+1 Water Guardian Badge</div>
              <div className="text-lg font-bold mb-2">+AED 1,200 Trade Value</div>
              <div className="text-sm">+18 Months Family Protection</div>
            </>
          )}
        </div>
      </div>

      {/* Power-up Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-4 mt-6 text-center">
        <p className="text-white font-bold" data-testid="text-powerup">
          🔥 POWER-UP: Order now = DOUBLE POINTS!
        </p>
      </div>
    </div>
  );
}
