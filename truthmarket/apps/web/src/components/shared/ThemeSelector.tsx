'use client'

import React from 'react'
import { useTheme } from '../../hooks/useTheme'
import { Sun, Moon, Zap } from 'lucide-react'

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center p-1 bg-bg-surface border border-bg-border rounded-lg">
      <button
        onClick={() => setTheme('light')}
        className={`flex items-center justify-center w-8 h-8 sm:w-auto sm:px-3 rounded-md transition-all ${
          theme === 'light' 
            ? 'bg-bg-card border border-gold text-gold shadow-sm' 
            : 'text-text-muted hover:text-text-primary hover:bg-bg-hover'
        }`}
        title="Light Theme"
      >
        <Sun size={16} className="sm:mr-2" />
        <span className="hidden sm:inline text-sm font-medium">Light</span>
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={`flex items-center justify-center w-8 h-8 sm:w-auto sm:px-3 rounded-md transition-all ${
          theme === 'dark' 
            ? 'bg-bg-card border border-gold text-gold shadow-sm' 
            : 'text-text-muted hover:text-text-primary hover:bg-bg-hover'
        }`}
        title="Dark Theme"
      >
        <Moon size={16} className="sm:mr-2" />
        <span className="hidden sm:inline text-sm font-medium">Dark</span>
      </button>
      
      <button
        onClick={() => setTheme('binance')}
        className={`flex items-center justify-center w-8 h-8 sm:w-auto sm:px-3 rounded-md transition-all ${
          theme === 'binance' 
            ? 'bg-bg-card border border-gold text-gold shadow-sm' 
            : 'text-text-muted hover:text-text-primary hover:bg-bg-hover'
        }`}
        title="Binance Theme"
      >
        <Zap size={16} className="sm:mr-2" />
        <span className="hidden sm:inline text-sm font-medium">BNB</span>
      </button>
    </div>
  )
}
