import React from 'react'
import { Activity, TrendingUp, Users, AlertCircle } from 'lucide-react'

export type ContentType = 'VIDEO' | 'ARTICLE' | 'AUDIO' | 'PHOTO' | 'ANALYSIS' | 'NEWS' | 'PRODUCT' | 'PERSON'

interface SignalMarketPanelProps {
  contentType: ContentType
  signalStrength: number
  volume: string
  liquidity: string
  amplifyOdds: number
  dampenOdds: number
  spikeOdds: number
  fadeOdds: number
}

export function SignalMarketPanel({
  contentType,
  signalStrength,
  volume,
  liquidity,
  amplifyOdds,
  dampenOdds,
  spikeOdds,
  fadeOdds
}: SignalMarketPanelProps) {

  const getMarketType = () => {
    switch(contentType) {
      case 'VIDEO': return 'REACH MARKET'
      case 'ARTICLE': return 'TRUTH MARKET'
      case 'AUDIO': return 'VIBE MARKET'
      case 'PHOTO': return 'LENS MARKET'
      case 'ANALYSIS': return 'EDGE MARKET'
      case 'NEWS': return 'VERIFY MARKET'
      case 'PRODUCT': return 'LAUNCH MARKET'
      case 'PERSON': return 'RISE MARKET'
      default: return 'SIGNAL MARKET'
    }
  }

  const getPositionLabels = () => {
    switch(contentType) {
      case 'VIDEO': return ['Amplify', 'Dampen', 'Spike', 'Fade']
      case 'ARTICLE': return ['Confirm', 'Refute', 'Evolve', 'Stale']
      case 'AUDIO': return ['Resonate', 'Fade', 'Trend', 'Niche']
      case 'PHOTO': return ['Iconic', 'Fleeting', 'Viral', 'Archive']
      case 'ANALYSIS': return ['Sharp', 'Dull', 'Early', 'Late']
      case 'NEWS': return ['Confirmed', 'Disputed', 'Developing', 'Retracted']
      case 'PRODUCT': return ['Breakout', 'Flop', 'Steady', 'Pivot']
      case 'PERSON': return ['Ascend', 'Descend', 'Plateau', 'Pivot']
      default: return ['Amplify', 'Dampen', 'Spike', 'Fade']
    }
  }

  const labels = getPositionLabels()

  return (
    <div className="bg-bg-card border border-bg-border rounded-xl p-6 shadow-card sticky top-24">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <ZapIcon className="w-5 h-5 text-gold" />
            {getMarketType()}
          </h2>
          <p className="text-sm text-text-secondary mt-1">Trade on the outcome of this signal</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 text-gold font-bold bg-gold-glow px-3 py-1 rounded-lg border border-gold/20">
            <Activity className="w-4 h-4" />
            {signalStrength.toFixed(1)}
          </div>
          <span className="text-xs text-text-muted mt-1">Signal Strength</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-bg-surface p-3 rounded-lg border border-bg-border">
          <div className="text-xs text-text-muted mb-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Volume
          </div>
          <div className="font-mono font-medium">${volume}</div>
        </div>
        <div className="bg-bg-surface p-3 rounded-lg border border-bg-border">
          <div className="text-xs text-text-muted mb-1 flex items-center gap-1">
            <Users className="w-3 h-3" /> Liquidity
          </div>
          <div className="font-mono font-medium">${liquidity}</div>
        </div>
      </div>

      <div className="space-y-3">
        <button className="w-full flex justify-between items-center p-4 bg-yes-bg border border-yes-border rounded-xl hover:bg-yes-glow transition-all group relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-yes"></div>
          <span className="font-bold text-yes text-lg">{labels[0]}</span>
          <div className="flex flex-col items-end">
            <span className="font-mono text-yes-light font-bold text-lg">{amplifyOdds.toFixed(2)}x</span>
            <span className="text-[10px] text-yes/70 uppercase tracking-wider">Low Risk</span>
          </div>
        </button>

        <button className="w-full flex justify-between items-center p-4 bg-no-bg border border-no-border rounded-xl hover:bg-no-glow transition-all group relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-no"></div>
          <span className="font-bold text-no text-lg">{labels[1]}</span>
          <div className="flex flex-col items-end">
            <span className="font-mono text-no-light font-bold text-lg">{dampenOdds.toFixed(2)}x</span>
            <span className="text-[10px] text-no/70 uppercase tracking-wider">Medium Risk</span>
          </div>
        </button>

        <button className="w-full flex justify-between items-center p-4 bg-bg-surface border border-gold/30 rounded-xl hover:border-gold hover:shadow-gold transition-all group relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold"></div>
          <span className="font-bold text-gold text-lg">{labels[2]}</span>
          <div className="flex flex-col items-end">
            <span className="font-mono text-gold font-bold text-lg">{spikeOdds.toFixed(2)}x</span>
            <span className="text-[10px] text-gold/70 uppercase tracking-wider">High Risk</span>
          </div>
        </button>

        <button className="w-full flex justify-between items-center p-4 bg-bg-surface border border-bg-border rounded-xl hover:border-text-muted transition-all group relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-text-muted"></div>
          <span className="font-bold text-text-primary text-lg">{labels[3]}</span>
          <div className="flex flex-col items-end">
            <span className="font-mono text-text-muted font-bold text-lg">{fadeOdds.toFixed(2)}x</span>
            <span className="text-[10px] text-text-muted/70 uppercase tracking-wider">Med-High Risk</span>
          </div>
        </button>
      </div>

      <div className="mt-6 pt-4 border-t border-bg-border flex items-start gap-2 text-xs text-text-muted">
        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
        <p>Positions are settled based on the oracle resolution of the underlying content metrics at the end of the market period.</p>
      </div>
    </div>
  )
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
