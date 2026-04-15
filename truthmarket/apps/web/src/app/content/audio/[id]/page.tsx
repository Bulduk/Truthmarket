import React from 'react'
import { SocialSidebar } from '@/components/content/SocialSidebar'
import { SignalMarketPanel } from '@/components/content/SignalMarketPanel'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'

export default function AudioPage({ params }: { params: { id: string } }) {
  // Mock data for the audio
  const audioData = {
    id: params.id,
    title: "Drake's new surprise single to debut at #1 on Billboard",
    artist: "Drake",
    album: "Surprise Drop",
    creator: {
      name: "ChartData",
      handle: "@chartdata",
      avatar: "https://picsum.photos/seed/chartdata/40/40"
    },
    publishedAt: "2 hours ago",
    duration: "3:45",
    coverUrl: "https://picsum.photos/seed/music/400/400",
    description: "Industry insiders are reporting a surprise drop from Drake tonight. Will it have enough momentum to debut at #1 on the Billboard Hot 100 next week?",
    tags: ["Music", "HipHop", "Billboard", "Drake"],
    market: {
      type: 'AUDIO' as const,
      signalStrength: 88.9,
      volume: '156.7K',
      liquidity: '$420.5K',
      timeLeft: '5d 12h',
      odds: {
        pos1: 1.6, // RESONATE
        pos2: 2.4, // FADE
        pos3: 4.5, // TREND
        pos4: 3.8  // NICHE
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Audio Player & Details */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Audio Player Card */}
          <div className="bg-bg-surface border border-bg-border rounded-xl p-6 flex flex-col md:flex-row gap-8 items-center">
            {/* Cover Art */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg flex-shrink-0 relative group">
              <img 
                src={audioData.coverUrl} 
                alt={audioData.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="w-16 h-16 bg-gold text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1" />
                </button>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex-1 w-full flex flex-col justify-center">
              <div className="mb-6 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 line-clamp-2">
                  {audioData.title}
                </h1>
                <p className="text-lg text-text-secondary">
                  {audioData.artist} &bull; {audioData.album}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="h-2 bg-bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-gold w-1/3 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-text-muted mt-2 font-mono">
                  <span>1:15</span>
                  <span>{audioData.duration}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center md:justify-start gap-6">
                <button className="text-text-secondary hover:text-gold transition-colors">
                  <SkipBack className="w-6 h-6" />
                </button>
                <button className="w-14 h-14 bg-text-primary text-bg-base rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors shadow-glow-gold">
                  <Play className="w-6 h-6 ml-1" />
                </button>
                <button className="text-text-secondary hover:text-gold transition-colors">
                  <SkipForward className="w-6 h-6" />
                </button>
                <div className="flex-1"></div>
                <button className="text-text-secondary hover:text-gold transition-colors hidden sm:block">
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Creator & Description */}
          <div className="bg-bg-surface border border-bg-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img 
                  src={audioData.creator.avatar} 
                  alt={audioData.creator.name} 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium text-text-primary">{audioData.creator.name}</div>
                  <div className="text-sm text-text-secondary">{audioData.creator.handle} &bull; {audioData.publishedAt}</div>
                </div>
              </div>
              <button className="px-4 py-1.5 rounded-full border border-gold text-gold hover:bg-gold/10 transition-colors text-sm font-medium">
                Follow
              </button>
            </div>

            <p className="text-text-secondary leading-relaxed mb-4">
              {audioData.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {audioData.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-bg-border text-text-secondary rounded-full text-sm hover:text-gold cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comments Section (Placeholder) */}
          <div className="bg-bg-surface border border-bg-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-text-primary mb-4">Comments (128)</h3>
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
              likes={12400}
              comments={128}
              shares={342}
            />
            <div className="flex-1">
              <SignalMarketPanel 
                contentType={audioData.market.type}
                signalStrength={audioData.market.signalStrength}
                volume={audioData.market.volume}
                liquidity={audioData.market.liquidity}
                timeLeft={audioData.market.timeLeft}
                odds={audioData.market.odds}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
