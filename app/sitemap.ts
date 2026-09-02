import { MetadataRoute } from 'next'
import { posts } from '../lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sousikgrinder.com'
  const today = new Date().toISOString().split('T')[0]
  const locales = ['', '/en', '/jp'] as const
  const staticPaths = ['', '/product', '/technology', '/about', '/where-to-buy', '/blog', '/contact', '/reviews']

  const staticPages: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => {
      const isHome = path === ''
      return {
        url: `${baseUrl}${locale}${path}`,
        lastModified: today,
        changeFrequency: (isHome || path === '/product' || path === '/where-to-buy' || path === '/blog' || path === '/reviews'
          ? 'weekly'
          : 'monthly') as 'weekly' | 'monthly',
        priority: isHome
          ? 1
          : path === '/product' || path === '/blog'
          ? 0.9
          : path === '/where-to-buy' || path === '/technology' || path === '/reviews'
          ? 0.8
          : path === '/about'
          ? 0.6
          : 0.5,
      }
    }),
  )

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
