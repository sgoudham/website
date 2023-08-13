import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: process.env.NEXT_PUBLIC_IS_PREVIEW ? 'https://preview.goudham.com/sitemap.xml' : 'https://goudham.com/sitemap.xml',
  }
}