'use client';

import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Position {
  id: string;
  marketId: string;
  marketTitle: string;
  outcome: 'yes' | 'no';
  shares: number;
  avgPrice: number;
  currentPrice: number;
}

const MOCK_POSITIONS: Position[] = [
  {
    id: '1',
    marketId: '1',
    marketTitle: 'Will Ethereum reach $4,000 by June 2024?',
    outcome: 'yes',
    shares: 1500,
    avgPrice: 0.45,
    currentPrice: 0.65,
  },
  {
    id: '2',
    marketId: '2',
    marketTitle: 'Will the Federal Reserve cut interest rates in May?',
    outcome: 'no',
    shares: 5000,
    avgPrice: 0.60,
    currentPrice: 0.78,
  },
  {
    id: '3',
    marketId: '3',
    marketTitle: 'Who will win the US Presidential Election 2024?',
    outcome: 'yes',
    shares: 800,
    avgPrice: 0.50,
    currentPrice: 0.48,
  }
];

export function PositionsList() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-white/10 flex justify-between items-center">
        <h3 className="text-lg font-bold text-white">Active Positions</h3>
        <button className="text-sm text-[#fcd535] hover:text-[#f0b90b] transition-colors font-medium">
          View History
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-gray-400 border-b border-white/5 bg-white/[0.02]">
              <th className="p-4 font-medium">Market</th>
              <th className="p-4 font-medium">Outcome</th>
              <th className="p-4 font-medium text-right">Shares</th>
              <th className="p-4 font-medium text-right">Avg Price</th>
              <th className="p-4 font-medium text-right">Current Price</th>
              <th className="p-4 font-medium text-right">PnL</th>
              <th className="p-4 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {MOCK_POSITIONS.map((pos) => {
              const totalCost = pos.shares * pos.avgPrice;
              const currentValue = pos.shares * pos.currentPrice;
              const pnl = currentValue - totalCost;
              const pnlPercent = (pnl / totalCost) * 100;
              const isProfit = pnl >= 0;

              return (
                <tr key={pos.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <Link href={`/markets/${pos.marketId}`} className="text-sm font-medium text-white hover:text-[#fcd535] transition-colors line-clamp-1 max-w-[250px]">
                      {pos.marketTitle}
                    </Link>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      pos.outcome === 'yes' ? 'bg-[#0ecb81]/10 text-[#0ecb81]' : 'bg-[#f6465d]/10 text-[#f6465d]'
                    }`}>
                      {pos.outcome.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4 text-right text-sm text-gray-300 font-mono">
                    {pos.shares.toLocaleString()}
                  </td>
                  <td className="p-4 text-right text-sm text-gray-300 font-mono">
                    {(pos.avgPrice * 100).toFixed(1)}¢
                  </td>
                  <td className="p-4 text-right text-sm text-white font-mono">
                    {(pos.currentPrice * 100).toFixed(1)}¢
                  </td>
                  <td className="p-4 text-right">
                    <div className={`flex flex-col items-end ${isProfit ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                      <span className="text-sm font-bold font-mono">
                        {isProfit ? '+' : ''}${pnl.toFixed(2)}
                      </span>
                      <span className="text-xs flex items-center gap-0.5">
                        {isProfit ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {Math.abs(pnlPercent).toFixed(2)}%
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <Link href={`/markets/${pos.marketId}`}>
                      <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
