'use client';

import { useEffect, useId, useRef, useState, type FocusEvent, type PointerEvent } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@rifad/ui';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import { categories } from '@/config/categories';
import { CategoryIcon } from '@/features/shop/CategoryIcon';
import { usePathname } from '@/i18n/navigation';
import { navLinkClass } from './navLinkStyles';

type CategoriesMenuProps = {
  variant: 'desktop' | 'mobile';
  label: string;
  active: boolean;
  linkClassName?: string;
  onNavigate?: () => void;
};

export function CategoriesMenu({
  variant,
  label,
  active,
  linkClassName,
  onNavigate,
}: CategoriesMenuProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const panelId = useId();
  const pathname = usePathname();
  const names = useTranslations('categories.names');
  const menu = useTranslations('categories.menu');
  const a11y = useTranslations('a11y');
  const isDesktop = variant === 'desktop';

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open || !isDesktop) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointerDown = (event: globalThis.PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open, isDesktop]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const close = () => {
    setOpen(false);
    onNavigate?.();
  };

  const onPointerEnter = (event: PointerEvent) => {
    if (!isDesktop || event.pointerType !== 'mouse') return;
    window.clearTimeout(timer.current);
    setOpen(true);
  };

  const onPointerLeave = (event: PointerEvent) => {
    if (!isDesktop || event.pointerType !== 'mouse') return;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(false), 140);
  };

  const onBlur = (event: FocusEvent) => {
    if (!isDesktop) return;
    if (!wrapRef.current?.contains(event.relatedTarget as Node | null)) setOpen(false);
  };

  return (
    <div
      ref={wrapRef}
      className={cn('relative', !isDesktop && 'w-full')}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onBlur={onBlur}
    >
      <div className={cn('flex items-center gap-1', !isDesktop && 'justify-between')}>
        <TransitionLink
          href="/categories"
          onClick={onNavigate}
          aria-current={active ? 'page' : undefined}
          className={navLinkClass(active, linkClassName)}
        >
          {label}
        </TransitionLink>
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={a11y('showCategories')}
          className="grid size-8 place-items-center rounded-full text-burgundy-800 transition-colors hover:bg-burgundy-100"
        >
          <ChevronDown
            className={cn('size-4 transition-transform duration-300', open && 'rotate-180')}
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        id={panelId}
        className={cn(
          isDesktop
            ? 'absolute top-full left-1/2 z-50 w-[min(34rem,calc(100vw-2rem))] -translate-x-1/2 pt-4 transition duration-200'
            : 'w-full',
          isDesktop &&
            (open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'),
          !isDesktop && !open && 'hidden',
        )}
      >
        <div
          className={cn(
            'rounded-3xl bg-cream-50 p-3 ring-1 ring-cream-300',
            isDesktop ? 'shadow-lift' : 'mt-1 bg-cream-100',
          )}
        >
          <ul className="grid grid-cols-2 gap-1">
            {categories.map((category) => (
              <li key={category.slug}>
                <TransitionLink
                  href={`/categories/${category.slug}`}
                  onClick={close}
                  className="flex items-center gap-3 rounded-2xl px-2.5 py-2.5 text-burgundy-900 transition-colors hover:bg-burgundy-100/70 focus-visible:bg-burgundy-100/70"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cream-200 text-burgundy-700">
                    <CategoryIcon name={category.icon} className="size-5" />
                  </span>
                  <span className="text-[0.95rem] leading-snug font-medium">
                    {names(category.nameKey)}
                  </span>
                </TransitionLink>
              </li>
            ))}
          </ul>
          <div className="mt-2 border-t border-cream-300 pt-2">
            <TransitionLink
              href="/categories"
              onClick={close}
              className="group flex items-center justify-between gap-2 rounded-2xl px-3 py-2.5 font-semibold text-burgundy-700 transition-colors hover:bg-burgundy-100/70"
            >
              {menu('viewAll')}
              <ArrowLeft
                className="size-4 transition-transform duration-300 group-hover:-translate-x-1 ltr:rotate-180 ltr:group-hover:translate-x-1"
                aria-hidden="true"
              />
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
}
