import Link from 'next/link'
import CTA from '@/components/CTA'
import HeroCarousel from '@/components/HeroCarousel'

const features = [
  ['Planetary Gear', '遊星歯車がトルクを増幅し、密度の高い浅煎り豆でも手首への負担を抑えながら滑らかに挽けます。'],
  ['53mm Burr System', '大径コーンバーが研磨効率と粒度の安定性を両立し、ハンドドリップからエスプレッソまで対応します。'],
  ['Low Retention', '粉残りを抑えた清掃しやすい構造で、毎回の抽出をよりクリーンで再現しやすくします。'],
]

const articles = [
  ['浅煎りに合うグラインダーの見分け方', 'トルク、バー形状、粒度分布、操作感から選ぶための基本。'],
  ['遊星歯車が力を軽減する理由', 'P-1 のメカニカルコアを分かりやすく解説します。'],
  ['ハンドグラインダーの日常メンテナンス', '分解、清掃、古い粉のにおいを防ぐ基本手順。'],
]

export default function Home() {
  return (
    <main className="pt-16">
      <HeroCarousel locale="jp" />

      <section className="section"><div className="container-x">
        <p className="eyebrow mb-5">Mechanical Coffee Instruments</p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">Sou Sik<br />手触りのために生まれた精密グラインダー。</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg md:leading-9">P-1 は遊星歯車、交換式バー、低粉残り構造を一台にまとめたハンドグラインダーです。豆を挽くだけでなく、研磨そのものを心地よいメカニカルなリズムへ変えます。</p>
        <div className="mt-9"><Link className="btn-primary" href="/jp/product">P-1 を見る</Link></div>
      </div></section>

      <section className="section bg-white/[.03]"><div className="container-x">
        <p className="eyebrow mb-4">Design Philosophy</p>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">私たちはグラインダーだけでなく、メカニクスとコーヒーをつなぐ体験をつくります。</h2>
          <p className="text-base leading-8 text-white/70 md:text-lg md:leading-9">歯車、バー、握り心地、抵抗、音は、隠すべき部品ではありません。毎日手に取るたびに感じる体験そのものです。P-1 は「もっと軽く、安定し、楽しいハンドグラインダー」への最初の答えです。</p>
        </div>
      </div></section>

      <section className="section"><div className="container-x">
        <p className="eyebrow mb-4">P-1 Highlights</p><h2 className="mb-10 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">浅煎り、日常の抽出、そして手触りを楽しむ人のために。</h2>
        <div className="grid gap-5 md:grid-cols-3">{features.map(([title, description]) => <div className="card" key={title}><div className="mb-5 text-3xl text-brass">✦</div><h3 className="mb-3 text-xl font-semibold">{title}</h3><p className="leading-7 text-white/65">{description}</p></div>)}</div>
      </div></section>

      <section className="section bg-white/[.03]"><div className="container-x grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <img src="/images/grinder-detail.jpg" alt="SOU SIK P-1 精密メカニカルディテール" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
        <div><p className="eyebrow mb-4">Precision</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">構造を見せ、手触りを記憶に残す。</h2><p className="mt-6 text-base leading-8 text-white/70 md:text-lg md:leading-9">遊星歯車が研磨抵抗をコントロールしやすくし、交換式の 440C ステンレスバーが一台で複数の抽出プロファイルを可能にします。</p><Link href="/jp/product" className="btn-primary mt-8 w-fit">製品を見る</Link></div>
      </div></section>

      <section className="section"><div className="container-x"><p className="eyebrow mb-4">Journal</p><h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-5xl">コーヒーと研磨のノート</h2><div className="grid gap-5 md:grid-cols-3">{articles.map(([title, description]) => <Link href="/jp/blog" className="card transition hover:bg-white/[.07]" key={title}><h3 className="mb-3 text-xl font-semibold">{title}</h3><p className="leading-7 text-white/65">{description}</p></Link>)}</div></div></section>

      <section className="section border-y border-white/10 bg-[radial-gradient(circle_at_80%_40%,rgba(199,161,90,.12),transparent_36%)]"><div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow mb-4">Community & Press</p><h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">メディアと各国のクリエイターが語る SOU SIK。</h2></div><Link href="/jp/reviews" className="btn-secondary shrink-0">掲載記事を見る ↗</Link></div></section>

      <CTA />
    </main>
  )
}
