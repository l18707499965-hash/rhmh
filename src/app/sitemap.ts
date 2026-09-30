import { MetadataRoute } from 'next';
import { SITE, absUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/', priority: 1, changeFrequency: 'daily' },
    { path: '/download', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/comics', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/features', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  ] as const;

  return pages.map((p) => ({
    url: absUrl(p.path),
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}