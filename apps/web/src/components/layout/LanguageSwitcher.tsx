'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@rifad/ui';
import { usePathname, useRouter } from '@/i18n/navigation';
import { localeMeta, routing, type Locale } from '@/i18n/routing';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('a11y');
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  function choose(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    // نحفظ اختيار المستخدم كي لا يعيد الـ proxy توجيهه بحسب لغة الجهاز
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    router.replace(`${pathname}${window.location.search}`, { locale: next });
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={listId}
        aria-label={t('language')}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-cream-300 bg-cream-50/70 px-3.5 text-sm font-medium text-burgundy-800 transition-colors hover:bg-burgundy-100 sm:px-4 sm:text-base"
      >
        <span>{localeMeta[locale as Locale].label}</span>
        <ChevronDown
          className={cn('size-4 transition-transform duration-300', open && 'rotate-180')}
          strokeWidth={2.2}
          aria-hidden="true"
        />
      </button>
      <ul
        id={listId}
        hidden={!open}
        className="absolute end-0 top-full z-50 mt-2 w-44 rounded-2xl bg-cream-50 p-1.5 shadow-lift ring-1 ring-cream-300"
      >
        {routing.locales.map((code) => (
          <li key={code}>
            <button
              type="button"
              lang={code}
              dir={localeMeta[code].dir}
              onClick={() => choose(code)}
              aria-current={code === locale ? 'true' : undefined}
              className={cn(
                'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-start font-medium text-burgundy-900 transition-colors hover:bg-burgundy-100/70',
                code === locale && 'bg-burgundy-100/60',
              )}
            >
              {localeMeta[code].label}
              {code === locale && <Check className="size-4 text-burgundy-700" aria-hidden="true" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
