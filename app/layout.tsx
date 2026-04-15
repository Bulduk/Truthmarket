import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Web3Provider } from '@/components/providers/Web3Provider';
import { Navbar } from '@/components/layout/Navbar';
import { TickerBar } from '@/components/layout/TickerBar';
import { MobileNav } from '@/components/layout/MobileNav';
import { Footer } from '@/components/layout/Footer';
import { ToastContainer } from '@/components/shared/Toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TruthMarket | Web3 Prediction Market',
  description: 'Social prediction market and content economy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0b0e11] text-[#eaecef] antialiased min-h-screen pt-[100px] flex flex-col`} suppressHydrationWarning>
        <Web3Provider>
          <TickerBar />
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <MobileNav />
          <ToastContainer />
        </Web3Provider>
      </body>
    </html>
  );
}
