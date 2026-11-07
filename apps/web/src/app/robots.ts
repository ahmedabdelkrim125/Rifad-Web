import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { localePath } from '@/i18n/paths';
import { routing } from '@/i18n/routing';

const privatePaths = ['/cart', '/checkout', '/account', '/search'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          ...routing.locales.flatMap((locale) =>
            privatePaths.map((path) => localePath(locale, path)),
          ),
          '/api/',
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
