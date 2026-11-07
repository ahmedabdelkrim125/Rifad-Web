'use client';

import { useTranslations } from 'next-intl';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import { siteConfig } from '@/config/site';
import { usePathname } from '@/i18n/navigation';
import { CategoriesMenu } from './CategoriesMenu';
import { navLinkClass } from './navLinkStyles';

type NavLinksProps = {
  variant?: 'desktop' | 'mobile';
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

export function NavLinks({
  variant = 'desktop',
  className,
  linkClassName,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();
  const t = useTranslations('nav');

  return (
    <ul className={className}>
      {siteConfig.nav.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            {item.key === 'categories' ? (
              <CategoriesMenu
                variant={variant}
                label={t(item.key)}
                active={active}
                linkClassName={linkClassName}
                onNavigate={onNavigate}
              />
            ) : (
              <TransitionLink
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? 'page' : undefined}
                className={navLinkClass(active, linkClassName)}
              >
                {t(item.key)}
              </TransitionLink>
            )}
          </li>
        );
      })}
    </ul>
  );
}
