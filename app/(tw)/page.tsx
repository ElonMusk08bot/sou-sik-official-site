import Link from 'next/link'
import CTA from '@/components/CTA'
import HeroCarousel from '@/components/HeroCarousel'

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
    <main className="pt-16">
      <HeroCarousel locale="tw" />

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-5">Mechanical Coffee Instruments</p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">Sou Sik<br />為手感而生的精密磨豆機。</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg md:leading-9">SOU SIK P-1 採用行星齒輪減力結構，搭載 53mm 可替換式 440C 不鏽鋼錐刀系統，可依沖煮需求更換 BURRS 01 或 BURRS 02 刀盤，適用於手沖咖啡、義式濃縮與淺焙咖啡豆研磨。</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link className="btn-primary" href="/product">探索 P-1</Link></div>
        </div>
      </section>

      <section className="section bg-white/[.03]">
        <div className="container-x">
          <p className="eyebrow mb-4">Design Philosophy</p>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">我們不只做磨豆機，我們做一種機械與咖啡之間的連結。</h2>
            <p className="text-base leading-8 text-white/70 md:text-lg md:leading-9">Sou Sik 的產品語言來自機械結構本身。齒輪、刀盤、握感、阻力與聲音，都不是被隱藏的零件，而是使用者每天會感受到的體驗。P-1 是我們對「手搖磨豆機應該更省力、更穩定、更有樂趣」的第一個回答。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-4">P-1 Highlights</p>
          <h2 className="mb-10 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">為淺焙、日常與玩家手感設計。</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map(([title, description]) => (
              <div className="card" key={title}>
                <div className="mb-5 text-3xl text-brass">✦</div>
                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="leading-7 text-white/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/[.03]">
        <div className="container-x grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <img src="https://www.shinygoods.com.tw/product/sou%20sik/p1/yellow/sou-sik-p1-dy-37.jpg" alt="SOU SIK P-1 精密機械細節" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
          <div>
            <p className="eyebrow mb-4">Precision</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">讓結構被看見，也讓手感被記住。</h2>
            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg md:leading-9">P-1 的行星齒輪結構讓研磨阻力變得更可控；440C 不鏽鋼刀盤與可替換刀盤系統，讓不同沖煮風格有更多可能。這不是一支只看規格的工具，而是一支你會想每天拿起來用的器物。</p>
            <Link href="/product" className="btn-primary mt-8 w-fit">進入產品頁</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-4">Journal</p>
          <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-5xl">咖啡知識與研磨筆記</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map(([title, description]) => (
              <Link href="/blog" className="card transition hover:bg-white/[.07]" key={title}>
                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="leading-7 text-white/65">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-white/10 bg-[radial-gradient(circle_at_80%_40%,rgba(199,161,90,.12),transparent_36%)]">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Community & Press</p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">看看玩家、媒體與不同市場如何談 SOU SIK。</h2>
          </div>
          <Link href="/reviews" className="btn-secondary shrink-0">查看外部報導 ↗</Link>
        </div>
      </section>

      <CTA />
    </main>
  )
}
