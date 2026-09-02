'use client'

import { useEffect, useState } from 'react'

type Locale = 'tw' | 'en' | 'jp'

type Slide = {
  src: string
  alt: Record<Locale, string>
}

const mobileSlides: Slide[] = [
  { src: '/images/hero-banner-1.jpg', alt: { tw: 'SOU SIK P-1 行星齒輪手搖磨豆機', en: 'SOU SIK P-1 planetary gear hand grinder', jp: 'SOU SIK P-1 遊星歯車ハンドグラインダー' } },
  { src: '/images/hero-banner-6.jpg', alt: { tw: 'SOU SIK P-1 可替換刀盤系統', en: 'SOU SIK P-1 replaceable burr system', jp: 'SOU SIK P-1 交換式バーシステム' } },
  { src: '/images/hero-banner-7.jpg', alt: { tw: 'SOU SIK 機械美學與咖啡', en: 'SOU SIK mechanical design meets coffee', jp: 'SOU SIK メカニカルデザインとコーヒー' } },
  { src: '/images/hero-banner-8.jpg', alt: { tw: 'EASYREPLACE BURRS 01 與 02 刀盤', en: 'EASYREPLACE BURRS 01 and 02', jp: 'EASYREPLACE BURRS 01・02' } },
  { src: '/images/hero-banner-9.jpg', alt: { tw: 'SOU SIK 精密錐刀細節', en: 'SOU SIK precision conical burr detail', jp: 'SOU SIK 精密コーンバーのディテール' } },
]

const desktopSlides: Slide[] = [
  { src: '/images/hero-banner-2.jpg', alt: { tw: 'SOU SIK P-1 齒輪結構', en: 'SOU SIK P-1 gear structure', jp: 'SOU SIK P-1 歯車構造' } },
  { src: '/images/hero-banner-3.jpg', alt: { tw: 'EASYREPLACE HYPER BURRS 001 與 002', en: 'EASYREPLACE HYPER BURRS 001 and 002', jp: 'EASYREPLACE HYPER BURRS 001・002' } },
  { src: '/images/hero-banner-4.jpg', alt: { tw: 'SOU SIK 與 LEBREW 聯名刀盤', en: 'SOU SIK and LEBREW collaborative burrs', jp: 'SOU SIK × LEBREW コラボレーションバー' } },
  { src: '/images/hero-banner-5.jpg', alt: { tw: 'SOU SIK 與 LEBREW 研磨系統', en: 'SOU SIK and LEBREW grinding system', jp: 'SOU SIK × LEBREW グラインディングシステム' } },
]

const controlCopy = {
  tw: { pause: '暫停輪播', play: '播放輪播', slide: '前往投影片' },
  en: { pause: 'Pause carousel', play: 'Play carousel', slide: 'Go to slide' },
  jp: { pause: 'スライドを一時停止', play: 'スライドを再生', slide: 'スライドへ移動' },
} as const

function Controls({ count, current, paused, locale, onSelect, onToggle }: {
  count: number
  current: number
  paused: boolean
  locale: Locale
  onSelect: (index: number) => void
  onToggle: () => void
}) {
  const t = controlCopy[locale]
  return (
    <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center rounded-full border border-white/10 bg-black/65 px-2 py-1 shadow-lg backdrop-blur-md md:bottom-7">
      {Array.from({ length: count }, (_, index) => (
        <button key={index} type="button" onClick={() => onSelect(index)} className="group flex h-8 w-8 items-center justify-center" aria-label={`${t.slide} ${index + 1}`} aria-current={index === current ? 'true' : undefined}>
          <span className={`block h-1.5 rounded-full transition-all ${index === current ? 'w-5 bg-white' : 'w-1.5 bg-white/55 group-hover:bg-white/80'}`} />
        </button>
      ))}
      <span className="mx-1 h-4 w-px bg-white/20" aria-hidden="true" />
      <button type="button" onClick={onToggle} className="flex h-8 w-8 items-center justify-center rounded-full text-xs text-white/75 hover:bg-white/10 hover:text-white" aria-label={paused ? t.play : t.pause}>
        <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
      </button>
    </div>
  )
}

function SlideImage({ slide, index, current, locale, className }: { slide: Slide; index: number; current: number; locale: Locale; className: string }) {
  const active = index === current
  return (
    <img
      src={slide.src}
      alt={active ? slide.alt[locale] : ''}
      aria-hidden={!active}
      className={className}
      style={{ opacity: active ? 1 : 0, visibility: active ? 'visible' : 'hidden', zIndex: active ? 1 : 0 }}
    />
  )
}

export default function HeroCarousel({ locale = 'tw' }: { locale?: Locale }) {
  const [desktopCurrent, setDesktopCurrent] = useState(0)
  const [mobileCurrent, setMobileCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPreference = () => setPaused(media.matches)
    syncPreference()
    media.addEventListener('change', syncPreference)
    return () => media.removeEventListener('change', syncPreference)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => setDesktopCurrent((current) => (current + 1) % desktopSlides.length), 4500)
    return () => clearTimeout(timer)
  }, [desktopCurrent, paused])

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => setMobileCurrent((current) => (current + 1) % mobileSlides.length), 4500)
    return () => clearTimeout(timer)
  }, [mobileCurrent, paused])

  return (
    <>
      <section className="relative flex h-[min(130vw,calc(100svh-4rem))] min-h-[500px] items-center justify-center overflow-hidden bg-black lg:hidden" aria-label="SOU SIK highlights" aria-roledescription="carousel">
        {mobileSlides.map((slide, index) => <SlideImage key={slide.src} slide={slide} index={index} current={mobileCurrent} locale={locale} className="absolute inset-y-0 left-1/2 h-full w-[94%] -translate-x-1/2 object-contain transition-opacity duration-700" />)}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-transparent to-black/15" />
        <Controls count={mobileSlides.length} current={mobileCurrent} paused={paused} locale={locale} onSelect={setMobileCurrent} onToggle={() => setPaused((value) => !value)} />
      </section>

      <section className="relative hidden h-[min(56.25vw,75vh)] min-h-[540px] overflow-hidden bg-black lg:block" aria-label="SOU SIK highlights" aria-roledescription="carousel">
        {desktopSlides.map((slide, index) => <SlideImage key={slide.src} slide={slide} index={index} current={desktopCurrent} locale={locale} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700" />)}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        <Controls count={desktopSlides.length} current={desktopCurrent} paused={paused} locale={locale} onSelect={setDesktopCurrent} onToggle={() => setPaused((value) => !value)} />
      </section>
    </>
  )
}
