'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import CTA from '@/components/CTA'

const banners = [
  { src: '/images/hero-banner-1.jpg', alt: 'SOU SIK P-1 行星齒輪手搖磨豆機' },
  { src: '/images/hero-banner-2.jpg', alt: 'SOU SIK x LEBREW 合作款' },
  { src: '/images/hero-banner-3.jpg', alt: 'Smoothcrank Easy Replace Burrs' },
  { src: '/images/hero-banner-4.jpg', alt: 'SOU SIK P-1 研磨系統' },
  { src: '/images/hero-banner-5.jpg', alt: '精密齒輪結構' },
  { src: '/images/hero-banner-6.jpg', alt: '可替換刀盤系統' },
  { src: '/images/hero-banner-7.jpg', alt: '機械美學與咖啡的結合' },
  { src: '/images/hero-banner-8.jpg', alt: 'EASYREPLACE BURRS 01 & 02 刀盤系統' },
  { src: '/images/hero-banner-9.jpg', alt: '精密錐刀結構細節' },
]

// Desktop: first slide is video (20s), then new images
const desktopBanners = [
  { src: '/images/hero-banner-video.mp4', alt: 'SOU SIK P-1', isVideo: true },
  { src: '/images/hero-banner-2.jpg', alt: 'SOU SIK P-1 齒輪結構' },
  { src: '/images/hero-banner-3.jpg', alt: 'EASYREPLACE HYPER BURRS 001 & 002' },
  { src: '/images/hero-banner-4.jpg', alt: 'SOUL SIK x LEBREW 聯名刀盤' },
  { src: '/images/hero-banner-5.jpg', alt: 'SOU SIK x LEBREW 研磨系統' },
]

// Desktop: landscape banner fills full viewport width (16:9)
// Mobile: portrait banner (portrait user's images, 1080x1389)
function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const startTimer = () => {
    clearTimer()
    timerRef.current = setTimeout(() => {
      setCurrent(prev => (prev + 1) % desktopBanners.length)
    }, isVideoPlaying ? 20000 : 4000)
  }

  useEffect(() => {
    // When video slide becomes active
    if (desktopBanners[current]?.isVideo) {
      setIsVideoPlaying(true)
      startTimer() // 20s timer for video
    } else {
      setIsVideoPlaying(false)
      startTimer() // 4s timer for images
    }
    return () => clearTimer()
  }, [current])

  // Mobile uses a separate 4s interval
  const [mobileCurrent, setMobileCurrent] = useState(0)
  const mobileTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    mobileTimerRef.current = setInterval(() => {
      setMobileCurrent(prev => (prev + 1) % banners.length)
    }, 4000)
    return () => {
      if (mobileTimerRef.current) clearInterval(mobileTimerRef.current)
    }
  }, [])

  return (
    <>
      {/* ── Mobile: portrait banner (shown below md) ── */}
      <section className="relative flex items-center justify-center bg-black overflow-hidden md:hidden"
        style={{ height: 'calc(100vw * 1.286)', maxHeight: '85vh' }}>
        {banners.map((b, i) => (
          <img
            key={i}
            src={b.src}
            alt={b.alt}
            className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000"
            style={{ opacity: i === mobileCurrent ? 1 : 0, zIndex: i === mobileCurrent ? 1 : 0 }}
          />
        ))}
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setMobileCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === mobileCurrent ? 'bg-white w-5' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* ── Desktop: landscape banner (shown from md upward) ── */}
      <section className="relative hidden md:block bg-black overflow-hidden" style={{ height: '56.25vw', maxHeight: '75vh' }}>
        {desktopBanners.map((b, i) => (
          b.isVideo ? (
            <video
              key={i}
              src={b.src}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            />
          ) : (
            <img
              key={i}
              src={b.src}
              alt={b.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            />
          )
        ))}
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {desktopBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}

const features = [
  ['Planetary Gear', '行星齒輪減力系統，放大力矩，降低手腕負擔，讓淺焙豆研磨更順。'],
  ['53mm Burr System', '大尺寸錐刀結構，兼顧效率與粉徑穩定，適合手沖與義式探索。'],
  ['Low Retention', '低殘粉與易清潔設計，讓每一次沖煮都更乾淨、更可控。'],
]
const articles = [
  ['如何判斷磨豆機是不是適合淺焙？', '從扭力、刀盤、粉徑分布與手感四個角度理解。'],
  ['行星齒輪為什麼能省力？', '用簡單方式理解 P-1 的力學核心。'],
  ['手搖磨豆機日常保養指南', '拆卸、清潔與避免殘粉異味的基本方法。'],
]

export default function Home() {
  return (
    <main>
      <HeroBanner />

      {/* Mobile hero text */}
      <section className="section md:hidden">
        <div className="container-x">
          <p className="eyebrow mb-5">Mechanical Coffee Instruments</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance">
            Sou Sik<br />為手感而生的精密磨豆機。
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/68">
            P-1 將行星齒輪、可替換刀盤與低殘粉結構整合在一支手搖磨豆機裡。不是單純把豆子磨碎，而是讓研磨變成一種可感受的機械節奏。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/product">探索 P-1</Link>
            <Link className="btn-secondary" href="/technology">看技術解析</Link>
          </div>
        </div>
      </section>

      {/* Desktop hero text (below banner, shown from md upward) */}
      <section className="hidden md:block section">
        <div className="container-x">
          <p className="eyebrow mb-5">Mechanical Coffee Instruments</p>
          <h1 className="max-w-4xl text-4xl lg:text-6xl font-semibold tracking-tight text-balance">
            Sou Sik<br />為手感而生的精密磨豆機。
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/68">
            P-1 將行星齒輪、可替換刀盤與低殘粉結構整合在一支手搖磨豆機裡。不是單純把豆子磨碎，而是讓研磨變成一種可感受的機械節奏。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/product">探索 P-1</Link>
            <Link className="btn-secondary" href="/technology">看技術解析</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white/[.03]">
        <div className="container-x">
          <p className="eyebrow mb-4">Design Philosophy</p>
          <div className="grid gap-10 md:grid-cols-2">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              我們不只做磨豆機，我們做一種機械與咖啡之間的連結。
            </h2>
            <p className="text-lg leading-9 text-white/65">
              Sou Sik 的產品語言來自機械結構本身。齒輪、刀盤、握感、阻力與聲音，都不是被隱藏的零件，而是使用者每天會感受到的體驗。P-1 是我們對「手搖磨豆機應該更省力、更穩定、更有樂趣」的第一個回答。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-4">P-1 Highlights</p>
          <h2 className="mb-10 max-w-3xl text-3xl md:text-5xl font-semibold tracking-tight">
            為淺焙、日常與玩家手感設計。
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map(([t, d]) => (
              <div className="card" key={t}>
                <div className="mb-5 text-3xl text-brass">✦</div>
                <h3 className="mb-3 text-xl font-semibold">{t}</h3>
                <p className="leading-7 text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/[.03]">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div>
            <img src="/images/grinder-detail.jpg" alt="SOU SIK P-1 研磨結構細節" className="rounded-[2rem] w-full object-cover shadow-2xl" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-4">Precision</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              讓結構被看見，也讓手感被記住。
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/65">
              P-1 的行星齒輪結構讓研磨阻力變得更可控；440C 不鏽鋼刀盤與可替換刀盤系統，讓不同沖煮風格有更多可能。這不是一支只看規格的工具，而是一支你會想每天拿起來用的器物。
            </p>
            <Link href="/product" className="btn-primary mt-8 w-fit">進入產品頁</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-4">Journal</p>
          <h2 className="mb-10 text-3xl md:text-5xl font-semibold tracking-tight">
            咖啡知識與研磨筆記
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map(([t, d]) => (
              <Link href="/blog" className="card hover:bg-white/[.07]" key={t}>
                <h3 className="mb-3 text-xl font-semibold">{t}</h3>
                <p className="leading-7 text-white/60">{d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
