'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import CTA from '@/components/CTA'

const banners = [
  { src: '/images/hero-banner-1.jpg', alt: 'SOU SIK P-1 惑星歯車手動グラインダー' },
  { src: '/images/hero-banner-2.jpg', alt: 'SOU SIK x LEBREW コラボレーション' },
  { src: '/images/hero-banner-3.jpg', alt: 'Smoothcrank Easy Replace Burrs' },
  { src: '/images/hero-banner-4.jpg', alt: 'SOU SIK P-1 研磨システム' },
  { src: '/images/hero-banner-5.jpg', alt: '精密歯車構造' },
  { src: '/images/hero-banner-6.jpg', alt: '交換式バーシステム' },
  { src: '/images/hero-banner-7.jpg', alt: 'メカニカル美学とコーヒー' },
  { src: '/images/hero-banner-8.jpg', alt: 'EASYREPLACE BURRS 01 & 02 バーシステム' },
  { src: '/images/hero-banner-9.jpg', alt: '精密コーンバー詳細' },
]

const features = [
  ['Planetengetriebe', '惑星歯車システムでトルクを増幅し疲れにくい研磨を実現。浅煎りでも軽やかに grind できます。'],
  ['53mm Burr System', '大径コーンバーで効率と粉ムラを両立。pour-over からエスプレッソまで対応。'],
  ['Low Retention', '粉残りを 최소화し毎回の美味しい抽出をサポート。簡単なお手入れで常に清潔。'],
]
const articles = [
  ['浅煎りに最適なグラインダーの見分け方', 'トルク、バー几何、粉の分布、操作感を軸にグラインダーを評価する方法。'],
  ['惑星歯車が疲れを軽減する理由', 'P-1のメカニカルコアである惑星歯車のシンプルな解説。'],
  ['手動グラインダーの日常メンテナンス', '分解清掃と古い粉の匂い対策。基本を押さえれば簡単。'],
]

export default function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      <section className="relative flex items-center justify-center bg-black overflow-hidden" style={{ height: 'calc(100vw * 1.333 + 4rem)', paddingTop: '4rem' }}>
        {banners.map((b, i) => (
          <img key={i} src={b.src} alt={b.alt} className="absolute transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0, maxHeight: '100vh', maxWidth: '100vw', objectFit: 'contain' }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-5">Mechanical Coffee Instruments</p>
          <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight text-balance">
            Sou Sik<br />手感のために設計された精密グラインダー。
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/68">
            P-1は惑星歯車システム、交換式バー、低粉残りを一台に統合した手動グラインダー。豆を挽くだけでなく、研磨を確かなメカニック・リズムに変えます。
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/jp/product">P-1を見る</Link>
            <Link className="btn-secondary" href="/jp/technology">技術解説</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white/[.03]">
        <div className="container-x">
          <p className="eyebrow mb-4">Design Philosophy</p>
          <div className="grid gap-10 md:grid-cols-2">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              私たちは何もグラインダーを作っていません、メカニクスとコーヒーの間のつながりを創っています。
            </h2>
            <p className="text-lg leading-9 text-white/65">
              Sou Sikの製品は本身のメカニカル構造から生まれます。歯車、バー、握り心地、抵抗感、音が隠れた部品ではなく。毎日感じる体験そのものです。P-1は「より軽く、より安定し、より面白いグラインダー」であるべきだという最初の回答です。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-4">P-1 Highlights</p>
          <h2 className="mb-10 max-w-3xl text-3xl md:text-5xl font-semibold tracking-tight">
            浅煎り、日常使い、そしてハンドグラウンド愛好家のために設計。
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
            <img src="/images/grinder-detail.jpg" alt="SOU SIK P-1 Precision Detail" className="rounded-[2rem] w-full object-cover shadow-2xl" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-4">Precision</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              構造に語らせ、感触を残止める。
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/65">
              惑星歯車システムが研磨抵抗をよりコントロールしやすくし、440Cステンレススチールバーと交換式バー設計が開く多様な抽出可能性。この道具はスペックだけでなく、毎日使いたくなるもののために存在します。
            </p>
            <Link href="/jp/product" className="btn-primary mt-8 w-fit">製品を見る</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-4">Journal</p>
          <h2 className="mb-10 text-3xl md:text-5xl font-semibold tracking-tight">
            コーヒー知識とグラインディングノート
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map(([t, d]) => (
              <Link href="/jp/blog" className="card hover:bg-white/[.07]" key={t}>
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
