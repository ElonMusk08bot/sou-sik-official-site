import type { Metadata } from 'next'
import PressPage from '@/components/PressPage'

export const metadata: Metadata = {
  title: 'Community & Press',
  description: 'Public editorial coverage, crowdfunding features, and hands-on videos featuring the SOU SIK P-1 hand grinder.',
  alternates: { canonical: '/en/reviews', languages: { 'zh-TW': '/reviews', en: '/en/reviews', ja: '/jp/reviews' } },
}

export default function Reviews() {
  return <PressPage locale="en" />
}
