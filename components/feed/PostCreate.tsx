'use client';

import { useState } from 'react';
import { Image as ImageIcon, BarChart2, Shield, Sparkles } from 'lucide-react';

export function PostCreate() {
  const [content, setContent] = useState('');
  const [isMarketAttached, setIsMarketAttached] = useState(false);

  return (
    <div className="glass rounded-2xl p-5 border border-white/10">
      <div className="flex gap-4">
        <div className="shrink-0">
          <img 
            src="https://picsum.photos/seed/myavatar/100/100" 
            alt="Me"
            className="w-12 h-12 rounded-full object-cover border border-white/10"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's your prediction? Share an insight or create a market..."
            className="w-full bg-transparent border-none text-white placeholder:text-gray-500 focus:ring-0 resize-none text-lg min-h-[80px]"
          />
          
          {isMarketAttached && (
            <div className="p-4 rounded-xl bg-[#131720] border border-[#fcd535]/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#fcd535] flex items-center gap-2">
                  <BarChart2 className="w-4 h-4" />
                  Market Configuration
                </h4>
                <button 
                  onClick={() => setIsMarketAttached(false)}
                  className="text-xs text-gray-500 hover:text-white"
                >
                  Remove
                </button>
              </div>
              <input 
                type="text" 
                placeholder="e.g., Will Bitcoin hit $100k in 2024?"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-[#fcd535]/50 outline-none"
              />
              <div className="flex gap-2">
                <input 
                  type="date" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-400 focus:border-[#fcd535]/50 outline-none"
                />
                <input 
                  type="number" 
                  placeholder="Initial Liquidity (USDC)"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-[#fcd535]/50 outline-none"
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <div className="flex items-center gap-1">
              <button className="p-2 text-[#fcd535] hover:bg-[#fcd535]/10 rounded-full transition-colors tooltip-trigger">
                <ImageIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsMarketAttached(!isMarketAttached)}
                className={`p-2 rounded-full transition-colors ${isMarketAttached ? 'text-[#0ecb81] bg-[#0ecb81]/10' : 'text-[#fcd535] hover:bg-[#fcd535]/10'}`}
              >
                <BarChart2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-[#B026FF] hover:bg-[#B026FF]/10 rounded-full transition-colors flex items-center gap-1">
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
            
            <button 
              disabled={!content.trim()}
              className="px-6 py-2 rounded-full bg-[#fcd535] text-[#1e2329] font-bold text-sm hover:bg-[#f0b90b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isMarketAttached ? 'Create Market' : 'Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
