import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Web3Provider } from '@/components/providers/Web3Provider';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { TickerBar } from '@/components/layout/TickerBar';
import { MobileNav } from '@/components/layout/MobileNav';
import { Footer } from '@/components/layout/Footer';
import { ToastContainer } from '@/components/shared/Toast';
import { CreateModal } from '@/components/create/CreateModal';
import { TradeModal } from '@/components/trade/TradeModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PulseMarket | Social Prediction Market',
  description: 'Every Signal Has a Price. Feel the market.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-[#ffffff] antialiased min-h-screen pt-[100px] flex flex-col`} suppressHydrationWarning>
        <Web3Provider>
          <TickerBar />
          <Navbar />
          <Sidebar />
          <div className="flex-1 md:pl-64 w-full">
            <main className="w-full max-w-7xl mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
          <MobileNav />
          <CreateModal />
          <TradeModal />
          <ToastContainer />
        </Web3Provider>
      </body>
    </html>
  );
}
