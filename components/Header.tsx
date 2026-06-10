"use client"
import Link from 'next/link'
import { useState } from 'react'

const navEn = [['About','/en/about'],['P-1','/en/product'],['Technology','/en/technology'],['Journal','/en/blog'],['Buy','/en/where-to-buy']]
const navTw = [['品牌','/about'],['P-1','/product'],['技術','/technology'],['Blog','/blog'],['購買','/where-to-buy']]
const navJp = [['ブランド','/jp/about'],['P-1','/jp/product'],['技術','/jp/technology'],['Blog','/jp/blog'],['購入','/jp/where-to-buy']]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  const isEn = path.startsWith('/en')
  const isJp = path.startsWith('/jp')
  const nav = isEn ? navEn : isJp ? navJp : navTw
  const logoHref = isEn ? '/en' : isJp ? '/jp' : '/'
  const buyHref = 'https://www.matrix.com.tw/products/sou-sik-p-1%E6%89%8B%E6%90%96%E5%92%96%E5%95%A1%E7%A3%A8%E8%B1%86%E6%A9%9F?utm_source=sou-sik-website&utm_medium=header&utm_campaign=p1-launch'
  const buyLabel = isEn ? 'Buy Now' : isJp ? '購入' : '立即購買'

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-carbon/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href={logoHref} className="text-lg font-semibold tracking-[.22em]">SOU SIK</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {nav.map(([n, h]) => (
            <Link key={h} href={h} className="hover:text-white">{n}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop language + buy */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/" className="rounded-full border border-white/20 px-3 py-1 text-xs hover:bg-white hover:text-black">TW</Link>
            <Link href={buyHref} className="rounded-full border border-white/20 px-4 py-2 text-xs hover:bg-white hover:text-black">
              {buyLabel}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden flex-col justify-center items-center w-9 h-9 gap-1.5 rounded border border-white/20"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-carbon/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map(([n, h]) => (
              <Link
                key={h}
                href={h}
                className="text-sm text-white/70 hover:text-white py-1"
                onClick={() => setMenuOpen(false)}
              >
                {n}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-white/10">
              <Link href="/" className="rounded-full border border-white/20 px-3 py-1 text-xs hover:bg-white hover:text-black">TW</Link>
              <Link href={buyHref} className="rounded-full bg-white text-black px-4 py-1 text-xs font-semibold">
                {buyLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
