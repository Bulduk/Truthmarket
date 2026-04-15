'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, TrendingUp, Users, MessageSquare, Info } from 'lucide-react';
import Link from 'next/link';
import { PriceChart } from '@/components/market/PriceChart';
import { OrderBook } from '@/components/market/OrderBook';
import { TradePanel } from '@/components/market/TradePanel';

// Dummy chart data
const generateData = () => {
  let val = 0.5;
  const data = [];
  const now = new Date();
  for (let i = 0; i < 100; i++) {
    val += (Math.random() - 0.5) * 0.05;
    val = Math.max(0.01, Math.min(0.99, val));
    data.push({
      time: new Date(now.getTime() - (100 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: val,
    });
  }
  return data;
};

const chartData = generateData();

export default function MarketDetailPage() {
  const [activeTab, setActiveTab] = useState<'chart' | 'orderbook' | 'rules'>('chart');

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      {/* Back Link */}
      <Link href="/markets" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Markets
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Market Info & Chart */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-white/5 text-xs font-medium text-gray-300 border border-white/10">
                Crypto
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Ends Jun 30, 2024</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Will Ethereum reach $4,000 by June 2024?
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#0ecb81]/10 flex items-center justify-center">
                  <span className="text-[#0ecb81] font-bold">65%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Yes</span>
                  <span className="text-xs text-gray-400">65.0¢</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f6465d]/10 flex items-center justify-center">
                  <span className="text-[#f6465d] font-bold">35%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">No</span>
                  <span className="text-xs text-gray-400">35.0¢</span>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>$1.25M Vol</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>4,281 Traders</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area (Tabs) */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setActiveTab('chart')}
                className={`px-6 py-4 text-sm font-bold transition-colors border-b-2 ${activeTab === 'chart' ? 'border-[#fcd535] text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                Price History
              </button>
              <button 
                onClick={() => setActiveTab('orderbook')}
                className={`px-6 py-4 text-sm font-bold transition-colors border-b-2 ${activeTab === 'orderbook' ? 'border-[#fcd535] text-white' : 'border-transparent text-gray-400 hover:text-white'} lg:hidden`}
              >
                Order Book
              </button>
              <button 
                onClick={() => setActiveTab('rules')}
                className={`px-6 py-4 text-sm font-bold transition-colors border-b-2 ${activeTab === 'rules' ? 'border-[#fcd535] text-white' : 'border-transparent text-gray-400 hover:text-white'}`}
              >
                Rules & Info
              </button>
            </div>

            <div className="p-5">
              {activeTab === 'chart' && (
                <div className="space-y-4">
                  <div className="flex justify-end gap-2 mb-2">
                    {['1D', '1W', '1M', 'ALL'].map(tf => (
                      <button key={tf} className="px-3 py-1 rounded bg-white/5 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        {tf}
                      </button>
                    ))}
                  </div>
                  <PriceChart data={chartData} />
                </div>
              )}

              {activeTab === 'orderbook' && (
                <div className="h-[400px]">
                  <OrderBook />
                </div>
              )}

              {activeTab === 'rules' && (
                <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-3">
                    <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-blue-200">
                      This market resolves to YES if the price of Ethereum (ETH) reaches or exceeds $4,000.00 USD on Binance at any point before June 30, 2024, 23:59:59 UTC.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-base mb-2">Resolution Source</h3>
                    <p>The official resolution source for this market is the Binance ETH/USDT spot trading pair.</p>
                    <a href="#" className="text-[#fcd535] hover:underline mt-1 inline-block">View Source</a>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-base mb-2">Oracle Information</h3>
                    <p>This market uses the UMA Optimistic Oracle for resolution. Any TRUTH token holder can dispute the initial resolution during the 24-hour challenge window.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Comments Section */}
          <div className="glass rounded-2xl p-6 space-y-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#fcd535]" />
              <h3 className="text-lg font-bold text-white">Discussion</h3>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shrink-0" />
              <div className="flex-1 space-y-2">
                <textarea 
                  placeholder="Share your thoughts or analysis..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#fcd535]/50 transition-colors resize-none"
                  rows={3}
                />
                <div className="flex justify-end">
                  <button className="px-4 py-2 rounded-lg bg-[#fcd535] text-[#1e2329] font-bold text-sm hover:bg-[#f0b90b] transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 shrink-0" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">CryptoWhale</span>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0ecb81]/10 text-[#0ecb81]">Holding YES</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      With the upcoming ETF decisions and the Dencun upgrade, $4k seems like a very conservative target for Q2.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Trade Panel & Orderbook (Desktop) */}
        <div className="space-y-6">
          <TradePanel />
          <div className="hidden lg:block h-[500px]">
            <OrderBook />
          </div>
        </div>
      </div>
    </div>
  );
}
