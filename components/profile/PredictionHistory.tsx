'use client';

import { CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';

interface HistoryItem {
  id: string;
  marketTitle: string;
  prediction: 'yes' | 'no';
  result: 'won' | 'lost';
  amount: number;
  pnl: number;
  date: string;
}

const MOCK_HISTORY: HistoryItem[] = [
  {
    id: '1',
    marketTitle: 'Will Bitcoin ETF be approved in January 2024?',
    prediction: 'yes',
    result: 'won',
    amount: 5000,
    pnl: 3250,
    date: '2024-01-10',
  },
  {
    id: '2',
    marketTitle: 'Will SpaceX Starship reach orbit on Flight 3?',
    prediction: 'yes',
    result: 'won',
    amount: 1200,
    pnl: 840,
    date: '2024-03-14',
  },
  {
    id: '3',
    marketTitle: 'Will Apple announce a foldable iPhone in 2024?',
    prediction: 'yes',
    result: 'lost',
    amount: 800,
    pnl: -800,
    date: '2024-02-28',
  }
];

export function PredictionHistory() {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-white/10">
        <h3 className="text-lg font-bold text-white">Prediction History</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-xs text-gray-400 border-b border-white/5 bg-white/[0.02]">
              <th className="p-4 font-medium">Market</th>
              <th className="p-4 font-medium">Prediction</th>
              <th className="p-4 font-medium text-right">Amount</th>
              <th className="p-4 font-medium text-right">Result</th>
              <th className="p-4 font-medium text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {MOCK_HISTORY.map((item) => (
              <tr key={item.id} className="hover:bg-white/5 transition-colors">
                <td className="p-4">
                  <Link href={`/markets/${item.id}`} className="text-sm font-medium text-white hover:text-[#fcd535] transition-colors line-clamp-1 max-w-[300px]">
                    {item.marketTitle}
                  </Link>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    item.prediction === 'yes' ? 'bg-[#0ecb81]/10 text-[#0ecb81]' : 'bg-[#f6465d]/10 text-[#f6465d]'
                  }`}>
                    {item.prediction.toUpperCase()}
                  </span>
                </td>
                <td className="p-4 text-right text-sm text-gray-300 font-mono">
                  ${item.amount.toLocaleString()}
                </td>
                <td className="p-4 text-right">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-sm font-bold font-mono ${
                    item.result === 'won' ? 'bg-[#0ecb81]/10 text-[#0ecb81]' : 'bg-[#f6465d]/10 text-[#f6465d]'
                  }`}>
                    {item.result === 'won' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                    {item.result === 'won' ? '+' : ''}{item.pnl > 0 ? `$${item.pnl.toLocaleString()}` : `-$${Math.abs(item.pnl).toLocaleString()}`}
                  </div>
                </td>
                <td className="p-4 text-right text-sm text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
