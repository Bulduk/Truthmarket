'use client'

import React from 'react'
import { SocialSidebar } from '@/components/content/SocialSidebar'
import { SignalMarketPanel } from '@/components/content/SignalMarketPanel'
import { Play, Maximize, Volume2 } from 'lucide-react'

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  // In a real app, fetch data based on params.id
  const videoData = {
    title: "Will this AI generated video hit 1M views by Friday?",
    creator: "@techvision",
    views: "452K",
    publishedAt: "2 hours ago",
    description: "An incredible demonstration of the new Sora model generating a hyper-realistic Tokyo street scene. The velocity of views suggests a massive viral breakout.",
    signalStrength: 85.4,
    volume: "124.5K",
    liquidity: "45.2K",
    amplifyOdds: 1.8,
    dampenOdds: 2.1,
    spikeOdds: 5.5,
    fadeOdds: 3.2,
  }

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Video Content (Takes up 8 columns on large screens) */}
        <div className="lg:col-span-8 flex flex-col">
          
          {/* Video Player Area */}
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-modal group flex items-center justify-center">
            {/* Placeholder for actual video player */}
            <div className="absolute inset-0 bg-gradient-to-tr from-bg-void to-bg-surface opacity-50"></div>
            <img 
              src="https://picsum.photos/seed/video1/1280/720" 
              alt="Video thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            
            <button className="relative z-10 w-20 h-20 rounded-full bg-gold/90 text-bg-void flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-gold">
              <Play className="w-8 h-8 ml-1 fill-current" />
            </button>

            {/* Fake Player Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-4">
              <button className="text-white hover:text-gold"><Play className="w-5 h-5 fill-current" /></button>
              <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-gold"></div>
              </div>
              <span className="text-white text-xs font-mono">0:45 / 2:20</span>
              <button className="text-white hover:text-gold"><Volume2 className="w-5 h-5" /></button>
              <button className="text-white hover:text-gold"><Maximize className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Video Metadata & Social Sidebar Container */}
          <div className="mt-6 flex gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-bg-surface border border-bg-border rounded-full text-xs font-medium text-text-secondary">
                  Technology
                </span>
                <span className="px-3 py-1 bg-bg-surface border border-bg-border rounded-full text-xs font-medium text-text-secondary">
                  AI
                </span>
                <span className="text-sm text-text-muted">{videoData.views} views • {videoData.publishedAt}</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {videoData.title}
              </h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-yes"></div>
                <div>
                  <p className="font-semibold text-text-primary">{videoData.creator}</p>
                  <p className="text-xs text-text-muted">1.2M Followers</p>
                </div>
                <button className="ml-auto px-4 py-1.5 bg-text-primary text-bg-base rounded-full text-sm font-bold hover:bg-text-secondary transition-colors">
                  Follow
                </button>
              </div>

              <div className="bg-bg-surface/50 border border-bg-border rounded-xl p-4 text-sm text-text-secondary leading-relaxed">
                {videoData.description}
              </div>
            </div>

            {/* Right-aligned vertical social icons */}
            <div className="w-16 shrink-0 flex justify-center">
              <div className="sticky top-24">
                <SocialSidebar 
                  comments={1240} 
                  shares={8530} 
                  bookmarks={3200} 
                  onSignalClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Signal Market Panel (Takes up 4 columns) */}
        <div className="lg:col-span-4">
          <SignalMarketPanel 
            contentType="VIDEO"
            signalStrength={videoData.signalStrength}
            volume={videoData.volume}
            liquidity={videoData.liquidity}
            amplifyOdds={videoData.amplifyOdds}
            dampenOdds={videoData.dampenOdds}
            spikeOdds={videoData.spikeOdds}
            fadeOdds={videoData.fadeOdds}
          />

          {/* Related Markets / Trending */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-text-primary mb-4">Related Reach Markets</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl hover:bg-bg-surface transition-colors cursor-pointer border border-transparent hover:border-bg-border">
                  <div className="w-24 h-16 bg-bg-overlay rounded-lg overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/relvid${i}/200/100`} alt="related" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm font-semibold text-text-primary line-clamp-2 mb-1">Another viral AI video prediction market</h4>
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="text-gold font-medium">82.1 Signal</span>
                      <span>•</span>
                      <span>$45K Vol</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
