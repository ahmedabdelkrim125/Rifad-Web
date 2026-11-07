import { defineRouting } from 'next-intl/routing';
import { hasLocale } from 'next-intl';

export const routing = defineRouting({
  locales: ['ar', 'en'],
  defaultLocale: 'ar',
  // العربية بدون بادئة (/shop) والإنجليزية بالبادئة (/en/shop)
  localePrefix: 'as-needed',
  // يقرأ لغة الجهاز (Accept-Language) في أول زيارة، ثم يحترم اختيار المستخدم المحفوظ في الكوكي
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];

export const localeMeta: Record<Locale, { label: string; dir: 'rtl' | 'ltr'; ogLocale: string }> = {
  ar: { label: 'العربية', dir: 'rtl', ogLocale: 'ar_SA' },
  en: { label: 'English', dir: 'ltr', ogLocale: 'en_US' },
};

export function toLocale(value: string): Locale {
  return hasLocale(routing.locales, value) ? value : routing.defaultLocale;
}
