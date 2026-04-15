'use client';

import { Shield, Copy, CheckCircle2, UserPlus } from 'lucide-react';
import { useState } from 'react';

export function ProfileHeader() {
  const [copied, setCopied] = useState(false);
  const address = "0x71C...9739";

  const copyAddress = () => {
    navigator.clipboard.writeText("0x71C7656EC7ab88b098defB751B7401B5f6d89739");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#fcd535]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#fcd535] to-[#f0b90b] p-1">
            <div className="w-full h-full rounded-xl bg-[#1e2329] flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/avatar1/200/200" 
                alt="Profile" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-[#131720] border border-white/10 flex items-center justify-center shadow-lg">
            <Shield className="w-4 h-4 text-[#0ecb81]" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold text-white">CryptoOracle</h1>
            <span className="px-2.5 py-1 rounded-md bg-[#fcd535]/10 text-[#fcd535] text-xs font-bold uppercase tracking-wider">
              Pro Trader
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <button 
              onClick={copyAddress}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-lg"
            >
              <span className="font-mono">{address}</span>
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-[#0ecb81]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <div className="flex items-center gap-1.5 text-gray-400">
              <span className="text-white font-bold">1,248</span> Followers
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <span className="text-white font-bold">342</span> Following
            </div>
          </div>
          
          <p className="text-gray-400 text-sm max-w-xl pt-2">
            Macro economics and crypto native. Predicting the future of decentralized finance. Not financial advice.
          </p>
        </div>

        {/* Actions */}
        <div className="w-full md:w-auto flex gap-3 mt-4 md:mt-0">
          <button className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#fcd535] text-[#1e2329] font-bold hover:bg-[#f0b90b] transition-colors flex items-center justify-center gap-2">
            <UserPlus className="w-4 h-4" />
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
