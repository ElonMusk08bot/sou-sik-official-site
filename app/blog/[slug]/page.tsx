import Link from 'next/link'
import CTA from '@/components/CTA'
import { Metadata } from 'next'
import { posts } from '@/lib/posts'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return { title: '文章未找到' }
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return (
    <main className="pt-24 section">
      <div className="container-x">
        <h1>文章未找到</h1>
        <Link href="/blog" className="text-brass mt-4 inline-block">← 返回文章列表</Link>
      </div>
    </main>
  )

  const sections = post.content.split('\n## ').map((block, i) =>
    i === 0 ? block : '## ' + block
  )

  const relatedPosts = post.related
    .map(r => posts.find(p => p.slug === r.slug))
    .filter(Boolean) as typeof posts

  return (
    <main className="pt-24">
      {/* Cover */}
      <section className="relative w-full overflow-hidden" style={{ height: '60vh', minHeight: '400px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-carbon" />
        <img src={post.cover} alt={post.title} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-x pb-12">
            <p className="eyebrow mb-4">{post.date} · {post.readingTime}</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">{post.title}</h1>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_280px]">
          {/* Main Content */}
          <article>
            <p className="text-lg text-white/65 leading-9 mb-10 border-l-2 border-brass pl-6">
              {post.description}
            </p>

            {/* TOC */}
            <nav className="card mb-10 p-6">
              <p className="eyebrow mb-4">目錄</p>
              <ol className="space-y-2">
                {post.toc.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-white/60 hover:text-white block py-1">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Article Body */}
            <div className="prose-sou">
              {sections.map((block, i) => {
                if (block.startsWith('## ')) {
                  const heading = block.split('\n')[0].replace('## ', '')
                  const id = post.toc.find(t => t.text === heading)?.id || ''
                  const body = block.substring(block.indexOf('\n')).trim()
                  return (
                    <section key={i} id={id}>
                      <h2>{heading}</h2>
                      <div className="prose-sou-body" dangerouslySetInnerHTML={{__html: body}} />
                    </section>
                  )
                }
                return null
              })}
            </div>

            {/* HowTo */}
            <div className="mt-12 card p-8">
              <p className="eyebrow mb-4">操作指南</p>
              <h3 className="text-2xl font-semibold mb-6">{post.howto.title}</h3>
              <ol className="space-y-4">
                {post.howto.steps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brass text-black flex items-center justify-center font-bold text-sm">{i + 1}</span>
                    <p className="text-white/70 leading-7 pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-3xl font-semibold mb-8">常見問題</h2>
              <div className="space-y-4">
                {post.faq.map((item, i) => (
                  <details key={i} className="card p-5 cursor-pointer group">
                    <summary className="font-semibold text-lg list-none flex items-center justify-between">
                      {item.q}
                      <span className="text-brass text-xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-4 text-white/65 leading-8">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-12 pt-12 border-t border-white/10">
              <h2 className="text-2xl font-semibold mb-8">相關文章</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedPosts.map(r => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="card p-5 hover:bg-white/[.07]">
                    <h3 className="font-semibold mb-2">{r.title}</h3>
                    <p className="text-sm text-white/50">{r.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden md:block space-y-6">
            <div className="card p-5">
              <p className="eyebrow mb-3">作者</p>
              <p className="text-white/70 text-sm">{post.author}</p>
            </div>
            <div className="card p-5">
              <p className="eyebrow mb-3">閱讀時間</p>
              <p className="text-white/70 text-sm">{post.readingTime}</p>
            </div>
            <div className="card p-5">
              <p className="eyebrow mb-3">更新日期</p>
              <p className="text-white/70 text-sm">{post.date}</p>
            </div>
          </aside>
        </div>
      </div>

      <CTA />
    </main>
  )
}
