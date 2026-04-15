import Link from 'next/link'
import { ThemeSelector } from '../shared/ThemeSelector'
import { Wallet, Search, Bell, Menu } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-bg-border bg-bg-base/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gold flex items-center justify-center text-bg-void font-bold text-xl">
                F
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">
                FluxMarket
              </span>
            </Link>
            
            <div className="hidden md:flex ml-10 space-x-8">
              <Link href="/markets" className="text-text-secondary hover:text-text-primary transition-colors font-medium">
                Markets
              </Link>
              <Link href="/feed" className="text-text-secondary hover:text-text-primary transition-colors font-medium">
                Feed
              </Link>
              <Link href="/portfolio" className="text-text-secondary hover:text-text-primary transition-colors font-medium">
                Portfolio
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input 
                type="text" 
                placeholder="Search signals..." 
                className="bg-bg-surface border border-bg-border rounded-full py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold w-48 lg:w-64 transition-all"
              />
            </div>
            
            <button className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-bg-hover">
              <Bell className="w-5 h-5" />
            </button>

            <ThemeSelector />

            <button className="hidden sm:flex items-center gap-2 bg-bg-surface hover:bg-bg-hover border border-bg-border text-text-primary px-4 py-2 rounded-lg font-medium transition-colors">
              <Wallet className="w-4 h-4" />
              <span>Connect</span>
            </button>

            <button className="md:hidden p-2 text-text-secondary hover:text-text-primary">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
