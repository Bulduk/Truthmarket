'use client';

import { PostCreate } from '@/components/feed/PostCreate';
import { PostCard } from '@/components/feed/PostCard';
import { TrendingMarkets } from '@/components/feed/TrendingMarkets';

const MOCK_POSTS = [
  {
    id: '1',
    author: {
      name: 'Vitalik Buterin',
      handle: 'vitalik.eth',
      avatar: 'https://picsum.photos/seed/vitalik/100/100',
      isOracle: true,
    },
    content: 'The Dencun upgrade is looking solid. Layer 2 fees are going to drop significantly. I predict we will see a 10x reduction in rollup costs within the first month.',
    timestamp: '2h ago',
    likes: 14500,
    comments: 842,
    reposts: 3200,
    pulseMarketType: 'truth' as const,
    market: {
      id: 'm1',
      title: 'Will L2 average transaction fees drop below $0.01 after Dencun?',
      yesPrice: 0.82,
      noPrice: 0.18,
      volume: '2.4M',
      participants: 12450,
    }
  },
  {
    id: '2',
    author: {
      name: 'CryptoWhale',
      handle: 'whale_alert',
      avatar: 'https://picsum.photos/seed/whale/100/100',
      isOracle: false,
    },
    content: 'Just spotted a massive 10,000 BTC movement from Coinbase to an unknown wallet. Accumulation phase is definitely not over. Bullish divergence on the weekly chart.',
    timestamp: '4h ago',
    likes: 3200,
    comments: 156,
    reposts: 480,
    pulseMarketType: 'reach' as const,
    isNFT: true,
  },
  {
    id: '3',
    author: {
      name: 'Macro Insights',
      handle: 'macro_daily',
      avatar: 'https://picsum.photos/seed/macro/100/100',
      isOracle: true,
    },
    content: 'Inflation data came in hotter than expected. The market is currently pricing in 3 rate cuts for 2024, but I think we might only see 1 or 2 if this trend continues.',
    timestamp: '5h ago',
    likes: 890,
    comments: 124,
    reposts: 85,
    market: {
      id: 'm2',
      title: 'Will the Fed cut rates more than twice in 2024?',
      yesPrice: 0.35,
      noPrice: 0.65,
      volume: '850K',
      participants: 3120,
    }
  }
];

const TRENDING_TOPICS = [
  { tag: '#EthereumETF', posts: 42 },
  { tag: '#DencunUpgrade', posts: 28 },
  { tag: '#FedRates', posts: 15 },
  { tag: '#BitcoinHalving', posts: 56 },
];

export default function FeedPage() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 pb-24 md:pb-8">
      
      {/* Left Sidebar (Desktop only) */}
      <div className="hidden lg:block lg:col-span-1 space-y-6">
        <div className="glass rounded-2xl p-5 sticky top-28">
          <h3 className="font-bold text-white mb-4">Trending Topics</h3>
          <div className="space-y-4">
            {TRENDING_TOPICS.map((topic, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="text-sm font-bold text-gray-300 group-hover:text-[#fcd535] transition-colors">{topic.tag}</div>
                <div className="text-xs text-gray-500">{topic.posts}k posts</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Feed */}
      <div className="lg:col-span-2 space-y-6">
        <PostCreate />
        
        <div className="space-y-4">
          {MOCK_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block lg:col-span-1 space-y-6">
        <div className="sticky top-28">
          <TrendingMarkets />
        </div>
      </div>

    </div>
  );
}
