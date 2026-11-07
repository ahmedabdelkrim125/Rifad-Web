import { routing, type Locale } from './routing';

/** مسار الصفحة بلغة معينة: العربية بدون بادئة، والإنجليزية /en. */
export function localePath(locale: Locale, path: string) {
  const clean = path === '/' ? '' : path;
  return locale === routing.defaultLocale ? clean || '/' : `/${locale}${clean}`;
}
