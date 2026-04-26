import Link from 'next/link'
import CTA from '@/components/CTA'
export const metadata={title:'P-1 惑星歯車手動グラインダー'}
const specs=[
  ['グラインディングシステム','交換式コーンバーシステム'],
  ['バー素材','440C 硬化ステンレススチール'],
  ['コア構造','Planetengetriebe トルク増幅システム'],
  ['設計方向','低粉残り、易分解、安定した手感'],
  ['使用シーン','pour-over、エスプレッソ探究、日常抽出']
]
const points=[
  ['Planetengetriebe トルクシステム','歯車構造でトルクを増幅し實際に使用する力を軽減。浅煎りでも手首の負担なく滑らかにグラインドできます。'],
  ['大径コーンバー構造','効率と粉径表現を両立。手動グラインディングは省力だけでなく、安定した抽出に必要な制御感を保持します。'],
  ['交換式バー設計','異なるバー几何が様々なグラインディングスタイルを実現。一台のグラインダーで多様な抽出偏好に対応。'],
  ['低粉残り&易清掃','粉の残留と古い粉の匂いを軽減し每次の抽出をクリーンに。お手入れも直观的に。']
]
export default function Product(){return <main className="pt-24"><section className="section"><div className="container-x grid gap-10 md:grid-cols-2"><div><p className="eyebrow mb-5">SOU SIK P-1</p><h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">惑星歯車手動グラインダー</h1><p className="mt-6 text-lg leading-9 text-white/65">浅煎り豆、手感とメカニックな遊びのために設計。P-1はPlanetengetriebe、440Cステンレススチール製コーンバー、低粉残り設計を一つの完全なグラインディングシステムに統合しました。</p><div className="mt-8 flex flex-wrap gap-3"><a className="btn-primary" href="https://your-shopify-store.com">今すぐ購入</a><Link className="btn-secondary" href="/jp/technology">技術解説</Link></div></div><div><img src="/images/hero-p1.jpg" alt="SOU SIK P-1 惑星歯車手動グラインダー" className="rounded-[2rem] w-full object-cover shadow-2xl" /></div></div></section><section className="section bg-white/[.03]"><div className="container-x"><p className="eyebrow mb-4">Design Points</p><h2 className="mb-10 text-3xl md:text-5xl font-semibold tracking-tight">P-1を他と異なる4つのポイント</h2><div className="grid gap-5 md:grid-cols-2">{points.map(([t,d],i)=><div className="card" key={t}><div className="mb-5 text-brass">0{i+1}</div><h3 className="mb-3 text-2xl font-semibold">{t}</h3><p className="leading-8 text-white/62">{d}</p></div>)}</div></div></section><section className="section"><div className="container-x grid gap-8 md:grid-cols-2"><div><img src="/images/burrs-01.jpg" alt="EASYREPLACE BURRS 01" className="rounded-[2rem] w-full object-cover shadow-2xl" /></div><div><p className="eyebrow mb-4">Specifications</p><h2 className="mb-8 text-3xl md:text-5xl font-semibold tracking-tight">製品仕様</h2><div className="overflow-hidden rounded-[2rem] border border-white/10">{specs.map(([k,v])=><div key={k} className="grid grid-cols-3 border-b border-white/10 last:border-b-0"><div className="bg-white/[.04] p-4 text-sm text-white/45">{k}</div><div className="col-span-2 p-4 text-sm text-white/78">{v}</div></div>)}</div><p className="mt-5 text-sm leading-7 text-white/45">実際の仕様、色と内容は正規量産バージョンに準じてください。</p></div></div></section><CTA /></main>}
