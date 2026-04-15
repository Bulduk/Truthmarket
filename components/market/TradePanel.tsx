'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Info } from 'lucide-react';

export function TradePanel() {
  const [action, setAction] = useState<'buy' | 'sell'>('buy');
  const [outcome, setOutcome] = useState<'yes' | 'no'>('yes');
  const [amount, setAmount] = useState<string>('');

  const price = outcome === 'yes' ? 0.65 : 0.35;
  const shares = amount ? parseFloat(amount) / price : 0;
  const potentialReturn = shares * 1; // 1 share pays $1 if correct
  const roi = amount ? ((potentialReturn - parseFloat(amount)) / parseFloat(amount)) * 100 : 0;

  return (
    <div className="glass rounded-2xl p-5 flex flex-col gap-6 sticky top-28">
      {/* Action Tabs */}
      <div className="flex bg-[#131720] rounded-xl p-1">
        <button 
          onClick={() => setAction('buy')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${action === 'buy' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
        >
          Buy
        </button>
        <button 
          onClick={() => setAction('sell')}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${action === 'sell' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
        >
          Sell
        </button>
      </div>

      {/* Outcome Selection */}
      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={() => setOutcome('yes')}
          className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${
            outcome === 'yes' 
              ? 'border-[#0ecb81] bg-[#0ecb81]/10 text-[#0ecb81]' 
              : 'border-transparent bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          <span className="font-bold">Yes</span>
          <span className="text-xs">65.0¢</span>
        </button>
        <button 
          onClick={() => setOutcome('no')}
          className={`py-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${
            outcome === 'no' 
              ? 'border-[#f6465d] bg-[#f6465d]/10 text-[#f6465d]' 
              : 'border-transparent bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          <span className="font-bold">No</span>
          <span className="text-xs">35.0¢</span>
        </button>
      </div>

      {/* Amount Input */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Amount</span>
          <span className="text-gray-400">Balance: <span className="text-white">1,240 USDC</span></span>
        </div>
        <div className="relative">
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-[#131720] border border-white/10 rounded-xl px-4 py-3 text-2xl font-mono text-white placeholder:text-gray-600 focus:outline-none focus:border-[#fcd535]/50 transition-colors"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button className="text-xs font-bold text-[#fcd535] bg-[#fcd535]/10 px-2 py-1 rounded hover:bg-[#fcd535]/20 transition-colors">MAX</button>
            <span className="text-gray-400 font-medium">USDC</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Avg. Price</span>
          <span className="text-white font-mono">{price.toFixed(3)}¢</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Shares</span>
          <span className="text-white font-mono">{shares.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
        </div>
        <div className="h-px w-full bg-white/10 my-1" />
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Potential Return</span>
          <span className="text-[#0ecb81] font-bold font-mono">${potentialReturn.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">ROI</span>
          <span className="text-[#0ecb81] font-bold font-mono">+{roi.toFixed(2)}%</span>
        </div>
      </div>

      {/* Submit Button */}
      <button className={`w-full py-4 rounded-xl font-bold text-lg transition-colors ${
        outcome === 'yes' 
          ? 'bg-[#0ecb81] text-[#1e2329] hover:bg-[#0ecb81]/90' 
          : 'bg-[#f6465d] text-white hover:bg-[#f6465d]/90'
      }`}>
        {action === 'buy' ? 'Buy' : 'Sell'} {outcome === 'yes' ? 'Yes' : 'No'}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
        <Settings className="w-3.5 h-3.5" />
        <span>Slippage tolerance: 0.5%</span>
      </div>
    </div>
  );
}
