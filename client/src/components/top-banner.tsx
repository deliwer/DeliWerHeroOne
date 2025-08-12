import { Gift } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-black py-2 px-4 text-center text-sm font-medium">
      <Gift className="inline w-4 h-4 mr-2" />
      Welcome Bonus: Get Bakers Kitchen DH100 meal voucher with your trade-in! Limited time offer.
    </div>
  );
}
