'use client';

import { useState } from 'react';
import { PortfolioChart } from '@/components/wallet/PortfolioChart';
import { PositionsList } from '@/components/wallet/PositionsList';
import { RewardClaim } from '@/components/wallet/RewardClaim';
import { Wallet, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

// Dummy portfolio data
const generatePortfolioData = () => {
  let val = 10000;
  const data = [];
  const now = new Date();
  for (let i = 0; i < 30; i++) {
    val += (Math.random() - 0.45) * 500;
    data.push({
      time: new Date(now.getTime() - (30 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: val,
    });
  }
  return data;
};

const portfolioData = generatePortfolioData();

export default function PortfolioPage() {
  const [timeframe, setTimeframe] = useState('1M');
  
  const totalValue = 12450.75;
  const totalChange = 2450.75;
  const totalChangePercent = 24.5;
  const isProfit = totalChange >= 0;

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      <div className="flex items-center gap-3 mt-8">
        <div className="w-10 h-10 rounded-xl bg-[#fcd535]/10 flex items-center justify-center">
          <Wallet className="w-5 h-5 text-[#fcd535]" />
        </div>
        <h1 className="text-3xl font-bold text-white">Portfolio</h1>
      </div>

      {/* Top Stats & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          {/* Main Balance Card */}
          <div className="glass rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity className="w-24 h-24 text-white" />
            </div>
            <h2 className="text-sm font-medium text-gray-400 mb-2">Total Portfolio Value</h2>
            <div className="text-4xl font-bold text-white font-mono mb-4">
              ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold ${
              isProfit ? 'bg-[#0ecb81]/10 text-[#0ecb81]' : 'bg-[#f6465d]/10 text-[#f6465d]'
            }`}>
              {isProfit ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              ${Math.abs(totalChange).toLocaleString()} ({totalChangePercent}%)
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-medium text-gray-400">Asset Allocation</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#fcd535]" />
                  <span className="text-white text-sm">Positions</span>
                </div>
                <span className="text-white font-mono text-sm">$8,200.00</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#2764FF]" />
                  <span className="text-white text-sm">USDC (Cash)</span>
                </div>
                <span className="text-white font-mono text-sm">$4,250.75</span>
              </div>
            </div>
            <div className="h-2 w-full rounded-full overflow-hidden flex mt-4">
              <div className="h-full bg-[#fcd535]" style={{ width: '65%' }} />
              <div className="h-full bg-[#2764FF]" style={{ width: '35%' }} />
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="lg:col-span-2 glass rounded-2xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Performance</h3>
            <div className="flex bg-[#131720] rounded-lg p-1">
              {['1D', '1W', '1M', 'ALL'].map(tf => (
                <button 
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${
                    timeframe === tf ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 min-h-[300px]">
            <PortfolioChart data={portfolioData} />
          </div>
        </div>
      </div>

      {/* Rewards Section */}
      <RewardClaim />

      {/* Positions List */}
      <PositionsList />
    </div>
  );
}
