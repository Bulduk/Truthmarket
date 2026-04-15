import React from 'react'
import { SocialSidebar } from '@/components/content/SocialSidebar'
import { SignalMarketPanel } from '@/components/content/SignalMarketPanel'
import { TrendingUp, TrendingDown, Activity, Award } from 'lucide-react'

export default function PersonPage({ params }: { params: { id: string } }) {
  // Mock data for the person
  const personData = {
    id: params.id,
    title: "Elon Musk to step down as CEO of X by end of year",
    person: {
      name: "Elon Musk",
      role: "CEO, X (formerly Twitter)",
      avatar: "https://picsum.photos/seed/elon/120/120",
      influenceScore: 98
    },
    publishedAt: "1 week ago",
    description: "Following a series of controversial policy changes and advertiser pullouts, speculation is mounting that Elon Musk will appoint a new CEO for X before the end of the year to focus on Tesla and SpaceX.",
    recentEvents: [
      { date: "Oct 15", event: "Announced new subscription tiers", sentiment: "negative" },
      { date: "Oct 12", event: "Major advertiser pauses spending", sentiment: "negative" },
      { date: "Oct 05", event: "Record active user numbers reported", sentiment: "positive" }
    ],
    tags: ["Tech", "SocialMedia", "Leadership", "ElonMusk", "X"],
    market: {
      type: 'PERSON' as const,
      signalStrength: 64.8,
      volume: '320.1K',
      liquidity: '$850.0K',
      timeLeft: '180d',
      odds: {
        pos1: 4.2, // RISE
        pos2: 1.2, // FALL
        pos3: 15.0, // PEAK
        pos4: 1.5  // CANCEL
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Person Details */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Main Profile Card */}
          <div className="bg-bg-surface border border-bg-border rounded-xl overflow-hidden">
            {/* Header Background */}
            <div className="h-32 bg-gradient-to-r from-blue-900 to-black relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>
            
            <div className="p-6 md:p-8 relative">
              {/* Avatar */}
              <div className="absolute -top-16 left-6 md:left-8">
                <img 
                  src={personData.person.avatar} 
                  alt={personData.person.name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-bg-surface shadow-xl object-cover"
                />
              </div>

              {/* Influence Score Badge */}
              <div className="absolute top-4 right-6 md:right-8 flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold border border-gold/20 rounded-full text-sm font-bold">
                  <Award className="w-4 h-4" />
                  Influence: {personData.person.influenceScore}
                </div>
              </div>

              <div className="mt-12 md:mt-16 mb-8">
                <h1 className="text-3xl font-bold text-text-primary mb-1">
                  {personData.person.name}
                </h1>
                <div className="text-lg text-text-secondary mb-6">
                  {personData.person.role}
                </div>
                
                <h2 className="text-2xl font-bold text-text-primary mb-4 leading-tight">
                  {personData.title}
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed">
                  {personData.description}
                </p>
              </div>

              {/* Recent Events Timeline */}
              <div className="mt-8 pt-8 border-t border-bg-border">
                <div className="flex items-center gap-2 text-text-primary font-bold mb-6">
                  <Activity className="w-5 h-5 text-gold" />
                  Recent Catalysts
                </div>
                <div className="space-y-4">
                  {personData.recentEvents.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-16 text-sm text-text-muted font-mono pt-1 flex-shrink-0">{item.date}</div>
                      <div className="flex-1 bg-bg-base border border-bg-border rounded-lg p-3 flex items-center justify-between">
                        <span className="text-text-primary">{item.event}</span>
                        {item.sentiment === 'positive' ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-bg-border">
                {personData.tags.map(tag => (
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
              likes={89000}
              comments={12400}
              shares={34000}
            />
            <div className="flex-1">
              <SignalMarketPanel 
                contentType={personData.market.type}
                signalStrength={personData.market.signalStrength}
                volume={personData.market.volume}
                liquidity={personData.market.liquidity}
                timeLeft={personData.market.timeLeft}
                odds={personData.market.odds}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
