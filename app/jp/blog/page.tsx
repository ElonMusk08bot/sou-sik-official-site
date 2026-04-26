import Link from 'next/link'
export const metadata={title:'ジャーナル'}
const posts=[
  ['手動グラインダーが浅煎りに最適かどうかに見る方法','浅煎り豆は密度が高く抵抗が大きいですが、グラインダーに必要なのはバーが鋭いことだけでなく、全体的な力学配置です。'],
  ['Planetengetriebe グラインダーはマーケティングか？','名詞だけを見るとマーケティングに見えますが、手首の負担とトルク変換の観点から見ると、実はかなり実用的です。'],
  ['低粉残りがなぜ風味を左右するのか？','粉残りは重量の問題だけでなく、酸化された古い粉の風味を持ち込む問題もあります。'],
  ['手動グラインダーのメンテナンス頻度','日常的な粉落とし、定期的な分解、水洗いの回避が基本的なメンテナンスロジックです。'],
  ['pour-overとエスプレッソは同じバーが必要か？','異なる抽出方法は粉径分布、細粉率、抽出リズムにおいて異なる要件があります。'],
  ['自分のグラインドサイズチャートを作る方法','豆、抽出方法、一杯の時間と風味を記録して、自分の実用データベースを構築します。']
]
export default function Blog(){return <main className="pt-24"><section className="section"><div className="container-x"><p className="eyebrow mb-5">Journal</p><h1 className="max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight text-balance">コーヒーグラインディング、メカニカル構造と抽出ノート。</h1><p className="mt-6 max-w-2xl text-lg leading-9 text-white/65">这里可以放 SEO 文章、产品教程、抽出ガイド与ブランド观点。定期に追加できます。</p></div></section><section className="section bg-white/[.03]"><div className="container-x grid gap-5 md:grid-cols-3">{posts.map(([t,d])=><Link href="/jp/blog" className="card hover:bg-white/[.07]" key={t}><h2 className="mb-3 text-xl font-semibold">{t}</h2><p className="leading-7 text-white/60">{d}</p><span className="mt-6 inline-block text-sm text-brass">記事を読む →</span></Link>)}</div></section></main>}
