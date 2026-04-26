import Link from 'next/link'
import CTA from '@/components/CTA'
export const metadata={title:'P-1 Planetary Gear Hand Grinder'}
const specs=[
  ['Grinding System','Replaceable Conical Burr System'],
  ['Burr Material','440C Hardened Stainless Steel'],
  ['Core Structure','Planetary Gear Torque Multiplier System'],
  ['Design Focus','Low Retention, Easy Disassembly, Stable Feel'],
  ['Use Cases','Pour-over, Espresso Exploration, Daily Brewing']
]
const points=[
  ['Planetary Gear Torque System','The gear structure multiplies applied torque, reducing actual force needed. Light-roast beans grind smoothly without wrist strain.'],
  ['Large-format Conical Burrs','Balances efficiency and particle-size performance. Hand grinding isn\'t just about effort—it keeps the control needed for stable extraction.'],
  ['Replaceable Burr Design','Different burr geometries bring different grinding characters. One grinder adapts to more brewing preferences.'],
  ['Low Retention & Easy Clean','Less powder residue and stale-odor buildup. Each brew is cleaner, maintenance more intuitive.']
]
export default function Product(){return <main className="pt-24"><section className="section"><div className="container-x grid gap-10 md:grid-cols-2"><div><p className="eyebrow mb-5">SOU SIK P-1</p><h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">Planetary Gear Hand Grinder</h1><p className="mt-6 text-lg leading-9 text-white/65">Built for light roasts, feel, and mechanical play. The P-1 integrates a planetary gear system, 440C stainless steel conical burrs, and low-retention design into one complete grinding solution.</p><div className="mt-8 flex flex-wrap gap-3"><a className="btn-primary" href="https://your-shopify-store.com">Buy Now</a><Link className="btn-secondary" href="/en/technology">Technology</Link></div></div><div><img src="/images/hero-p1.jpg" alt="SOU SIK P-1 Planetary Gear Hand Grinder" className="rounded-[2rem] w-full object-cover shadow-2xl" /></div></div></section><section className="section bg-white/[.03]"><div className="container-x"><p className="eyebrow mb-4">Design Points</p><h2 className="mb-10 text-3xl md:text-5xl font-semibold tracking-tight">Four things that make P-1 different</h2><div className="grid gap-5 md:grid-cols-2">{points.map(([t,d],i)=><div className="card" key={t}><div className="mb-5 text-brass">0{i+1}</div><h3 className="mb-3 text-2xl font-semibold">{t}</h3><p className="leading-8 text-white/62">{d}</p></div>)}</div></div></section><section className="section"><div className="container-x grid gap-8 md:grid-cols-2"><div><img src="/images/burrs-01.jpg" alt="EASYREPLACE BURRS 01" className="rounded-[2rem] w-full object-cover shadow-2xl" /></div><div><p className="eyebrow mb-4">Specifications</p><h2 className="mb-8 text-3xl md:text-5xl font-semibold tracking-tight">Product Specifications</h2><div className="overflow-hidden rounded-[2rem] border border-white/10">{specs.map(([k,v])=><div key={k} className="grid grid-cols-3 border-b border-white/10 last:border-b-0"><div className="bg-white/[.04] p-4 text-sm text-white/45">{k}</div><div className="col-span-2 p-4 text-sm text-white/78">{v}</div></div>)}</div><p className="mt-5 text-sm leading-7 text-white/45">Final specs, colors and inclusions subject to production version.</p></div></div></section><CTA /></main>}
