import Link from 'next/link'
export const metadata={title:'Journal'}
const posts=[
  ['How to tell if a hand grinder suits light roasts','Light-roast beans are dense with high resistance. A good grinder needs more than sharp burrs—it needs proper mechanical configuration.','/en/blog'],
  ['Are planetary gear grinders just a gimmick?','If you only look at the name, it sounds like marketing. But from the perspective of wrist load and torque conversion, it\'s actually quite practical.','/en/blog'],
  ['Why does low retention affect flavor?','Retention isn\'t just a weight issue—it brings oxidized stale grounds flavor into your cup.','/en/blog'],
  ['How often should you clean a hand grinder?','Daily tap-out, regular disassembly, and avoiding water on burrs are the basic maintenance rules.','/en/blog'],
  ['Do pour-over and espresso need the same burr?','Different brewing methods have different particle distribution, fines ratio, and extraction rhythm requirements.','/en/blog'],
  ['How to build your own grind size reference chart','Use beans, brewing method, pour time, and flavor notes to build your personal practical database.','/en/blog']
]
export default function Blog(){return <main className="pt-24"><section className="section"><div className="container-x"><p className="eyebrow mb-5">Journal</p><h1 className="max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight text-balance">Coffee grinding, mechanical structure, and brewing notes.</h1><p className="mt-6 max-w-2xl text-lg leading-9 text-white/65">This section can hold SEO articles, product guides, brewing tips, and brand perspectives. Content can be added regularly.</p></div></section><section className="section bg-white/[.03]"><div className="container-x grid gap-5 md:grid-cols-3">{posts.map(([t,d,h])=><Link href={h} className="card hover:bg-white/[.07]" key={t}><h2 className="mb-3 text-xl font-semibold">{t}</h2><p className="leading-7 text-white/60">{d}</p><span className="mt-6 inline-block text-sm text-brass">Read Article →</span></Link>)}</div></section></main>}
