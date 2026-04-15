'use client';

import { MessageSquare, Repeat2, Heart, Share, Award } from 'lucide-react';
import { MarketWidget } from './MarketWidget';

interface PostCardProps {
  post: {
    id: string;
    author: {
      name: string;
      handle: string;
      avatar: string;
      isOracle: boolean;
    };
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    reposts: number;
    market?: {
      id: string;
      title: string;
      yesPrice: number;
      noPrice: number;
      volume: string;
      participants: number;
    };
    isNFT?: boolean;
  };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="glass rounded-2xl p-5 transition-colors hover:bg-white/[0.03] border border-white/5">
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#fcd535] to-[#f0b90b] p-0.5">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="w-full h-full rounded-full object-cover border-2 border-[#0b0e11]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2 truncate">
              <span className="font-bold text-white truncate">{post.author.name}</span>
              {post.author.isOracle && (
                <Award className="w-4 h-4 text-[#fcd535] shrink-0" />
              )}
              <span className="text-sm text-gray-500 truncate">@{post.author.handle}</span>
              <span className="text-sm text-gray-600">·</span>
              <span className="text-sm text-gray-500 shrink-0">{post.timestamp}</span>
            </div>
            {post.isNFT && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#B026FF]/10 text-[#B026FF] border border-[#B026FF]/20 shrink-0">
                NFT
              </span>
            )}
          </div>

          {/* Text */}
          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>

          {/* Embedded Market */}
          {post.market && (
            <MarketWidget market={post.market} />
          )}

          {/* Actions */}
          <div className="flex items-center justify-between mt-4 text-gray-500 max-w-md">
            <button className="flex items-center gap-2 hover:text-[#fcd535] transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-[#fcd535]/10 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium">{post.comments}</span>
            </button>
            
            <button className="flex items-center gap-2 hover:text-[#0ecb81] transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-[#0ecb81]/10 transition-colors">
                <Repeat2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium">{post.reposts}</span>
            </button>
            
            <button className="flex items-center gap-2 hover:text-[#f6465d] transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-[#f6465d]/10 transition-colors">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium">{post.likes}</span>
            </button>
            
            <button className="flex items-center gap-2 hover:text-[#2764FF] transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-[#2764FF]/10 transition-colors">
                <Share className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
