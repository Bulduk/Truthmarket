'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, TrendingDown, Zap } from 'lucide-react'

interface TickerItem {
  symbol:  string
  price:   string
  change:  number
  volume:  string
}

const MOCK_TICKERS: TickerItem[] = [
  { symbol: 'TRUTH/USDT', price: '2.847',  change: +12.4, volume: '2.4M'  },
  { symbol: 'BTC/USDT',   price: '67,420', change: +2.1,  volume: '1.2B'  },
  { symbol: 'ETH/USDT',   price: '3,891',  change: -0.8,  volume: '890M'  },
  { symbol: 'MATIC/USDT', price: '0.891',  change: +5.2,  volume: '340M'  },
  { symbol: 'DOLAR/TL',   price: '32.84',  change: +0.3,  volume: '—'     },
  { symbol: 'BIST100',    price: '10,847', change: +1.7,  volume: '45B₺'  },
  { symbol: 'ALTIN/TL',   price: '2,847',  change: +0.9,  volume: '—'     },
]

export function TickerBar() {
  const [tickers] = useState<TickerItem[]>(
    [...MOCK_TICKERS, ...MOCK_TICKERS]
  )

  return (
    <div className="
      fixed top-0 left-0 right-0 z-50
      h-9 bg-[#0A0C0F]
      border-b border-[#252B3B]
      overflow-hidden
      flex items-center
    ">
      {/* Sol Logo Alanı */}
      <div className="
        flex-shrink-0 flex items-center gap-2
        px-4 h-full
        border-r border-[#252B3B]
        bg-[#0D0F14]
        relative z-10
      ">
        <Zap size={12} className="text-[#F0B90B]" />
        <span className="text-[#F0B90B] text-xs font-bold tracking-wider">
          LIVE
        </span>
      </div>

      {/* Kayan Ticker */}
      <div className="flex-1 overflow-hidden relative">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {tickers.map((ticker, i) => (
            <div
              key={i}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <span className="text-[#9BA3B8] text-xs font-medium">
                {ticker.symbol}
              </span>
              <span className="text-[#E8ECF4] text-xs font-semibold">
                {ticker.price}
              </span>
              <span className={`
                flex items-center gap-0.5 text-xs font-medium
                ${ticker.change >= 0
                  ? 'text-[#00D68F]'
                  : 'text-[#FF4757]'
                }
              `}>
                {ticker.change >= 0
                  ? <TrendingUp size={10} />
                  : <TrendingDown size={10} />
                }
                {ticker.change >= 0 ? '+' : ''}
                {ticker.change}%
              </span>
              <span className="text-[#3A4055] text-xs">|</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Sağ Bilgi */}
      <div className="
        flex-shrink-0 flex items-center gap-3
        px-4 h-full
        border-l border-[#252B3B]
        bg-[#0D0F14]
        relative z-10
      ">
        <div className="flex items-center gap-1.5">
          <div className="
            w-1.5 h-1.5 rounded-full bg-[#00D68F]
            animate-pulse
          "/>
          <span className="text-[#5C6478] text-xs">
            1,247 aktif piyasa
          </span>
        </div>
      </div>
    </div>
  )
}
