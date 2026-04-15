import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0e11] pt-16 pb-24 md:pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#fcd535] to-[#f0b90b] flex items-center justify-center">
                <span className="text-[#1e2329] font-black text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">TruthMarket</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The decentralized prediction market and content economy where insight meets opportunity.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Markets</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/explore" className="hover:text-[#fcd535] transition-colors">Explore</Link></li>
              <li><Link href="/markets?category=crypto" className="hover:text-[#fcd535] transition-colors">Crypto</Link></li>
              <li><Link href="/markets?category=politics" className="hover:text-[#fcd535] transition-colors">Politics</Link></li>
              <li><Link href="/leaderboard" className="hover:text-[#fcd535] transition-colors">Leaderboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/docs" className="hover:text-[#fcd535] transition-colors">Documentation</Link></li>
              <li><Link href="/dao" className="hover:text-[#fcd535] transition-colors">Governance (DAO)</Link></li>
              <li><Link href="/api" className="hover:text-[#fcd535] transition-colors">API</Link></li>
              <li><Link href="/faq" className="hover:text-[#fcd535] transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/terms" className="hover:text-[#fcd535] transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-[#fcd535] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-[#fcd535] transition-colors">Risk Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TruthMarket. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#0ecb81] animate-pulse" />
            <span className="text-xs text-gray-400 font-mono">Polygon Mainnet: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
