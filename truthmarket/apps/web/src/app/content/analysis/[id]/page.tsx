import React from 'react'
import { SocialSidebar } from '@/components/content/SocialSidebar'
import { SignalMarketPanel } from '@/components/content/SignalMarketPanel'
import { LineChart, Target, Zap, Clock } from 'lucide-react'

export default function AnalysisPage({ params }: { params: { id: string } }) {
  // Mock data for the analysis
  const analysisData = {
    id: params.id,
    title: "Ethereum L2 TVL to surpass L1 by end of Q3",
    creator: {
      name: "DeFi Researcher",
      handle: "@defialpha",
      avatar: "https://picsum.photos/seed/defi/40/40",
      accuracy: "78%"
    },
    publishedAt: "3 days ago",
    chartUrl: "https://picsum.photos/seed/chart/800/400",
    summary: "Based on current growth trajectories and the upcoming Dencun upgrade, Total Value Locked (TVL) on Ethereum Layer 2 networks will exceed the TVL on the Ethereum mainnet before the end of Q3 2024.",
    keyPoints: [
      "EIP-4844 will drastically reduce L2 transaction fees.",
      "Major DeFi protocols are incentivizing L2 migration.",
      "Institutional capital is increasingly comfortable with L2 security models."
    ],
    tags: ["Crypto", "Ethereum", "L2", "DeFi", "Analysis"],
    market: {
      type: 'ANALYSIS' as const,
      signalStrength: 82.4,
      volume: '1.2M',
      liquidity: '$3.1M',
      timeLeft: '120d',
      odds: {
        pos1: 1.9, // SHARP
        pos2: 4.8, // DULL
        pos3: 8.3, // EARLY
        pos4: 6.1  // LATE
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Analysis Details */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Main Analysis Card */}
          <div className="bg-bg-surface border border-bg-border rounded-xl overflow-hidden">
            
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-bg-border">
                <div className="flex items-center gap-3">
                  <img 
                    src={analysisData.creator.avatar} 
                    alt={analysisData.creator.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-text-primary flex items-center gap-2">
                      {analysisData.creator.name}
                      <span className="px-2 py-0.5 bg-green-500/10 text-green-500 rounded text-xs">
                        {analysisData.creator.accuracy} Accuracy
                      </span>
                    </div>
                    <div className="text-sm text-text-secondary">{analysisData.creator.handle} &bull; {analysisData.publishedAt}</div>
                  </div>
                </div>
                <button className="px-4 py-1.5 rounded-full border border-gold text-gold hover:bg-gold/10 transition-colors text-sm font-medium">
                  Follow
                </button>
              </div>

              <h1 className="text-3xl font-bold text-text-primary mb-6">
                {analysisData.title}
              </h1>

              {/* Chart Placeholder */}
              <div className="w-full h-64 md:h-80 bg-bg-base border border-bg-border rounded-lg mb-8 relative overflow-hidden group">
                <img 
                  src={analysisData.chartUrl} 
                  alt="Analysis Chart" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-md text-sm font-mono flex items-center gap-2 border border-white/10">
                  <LineChart className="w-4 h-4 text-gold" />
                  TVL Projection Model
                </div>
              </div>

              <div className="text-lg text-text-secondary leading-relaxed mb-8">
                {analysisData.summary}
              </div>

              {/* Key Points */}
              <div className="bg-bg-base border border-bg-border rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-gold" />
                  Key Arguments
                </h3>
                <ul className="space-y-4">
                  {analysisData.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-bg-surface border border-bg-border flex items-center justify-center flex-shrink-0 text-sm text-text-muted mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-text-primary leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-bg-border">
                {analysisData.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-bg-base text-text-secondary rounded-full text-sm hover:text-gold cursor-pointer transition-colors border border-bg-border">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Social Sidebar & Market Panel */}
        <div className="w-full lg:w-96 flex flex-col gap-6 flex-shrink-0">
          <div className="flex gap-4">
            <SocialSidebar 
              likes={3200}
              comments={450}
              shares={890}
            />
            <div className="flex-1">
              <SignalMarketPanel 
                contentType={analysisData.market.type}
                signalStrength={analysisData.market.signalStrength}
                volume={analysisData.market.volume}
                liquidity={analysisData.market.liquidity}
                timeLeft={analysisData.market.timeLeft}
                odds={analysisData.market.odds}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
