import type { MetadataRoute } from 'next';

const locales = ['fr', 'en', 'es'];
const baseUrl = 'https://agritemis.com';

const pages = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/vitiscore', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/indicateurs', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/mission', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/indicator-request', changeFrequency: 'monthly' as const, priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${page.path}`])
        ),
      },
    }))
  );
}
