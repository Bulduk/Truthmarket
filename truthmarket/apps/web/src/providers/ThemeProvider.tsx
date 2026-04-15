'use client'

import React, { createContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'binance'

export interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  isDark: boolean
  isLight: boolean
  isBinance: boolean
  systemTheme: 'light' | 'dark'
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  const applyTheme = (newTheme: Theme) => {
    if (typeof window === 'undefined') return

    document.body.classList.add('no-transition')
    
    document.documentElement.setAttribute('data-theme', newTheme)
    if (newTheme === 'dark' || newTheme === 'binance') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    localStorage.setItem('flux-theme', newTheme)
    setThemeState(newTheme)

    setTimeout(() => {
      document.body.classList.remove('no-transition')
    }, 50)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('flux-theme') as Theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    // Use setTimeout to avoid synchronous setState in effect
    setTimeout(() => {
      if (savedTheme) {
        applyTheme(savedTheme)
      } else {
        applyTheme(prefersDark ? 'dark' : 'light')
      }
      setSystemTheme(prefersDark ? 'dark' : 'light')
      setMounted(true)
    }, 0)
  }, [])

  const setTheme = (newTheme: Theme) => {
    applyTheme(newTheme)
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'binance' : 'light'
    applyTheme(nextTheme)
  }

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light',
        isBinance: theme === 'binance',
        systemTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
