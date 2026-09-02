import Link from 'next/link'
import CTA from '@/components/CTA'
import HeroCarousel from '@/components/HeroCarousel'

const features = [
  ['Planetary Gear', 'A planetary gear system multiplies torque, making dense light-roast beans smoother to grind with less wrist strain.'],
  ['53mm Burr System', 'Large conical burrs balance throughput and particle-size stability across pour-over and espresso exploration.'],
  ['Low Retention', 'A low-retention, easy-clean structure keeps each brew cleaner, more predictable, and easier to maintain.'],
]

const articles = [
  ['How to tell if a grinder suits light roasts', 'Evaluate grinders through torque, burr geometry, particle distribution, and feel.'],
  ['Why planetary gears reduce effort', 'A clear introduction to the mechanical core of P-1.'],
  ['Daily maintenance for hand grinders', 'Disassembly, cleaning, and preventing stale-ground odors.'],
]

export default function Home() {
  return (
    <main className="pt-16">
      <HeroCarousel locale="en" />

      <section className="section"><div className="container-x">
        <p className="eyebrow mb-5">Mechanical Coffee Instruments</p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">Sou Sik<br />Precision hand grinders built for feel.</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg md:leading-9">P-1 brings a planetary gear drive, replaceable burrs, and low-retention construction into one tactile hand grinder. It does not merely process beans—it turns grinding into a measured mechanical rhythm.</p>
        <div className="mt-9"><Link className="btn-primary" href="/en/product">Explore P-1</Link></div>
      </div></section>

      <section className="section bg-white/[.03]"><div className="container-x">
        <p className="eyebrow mb-4">Design Philosophy</p>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">We do not just make grinders. We build a connection between mechanics and coffee.</h2>
          <p className="text-base leading-8 text-white/70 md:text-lg md:leading-9">Gears, burrs, grip, resistance, and sound are not details to hide. They are the experience you feel every day. P-1 is our first answer to a simple idea: a hand grinder should be easier, steadier, and more enjoyable to use.</p>
        </div>
      </div></section>

      <section className="section"><div className="container-x">
        <p className="eyebrow mb-4">P-1 Highlights</p>
        <h2 className="mb-10 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Designed for light roasts, daily brewing, and tactile control.</h2>
        <div className="grid gap-5 md:grid-cols-3">{features.map(([title, description]) => <div className="card" key={title}><div className="mb-5 text-3xl text-brass">✦</div><h3 className="mb-3 text-xl font-semibold">{title}</h3><p className="leading-7 text-white/65">{description}</p></div>)}</div>
      </div></section>

      <section className="section bg-white/[.03]"><div className="container-x grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <img src="/images/grinder-detail.jpg" alt="SOU SIK P-1 precision mechanical detail" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
        <div><p className="eyebrow mb-4">Precision</p><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Let the structure speak, and the feel linger.</h2><p className="mt-6 text-base leading-8 text-white/70 md:text-lg md:leading-9">The planetary gear system makes resistance more controllable. Replaceable 440C stainless-steel burrs open up different brewing profiles without losing the familiarity of one daily tool.</p><Link href="/en/product" className="btn-primary mt-8 w-fit">View product</Link></div>
      </div></section>

      <section className="section"><div className="container-x">
        <p className="eyebrow mb-4">Journal</p><h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-5xl">Coffee knowledge and grinding notes</h2>
        <div className="grid gap-5 md:grid-cols-3">{articles.map(([title, description]) => <Link href="/en/blog" className="card transition hover:bg-white/[.07]" key={title}><h3 className="mb-3 text-xl font-semibold">{title}</h3><p className="leading-7 text-white/65">{description}</p></Link>)}</div>
      </div></section>

      <section className="section border-y border-white/10 bg-[radial-gradient(circle_at_80%_40%,rgba(199,161,90,.12),transparent_36%)]"><div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow mb-4">Community & Press</p><h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">See how media and hands-on creators describe SOU SIK.</h2></div><Link href="/en/reviews" className="btn-secondary shrink-0">Explore coverage ↗</Link></div></section>

      <CTA />
    </main>
  )
}
