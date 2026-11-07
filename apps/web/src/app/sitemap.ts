import type { MetadataRoute } from 'next';
import { categories } from '@/config/categories';
import { siteConfig } from '@/config/site';
import { localePath } from '@/i18n/paths';
import { routing } from '@/i18n/routing';

const routes = [
  '',
  '/shop',
  '/categories',
  ...categories.map((category) => `/categories/${category.slug}`),
  '/offers',
  '/about',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}${localePath(locale, route || '/')}`,
      changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
      priority: route === '' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((item) => [
            item,
            `${siteConfig.url}${localePath(item, route || '/')}`,
          ]),
        ),
      },
    })),
  );
}
