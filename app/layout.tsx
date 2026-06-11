import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://sou-sik.com'),
  title: { default: 'Sou Sik｜Mechanical Coffee Instruments', template: '%s｜Sou Sik' },
  description: 'Sou Sik。以精密機械思維打造精品咖啡磨豆工具，P-1 行星齒輪手搖磨豆機，為淺焙與日常沖煮帶來更穩定、更省力的研磨體驗。',
  openGraph: { title: 'Sou Sik｜Mechanical Coffee Instruments', description: '精密機械 × 精品咖啡。探索 Sou Sik P-1 行星齒輪手搖磨豆機。', url: 'https://sou-sik.com', siteName: 'Sou Sik', locale: 'zh_TW', type: 'website' },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-Hant"><body><Header />{children}<Footer /></body></html>
}
