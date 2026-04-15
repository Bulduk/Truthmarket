'use client';

import { Search, TrendingUp, Users, Hash, Star } from 'lucide-react';
import { Input } from '@/components/shared/Input';
import Link from 'next/link';

const CATEGORIES = [
  { name: 'Crypto', icon: '₿', count: 124 },
  { name: 'Politics', icon: '🏛️', count: 85 },
  { name: 'Sports', icon: '⚽', count: 56 },
  { name: 'Pop Culture', icon: '🎵', count: 42 },
  { name: 'Science', icon: '🔬', count: 28 },
  { name: 'AI & Tech', icon: '🤖', count: 93 },
];

const TOP_CREATORS = [
  { name: 'Vitalik Buterin', handle: 'vitalik.eth', followers: '2.4M', isOracle: true },
  { name: 'Elon Musk', handle: 'elonmusk', followers: '150M', isOracle: false },
  { name: 'CryptoWhale', handle: 'whale_alert', followers: '850K', isOracle: true },
];

export default function ExplorePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-24 md:pb-8 mt-4">
      {/* Search Hero */}
      <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcd535]/5 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Explore the Future
          </h1>
          <p className="text-gray-400 text-lg">
            Discover trending markets, top creators, and the latest predictions across the network.
          </p>
          <Input 
            placeholder="Search markets, users, or #hashtags..."
            leftIcon={<Search className="w-5 h-5" />}
            className="h-14 text-lg bg-white/5 border-white/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Categories & Creators */}
        <div className="space-y-8">
          {/* Categories */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Hash className="w-5 h-5 text-[#fcd535]" />
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <Link 
                  key={cat.name} 
                  href={`/markets?category=${cat.name.toLowerCase()}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
                >
                  <span>{cat.icon}</span>
                  <span className="text-sm font-medium text-gray-300">{cat.name}</span>
                  <span className="text-xs text-gray-500 ml-1">{cat.count}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Top Creators */}
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#fcd535]" />
              Top Creators
            </h3>
            <div className="space-y-4">
              {TOP_CREATORS.map((creator, i) => (
                <Link key={i} href={`/profile/${creator.handle}`} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <img src={`https://picsum.photos/seed/${creator.handle}/100/100`} className="w-10 h-10 rounded-full" alt="" />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-white group-hover:text-[#fcd535] transition-colors">{creator.name}</span>
                        {creator.isOracle && <span className="w-3 h-3 rounded-full bg-[#fcd535]" title="Oracle" />}
                      </div>
                      <span className="text-xs text-gray-500">@{creator.handle}</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded-lg">
                    {creator.followers}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Trending Markets */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#0ecb81]" />
              Hot Markets
            </h2>
            <Link href="/markets" className="text-sm text-[#fcd535] hover:text-[#f0b90b] font-bold">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-medium text-gray-400">
                    Crypto
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Users className="w-3.5 h-3.5" />
                    <span>1.2k</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#fcd535] transition-colors mb-4 line-clamp-2">
                  Will Bitcoin reach $100,000 before the end of 2024?
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-bold">YES</span>
                      <span className="text-sm font-bold text-[#0ecb81] font-mono">82.5¢</span>
                    </div>
                    <div className="w-px h-8 bg-white/10 mx-2" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 font-bold">NO</span>
                      <span className="text-sm font-bold text-[#f6465d] font-mono">17.5¢</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-500 font-bold block">VOLUME</span>
                    <span className="text-sm font-bold text-white font-mono">$5.2M</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
