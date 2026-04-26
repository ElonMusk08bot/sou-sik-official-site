'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import CTA from '@/components/CTA'

const banners = [
  { src: '/images/hero-banner-1.jpg', alt: 'SOU SIK P-1 Planetary Gear Hand Coffee Grinder' },
  { src: '/images/hero-banner-2.jpg', alt: 'SOU SIK x LEBREW Collaboration' },
  { src: '/images/hero-banner-3.jpg', alt: 'Smoothcrank Easy Replace Burrs' },
  { src: '/images/hero-banner-4.jpg', alt: 'SOU SIK P-1 Grinding System' },
  { src: '/images/hero-banner-5.jpg', alt: 'Precision Gear Structure' },
  { src: '/images/hero-banner-6.jpg', alt: 'Easy Replace Burr System' },
  { src: '/images/hero-banner-7.jpg', alt: 'Mechanical Aesthetics Meets Coffee' },
  { src: '/images/hero-banner-8.jpg', alt: 'EASYREPLACE BURRS 01 &  Burr System' },
  { src: '/images/hero-banner-9.jpg', alt: 'Precision Conical Burr Details' },
]

const features = [
  ['Planetary Gear', 'The planetary gear system multiplies torque, reducing actual force needed. Even light-roast beans grind smoothly without straining your wrist.'],
  ['53mm Burr System', 'Large-format conical burrs balance efficiency and particle-size consistency, ideal for pour-over and espresso exploration.'],
  ['Low Retention', 'Minimal retention and easy-clean design keeps each brew pure and predictable, with straightforward maintenance.'],
]
const articles = [
  ['How to tell if a grinder suits light roasts', 'Understanding grinders from torque, burr geometry, particle distribution, and feel.'],
  ['Why planetary gears reduce effort', 'A simple explanation of P-1\'s mechanical core.'],
  ['Daily maintenance guide for hand grinders', 'Disassembly, cleaning, and preventing stale grounds odor.'],
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
      {/* Full-screen Banner */}
      <section className="relative flex items-center justify-center bg-black overflow-hidden" style={{ height: 'calc(100vw * 1.333 + 4rem)', paddingTop: '4rem' }}>
        {banners.map((b, i) => (
          <img
            key={i}
            src={b.src}
            alt={b.alt}
            className="absolute transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0, maxHeight: '100vh', maxWidth: '100vw', objectFit: 'contain' }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-5">Mechanical Coffee Instruments</p>
          <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight text-balance">
            Sou Sik<br />Precision hand grinders built for feel.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/68">
            The P-1 combines a planetary gear system, replaceable burrs, and low-retention construction in one hand grinder. It doesn&apos;t just grind beans—it makes grinding a felt mechanical rhythm.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/en/product">Explore P-1</Link>
            <Link className="btn-secondary" href="/en/technology">Technology</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white/[.03]">
        <div className="container-x">
          <p className="eyebrow mb-4">Design Philosophy</p>
          <div className="grid gap-10 md:grid-cols-2">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              We don&apos;t just make grinders—we make a connection between mechanics and coffee.
            </h2>
            <p className="text-lg leading-9 text-white/65">
              Sou Sik&apos;s product language comes from the mechanical structure itself. Gears, burrs, grip, resistance, and sound are not hidden parts—they are experiences felt daily. P-1 is our first answer to &quot;a hand grinder that should be more effortless, more stable, more fun.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-4">P-1 Highlights</p>
          <h2 className="mb-10 max-w-3xl text-3xl md:text-5xl font-semibold tracking-tight">
            Designed for light roasts, daily use, and the hands-on enthusiast.
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
              Let the structure speak, and the feel linger.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/65">
              The planetary gear system makes grinding resistance more controllable; 440C stainless steel burrs and a replaceable burr system open up more brewing possibilities. This isn&apos;t just a tool defined by specs—it&apos;s something you&apos;ll want to pick up every day.
            </p>
            <Link href="/en/product" className="btn-primary mt-8 w-fit">View Product</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-4">Journal</p>
          <h2 className="mb-10 text-3xl md:text-5xl font-semibold tracking-tight">
            Coffee knowledge and grinding notes
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map(([t, d]) => (
              <Link href="/en/blog" className="card hover:bg-white/[.07]" key={t}>
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
