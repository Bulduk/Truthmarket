'use client';

import { TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

interface MarketWidgetProps {
  market: {
    id: string;
    title: string;
    yesPrice: number;
    noPrice: number;
    volume: string;
    participants: number;
  };
}

export function MarketWidget({ market }: MarketWidgetProps) {
  return (
    <div className="mt-3 border border-white/10 rounded-xl overflow-hidden bg-[#131720]">
      <div className="p-4 border-b border-white/5">
        <Link href={`/markets/${market.id}`} className="font-bold text-white hover:text-[#fcd535] transition-colors line-clamp-2">
          {market.title}
        </Link>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>${market.volume} Vol</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>{market.participants} Traders</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-px bg-white/5">
        <button className="bg-[#131720] p-3 hover:bg-[#0ecb81]/5 transition-colors group flex flex-col items-center justify-center gap-1">
          <span className="text-sm font-bold text-white group-hover:text-[#0ecb81] transition-colors">Yes</span>
          <span className="text-xs text-[#0ecb81] font-mono">{(market.yesPrice * 100).toFixed(1)}¢</span>
        </button>
        <button className="bg-[#131720] p-3 hover:bg-[#f6465d]/5 transition-colors group flex flex-col items-center justify-center gap-1">
          <span className="text-sm font-bold text-white group-hover:text-[#f6465d] transition-colors">No</span>
          <span className="text-xs text-[#f6465d] font-mono">{(market.noPrice * 100).toFixed(1)}¢</span>
        </button>
      </div>
    </div>
  );
}
