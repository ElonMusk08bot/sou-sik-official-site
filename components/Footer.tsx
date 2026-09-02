'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const copy = {
  tw: {
    description: 'Mechanical Coffee Instruments. 以精密機械語言，重新定義手搖磨豆機的力學、手感與日常儀式。',
    site: '網站', contact: '聯絡', company: '富擎國際有限公司', phone: '電話：02-8227-5515 分機 20', hours: '客服時間：週一～週五 09:00–18:00',
    links: [['品牌故事','/about'],['P-1 產品頁','/product'],['玩家推薦與報導','/reviews'],['配件','/accessories'],['Blog','/blog'],['FAQ','/faq']],
  },
  en: {
    description: 'Mechanical Coffee Instruments. Precision hand grinders shaped by mechanics, tactile control, and the daily brewing ritual.',
    site: 'Explore', contact: 'Contact', company: 'Funtech International Co., Ltd.', phone: 'Phone: +886-2-8227-5515 ext. 20', hours: 'Hours: Mon–Fri 09:00–18:00 (UTC+8)',
    links: [['About','/en/about'],['P-1 Product','/en/product'],['Community & Press','/en/reviews'],['Accessories','/accessories'],['Blog','/en/blog'],['FAQ','/faq']],
  },
  jp: {
    description: 'Mechanical Coffee Instruments. 精密なメカニクス、手触り、日々の抽出体験から生まれたハンドグラインダー。',
    site: 'サイト', contact: 'お問い合わせ', company: '富擎國際有限公司', phone: '電話：+886-2-8227-5515 内線 20', hours: '受付：月〜金 09:00–18:00（UTC+8）',
    links: [['ブランド','/jp/about'],['P-1 製品','/jp/product'],['メディア掲載','/jp/reviews'],['アクセサリー','/accessories'],['Blog','/jp/blog'],['FAQ','/faq']],
  },
} as const

export default function Footer() {
  const path = usePathname()
  const locale = path.startsWith('/en') ? 'en' : path.startsWith('/jp') ? 'jp' : 'tw'
  const t = copy[locale]

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-4 text-xl font-semibold tracking-[.22em]">SOU SIK</div>
          <p className="max-w-md text-sm leading-7 text-white/60">{t.description}</p>
        </div>
        <div>
          <div className="mb-3 text-sm text-white/45">{t.site}</div>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            {t.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm text-white/45">{t.contact}</div>
          <p className="mb-2 text-sm font-semibold text-white/85">{t.company}</p>
          <p className="text-sm text-white/70">{t.phone}</p>
          <p className="mt-2 text-sm text-white/70">LINE：@SHINYGOODS</p>
          <p className="mt-2 text-sm text-white/70"><a className="hover:text-white" href="mailto:support@fnte.com.tw">support@fnte.com.tw</a></p>
          <p className="mt-2 text-xs text-white/45">{t.hours}</p>
        </div>
      </div>
      <div className="container-x flex flex-wrap items-center justify-between gap-2 pb-8 text-xs text-white/35"><span>© 2026 fnte. All rights reserved.</span><span>design by fnte</span></div>
    </footer>
  )
}
