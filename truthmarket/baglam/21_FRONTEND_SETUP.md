## FAZ 5: Frontend Kurulumu

### Adım 5.1 - Next.js App Router ve Tasarım Sistemi
- `apps/web` klasörü oluşturuldu.
- `package.json`, `tsconfig.json`, `next.config.js`, `postcss.config.js` ve `tailwind.config.ts` dosyaları ile Next.js 14 altyapısı kuruldu.
- Sistem talimatı Ek v1.0 ve Ek v5.0'a göre özel CSS Variable tabanlı Tema Sistemi oluşturuldu:
  - `light.css` (Default)
  - `dark.css`
  - `binance.css`
  - `transitions.css`
  - `globals.css`
- `ThemeProvider.tsx` ile `next-themes` kullanılmadan, localStorage ve SSR hydration uyumlu özel tema sağlayıcısı yazıldı.
- `useTheme.ts` hook'u oluşturuldu.
- `ThemeSelector.tsx` bileşeni oluşturuldu (Light, Dark, BNB seçenekleri).
- `layout.tsx` ve `page.tsx` dosyaları oluşturuldu ve FluxMarket'in "Every Signal Has a Price" sloganı ve 4 boyutlu pozisyon sistemi (Amplify, Dampen, Spike, Fade) ana sayfaya eklendi.

**Kullanılan Teknolojiler:**
- Next.js 14 (App Router)
- Tailwind CSS
- Lucide React (İkonlar)
- Custom CSS Variables (Theme System)
