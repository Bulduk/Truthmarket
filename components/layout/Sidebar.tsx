'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home, Compass, TrendingUp, Star,
  Bell, Settings, User, Wallet,
  Activity, Shield, List
} from 'lucide-react'

const MENU_ITEMS = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Explore', href: '/explore', icon: Compass },
  { name: 'Markets', href: '/markets', icon: TrendingUp },
  { name: 'Portfolio', href: '/portfolio', icon: Wallet },
  { name: 'Leaderboard', href: '/leaderboard', icon: Star },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="
      hidden md:flex flex-col
      w-64 fixed left-0 top-16 bottom-0
      bg-[#050505]/95 backdrop-blur-xl
      border-r border-[rgba(255,255,255,0.05)]
      z-30 pt-8 pb-4
    ">
      <div className="flex-1 px-4 space-y-1">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-200 group
                ${isActive 
                  ? 'bg-gradient-to-r from-[rgba(138,43,226,0.15)] to-transparent text-[#ffffff] border-l-2 border-[#8a2be2]' 
                  : 'text-gray-400 hover:text-[#ffffff] hover:bg-[rgba(255,255,255,0.02)]'
                }
              `}
            >
              <item.icon 
                size={20} 
                className={`
                  transition-colors duration-200
                  ${isActive ? 'text-[#8a2be2]' : 'text-gray-500 group-hover:text-[#ffffff]'}
                `} 
              />
              <span className={`font-medium ${isActive ? 'text-white' : ''}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
      
      <div className="px-4 mt-auto">
        <div className="
          p-4 rounded-xl
          bg-gradient-to-br from-[rgba(30,58,138,0.2)] to-[rgba(138,43,226,0.1)]
          border border-[rgba(138,43,226,0.2)]
          flex flex-col gap-2
        ">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-[#8a2be2]" />
            <span className="text-sm font-bold text-white">Network Status</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>Polygon Mainnet</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Online
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
