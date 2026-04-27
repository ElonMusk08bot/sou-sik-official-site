import Link from 'next/link'
export const metadata={title:'Blog'}
const posts=[
  ['如何判斷一支手搖磨豆機適不適合淺焙？','淺焙豆密度高、阻力大，磨豆機需要的不只是刀盤鋒利，而是整體力學配置。','/blog/how-to-tell-if-hand-grinder-suits-light-roast'],
  ['行星齒輪磨豆機是噱頭嗎？','如果只看名詞，它像噱頭；如果從手腕負擔與扭力轉換看，它其實很務實。','/blog/are-planetary-gear-grinders-gimmick'],
  ['為什麼低殘粉會影響風味？','殘粉不是只有重量問題，也會帶入氧化後的舊粉氣味。','/blog/why-low-retention-affects-flavor'],
  ['手搖磨豆機多久清一次？','日常拍粉、定期拆解、避免水洗刀盤，是最基本的保養邏輯。','/blog/how-often-clean-hand-grinder'],
  ['手沖與義式需要同一種刀盤嗎？','不同沖煮方式在粉徑分布、細粉比例與萃取節奏上有不同需求。','/blog/do-pour-over-and-espresso-need-same-burr'],
  ['如何建立自己的研磨刻度表？','用豆子、沖煮方式、出杯時間與風味紀錄，建立自己的實用資料庫。','/blog/how-to-build-your-own-grind-size-chart']
]
export default function Blog(){return <main className="pt-24"><section className="section"><div className="container-x"><p className="eyebrow mb-5">Journal</p><h1 className="max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight text-balance">咖啡研磨、機械結構與沖煮筆記。</h1><p className="mt-6 max-w-2xl text-lg leading-9 text-white/65">這裡可以持續放 SEO 文章、產品教學、沖煮指南與品牌觀點。AI 後續可以直接幫你自動新增文章。</p></div></section><section className="section bg-white/[.03]"><div className="container-x grid gap-5 md:grid-cols-3">{posts.map(([t,d,h])=><Link href={h} className="card hover:bg-white/[.07]" key={t}><h2 className="mb-3 text-xl font-semibold">{t}</h2><p className="leading-7 text-white/60">{d}</p><span className="mt-6 inline-block text-sm text-brass">閱讀文章 →</span></Link>)}</div></section></main>}
