import Link from 'next/link'
const navEn=[['About','/en/about'],['P-1','/en/product'],['Technology','/en/technology'],['Journal','/en/blog'],['Buy','/en/where-to-buy']]
const navTw=[['品牌','/about'],['P-1','/product'],['技術','/technology'],['Blog','/blog'],['購買','/where-to-buy']]
export default function Header(){
  const isEn = typeof window !== 'undefined' && window.location.pathname.startsWith('/en')
  const nav = isEn ? navEn : navTw
  const otherLang = isEn ? '繁中' : 'EN'
  const otherLangHref = isEn ? '/' : '/en'
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-carbon/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href={isEn ? '/en' : '/'} className="text-lg font-semibold tracking-[.22em]">SOU SIK</Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {nav.map(([n,h])=>(
            <Link key={h} href={h} className="hover:text-white">{n}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={otherLangHref} className="rounded-full border border-white/20 px-3 py-1 text-xs hover:bg-white hover:text-black">
            {otherLang}
          </Link>
          <Link href={isEn ? '/en/where-to-buy' : '/where-to-buy'} className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-black">
            {isEn ? 'Buy Now' : '立即購買'}
          </Link>
        </div>
      </div>
    </header>
  )
}
