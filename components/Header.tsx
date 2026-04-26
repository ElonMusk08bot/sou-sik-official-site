import Link from 'next/link'

const navEn = [['About','/en/about'],['P-1','/en/product'],['Technology','/en/technology'],['Journal','/en/blog'],['Buy','/en/where-to-buy']]
const navTw = [['品牌','/about'],['P-1','/product'],['技術','/technology'],['Blog','/blog'],['購買','/where-to-buy']]
const navJp = [['ブランド','/jp/about'],['P-1','/jp/product'],['技術','/jp/technology'],['Blog','/jp/blog'],['購入','/jp/where-to-buy']]

export default function Header() {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  const isEn = path.startsWith('/en')
  const isJp = path.startsWith('/jp')
  const nav = isEn ? navEn : isJp ? navJp : navTw
  const langLabel = isEn ? 'JP' : isJp ? 'TW' : 'EN'
  const langHref = isEn ? '/jp' : isJp ? '/' : '/en'
  const buyHref = isEn ? '/en/where-to-buy' : isJp ? '/jp/where-to-buy' : '/where-to-buy'
  const buyLabel = isEn ? 'Buy Now' : isJp ? '購入' : '立即購買'
  const logoHref = isEn ? '/en' : isJp ? '/jp' : '/'

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-carbon/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href={logoHref} className="text-lg font-semibold tracking-[.22em]">SOU SIK</Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {nav.map(([n, h]) => (
            <Link key={h} href={h} className="hover:text-white">{n}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={langHref} className="rounded-full border border-white/20 px-3 py-1 text-xs hover:bg-white hover:text-black">
            {langLabel}
          </Link>
          <Link href={buyHref} className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-black">
            {buyLabel}
          </Link>
        </div>
      </div>
    </header>
  )
}
