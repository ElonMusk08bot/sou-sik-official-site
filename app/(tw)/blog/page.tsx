import Link from 'next/link'
import { posts } from '@/lib/posts'
export const metadata = { title: 'Blog' }

export default function Blog() {
  return (
    <main className="pt-24">
      <section className="section">
        <div className="container-x">
          <p className="eyebrow mb-5">Journal</p>
          <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight text-balance">
            用科學與機械的視角，陪你重新理解咖啡。
          </h1>
        </div>
      </section>
      <section className="section bg-white/[.03]">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              className="card hover:bg-white/[.07]"
              key={post.slug}
            >
              <h2 className="mb-3 text-xl font-semibold">{post.title}</h2>
              <p className="leading-7 text-white/60">{post.description}</p>
              <span className="mt-6 inline-block text-sm text-brass">閱讀文章 →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
