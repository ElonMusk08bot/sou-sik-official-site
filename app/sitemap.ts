import { MetadataRoute } from 'next'
import { posts } from '../lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sousikgrinder.com'
  const today = new Date().toISOString().split('T')[0]
  const locales = ['', '/en', '/jp'] as const
  const staticPaths = ['', '/product', '/technology', '/about', '/where-to-buy', '/blog', '/contact']

  // Static pages × 3 locales
  const staticPages: MetadataRoute.Sitemap = locales.flatMap((loc) =>
    staticPaths.map((path) => {
      const isHome = path === ''
      return {
        url: `${baseUrl}${loc}${path}`,
        lastModified: today,
        changeFrequency: (isHome || path === '/product' || path === '/where-to-buy' || path === '/blog'
          ? 'weekly'
          : 'monthly') as 'weekly' | 'monthly',
        priority: isHome
          ? 1.0
          : path === '/product' || path === '/blog'
          ? 0.9
          : path === '/where-to-buy' || path === '/technology'
          ? 0.8
          : path === '/about'
          ? 0.6
          : 0.5,
      }
    })
  )

  // Blog posts × 3 locales — single source of truth: lib/posts.ts
  const blogPages: MetadataRoute.Sitemap = locales.flatMap((loc) =>
    posts.map((post) => ({
      url: `${baseUrl}${loc}/blog/${post.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  return [...staticPages, ...blogPages]
}
