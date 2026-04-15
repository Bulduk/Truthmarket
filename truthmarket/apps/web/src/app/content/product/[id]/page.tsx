import React from 'react'
import { SocialSidebar } from '@/components/content/SocialSidebar'
import { SignalMarketPanel } from '@/components/content/SignalMarketPanel'
import { Rocket, Calendar, Tag, ExternalLink } from 'lucide-react'

export default function ProductPage({ params }: { params: { id: string } }) {
  // Mock data for the product
  const productData = {
    id: params.id,
    title: "Apple Vision Pro 2 Announcement at WWDC",
    company: {
      name: "Apple Inc.",
      logo: "https://picsum.photos/seed/apple/40/40",
      ticker: "AAPL"
    },
    publishedAt: "2 days ago",
    imageUrl: "https://picsum.photos/seed/tech/800/500",
    description: "Rumors are swirling that Apple will announce the second generation of its Vision Pro mixed reality headset at the upcoming Worldwide Developers Conference (WWDC). Sources suggest a lighter design, improved battery life, and a lower price point.",
    specs: [
      { label: "Expected Price", value: "$1,999 - $2,499" },
      { label: "Weight", value: "350g (Estimated)" },
      { label: "Chipset", value: "M4 / R2" },
      { label: "Release Date", value: "Q4 2024" }
    ],
    tags: ["Tech", "Apple", "AR", "VR", "WWDC", "Hardware"],
    market: {
      type: 'PRODUCT' as const,
      signalStrength: 76.2,
      volume: '45.8K',
      liquidity: '$125.0K',
      timeLeft: '45d',
      odds: {
        pos1: 3.0, // MOON
        pos2: 1.4, // FLOP
        pos3: 12.0, // HYPE
        pos4: 1.8  // DELAY
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Product Details */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Main Product Card */}
          <div className="bg-bg-surface border border-bg-border rounded-xl overflow-hidden">
            <div className="relative">
              <img 
                src={productData.imageUrl} 
                alt={productData.title} 
                className="w-full h-72 md:h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/10 flex items-center gap-1.5">
                  <Rocket className="w-4 h-4 text-gold" />
                  Upcoming Launch
                </span>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img 
                    src={productData.company.logo} 
                    alt={productData.company.name} 
                    className="w-12 h-12 rounded-xl bg-white p-1"
                  />
                  <div>
                    <div className="font-bold text-xl text-text-primary">{productData.company.name}</div>
                    <div className="text-sm text-text-secondary font-mono">${productData.company.ticker}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-text-secondary flex items-center gap-1.5 justify-end">
                    <Calendar className="w-4 h-4" />
                    WWDC 2024
                  </div>
                  <div className="text-xs text-text-muted mt-1">Added {productData.publishedAt}</div>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-text-primary mb-6">
                {productData.title}
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {productData.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {productData.specs.map((spec, idx) => (
                  <div key={idx} className="bg-bg-base border border-bg-border rounded-lg p-4">
                    <div className="text-xs text-text-muted uppercase tracking-wider mb-1">{spec.label}</div>
                    <div className="font-medium text-text-primary">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-bg-border">
                {productData.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-bg-base text-text-secondary rounded-full text-sm hover:text-gold cursor-pointer transition-colors border border-bg-border flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sentiment/Discussion (Placeholder) */}
          <div className="bg-bg-surface border border-bg-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-text-primary mb-4">Community Sentiment</h3>
            <div className="h-32 flex items-center justify-center border border-dashed border-bg-border rounded-lg text-text-muted">
              Sentiment analysis chart will be displayed here
            </div>
          </div>

        </div>

        {/* Right Column: Social Sidebar & Market Panel */}
        <div className="w-full lg:w-96 flex flex-col gap-6 flex-shrink-0">
          <div className="flex gap-4">
            <SocialSidebar 
              likes={15400}
              comments={890}
              shares={2100}
            />
            <div className="flex-1">
              <SignalMarketPanel 
                contentType={productData.market.type}
                signalStrength={productData.market.signalStrength}
                volume={productData.market.volume}
                liquidity={productData.market.liquidity}
                timeLeft={productData.market.timeLeft}
                odds={productData.market.odds}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
