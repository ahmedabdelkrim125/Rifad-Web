import { siteConfig } from '@/config/site';
import { localePath } from '@/i18n/paths';
import type { Locale } from '@/i18n/routing';

type Names = { name: string; nameEn: string };

export function organizationJsonLd({ name, nameEn }: Names) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    alternateName: nameEn,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo.webp`,
  };
}

export function websiteJsonLd(locale: Locale, { name }: Names) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url: `${siteConfig.url}${localePath(locale, '/')}`,
    inLanguage: locale === 'ar' ? 'ar-SA' : 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}${localePath(locale, '/search')}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
