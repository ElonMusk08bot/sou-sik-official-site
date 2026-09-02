import { pressItems, type PressItem } from '@/lib/press'

type Locale = 'tw' | 'en' | 'jp'

const copy = {
  tw: {
    eyebrow: 'Community & Press',
    title: '玩家觀點與媒體報導',
    intro: '從設計媒體、群募專題到不同語言的實機影片，這裡整理外部世界如何觀看 SOU SIK。每張卡片都直接連回原始來源。',
    note: '編輯說明',
    disclosure: '本頁僅整理公開的外部內容。觀點與規格描述屬於原作者；部分頁面可能包含聯盟、銷售、購買或群募連結。收錄不代表本站驗證或背書。',
    open: '閱讀原文',
    commercial: '含群募／商業連結',
    kinds: { media: '媒體／專題', video: '影音內容', retail: '通路解析' },
  },
  en: {
    eyebrow: 'Community & Press',
    title: 'Outside perspectives on SOU SIK',
    intro: 'Editorial features, crowdfunding coverage, and hands-on videos from different markets—linked directly to the original publishers.',
    note: 'Editorial note',
    disclosure: 'This page curates publicly available external content. Opinions and product descriptions belong to their authors. Some pages may include affiliate, sales, ordering, or crowdfunding links. Inclusion is not verification or endorsement by SOU SIK.',
    open: 'Open original',
    commercial: 'Crowdfunding / commercial links',
    kinds: { media: 'Editorial', video: 'Video', retail: 'Retail feature' },
  },
  jp: {
    eyebrow: 'Community & Press',
    title: 'プレイヤーとメディアから見た SOU SIK',
    intro: 'デザインメディア、クラウドファンディング特集、各国の実機動画を、元の公開ページへ直接リンクして紹介します。',
    note: '編集方針',
    disclosure: '本ページは公開されている外部コンテンツを整理したものです。意見と製品説明は各著者に帰属します。一部のページにはアフィリエイト、販売、購入、クラウドファンディングへのリンクが含まれます。掲載は SOU SIK による検証や推奨を意味しません。',
    open: '元の記事を見る',
    commercial: 'クラウドファンディング／商用リンク',
    kinds: { media: 'メディア／特集', video: '動画', retail: '販売店記事' },
  },
} as const

export default function PressPage({ locale }: { locale: Locale }) {
  const t = copy[locale]

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(199,161,90,.16),transparent_36%)]" />
        <div className="container-x relative">
          <p className="eyebrow mb-5">{t.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">{t.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg md:leading-9">{t.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pressItems.map((item: PressItem) => (
              <a
                key={`${item.source}-${item.url}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group flex min-h-[320px] flex-col rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[.075] to-white/[.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-brass/50 hover:bg-white/[.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
              >
                <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[.16em]">
                  <span className="rounded-full border border-brass/35 bg-brass/10 px-3 py-1.5 text-brass">{t.kinds[item.kind]}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-white/50">{item.language}</span>
                  {item.commercialLink && <span className="rounded-full border border-amber-300/20 bg-amber-300/[.06] px-3 py-1.5 text-amber-200/70">{t.commercial}</span>}
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[.2em] text-white/45">{item.source}</p>
                <h2 className="mt-3 text-xl font-semibold leading-snug text-white md:text-2xl">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/65">{item.summary[locale]}</p>
                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6 text-sm font-semibold text-white">
                  <span>{t.open}</span>
                  <span aria-hidden="true" className="text-brass transition-transform group-hover:translate-x-1">↗</span>
                </div>
              </a>
            ))}
          </div>

          <aside className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-5 md:p-6">
            <p className="text-sm font-semibold text-white">{t.note}</p>
            <p className="mt-2 max-w-4xl text-sm leading-7 text-white/55">{t.disclosure}</p>
          </aside>
        </div>
      </section>
    </main>
  )
}
