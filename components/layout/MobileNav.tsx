'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BarChart2, PlusCircle, Wallet, User } from 'lucide-react';
import { clsx } from 'clsx';
import { CreateButton } from '@/components/create/CreateButton';

export function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Keşfet', href: '/', icon: Home },
    { name: 'Piyasalar', href: '/markets', icon: BarChart2 },
    { name: 'Oluştur', href: '/create', icon: PlusCircle },
    { name: 'Portföy', href: '/portfolio', icon: Wallet },
    { name: 'Profil', href: '/profile/me', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 pb-safe">
      <div className="flex items-center justify-around h-16 px-2 relative">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          
          if (item.name === 'Oluştur') {
            return (
              <div key="create" className="relative -top-4">
                <CreateButton />
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors relative",
                isActive ? "text-[#fcd535]" : "text-gray-500 hover:text-gray-300"
              )}
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#fcd535] rounded-b-full shadow-[0_0_10px_rgba(252,213,53,0.5)]" />
              )}
              <item.icon className="w-5 h-5 mt-1" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
