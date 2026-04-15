import React from 'react'
import { Activity, Clock } from 'lucide-react'

export type ContentType = 'VIDEO' | 'ARTICLE' | 'AUDIO' | 'PHOTO' | 'ANALYSIS' | 'NEWS' | 'PRODUCT' | 'PERSON'

interface SignalCardProps {
  id: string
  contentType: ContentType
  title: string
  creator: string
  signalStrength: number
  volume: string
  timeLeft: string
  amplifyOdds: number
  dampenOdds: number
  spikeOdds: number
  fadeOdds: number
  imageUrl?: string
}

export function SignalCard({
  id,
  contentType,
  title,
  creator,
  signalStrength,
  volume,
  timeLeft,
  amplifyOdds,
  dampenOdds,
  spikeOdds,
  fadeOdds,
  imageUrl
}: SignalCardProps) {
  
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
    <div className="bg-bg-card border border-bg-border rounded-xl overflow-hidden hover:border-bg-borderLight transition-colors shadow-card flex flex-col h-full cursor-pointer group/card">
      {/* Top Area */}
      <div className="p-4 border-b border-bg-border flex justify-between items-center bg-bg-surface/50">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2 py-1 bg-bg-overlay rounded text-text-secondary tracking-wider">
            {getMarketType()}
          </span>
          <div className="flex items-center gap-1 text-xs text-gold font-medium bg-gold-glow px-2 py-1 rounded">
            <Activity className="w-3 h-3" />
            {signalStrength}
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {timeLeft}
          </div>
          <div className="font-mono">
            ${volume}
          </div>
        </div>
      </div>

      {/* Middle Area */}
      <div className="p-4 flex-1 flex flex-col">
        {imageUrl && (
          <div className="w-full h-40 bg-bg-overlay rounded-lg mb-4 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-text-primary line-clamp-2 mb-1 group-hover/card:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          by <span className="text-text-primary hover:text-gold transition-colors">{creator}</span>
        </p>
      </div>

      {/* Bottom Area - Signal Trade */}
      <div className="p-4 bg-bg-surface/30 border-t border-bg-border">
        <div className="grid grid-cols-2 gap-2 mb-3">
          <button className="flex justify-between items-center px-3 py-2 bg-yes-bg border border-yes-border rounded-lg hover:bg-yes-glow transition-colors group">
            <span className="text-sm font-medium text-yes">{labels[0]}</span>
            <span className="text-sm font-mono text-yes-light">{amplifyOdds}x</span>
          </button>
          <button className="flex justify-between items-center px-3 py-2 bg-no-bg border border-no-border rounded-lg hover:bg-no-glow transition-colors group">
            <span className="text-sm font-medium text-no">{labels[1]}</span>
            <span className="text-sm font-mono text-no-light">{dampenOdds}x</span>
          </button>
          <button className="flex justify-between items-center px-3 py-2 bg-bg-overlay border border-bg-border rounded-lg hover:border-gold transition-colors group">
            <span className="text-sm font-medium text-text-primary">{labels[2]}</span>
            <span className="text-sm font-mono text-gold">{spikeOdds}x</span>
          </button>
          <button className="flex justify-between items-center px-3 py-2 bg-bg-overlay border border-bg-border rounded-lg hover:border-text-muted transition-colors group">
            <span className="text-sm font-medium text-text-primary">{labels[3]}</span>
            <span className="text-sm font-mono text-text-muted">{fadeOdds}x</span>
          </button>
        </div>
        
        {/* Volume Bar */}
        <div className="h-1.5 w-full bg-bg-overlay rounded-full overflow-hidden flex">
          <div className="h-full bg-yes" style={{ width: '65%' }}></div>
          <div className="h-full bg-no" style={{ width: '35%' }}></div>
        </div>
      </div>
    </div>
  )
}
