'use client';

import { Target, TrendingUp, Activity, Award } from 'lucide-react';

export function StatsGrid() {
  const stats = [
    {
      label: 'Win Rate',
      value: '68.5%',
      trend: '+2.4%',
      isPositive: true,
      icon: Target,
      color: 'text-[#0ecb81]',
      bg: 'bg-[#0ecb81]/10'
    },
    {
      label: 'Total Volume',
      value: '$124.5K',
      trend: '+12.5%',
      isPositive: true,
      icon: TrendingUp,
      color: 'text-[#fcd535]',
      bg: 'bg-[#fcd535]/10'
    },
    {
      label: 'Markets Created',
      value: '24',
      trend: 'Top 5%',
      isPositive: true,
      icon: Activity,
      color: 'text-[#2764FF]',
      bg: 'bg-[#2764FF]/10'
    },
    {
      label: 'Reputation Score',
      value: '8,450',
      trend: 'Oracle Tier',
      isPositive: true,
      icon: Award,
      color: 'text-[#B026FF]',
      bg: 'bg-[#B026FF]/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="glass rounded-2xl p-5 space-y-4 hover:bg-white/[0.03] transition-colors">
          <div className="flex justify-between items-start">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <span className={`text-xs font-bold ${stat.isPositive ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
              {stat.trend}
            </span>
          </div>
          <div>
            <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
            <div className="text-sm text-gray-400 font-medium mt-1">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
