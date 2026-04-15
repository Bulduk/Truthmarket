'use client'

import React from 'react'
import { SocialSidebar } from '@/components/content/SocialSidebar'
import { SignalMarketPanel } from '@/components/content/SignalMarketPanel'
import { CheckCircle2 } from 'lucide-react'

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const articleData = {
    title: "New research claims room temperature superconductor discovery",
    creator: "Science Daily",
    author: "Dr. Elena Rostova",
    publishedAt: "Oct 24, 2026",
    readTime: "8 min read",
    content: `
      <p>In a potentially paradigm-shifting paper published today, researchers at the Advanced Materials Institute claim to have synthesized a compound that exhibits superconductivity at room temperature and ambient pressure.</p>
      
      <p>The material, dubbed LK-99-V2, is a modified lead-apatite structure. Unlike previous claims that required extreme pressures, the team reports zero electrical resistance and the Meissner effect (magnetic levitation) at 25°C (77°F) under standard atmospheric conditions.</p>
      
      <h3>The Verification Challenge</h3>
      <p>The scientific community remains highly skeptical. Previous claims of room-temperature superconductivity have famously failed replication attempts or been retracted due to data manipulation. The TruthX AI analysis indicates a high structural integrity in the paper, but flags the empirical claims as requiring independent lab verification.</p>
      
      <p>Several major laboratories, including Argonne National Lab and the Max Planck Institute, have already begun replication attempts based on the published synthesis recipe. Results are expected within the next 7 to 14 days.</p>
      
      <p>If verified, this discovery would revolutionize power transmission, magnetic resonance imaging (MRI), quantum computing, and battery storage, effectively eliminating energy loss in electrical grids.</p>
    `,
    signalStrength: 92.1,
    volume: "850.2K",
    liquidity: "320.5K",
    amplifyOdds: 2.5, // Confirm
    dampenOdds: 1.5,  // Refute
    spikeOdds: 8.0,   // Evolve
    fadeOdds: 2.0,    // Stale
    truthXScore: 88,
    isVerifiedSource: true
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Article Content (Takes up 7 columns) */}
        <div className="lg:col-span-7 lg:col-start-2 flex flex-col">
          
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-bg-surface border border-bg-border rounded-full text-xs font-medium text-text-secondary uppercase tracking-wider">
                Physics
              </span>
              <span className="text-sm text-text-muted">{articleData.publishedAt} • {articleData.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight font-serif">
              {articleData.title}
            </h1>
            
            <div className="flex items-center justify-between py-4 border-y border-bg-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-bg-overlay overflow-hidden">
                  <img src="https://picsum.photos/seed/author/100/100" alt="Author" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-semibold text-text-primary">{articleData.creator}</p>
                    {articleData.isVerifiedSource && <CheckCircle2 className="w-4 h-4 text-yes" />}
                  </div>
                  <p className="text-sm text-text-muted">By {articleData.author}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-1.5 bg-bg-surface rounded-lg border border-bg-border">
                <span className="text-xs text-text-muted">TruthX Score:</span>
                <span className="text-sm font-bold text-yes">{articleData.truthXScore}/100</span>
              </div>
            </div>
          </div>

          {/* Article Body & Sidebar */}
          <div className="flex gap-8 relative">
            {/* Main Text */}
            <div 
              className="flex-1 prose prose-invert prose-lg max-w-none prose-p:text-text-secondary prose-p:leading-relaxed prose-headings:text-text-primary prose-headings:font-serif"
              dangerouslySetInnerHTML={{ __html: articleData.content }}
            />

            {/* Right-aligned vertical social icons */}
            <div className="w-12 shrink-0 flex justify-center">
              <div className="sticky top-32">
                <SocialSidebar 
                  comments={452} 
                  shares={1205} 
                  bookmarks={890} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Signal Market Panel (Takes up 4 columns) */}
        <div className="lg:col-span-4">
          <SignalMarketPanel 
            contentType="ARTICLE"
            signalStrength={articleData.signalStrength}
            volume={articleData.volume}
            liquidity={articleData.liquidity}
            amplifyOdds={articleData.amplifyOdds}
            dampenOdds={articleData.dampenOdds}
            spikeOdds={articleData.spikeOdds}
            fadeOdds={articleData.fadeOdds}
          />

          {/* TruthX Analysis Summary */}
          <div className="mt-6 bg-bg-surface border border-bg-border rounded-xl p-5">
            <h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yes animate-pulse"></span>
              TruthX AI Analysis
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-yes mt-0.5">✓</span>
                Structural integrity is high (95%)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yes mt-0.5">✓</span>
                Sources are properly cited
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">!</span>
                Empirical claims require independent lab verification
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
