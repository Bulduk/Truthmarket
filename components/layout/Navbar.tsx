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
import { CreateButton } from '@/components/create/CreateButton'

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
      h-16 bg-[#050505]/80
      border-b border-[rgba(255,255,255,0.05)]
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
              bg-gradient-to-br from-[#8a2be2] to-[#1e3a8a]
              flex items-center justify-center
              shadow-[0_0_20px_rgba(138,43,226,0.4)]
            ">
              <Zap size={16} className="text-[#ffffff]" fill="currentColor" />
            </div>
            <div className="
              absolute -top-0.5 -right-0.5
              w-2.5 h-2.5 rounded-full
              bg-[#1e3a8a]
              border-2 border-[#050505]
              animate-pulse
            "/>
          </div>
          <div className="flex flex-col leading-none">
            <span className="
              text-[#ffffff] font-bold text-lg tracking-tight
            ">
              Pulse
              <span className="text-[#8a2be2]">Market</span>
            </span>
            <span className="text-[#8a2be2] opacity-80 text-[9px] tracking-widest uppercase">
              Every Signal Has a Price
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
                w-full bg-[#101010] border border-[rgba(255,255,255,0.05)]
                text-[#ffffff] placeholder-gray-500
                text-sm rounded-lg pl-9 pr-4 py-2
                focus:outline-none focus:border-[#8a2be2]/60
                focus:ring-1 focus:ring-[#8a2be2]/30
                transition-all duration-200
              "
            />
            <kbd className="
              absolute right-3 top-1/2 -translate-y-1/2
              text-gray-400 text-[10px] font-mono
              border border-[rgba(255,255,255,0.1)] rounded px-1
            ">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* ── SAĞ AKSIYONLAR ── */}
        <div className="flex items-center gap-2">

          {/* PULSE Token Bakiye */}
          <div className="
            hidden sm:flex items-center gap-2
            bg-[#101010] border border-[rgba(255,255,255,0.05)]
            rounded-lg px-3 py-1.5
            hover:border-[#8a2be2]/50
            transition-all duration-200 cursor-pointer
          ">
            <div className="
              w-5 h-5 rounded-full
              bg-gradient-to-br from-[#8a2be2] to-[#1e3a8a]
              flex items-center justify-center
            ">
              <span className="text-[8px] font-bold text-[#ffffff]">P</span>
            </div>
            <span className="text-[#8a2be2] text-sm font-semibold">
              2,847.50
            </span>
            <span className="text-gray-500 text-xs">PULSE</span>
          </div>

          {/* Bildirim */}
          <div className="hidden md:block mr-2">
            <CreateButton />
          </div>
          <button className="
            relative w-9 h-9 rounded-lg
            bg-[#101010] border border-[rgba(255,255,255,0.05)]
            flex items-center justify-center
            hover:border-[#8a2be2]/50
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
