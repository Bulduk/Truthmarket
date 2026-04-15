'use client';

import { TrendingUp, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const MOCK_TRENDING = [
  {
    id: '1',
    title: 'Will Ethereum reach $4,000 by June 2024?',
    yesPrice: 0.65,
    volume: '1.25M',
  },
  {
    id: '2',
    title: 'Will the Federal Reserve cut interest rates in May?',
    yesPrice: 0.35,
    volume: '850K',
  },
  {
    id: '3',
    title: 'Who will win the US Presidential Election 2024?',
    yesPrice: 0.48,
    volume: '3.4M',
  }
];

export function TrendingMarkets() {
  return (
    <div className="glass rounded-2xl p-5 border border-white/10">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-[#fcd535]" />
        <h3 className="font-bold text-white">Trending Markets</h3>
      </div>
      
      <div className="space-y-4">
        {MOCK_TRENDING.map((market) => (
          <Link 
            key={market.id} 
            href={`/markets/${market.id}`}
            className="block group"
          >
            <div className="flex justify-between items-start gap-4">
              <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2 flex-1">
                {market.title}
              </h4>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#0ecb81]/10 text-[#0ecb81] text-xs font-bold font-mono">
                  YES {(market.yesPrice * 100).toFixed(0)}¢
                </span>
                <span className="px-2 py-0.5 rounded bg-[#f6465d]/10 text-[#f6465d] text-xs font-bold font-mono">
                  NO {((1 - market.yesPrice) * 100).toFixed(0)}¢
                </span>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                ${market.volume}
              </span>
            </div>
          </Link>
        ))}
      </div>
      
      <Link 
        href="/markets"
        className="block w-full text-center mt-4 pt-4 border-t border-white/10 text-sm font-bold text-[#fcd535] hover:text-[#f0b90b] transition-colors"
      >
        View All Markets
      </Link>
    </div>
  );
}
