'use client';

import { useState } from 'react';

interface Order {
  price: number;
  shares: number;
  total: number;
}

const MOCK_BIDS: Order[] = [
  { price: 0.64, shares: 1250, total: 800 },
  { price: 0.63, shares: 3400, total: 2142 },
  { price: 0.61, shares: 8900, total: 5429 },
  { price: 0.58, shares: 12000, total: 6960 },
  { price: 0.55, shares: 45000, total: 24750 },
];

const MOCK_ASKS: Order[] = [
  { price: 0.66, shares: 800, total: 528 },
  { price: 0.67, shares: 2100, total: 1407 },
  { price: 0.69, shares: 5600, total: 3864 },
  { price: 0.72, shares: 15000, total: 10800 },
  { price: 0.75, shares: 32000, total: 24000 },
];

export function OrderBook() {
  const [activeTab, setActiveTab] = useState<'yes' | 'no'>('yes');
  
  const maxTotal = Math.max(
    ...MOCK_BIDS.map(b => b.total),
    ...MOCK_ASKS.map(a => a.total)
  );

  const renderRow = (order: Order, type: 'bid' | 'ask') => {
    const depthPercentage = (order.total / maxTotal) * 100;
    const colorClass = type === 'bid' ? 'text-[#0ecb81]' : 'text-[#f6465d]';
    const bgClass = type === 'bid' ? 'bg-[#0ecb81]/10' : 'bg-[#f6465d]/10';

    return (
      <div key={order.price} className="relative flex justify-between py-1.5 px-2 text-sm hover:bg-white/5 cursor-pointer group">
        {/* Depth Bar */}
        <div 
          className={`absolute right-0 top-0 bottom-0 ${bgClass} transition-all`}
          style={{ width: `${depthPercentage}%` }}
        />
        
        <span className={`relative z-10 font-mono ${colorClass}`}>
          {(order.price * 100).toFixed(1)}¢
        </span>
        <span className="relative z-10 font-mono text-gray-300">
          {order.shares.toLocaleString()}
        </span>
        <span className="relative z-10 font-mono text-gray-400">
          ${order.total.toLocaleString()}
        </span>
      </div>
    );
  };

  return (
    <div className="glass rounded-2xl p-5 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Order Book</h3>
        <div className="flex bg-[#131720] rounded-lg p-1">
          <button 
            onClick={() => setActiveTab('yes')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${activeTab === 'yes' ? 'bg-[#0ecb81] text-[#1e2329]' : 'text-gray-400 hover:text-white'}`}
          >
            Yes
          </button>
          <button 
            onClick={() => setActiveTab('no')}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${activeTab === 'no' ? 'bg-[#f6465d] text-[#1e2329]' : 'text-gray-400 hover:text-white'}`}
          >
            No
          </button>
        </div>
      </div>

      <div className="flex justify-between px-2 pb-2 border-b border-white/10 text-xs text-gray-500 font-medium">
        <span>Price</span>
        <span>Shares</span>
        <span>Total (USD)</span>
      </div>

      <div className="flex-1 overflow-y-auto mt-2 space-y-4 scrollbar-hide">
        {/* Asks (Sells) - Reversed so lowest price is at bottom */}
        <div className="space-y-0.5">
          {[...MOCK_ASKS].reverse().map(ask => renderRow(ask, 'ask'))}
        </div>

        {/* Spread */}
        <div className="flex items-center justify-center py-2 text-xs font-bold text-gray-400 border-y border-white/5 bg-white/[0.02]">
          Spread: 2.0¢
        </div>

        {/* Bids (Buys) */}
        <div className="space-y-0.5">
          {MOCK_BIDS.map(bid => renderRow(bid, 'bid'))}
        </div>
      </div>
    </div>
  );
}
