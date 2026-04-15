'use client';

import { useState } from 'react';
import { Trophy, Medal, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';

const MOCK_LEADERS = [
  { id: '1', rank: 1, name: 'CryptoOracle', handle: 'oracle_eth', pnl: 145200, winRate: 78.5, volume: 2500000, isOracle: true },
  { id: '2', rank: 2, name: 'WhaleHunter', handle: 'whale_hunter', pnl: 98500, winRate: 65.2, volume: 4200000, isOracle: false },
  { id: '3', rank: 3, name: 'MacroTrader', handle: 'macro_t', pnl: 75400, winRate: 71.0, volume: 1100000, isOracle: true },
  { id: '4', rank: 4, name: 'DeFi_Degen', handle: 'degen_fi', pnl: 45200, winRate: 58.4, volume: 850000, isOracle: false },
  { id: '5', rank: 5, name: 'AlphaSeeker', handle: 'alpha_s', pnl: 32100, winRate: 62.8, volume: 540000, isOracle: false },
  { id: '6', rank: 6, name: 'YieldFarmer', handle: 'yield_f', pnl: 28900, winRate: 55.5, volume: 920000, isOracle: false },
  { id: '7', rank: 7, name: 'SatoshiNakamoto', handle: 'sat_nak', pnl: 25000, winRate: 82.1, volume: 150000, isOracle: true },
];

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState('All Time');

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-[#fcd535]" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-300" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-[#cd7f32]" />;
    return <span className="font-bold text-gray-500 w-5 text-center">{rank}</span>;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fcd535] to-[#f0b90b] flex items-center justify-center shadow-[0_0_15px_rgba(252,213,53,0.3)]">
            <Trophy className="w-6 h-6 text-[#1e2329]" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Leaderboard</h1>
            <p className="text-sm text-gray-400">Top traders by realized PnL</p>
          </div>
        </div>

        <div className="flex bg-[#131720] rounded-xl p-1 border border-white/5">
          {['This Week', 'This Month', 'All Time'].map(tf => (
            <button 
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                timeframe === tf ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium (Desktop) */}
      <div className="hidden md:grid grid-cols-3 gap-6 items-end pt-8 pb-4">
        {[MOCK_LEADERS[1], MOCK_LEADERS[0], MOCK_LEADERS[2]].map((leader, idx) => {
          const isFirst = idx === 1;
          const height = isFirst ? 'h-48' : idx === 0 ? 'h-40' : 'h-32';
          const colors = isFirst 
            ? 'from-[#fcd535]/20 to-[#fcd535]/5 border-[#fcd535]/30' 
            : idx === 0 
              ? 'from-gray-300/20 to-gray-300/5 border-gray-300/30'
              : 'from-[#cd7f32]/20 to-[#cd7f32]/5 border-[#cd7f32]/30';

          return (
            <div key={leader.id} className="flex flex-col items-center relative">
              {isFirst && <Trophy className="w-12 h-12 text-[#fcd535] absolute -top-16 drop-shadow-[0_0_10px_rgba(252,213,53,0.8)]" />}
              <div className="w-20 h-20 rounded-full bg-[#131720] border-4 border-[#0b0e11] z-10 overflow-hidden mb-[-2rem]">
                <img src={`https://picsum.photos/seed/${leader.handle}/200/200`} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <div className={`w-full ${height} bg-gradient-to-b ${colors} border-t-2 rounded-t-2xl flex flex-col items-center pt-10 pb-4 px-4`}>
                <Link href={`/profile/${leader.handle}`} className="font-bold text-white hover:text-[#fcd535] transition-colors truncate w-full text-center">
                  {leader.name}
                </Link>
                <div className="text-[#0ecb81] font-bold font-mono mt-2">
                  +${leader.pnl.toLocaleString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="text-xs text-gray-400 border-b border-white/5 bg-white/[0.02]">
                <th className="p-4 font-medium w-16 text-center">Rank</th>
                <th className="p-4 font-medium">Trader</th>
                <th className="p-4 font-medium text-right">Win Rate</th>
                <th className="p-4 font-medium text-right">Volume</th>
                <th className="p-4 font-medium text-right">Net PnL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_LEADERS.map((leader) => (
                <tr key={leader.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 text-center flex justify-center items-center h-full">
                    {getRankIcon(leader.rank)}
                  </td>
                  <td className="p-4">
                    <Link href={`/profile/${leader.handle}`} className="flex items-center gap-3">
                      <img src={`https://picsum.photos/seed/${leader.handle}/100/100`} alt={leader.name} className="w-8 h-8 rounded-full" />
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-white group-hover:text-[#fcd535] transition-colors">{leader.name}</span>
                          {leader.isOracle && <Award className="w-3.5 h-3.5 text-[#fcd535]" />}
                        </div>
                        <span className="text-xs text-gray-500">@{leader.handle}</span>
                      </div>
                    </Link>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1.5 text-white font-mono">
                      <TargetIcon className="w-3.5 h-3.5 text-gray-500" />
                      {leader.winRate}%
                    </div>
                  </td>
                  <td className="p-4 text-right text-gray-300 font-mono">
                    ${(leader.volume / 1000).toFixed(1)}k
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-[#0ecb81] font-bold font-mono">
                      +${leader.pnl.toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function TargetIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
