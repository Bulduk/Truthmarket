'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12 relative">
      {/* Background Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#8a2be2]/10 blur-[100px] rounded-full pointer-events-none -mr-[20vw]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#1e3a8a]/10 blur-[100px] rounded-full pointer-events-none -ml-[20vw]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-4xl relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(138,43,226,0.3)] bg-[rgba(138,43,226,0.1)] text-sm font-medium text-[#c084fc] shadow-[0_0_10px_rgba(138,43,226,0.1)] mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c084fc] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c084fc]"></span>
          </span>
          Next-Gen Social Prediction Market
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
          Every Signal <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a2be2] to-[#3b82f6] pb-2 drop-shadow-lg">
            Has a Price.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Turn your social intuition into profit. Predict content virality, market trends, and creator success in a hyper-liquid prediction ecosystem.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4 relative z-10"
      >
        <Button size="lg" className="text-lg px-8 py-6 rounded-xl font-bold gap-2">
          Start Trading <ArrowRight className="w-5 h-5" />
        </Button>
        <Button variant="glass" size="lg" className="text-lg px-8 py-6 rounded-xl font-bold">
          See Leaderboard
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 relative z-10"
      >
        {[
          { icon: Zap, title: 'Real-Time Signals', desc: 'React to content momentum before it goes viral. AMPLIFY or FADE.' },
          { icon: Activity, title: 'Deep Analytics', desc: 'Gain insights into social metrics tracked by decentralized oracles.' },
          { icon: CheckCircle2, title: 'Provably Fair', desc: 'Settlements secured on Polygon. Immutable and verifiable logic.' },
        ].map((feature, i) => (
          <div key={i} className="glass p-8 rounded-2xl text-left space-y-4 hover:border-[rgba(138,43,226,0.3)] transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[rgba(138,43,226,0.1)] border border-[rgba(138,43,226,0.2)] flex items-center justify-center group-hover:scale-110 transition-transform">
              <feature.icon className="w-6 h-6 text-[#c084fc]" />
            </div>
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
