import React from 'react'
import { SocialSidebar } from '@/components/content/SocialSidebar'
import { SignalMarketPanel } from '@/components/content/SignalMarketPanel'
import { Maximize2, Download, Info } from 'lucide-react'

export default function PhotoPage({ params }: { params: { id: string } }) {
  // Mock data for the photo
  const photoData = {
    id: params.id,
    title: "Rare atmospheric phenomenon captured over the Alps",
    creator: {
      name: "NatGeo Photographer",
      handle: "@naturelens",
      avatar: "https://picsum.photos/seed/naturelens/40/40"
    },
    publishedAt: "5 hours ago",
    photoUrl: "https://picsum.photos/seed/alps/1200/800",
    cameraInfo: "Sony A7R IV • 24mm • f/2.8 • 1/100s • ISO 400",
    description: "A stunning capture of a rare atmospheric optical phenomenon known as a 'sun halo' or '22 degree halo', taken from the peak of Mont Blanc. The ice crystals in the cirrus clouds refract the sunlight perfectly.",
    tags: ["Photography", "Nature", "Atmosphere", "Alps", "Rare"],
    market: {
      type: 'PHOTO' as const,
      signalStrength: 94.2,
      volume: '89.1K',
      liquidity: '$210.0K',
      timeLeft: '14d',
      odds: {
        pos1: 2.5, // ICONIC
        pos2: 4.1, // FLEETING
        pos3: 11.3, // VIRAL
        pos4: 5.8  // ARCHIVE
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Photo & Details */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Photo Container */}
          <div className="bg-bg-surface border border-bg-border rounded-xl overflow-hidden relative group">
            <img 
              src={photoData.photoUrl} 
              alt={photoData.title} 
              className="w-full h-auto max-h-[70vh] object-contain bg-black"
            />
            {/* Overlay Controls */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-colors">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-colors">
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Title & Creator */}
          <div className="bg-bg-surface border border-bg-border rounded-xl p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              {photoData.title}
            </h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img 
                  src={photoData.creator.avatar} 
                  alt={photoData.creator.name} 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium text-text-primary">{photoData.creator.name}</div>
                  <div className="text-sm text-text-secondary">{photoData.creator.handle} &bull; {photoData.publishedAt}</div>
                </div>
              </div>
              <button className="px-4 py-1.5 rounded-full border border-gold text-gold hover:bg-gold/10 transition-colors text-sm font-medium">
                Follow
              </button>
            </div>

            <p className="text-text-secondary leading-relaxed mb-6">
              {photoData.description}
            </p>

            {/* Camera Info Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-base border border-bg-border rounded-lg text-sm text-text-muted mb-6 font-mono">
              <Info className="w-4 h-4" />
              {photoData.cameraInfo}
            </div>

            <div className="flex flex-wrap gap-2">
              {photoData.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-bg-border text-text-secondary rounded-full text-sm hover:text-gold cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comments Section (Placeholder) */}
          <div className="bg-bg-surface border border-bg-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-text-primary mb-4">Comments (45)</h3>
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-bg-border flex-shrink-0"></div>
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="flex-1 bg-bg-base border border-bg-border rounded-lg px-4 py-2 text-text-primary focus:outline-none focus:border-gold"
              />
            </div>
            <div className="text-center text-text-muted py-8">
              Comments are loading...
            </div>
          </div>

        </div>

        {/* Right Column: Social Sidebar & Market Panel */}
        <div className="w-full lg:w-96 flex flex-col gap-6 flex-shrink-0">
          <div className="flex gap-4">
            <SocialSidebar 
              likes={8400}
              comments={45}
              shares={1200}
            />
            <div className="flex-1">
              <SignalMarketPanel 
                contentType={photoData.market.type}
                signalStrength={photoData.market.signalStrength}
                volume={photoData.market.volume}
                liquidity={photoData.market.liquidity}
                timeLeft={photoData.market.timeLeft}
                odds={photoData.market.odds}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
