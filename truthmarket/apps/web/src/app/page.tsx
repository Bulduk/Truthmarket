import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col place-items-center mt-10 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-glow text-gold text-sm font-medium mb-6 border border-gold/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          FluxMarket Beta is Live
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Every Signal Has a <span className="text-gold">Price</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mb-10">
          The first Web3 social financial ecosystem where every piece of content becomes a tradable market. Predict trends, verify truths, and earn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/markets" className="bg-gold hover:bg-gold-light text-bg-void font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
            Explore Markets <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/create" className="bg-bg-surface hover:bg-bg-hover border border-bg-border text-text-primary font-bold px-8 py-4 rounded-xl transition-colors text-lg flex items-center justify-center">
            Create Signal
          </Link>
        </div>
      </div>

      {/* 4D Position System */}
      <div className="w-full max-w-6xl mt-16">
        <h2 className="text-2xl font-bold text-center mb-10">The 4-Dimensional Position System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group rounded-2xl border border-bg-border bg-bg-surface/50 p-6 transition-all hover:border-yes hover:shadow-card">
            <div className="w-12 h-12 rounded-full bg-yes-bg flex items-center justify-center mb-4 text-yes">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yes">Amplify</h3>
            <p className="text-sm text-text-secondary">
              Take a position on signals that will spread, grow, and be confirmed. Low risk, steady returns.
            </p>
          </div>

          <div className="group rounded-2xl border border-bg-border bg-bg-surface/50 p-6 transition-all hover:border-no hover:shadow-card">
            <div className="w-12 h-12 rounded-full bg-no-bg flex items-center justify-center mb-4 text-no">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-no">Dampen</h3>
            <p className="text-sm text-text-secondary">
              Bet against signals that will fade, be refuted, or lose relevance. Medium risk.
            </p>
          </div>
          
          <div className="group rounded-2xl border border-bg-border bg-bg-surface/50 p-6 transition-all hover:border-gold hover:shadow-gold">
            <div className="w-12 h-12 rounded-full bg-gold-glow flex items-center justify-center mb-4 text-gold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gold">Spike</h3>
            <p className="text-sm text-text-secondary">
              Predict viral explosions, sudden breakouts, and early trends. High risk, high reward (5x-20x).
            </p>
          </div>
          
          <div className="group rounded-2xl border border-bg-border bg-bg-surface/50 p-6 transition-all hover:border-text-muted hover:shadow-card">
            <div className="w-12 h-12 rounded-full bg-bg-overlay flex items-center justify-center mb-4 text-text-muted">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-primary">Fade</h3>
            <p className="text-sm text-text-secondary">
              Capitalize on trends that will slowly lose momentum or become stale. Medium-high risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
