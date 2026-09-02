import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://sousikgrinder.com'),
  title: { default: 'Sou Sik｜Mechanical Coffee Instruments', template: '%s｜Sou Sik' },
  description: 'SOU SIK は、精密なメカニクス、手触り、日々の抽出体験から生まれたハンドグラインダーを開発しています。',
  openGraph: { title: 'Sou Sik｜Mechanical Coffee Instruments', description: '精密メカニクス × スペシャルティコーヒー。SOU SIK P-1 遊星歯車ハンドグラインダー。', url: 'https://sousikgrinder.com/jp', siteName: 'Sou Sik', locale: 'ja_JP', type: 'website' },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }, { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' }, { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
}

export default function JapaneseLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body><Header />{children}<Footer /></body></html>
}
