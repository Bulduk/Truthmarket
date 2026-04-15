import React from 'react'
import { SocialSidebar } from '@/components/content/SocialSidebar'
import { SignalMarketPanel } from '@/components/content/SignalMarketPanel'
import { ShieldCheck, AlertTriangle, ExternalLink } from 'lucide-react'

export default function NewsPage({ params }: { params: { id: string } }) {
  // Mock data for the news
  const newsData = {
    id: params.id,
    title: "Central Bank announces unexpected 50bps interest rate cut",
    source: {
      name: "Financial Times",
      domain: "ft.com",
      logo: "https://picsum.photos/seed/ft/40/40",
      trustScore: 92
    },
    publishedAt: "45 minutes ago",
    imageUrl: "https://picsum.photos/seed/finance/800/400",
    summary: "In a surprise move, the Central Bank has cut interest rates by 50 basis points, citing cooling inflation and a need to stimulate economic growth. Markets have reacted sharply.",
    content: "The Central Bank's monetary policy committee voted 7-2 in favor of the cut, which brings the benchmark rate down to 4.5%. This is the first reduction in over two years and goes against the consensus forecast of economists who had predicted rates would remain on hold until at least the next quarter.\n\nGovernor Smith stated in the press conference that 'recent data indicates inflation is on a sustainable path towards our 2% target, allowing us to ease the restrictive stance of monetary policy.'\n\nEquities rallied immediately following the announcement, with the main index jumping 1.5%. Bond yields fell sharply across the curve.",
    tags: ["Finance", "Economy", "CentralBank", "Markets", "Breaking"],
    market: {
      type: 'NEWS' as const,
      signalStrength: 98.5,
      volume: '2.1M',
      liquidity: '$5.4M',
      timeLeft: '4h 30m',
      odds: {
        pos1: 1.2, // VERIFY
        pos2: 4.5, // DEBUNK
        pos3: 3.0, // DEVELOP
        pos4: 6.0  // STALL
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: News Content */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Main Article Card */}
          <div className="bg-bg-surface border border-bg-border rounded-xl overflow-hidden">
            <img 
              src={newsData.imageUrl} 
              alt={newsData.title} 
              className="w-full h-64 md:h-80 object-cover"
            />
            
            <div className="p-6 md:p-8">
              {/* Trust Score Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-sm font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Trust Score: {newsData.source.trustScore}/100
                </div>
                <span className="text-text-muted text-sm px-2 py-1 bg-bg-base rounded-md font-mono">
                  BREAKING
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight font-serif">
                {newsData.title}
              </h1>
              
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-bg-border">
                <div className="flex items-center gap-3">
                  <img 
                    src={newsData.source.logo} 
                    alt={newsData.source.name} 
                    className="w-10 h-10 rounded-md"
                  />
                  <div>
                    <div className="font-medium text-text-primary flex items-center gap-2">
                      {newsData.source.name}
                      <a href={`https://${newsData.source.domain}`} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-gold">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-sm text-text-secondary">{newsData.publishedAt}</div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="text-xl text-text-secondary font-medium leading-relaxed mb-8 border-l-4 border-gold pl-4">
                {newsData.summary}
              </div>

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none font-serif text-text-primary">
                {newsData.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-bg-border">
                {newsData.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-bg-base text-text-secondary rounded-full text-sm hover:text-gold cursor-pointer transition-colors border border-bg-border">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fact Check / Context Panel */}
          <div className="bg-bg-base border border-bg-border rounded-xl p-6">
            <div className="flex items-center gap-2 text-gold font-bold mb-4">
              <AlertTriangle className="w-5 h-5" />
              Context & Verification
            </div>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></div>
                <span>Multiple major news outlets (Reuters, Bloomberg) have corroborated the rate cut announcement.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></div>
                <span>The official press release is available on the Central Bank&apos;s website.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></div>
                <span>Market reactions are consistent with the reported news.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Social Sidebar & Market Panel */}
        <div className="w-full lg:w-96 flex flex-col gap-6 flex-shrink-0">
          <div className="flex gap-4">
            <SocialSidebar 
              likes={45000}
              comments={3200}
              shares={12500}
            />
            <div className="flex-1">
              <SignalMarketPanel 
                contentType={newsData.market.type}
                signalStrength={newsData.market.signalStrength}
                volume={newsData.market.volume}
                liquidity={newsData.market.liquidity}
                timeLeft={newsData.market.timeLeft}
                odds={newsData.market.odds}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
