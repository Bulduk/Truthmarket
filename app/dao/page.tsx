'use client';

import { useState } from 'react';
import { Landmark, CheckCircle2, XCircle, Clock, AlertCircle } from 'lucide-react';

const MOCK_PROPOSALS = [
  {
    id: 'TIP-42',
    title: 'Reduce Trading Fee from 1% to 0.5% for Crypto Markets',
    status: 'active',
    endTime: '2 days left',
    forVotes: 2450000,
    againstVotes: 850000,
    totalVotes: 3300000,
    quorum: 5000000,
  },
  {
    id: 'TIP-41',
    title: 'Add Solana (SOL) Ecosystem Markets Category',
    status: 'passed',
    endTime: 'Ended 3 days ago',
    forVotes: 4200000,
    againstVotes: 120000,
    totalVotes: 4320000,
    quorum: 2000000,
  },
  {
    id: 'DISPUTE-12',
    title: 'Dispute Resolution: Market #842 (Did SpaceX launch succeed?)',
    status: 'active',
    endTime: '12 hours left',
    forVotes: 890000, // Yes
    againstVotes: 920000, // No
    totalVotes: 1810000,
    quorum: 1000000,
    isDispute: true,
  }
];

export default function DaoPage() {
  const [activeTab, setActiveTab] = useState('active');
  const votingPower = 1250;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2764FF] to-[#1A4BCC] flex items-center justify-center shadow-[0_0_15px_rgba(39,100,255,0.3)]">
            <Landmark className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Governance</h1>
            <p className="text-sm text-gray-400">Shape the future of TruthMarket</p>
          </div>
        </div>

        <div className="glass rounded-xl p-4 flex items-center gap-4 border border-[#fcd535]/20">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Your Voting Power</span>
            <span className="text-xl font-bold text-[#fcd535] font-mono">{votingPower.toLocaleString()} TRUTH</span>
          </div>
          <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-colors">
            Delegate
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10">
        {['active', 'passed', 'rejected'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-bold transition-colors border-b-2 capitalize ${
              activeTab === tab ? 'border-[#2764FF] text-white' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            {tab} Proposals
          </button>
        ))}
      </div>

      {/* Proposals List */}
      <div className="space-y-4">
        {MOCK_PROPOSALS.filter(p => activeTab === 'active' ? p.status === 'active' : p.status === activeTab).map((proposal) => {
          const forPercent = (proposal.forVotes / proposal.totalVotes) * 100 || 0;
          const againstPercent = (proposal.againstVotes / proposal.totalVotes) * 100 || 0;
          const quorumPercent = Math.min((proposal.totalVotes / proposal.quorum) * 100, 100);

          return (
            <div key={proposal.id} className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 text-xs font-bold font-mono border border-white/10">
                      {proposal.id}
                    </span>
                    {proposal.isDispute && (
                      <span className="px-2.5 py-1 rounded-md bg-[#f6465d]/10 text-[#f6465d] text-xs font-bold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Dispute
                      </span>
                    )}
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1 ${
                      proposal.status === 'active' ? 'bg-[#2764FF]/10 text-[#2764FF]' :
                      proposal.status === 'passed' ? 'bg-[#0ecb81]/10 text-[#0ecb81]' :
                      'bg-[#f6465d]/10 text-[#f6465d]'
                    }`}>
                      {proposal.status === 'active' ? <Clock className="w-3 h-3" /> :
                       proposal.status === 'passed' ? <CheckCircle2 className="w-3 h-3" /> :
                       <XCircle className="w-3 h-3" />}
                      {proposal.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{proposal.title}</h3>
                  <div className="text-sm text-gray-500">{proposal.endTime}</div>
                </div>

                {proposal.status === 'active' && (
                  <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-2 rounded-xl bg-[#0ecb81]/10 text-[#0ecb81] font-bold hover:bg-[#0ecb81]/20 transition-colors border border-[#0ecb81]/20">
                      Vote For
                    </button>
                    <button className="flex-1 md:flex-none px-6 py-2 rounded-xl bg-[#f6465d]/10 text-[#f6465d] font-bold hover:bg-[#f6465d]/20 transition-colors border border-[#f6465d]/20">
                      Vote Against
                    </button>
                  </div>
                )}
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {/* For / Against Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#0ecb81] font-bold">For {(proposal.forVotes / 1000000).toFixed(2)}M ({forPercent.toFixed(1)}%)</span>
                    <span className="text-[#f6465d] font-bold">Against {(proposal.againstVotes / 1000000).toFixed(2)}M ({againstPercent.toFixed(1)}%)</span>
                  </div>
                  <div className="h-3 w-full rounded-full overflow-hidden flex bg-white/5">
                    <div className="h-full bg-[#0ecb81]" style={{ width: `${forPercent}%` }} />
                    <div className="h-full bg-[#f6465d]" style={{ width: `${againstPercent}%` }} />
                  </div>
                </div>

                {/* Quorum Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Quorum Progress</span>
                    <span className="text-gray-300 font-mono">{(proposal.totalVotes / 1000000).toFixed(2)}M / {(proposal.quorum / 1000000).toFixed(2)}M</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full overflow-hidden bg-white/5 relative">
                    <div className="h-full bg-[#2764FF]" style={{ width: `${quorumPercent}%` }} />
                    {/* Quorum Target Line */}
                    <div className="absolute top-0 bottom-0 left-full w-0.5 bg-white -translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
