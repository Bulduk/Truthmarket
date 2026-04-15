import { SignalCard } from '@/components/market/SignalCard'

export default function MarketsPage() {
  const mockMarkets = [
    {
      id: '1',
      contentType: 'VIDEO' as const,
      title: 'Will this AI generated video hit 1M views by Friday?',
      creator: '@techvision',
      signalStrength: 85.4,
      volume: '124.5K',
      timeLeft: '2d 14h',
      amplifyOdds: 1.8,
      dampenOdds: 2.1,
      spikeOdds: 5.5,
      fadeOdds: 3.2,
      imageUrl: 'https://picsum.photos/seed/video1/400/200'
    },
    {
      id: '2',
      contentType: 'ARTICLE' as const,
      title: 'New research claims room temperature superconductor discovery',
      creator: 'Science Daily',
      signalStrength: 92.1,
      volume: '850.2K',
      timeLeft: '12d 4h',
      amplifyOdds: 2.5,
      dampenOdds: 1.5,
      spikeOdds: 8.0,
      fadeOdds: 2.0,
      imageUrl: 'https://picsum.photos/seed/science/400/200'
    },
    {
      id: '3',
      contentType: 'NEWS' as const,
      title: 'Central Bank announces unexpected interest rate cut',
      creator: 'Financial Times',
      signalStrength: 98.5,
      volume: '2.1M',
      timeLeft: '4h 30m',
      amplifyOdds: 1.2,
      dampenOdds: 4.5,
      spikeOdds: 3.0,
      fadeOdds: 6.0,
      imageUrl: 'https://picsum.photos/seed/news/400/200'
    },
    {
      id: '4',
      contentType: 'PRODUCT' as const,
      title: 'Apple Vision Pro 2 Announcement at WWDC',
      creator: 'TechRumors',
      signalStrength: 76.2,
      volume: '45.8K',
      timeLeft: '45d',
      amplifyOdds: 3.0,
      dampenOdds: 1.4,
      spikeOdds: 12.0,
      fadeOdds: 1.8,
      imageUrl: 'https://picsum.photos/seed/tech/400/200'
    },
    {
      id: '5',
      contentType: 'PERSON' as const,
      title: 'Elon Musk to step down as CEO of X by end of year',
      creator: 'Insider',
      signalStrength: 64.8,
      volume: '320.1K',
      timeLeft: '180d',
      amplifyOdds: 4.2,
      dampenOdds: 1.2,
      spikeOdds: 15.0,
      fadeOdds: 1.5,
      imageUrl: 'https://picsum.photos/seed/person/400/200'
    },
    {
      id: '6',
      contentType: 'AUDIO' as const,
      title: "Drake's new surprise single to debut at #1 on Billboard",
      creator: 'ChartData',
      signalStrength: 88.9,
      volume: '156.7K',
      timeLeft: '5d 12h',
      amplifyOdds: 1.6,
      dampenOdds: 2.4,
      spikeOdds: 4.5,
      fadeOdds: 3.8,
      imageUrl: 'https://picsum.photos/seed/music/400/200'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Signal Markets</h1>
          <p className="text-text-secondary">Trade on the future of content, ideas, and trends.</p>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <select className="flex-1 md:flex-none bg-bg-surface border border-bg-border rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-gold">
            <option>All Categories</option>
            <option>Reach (Video)</option>
            <option>Truth (Article)</option>
            <option>Verify (News)</option>
            <option>Launch (Product)</option>
          </select>
          <select className="flex-1 md:flex-none bg-bg-surface border border-bg-border rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-gold">
            <option>Trending</option>
            <option>Highest Volume</option>
            <option>Ending Soon</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMarkets.map(market => (
          <SignalCard key={market.id} {...market} />
        ))}
      </div>
    </div>
  )
}
