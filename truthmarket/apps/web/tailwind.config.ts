import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]', '[data-theme="binance"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          void:    'var(--bg-void)',
          base:    'var(--bg-base)',
          surface: 'var(--bg-surface)',
          card:    'var(--bg-card)',
          overlay: 'var(--bg-overlay)',
          border:  'var(--bg-border)',
          hover:   'var(--bg-hover)',
          input:   'var(--bg-input)',
        },
        text: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted:     'var(--text-muted)',
          disabled:  'var(--text-disabled)',
          gold:      'var(--text-gold)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          light:   'var(--gold-light)',
          dark:    'var(--gold-dark)',
        },
        yes: {
          DEFAULT: 'var(--yes)',
          light:   'var(--yes-light)',
          dark:    'var(--yes-dark)',
          bg:      'var(--yes-bg)',
          border:  'var(--yes-border)',
        },
        no: {
          DEFAULT: 'var(--no)',
          light:   'var(--no-light)',
          dark:    'var(--no-dark)',
          bg:      'var(--no-bg)',
          border:  'var(--no-border)',
        },
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        modal: 'var(--shadow-modal)',
        gold: 'var(--shadow-gold)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
