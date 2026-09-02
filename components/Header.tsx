'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navEn = [
  ['About', '/en/about'],
  ['P-1', '/en/product'],
  ['Reviews', '/en/reviews'],
  ['Accessories', '/accessories'],
  ['Blog', '/en/blog'],
  ['FAQ', '/faq'],
] as const

const navTw = [
  ['品牌', '/about'],
  ['P-1', '/product'],
  ['推薦', '/reviews'],
  ['配件', '/accessories'],
  ['Blog', '/blog'],
  ['FAQ', '/faq'],
] as const

const navJp = [
  ['ブランド', '/jp/about'],
  ['P-1', '/jp/product'],
  ['掲載記事', '/jp/reviews'],
  ['アクセサリー', '/accessories'],
  ['Blog', '/jp/blog'],
  ['FAQ', '/faq'],
] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const path = usePathname()
  const isEn = path.startsWith('/en')
  const isJp = path.startsWith('/jp')
  const nav = isEn ? navEn : isJp ? navJp : navTw
  const logoHref = isEn ? '/en' : isJp ? '/jp' : '/'
  const buyHref = 'https://www.shinygoods.tw/categories/sou-sik?utm_source=sou-sik-website&utm_medium=header&utm_campaign=p1-launch'
  const buyLabel = isEn ? 'Buy Now' : isJp ? '購入' : '立即購買'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-carbon/90 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href={logoHref} aria-label="SOU SIK home" className="flex min-h-11 shrink-0 items-center">
          <img src="/sou-sik-logo.png" alt="SOU SIK" width="160" height="47" className="h-7 w-auto md:h-8" />
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-white/70 xl:flex" aria-label="Primary navigation">
          {nav.map(([name, href]) => {
            const active = path === href || path.startsWith(`${href}/`)
            return (
              <Link key={href} href={href} className={`whitespace-nowrap py-2 transition hover:text-white ${active ? 'text-white' : ''}`}>
                {name}
              </Link>
            )
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <div className="flex rounded-full border border-white/15 p-1 text-[11px] text-white/60">
            <Link href="/" className="rounded-full px-2 py-1 hover:bg-white/10 hover:text-white">TW</Link>
            <Link href="/en" className="rounded-full px-2 py-1 hover:bg-white/10 hover:text-white">EN</Link>
            <Link href="/jp" className="rounded-full px-2 py-1 hover:bg-white/10 hover:text-white">JP</Link>
          </div>
          <a href={buyHref} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-cream">
            {buyLabel}
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-px w-5 bg-white transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-white transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-carbon/98 backdrop-blur-xl xl:hidden">
          <nav className="container-x flex max-h-[calc(100svh-4rem)] flex-col gap-1 overflow-y-auto py-4" aria-label="Mobile navigation">
            {nav.map(([name, href]) => (
              <Link key={href} href={href} className="rounded-xl px-3 py-3 text-sm text-white/75 hover:bg-white/[.06] hover:text-white" onClick={() => setMenuOpen(false)}>
                {name}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap items-center gap-2 border-t border-white/10 px-3 pt-4">
              <Link href="/" className="rounded-full border border-white/15 px-3 py-2 text-xs">TW</Link>
              <Link href="/en" className="rounded-full border border-white/15 px-3 py-2 text-xs">EN</Link>
              <Link href="/jp" className="rounded-full border border-white/15 px-3 py-2 text-xs">JP</Link>
              <a href={buyHref} target="_blank" rel="noopener noreferrer" className="ml-auto rounded-full bg-white px-4 py-2 text-xs font-semibold text-black">{buyLabel}</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
