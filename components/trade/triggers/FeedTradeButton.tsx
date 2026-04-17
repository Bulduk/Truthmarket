'use client';

import { useTradeStore, MarketType } from '@/store/tradeStore';
import { Button } from '@/components/shared/Button';
import { TrendingUp } from 'lucide-react';

interface FeedTradeButtonProps {
  marketType: MarketType;
  contentId: string;
  label?: string;
  className?: string;
}

export function FeedTradeButton({ marketType, contentId, label = 'Pozisyon Al', className = '' }: FeedTradeButtonProps) {
  const { openTradeModal } = useTradeStore();

  const getMarketColor = () => {
    switch(marketType) {
      case 'reach': return 'bg-[#c084fc] hover:bg-[#a855f7] text-white shadow-[0_0_10px_rgba(138,43,226,0.2)] hover:shadow-[0_0_15px_rgba(138,43,226,0.4)]';
      case 'truth': return 'bg-[#00e5ff] hover:bg-[#00cce6] text-black shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]';
      case 'vibe': return 'bg-[#ff007f] hover:bg-[#e60073] text-white shadow-[0_0_10px_rgba(255,0,127,0.2)] hover:shadow-[0_0_15px_rgba(255,0,127,0.4)]';
      default: return 'bg-[#F0B90B] hover:bg-[#d4a000] text-black shadow-[0_0_10px_rgba(240,185,11,0.2)] hover:shadow-[0_0_15px_rgba(240,185,11,0.4)]';
    }
  };

  return (
    <Button 
      size="sm"
      className={`font-bold transition-all ${getMarketColor()} ${className}`}
      onClick={(e) => {
        e.preventDefault(); // In case it's inside a Link
        e.stopPropagation();
        openTradeModal(marketType, contentId);
      }}
    >
      <TrendingUp className="w-4 h-4 mr-1.5" />
      {label}
    </Button>
  );
}
