import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://sousikgrinder.com'),
  title: { default: 'Sou Sik | Mechanical Coffee Instruments', template: '%s | Sou Sik' },
  description: 'SOU SIK creates precision hand grinders shaped by mechanics, tactile control, and the daily brewing ritual.',
  openGraph: { title: 'Sou Sik | Mechanical Coffee Instruments', description: 'Precision mechanics × specialty coffee. Explore the SOU SIK P-1 planetary gear hand grinder.', url: 'https://sousikgrinder.com/en', siteName: 'Sou Sik', locale: 'en_US', type: 'website' },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }, { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' }, { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
}

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>
}
