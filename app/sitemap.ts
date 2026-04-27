import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sousikgrinder.com'
  const today = new Date().toISOString().split('T')[0]

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/technology`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/where-to-buy`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const blogPosts = [
    { slug: 'how-to-tell-if-hand-grinder-suits-light-roast', priority: 0.8 },
    { slug: 'are-planetary-gear-grinders-gimmick', priority: 0.8 },
    { slug: 'why-low-retention-affects-flavor', priority: 0.8 },
    { slug: 'how-often-clean-hand-grinder', priority: 0.8 },
    { slug: 'do-pour-over-and-espresso-need-same-burr', priority: 0.8 },
    { slug: 'how-to-build-your-own-grind-size-chart', priority: 0.8 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: post.priority,
  }))

  return [...staticPages, ...blogPages]
}
