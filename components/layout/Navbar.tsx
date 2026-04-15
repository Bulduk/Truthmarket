'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, Bell, Wallet, ChevronDown,
  TrendingUp, Users, Zap, Menu, X,
  BarChart2, Globe, Star, Shield, PlusCircle
} from 'lucide-react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const NAV_ITEMS = [
  { name: 'Piyasalar', href: '/markets', icon: BarChart2 },
  { name: 'Oluştur', href: '/create', icon: PlusCircle },
  { name: 'Portföy', href: '/portfolio', icon: Wallet },
]

export function Navbar() {
  const [searchOpen, setSearchOpen]   = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [notifCount]                  = useState(7)

  return (
    <nav className="
      fixed top-9 left-0 right-0 z-40
      h-16 bg-[#0D0F14]/95
      border-b border-[#252B3B]
      backdrop-blur-xl
    ">
      <div className="
        max-w-[1600px] mx-auto h-full
        flex items-center justify-between
        px-4 lg:px-6
      ">

        {/* ── LOGO ── */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="relative">
            <div className="
              w-8 h-8 rounded-lg
              bg-gradient-to-br from-[#F0B90B] to-[#C99A08]
              flex items-center justify-center
              shadow-[0_0_20px_rgba(240,185,11,0.4)]
            ">
              <Zap size={16} className="text-[#0D0F14]" fill="currentColor" />
            </div>
            <div className="
              absolute -top-0.5 -right-0.5
              w-2.5 h-2.5 rounded-full
              bg-[#00D68F]
              border-2 border-[#0D0F14]
              animate-pulse
            "/>
          </div>
          <div className="flex flex-col leading-none">
            <span className="
              text-[#E8ECF4] font-bold text-lg tracking-tight
            ">
              Truth
              <span className="text-[#F0B90B]">Market</span>
            </span>
            <span className="text-[#5C6478] text-[9px] tracking-widest uppercase">
              Predict · Trade · Earn
            </span>
          </div>
        </Link>

        {/* ── NAV LİNKLER (Desktop) ── */}
        <div className="hidden lg:flex items-center gap-1 ml-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-[#9BA3B8] hover:text-[#E8ECF4] hover:bg-[#131720] transition-colors"
            >
              <item.icon size={16} />
              {item.name}
            </Link>
          ))}
        </div>

        {/* ── ARAMA ÇUBUĞU ── */}
        <div className="hidden md:flex flex-1 max-w-sm mx-6">
          <div className="relative w-full">
            <Search
              size={14}
              className="
                absolute left-3 top-1/2 -translate-y-1/2
                text-[#5C6478]
              "
            />
            <input
              type="text"
              placeholder="Piyasa, içerik, kullanıcı ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                w-full bg-[#131720] border border-[#252B3B]
                text-[#E8ECF4] placeholder-[#5C6478]
                text-sm rounded-lg pl-9 pr-4 py-2
                focus:outline-none focus:border-[#F0B90B]/40
                focus:ring-1 focus:ring-[#F0B90B]/20
                transition-all duration-200
              "
            />
            <kbd className="
              absolute right-3 top-1/2 -translate-y-1/2
              text-[#3A4055] text-[10px] font-mono
              border border-[#252B3B] rounded px-1
            ">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* ── SAĞ AKSIYONLAR ── */}
        <div className="flex items-center gap-2">

          {/* TRUTH Token Bakiye */}
          <div className="
            hidden sm:flex items-center gap-2
            bg-[#131720] border border-[#252B3B]
            rounded-lg px-3 py-1.5
            hover:border-[#F0B90B]/30
            transition-all duration-200 cursor-pointer
          ">
            <div className="
              w-5 h-5 rounded-full
              bg-gradient-to-br from-[#F0B90B] to-[#C99A08]
              flex items-center justify-center
            ">
              <span className="text-[8px] font-bold text-[#0D0F14]">T</span>
            </div>
            <span className="text-[#F0B90B] text-sm font-semibold">
              2,847.50
            </span>
            <span className="text-[#5C6478] text-xs">TRUTH</span>
          </div>

          {/* Bildirim */}
          <button className="
            relative w-9 h-9 rounded-lg
            bg-[#131720] border border-[#252B3B]
            flex items-center justify-center
            hover:border-[#F0B90B]/30
            transition-all duration-200
          ">
            <Bell size={16} className="text-[#9BA3B8]" />
            {notifCount > 0 && (
              <span className="
                absolute -top-1 -right-1
                w-4 h-4 rounded-full
                bg-[#FF4757] text-white
                text-[9px] font-bold
                flex items-center justify-center
              ">
                {notifCount}
              </span>
            )}
          </button>

          {/* Cüzdan Bağla */}
          <ConnectButton 
            accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }}
            showBalance={{
              smallScreen: false,
              largeScreen: false,
            }}
          />
        </div>
      </div>
    </nav>
  )
}
