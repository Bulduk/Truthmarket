import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t border-bg-border bg-bg-base py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gold flex items-center justify-center text-bg-void font-bold text-xl">
                F
              </div>
              <span className="font-bold text-xl tracking-tight">
                FluxMarket
              </span>
            </Link>
            <p className="text-sm text-text-secondary mb-4">
              Every Signal Has a Price. The first Web3 social financial ecosystem.
            </p>
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} FluxMarket. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Markets</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/markets?category=reach" className="hover:text-gold transition-colors">Reach (Video)</Link></li>
              <li><Link href="/markets?category=truth" className="hover:text-gold transition-colors">Truth (Article)</Link></li>
              <li><Link href="/markets?category=vibe" className="hover:text-gold transition-colors">Vibe (Audio)</Link></li>
              <li><Link href="/markets?category=verify" className="hover:text-gold transition-colors">Verify (News)</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/docs" className="hover:text-gold transition-colors">Documentation</Link></li>
              <li><Link href="/whitepaper" className="hover:text-gold transition-colors">Whitepaper</Link></li>
              <li><Link href="/api" className="hover:text-gold transition-colors">API</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Twitter / X</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Discord</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">GitHub</a></li>
              <li><a href="https://blog.fluxmarket.io" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
