'use client';

import { useState } from 'react';
import { Search, TrendingUp, Filter, ArrowUpDown, Clock, Users, Activity, ChevronDown } from 'lucide-react';
import { Input } from '@/components/shared/Input';
import { Button } from '@/components/shared/Button';
import Link from 'next/link';

const CATEGORIES = ['All', 'Crypto', 'Politics', 'Economy', 'Sports', 'Pop Culture', 'Science'];
const SORTS = ['Trending', 'Highest Volume', 'Newest', 'Ending Soon', 'Liquidity'];

const MOCK_MARKETS = [
  {
    id: '1',
    title: 'Will Ethereum reach $4,000 by June 2024?',
    category: 'Crypto',
    yesPrice: 0.65,
    volume: '1.25M',
    liquidity: '450K',
    participants: 12450,
    endDate: '2024-06-30',
    trend: '+5.2%',
    isHot: true,
    chartData: [40, 45, 42, 50, 55, 60, 65]
  },
  {
    id: '2',
    title: 'Will the Federal Reserve cut interest rates in May?',
    category: 'Economy',
    yesPrice: 0.35,
    volume: '850K',
    liquidity: '220K',
    participants: 8320,
    endDate: '2024-05-01',
    trend: '-2.1%',
    isHot: true,
    chartData: [60, 55, 58, 45, 40, 38, 35]
  },
  {
    id: '3',
    title: 'Who will win the US Presidential Election 2024?',
    category: 'Politics',
    yesPrice: 0.48,
    volume: '3.4M',
    liquidity: '1.2M',
    participants: 45000,
    endDate: '2024-11-05',
    trend: '+1.5%',
    isHot: true,
    chartData: [45, 46, 45, 47, 48, 47, 48]
  },
  {
    id: '4',
    title: 'Will Bitcoin hit $100k before 2025?',
    category: 'Crypto',
    yesPrice: 0.82,
    volume: '5.1M',
    liquidity: '2.5M',
    participants: 62000,
    endDate: '2024-12-31',
    trend: '+12.4%',
    isHot: true,
    chartData: [50, 60, 65, 70, 75, 80, 82]
  },
  {
    id: '5',
    title: 'Will SpaceX Starship reach orbit on Flight 4?',
    category: 'Science',
    yesPrice: 0.75,
    volume: '420K',
    liquidity: '150K',
    participants: 5100,
    endDate: '2024-05-15',
    trend: '+8.0%',
    isHot: false,
    chartData: [60, 65, 68, 70, 72, 74, 75]
  },
  {
    id: '6',
    title: 'Will Apple announce a foldable iPhone in 2024?',
    category: 'Tech',
    yesPrice: 0.15,
    volume: '380K',
    liquidity: '95K',
    participants: 4200,
    endDate: '2024-12-31',
    trend: '-5.5%',
    isHot: false,
    chartData: [30, 25, 22, 20, 18, 16, 15]
  }
];

// Mini Sparkline Chart Component
function MiniChart({ data, color }: { data: number[], color: string }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const height = 40;
  const width = 100;
  const step = width / (data.length - 1);

  const points = data.map((val, i) => {
    const x = i * step;
    const y = height - ((val - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="100%" height="100%" viewBox={`0 -5 100 50`} preserveAspectRatio="none" className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Gradient Fill */}
      <polygon
        points={`0,40 ${points} 100,40`}
        fill={`url(#gradient-${color.replace('#', '')})`}
        opacity="0.2"
      />
      <defs>
        <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function MarketsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSort, setActiveSort] = useState('Trending');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredMarkets = MOCK_MARKETS.filter(market => {
    const matchesCategory = activeCategory === 'All' || market.category === activeCategory;
    const matchesSearch = market.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-24 md:pb-8 mt-4">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            Markets
            <span className="px-2.5 py-1 rounded-md bg-[rgba(138,43,226,0.15)] text-[#c084fc] text-sm font-bold font-mono border border-[rgba(138,43,226,0.2)]">
              {filteredMarkets.length}
            </span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">Trade on the world&apos;s most accurate prediction markets.</p>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
            size="sm" 
            onClick={() => setViewMode('grid')}
            className="px-3"
          >
            Grid
          </Button>
          <Button 
            variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
            size="sm" 
            onClick={() => setViewMode('list')}
            className="px-3"
          >
            List
          </Button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="glass rounded-2xl p-4 border border-white/5 flex flex-col lg:flex-row gap-4 sticky top-20 z-40 backdrop-blur-xl">
        <div className="flex-1">
          <Input 
            placeholder="Search markets..."
            leftIcon={<Search className="w-4 h-4" />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 bg-white/5 border-transparent"
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-[#8a2be2] to-[#1e3a8a] text-white shadow-[0_0_15px_rgba(138,43,226,0.3)]' 
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0 border-l border-white/10 pl-4">
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-gray-300 text-sm font-bold hover:bg-white/10 transition-colors">
              <ArrowUpDown className="w-4 h-4" />
              {activeSort}
              <ChevronDown className="w-4 h-4" />
            </button>
            {/* Dropdown (Hover based for simplicity in this demo) */}
            <div className="absolute right-0 top-full mt-2 w-48 glass rounded-xl border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="p-2 flex flex-col gap-1">
                {SORTS.map(sort => (
                  <button 
                    key={sort}
                    onClick={() => setActiveSort(sort)}
                    className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSort === sort ? 'bg-[rgba(138,43,226,0.15)] text-[#c084fc]' : 'text-gray-400 hover:bg-[rgba(255,255,255,0.05)] hover:text-white'
                    }`}
                  >
                    {sort}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Markets Grid/List */}
      <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" : "flex flex-col gap-3"}>
        {filteredMarkets.map((market) => {
          const isYesLeading = market.yesPrice > 0.5;
          const chartColor = isYesLeading ? '#00e5ff' : '#ff007f';

          if (viewMode === 'list') {
            return (
              <Link key={market.id} href={`/markets/${market.id}`} className="glass rounded-xl p-4 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(138,43,226,0.3)] transition-colors group flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-gray-400 uppercase tracking-wider">
                      {market.category}
                    </span>
                    {market.isHot && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[rgba(138,43,226,0.15)] text-[#c084fc] border border-[rgba(138,43,226,0.2)] flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> HOT
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#c084fc] transition-colors line-clamp-1">
                    {market.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <div className="hidden md:block w-24 h-8">
                    <MiniChart data={market.chartData} color={chartColor} />
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-medium w-32 justify-end">
                    <span>${market.volume} Vol</span>
                  </div>

                  <div className="flex gap-2 w-48">
                    <div className="flex-1 bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] rounded-lg py-2 px-3 flex justify-between items-center group-hover:bg-[rgba(0,229,255,0.2)] transition-colors">
                      <span className="text-xs font-bold text-[#00e5ff]">YES</span>
                      <span className="text-sm font-bold text-[#00e5ff] font-mono">{(market.yesPrice * 100).toFixed(1)}¢</span>
                    </div>
                    <div className="flex-1 bg-[rgba(255,0,127,0.1)] border border-[rgba(255,0,127,0.2)] rounded-lg py-2 px-3 flex justify-between items-center group-hover:bg-[rgba(255,0,127,0.2)] transition-colors">
                      <span className="text-xs font-bold text-[#ff007f]">NO</span>
                      <span className="text-sm font-bold text-[#ff007f] font-mono">{((1 - market.yesPrice) * 100).toFixed(1)}¢</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }

          // Grid View
          return (
            <Link key={market.id} href={`/markets/${market.id}`} className="glass rounded-2xl p-5 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(138,43,226,0.3)] transition-colors group flex flex-col h-full relative overflow-hidden">
              {/* Subtle background glow based on leading side */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-10 transition-colors ${isYesLeading ? 'bg-[#00e5ff]' : 'bg-[#ff007f]'}`} />
              
              <div className="flex justify-between items-start mb-3 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {market.category}
                  </span>
                  {market.isHot && (
                    <span className="p-1 rounded-md bg-[rgba(138,43,226,0.15)] text-[#c084fc] border border-[rgba(138,43,226,0.2)]">
                      <TrendingUp className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                  <Clock className="w-3.5 h-3.5" />
                  {new Date(market.endDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#c084fc] transition-colors mb-4 line-clamp-2 relative z-10">
                {market.title}
              </h3>

              <div className="h-16 w-full mb-4 relative z-10">
                <MiniChart data={market.chartData} color={chartColor} />
              </div>

              <div className="mt-auto space-y-4 relative z-10">
                <div className="flex gap-2">
                  <div className="flex-1 bg-[rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.2)] rounded-xl p-3 flex flex-col items-center group-hover:bg-[rgba(0,229,255,0.2)] transition-colors shadow-[0_4px_20px_rgba(0,229,255,0.05)]">
                    <span className="text-xs font-bold text-[#00e5ff] mb-1">YES</span>
                    <span className="text-xl font-bold text-[#00e5ff] font-mono">{(market.yesPrice * 100).toFixed(1)}¢</span>
                  </div>
                  <div className="flex-1 bg-[rgba(255,0,127,0.1)] border border-[rgba(255,0,127,0.2)] rounded-xl p-3 flex flex-col items-center group-hover:bg-[rgba(255,0,127,0.2)] transition-colors shadow-[0_4px_20px_rgba(255,0,127,0.05)]">
                    <span className="text-xs font-bold text-[#ff007f] mb-1">NO</span>
                    <span className="text-xl font-bold text-[#ff007f] font-mono">{((1 - market.yesPrice) * 100).toFixed(1)}¢</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-4 h-4" />
                    <span>${market.volume} Vol</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>{market.participants.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredMarkets.length === 0 && (
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No markets found</h3>
          <p className="text-gray-400">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
