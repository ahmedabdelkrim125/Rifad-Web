import { Search } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { localePath } from '@/i18n/paths';
import type { Locale } from '@/i18n/routing';

type ShopSearchProps = {
  placeholder?: string;
};

export function ShopSearch({ placeholder }: ShopSearchProps) {
  const t = useTranslations('shop');
  const locale = useLocale() as Locale;

  return (
    <form
      action={localePath(locale, '/search')}
      method="get"
      role="search"
      className="group flex h-14 w-full items-center gap-3 rounded-full bg-cream-50 ps-5 pe-2 shadow-[0_8px_30px_-12px_rgb(112_17_39/0.3)] ring-1 ring-cream-300 transition-shadow focus-within:ring-2 focus-within:ring-burgundy-700 md:h-16"
    >
      <button
        type="submit"
        aria-label={t('searchButton')}
        className="grid size-10 shrink-0 place-items-center rounded-full text-burgundy-800 transition-colors hover:bg-burgundy-100"
      >
        <Search className="size-6" strokeWidth={1.7} aria-hidden="true" />
      </button>
      <input
        type="search"
        name="q"
        required
        maxLength={100}
        autoComplete="off"
        aria-label={t('searchLabel')}
        placeholder={placeholder ?? t('searchPlaceholder')}
        className="h-full min-w-0 flex-1 bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-500 md:text-lg"
      />
    </form>
  );
}
