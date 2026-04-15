'use client';

import { Bell, Heart, MessageSquare, Repeat2, ArrowUpRight, Award } from 'lucide-react';
import Link from 'next/link';

const MOCK_NOTIFICATIONS = [
  {
    id: '1',
    type: 'trade_win',
    title: 'Market Resolved in your favor!',
    description: 'Ethereum reached $4,000. You won $1,240.50 USDC.',
    time: '2m ago',
    icon: ArrowUpRight,
    color: 'text-[#0ecb81]',
    bg: 'bg-[#0ecb81]/10',
    read: false,
  },
  {
    id: '2',
    type: 'like',
    title: 'Vitalik Buterin liked your post',
    description: '"The Dencun upgrade is looking solid..."',
    time: '1h ago',
    icon: Heart,
    color: 'text-[#f6465d]',
    bg: 'bg-[#f6465d]/10',
    read: false,
  },
  {
    id: '3',
    type: 'reward',
    title: 'Weekly Rewards Available',
    description: 'You have 450 TRUTH tokens ready to claim.',
    time: '5h ago',
    icon: Award,
    color: 'text-[#fcd535]',
    bg: 'bg-[#fcd535]/10',
    read: true,
  },
  {
    id: '4',
    type: 'mention',
    title: 'CryptoWhale mentioned you',
    description: '"What do you think about this @oracle_eth?"',
    time: '1d ago',
    icon: MessageSquare,
    color: 'text-[#2764FF]',
    bg: 'bg-[#2764FF]/10',
    read: true,
  },
  {
    id: '5',
    type: 'repost',
    title: 'Macro Insights reposted your market',
    description: 'Will the Fed cut rates more than twice in 2024?',
    time: '2d ago',
    icon: Repeat2,
    color: 'text-[#0ecb81]',
    bg: 'bg-[#0ecb81]/10',
    read: true,
  }
];

export default function NotificationsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-24 md:pb-8 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Notifications</h1>
        </div>
        <button className="text-sm text-[#fcd535] hover:text-[#f0b90b] font-medium transition-colors">
          Mark all as read
        </button>
      </div>

      <div className="glass rounded-2xl overflow-hidden border border-white/5">
        <div className="divide-y divide-white/5">
          {MOCK_NOTIFICATIONS.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-5 flex gap-4 transition-colors hover:bg-white/[0.03] cursor-pointer ${
                !notif.read ? 'bg-white/[0.02]' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notif.bg}`}>
                <notif.icon className={`w-5 h-5 ${notif.color}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className={`text-sm font-bold truncate ${!notif.read ? 'text-white' : 'text-gray-300'}`}>
                    {notif.title}
                  </h4>
                  <span className="text-xs text-gray-500 shrink-0 whitespace-nowrap">
                    {notif.time}
                  </span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {notif.description}
                </p>
              </div>
              
              {!notif.read && (
                <div className="w-2 h-2 rounded-full bg-[#fcd535] self-center shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
