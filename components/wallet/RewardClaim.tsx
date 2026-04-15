'use client';

import { Gift, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function RewardClaim() {
  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#fcd535]/20 rounded-full blur-3xl group-hover:bg-[#fcd535]/30 transition-colors" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fcd535] to-[#f0b90b] flex items-center justify-center shadow-[0_0_15px_rgba(252,213,53,0.3)]">
            <Gift className="w-6 h-6 text-[#1e2329]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              Available Rewards
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0ecb81]/20 text-[#0ecb81] uppercase tracking-wider">
                Season 1
              </span>
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Earn TRUTH tokens by trading and providing liquidity.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="flex flex-col items-end">
            <span className="text-3xl font-bold text-[#fcd535] font-mono">
              450.00
            </span>
            <span className="text-xs text-gray-400 font-medium tracking-wider">
              TRUTH TOKENS
            </span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-[#fcd535] text-[#1e2329] font-bold hover:bg-[#f0b90b] transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Zap className="w-4 h-4" />
            Claim Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}
