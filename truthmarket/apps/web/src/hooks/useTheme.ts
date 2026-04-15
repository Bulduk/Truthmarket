import { useContext } from 'react'
import { ThemeContext, ThemeContextType } from '../providers/ThemeProvider'

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function useIsDark(): boolean {
  const { isDark, isBinance } = useTheme()
  return isDark || isBinance
}

export function useThemeColor(key: string): string {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(`--${key}`).trim()
}
