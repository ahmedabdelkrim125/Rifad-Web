import type { Metadata } from 'next';
import { localePath } from '@/i18n/paths';
import { routing, type Locale } from '@/i18n/routing';

/** canonical + hreflang لكل صفحة. */
export function buildAlternates(locale: Locale, path: string): Metadata['alternates'] {
  return {
    canonical: localePath(locale, path),
    languages: {
      ...Object.fromEntries(routing.locales.map((item) => [item, localePath(item, path)])),
      'x-default': localePath(routing.defaultLocale, path),
    },
  };
}
