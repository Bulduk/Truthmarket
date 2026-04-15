import React from 'react'
import { MessageCircle, Share2, Bookmark, Zap, MoreHorizontal } from 'lucide-react'

interface SocialSidebarProps {
  comments: number
  shares: number
  bookmarks: number
  onSignalClick?: () => void
}

export function SocialSidebar({ comments, shares, bookmarks, onSignalClick }: SocialSidebarProps) {
  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <button className="group flex flex-col items-center gap-1 text-text-muted hover:text-gold transition-colors">
        <div className="p-2 rounded-full bg-bg-surface border border-transparent group-hover:border-gold/30 group-hover:bg-gold-glow transition-all transform group-hover:scale-110">
          <MessageCircle size={18} />
        </div>
        <span className="text-xs font-medium">{comments}</span>
      </button>

      <button className="group flex flex-col items-center gap-1 text-text-muted hover:text-gold transition-colors">
        <div className="p-2 rounded-full bg-bg-surface border border-transparent group-hover:border-gold/30 group-hover:bg-gold-glow transition-all transform group-hover:scale-110">
          <Share2 size={18} />
        </div>
        <span className="text-xs font-medium">{shares}</span>
      </button>

      <button className="group flex flex-col items-center gap-1 text-text-muted hover:text-gold transition-colors">
        <div className="p-2 rounded-full bg-bg-surface border border-transparent group-hover:border-gold/30 group-hover:bg-gold-glow transition-all transform group-hover:scale-110">
          <Bookmark size={18} />
        </div>
        <span className="text-xs font-medium">{bookmarks}</span>
      </button>

      <button 
        onClick={onSignalClick}
        className="group flex flex-col items-center gap-1 text-text-muted hover:text-gold transition-colors mt-4"
      >
        <div className="p-2 rounded-full bg-gold/10 border border-gold/30 text-gold group-hover:bg-gold group-hover:text-bg-void transition-all transform group-hover:scale-110 shadow-gold">
          <Zap size={18} className="fill-current" />
        </div>
        <span className="text-xs font-medium text-gold">Signal</span>
      </button>

      <button className="group flex flex-col items-center gap-1 text-text-muted hover:text-text-primary transition-colors mt-2">
        <div className="p-2 rounded-full hover:bg-bg-surface transition-all transform group-hover:scale-110">
          <MoreHorizontal size={18} />
        </div>
      </button>
    </div>
  )
}
