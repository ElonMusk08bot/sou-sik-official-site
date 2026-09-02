import type { Metadata } from 'next'
import PressPage from '@/components/PressPage'

export const metadata: Metadata = {
  title: '玩家推薦與媒體報導',
  description: '整理外部媒體、群募專題與玩家影音如何介紹 SOU SIK P-1 手搖磨豆機。',
  alternates: { canonical: '/reviews', languages: { 'zh-TW': '/reviews', en: '/en/reviews', ja: '/jp/reviews' } },
}

export default function Reviews() {
  return <PressPage locale="tw" />
}
