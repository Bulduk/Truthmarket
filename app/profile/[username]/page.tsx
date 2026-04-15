'use client';

import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { StatsGrid } from '@/components/profile/StatsGrid';
import { PredictionHistory } from '@/components/profile/PredictionHistory';

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-24 md:pb-8">
      <ProfileHeader />
      <StatsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        <div className="lg:col-span-2">
          <PredictionHistory />
        </div>
        
        <div className="space-y-6">
          {/* Badges / Achievements */}
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Achievements</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🎯', name: 'Sharpshooter', desc: '5 wins in a row' },
                { icon: '🐋', name: 'Whale', desc: '$100k+ volume' },
                { icon: '🏛️', name: 'Oracle', desc: 'Resolved 10 markets' },
                { icon: '💎', name: 'Diamond Hands', desc: 'Held to resolution' },
                { icon: '🔥', name: 'Early Adopter', desc: 'Joined Season 1' },
                { icon: '🤝', name: 'Influencer', desc: '1000+ followers' },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-help" title={badge.desc}>
                  <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{badge.icon}</span>
                  <span className="text-[10px] font-bold text-gray-400 text-center leading-tight">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="glass rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Recent Activity</h3>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {[
                { action: 'Bought 1,500 YES', market: 'Ethereum $4k', time: '2h ago', color: 'bg-[#0ecb81]' },
                { action: 'Created Market', market: 'Fed Rate Cut', time: '1d ago', color: 'bg-[#fcd535]' },
                { action: 'Claimed Reward', market: '450 TRUTH', time: '2d ago', color: 'bg-[#B026FF]' },
              ].map((act, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0b0e11] ${act.color} text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
                    <div className="w-2 h-2 rounded-full bg-[#1e2329]" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-3 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white text-sm">{act.action}</span>
                      <span className="text-xs text-gray-500">{act.time}</span>
                    </div>
                    <div className="text-xs text-gray-400">{act.market}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
