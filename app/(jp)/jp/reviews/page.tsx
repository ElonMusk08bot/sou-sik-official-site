import type { Metadata } from 'next'
import PressPage from '@/components/PressPage'

export const metadata: Metadata = {
  title: 'メディア掲載・プレイヤー動画',
  description: 'SOU SIK P-1 を紹介する外部メディア記事、クラウドファンディング特集、実機動画をまとめました。',
  alternates: { canonical: '/jp/reviews', languages: { 'zh-TW': '/reviews', en: '/en/reviews', ja: '/jp/reviews' } },
}

export default function Reviews() {
  return <PressPage locale="jp" />
}
