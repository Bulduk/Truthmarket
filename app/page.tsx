'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium text-[#fcd535] mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fcd535] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fcd535]"></span>
          </span>
          Polygon Mainnet Live
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          The Future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcd535] to-[#f0b90b]">
            Prediction Markets
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Trade on the outcome of real-world events. Turn your knowledge into profit in the most liquid decentralized prediction market.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <button className="px-8 py-4 rounded-xl bg-[#fcd535] text-[#1e2329] font-bold text-lg hover:bg-[#f0b90b] transition-colors flex items-center gap-2">
          Explore Markets <ArrowRight className="w-5 h-5" />
        </button>
        <button className="px-8 py-4 rounded-xl glass text-white font-bold text-lg hover:bg-white/10 transition-colors">
          Create Market
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16"
      >
        {[
          { icon: TrendingUp, title: 'High Liquidity', desc: 'Deep order books and automated market makers.' },
          { icon: Users, title: 'Social Trading', desc: 'Follow top traders and share your predictions.' },
          { icon: Shield, title: 'Decentralized', desc: 'Secured by Polygon and Chainlink Oracles.' },
        ].map((feature, i) => (
          <div key={i} className="glass p-6 rounded-2xl text-left space-y-4 hover:bg-white/[0.08] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#fcd535]/10 flex items-center justify-center">
              <feature.icon className="w-6 h-6 text-[#fcd535]" />
            </div>
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
