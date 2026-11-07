'use client';

import { TransitionLink } from '@/components/navigation/TransitionLink';
import { usePathname } from 'next/navigation';
import { cn } from '@rifad/ui';
import { siteConfig } from '@/config/site';

type NavLinksProps = {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

export function NavLinks({ className, linkClassName, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {siteConfig.nav.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <TransitionLink
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'relative inline-block py-2 font-medium text-burgundy-800 transition-colors duration-300 hover:text-burgundy-600',
                "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-burgundy-700 after:transition-transform after:duration-300 after:content-['']",
                active && 'font-semibold after:scale-x-100',
                linkClassName,
              )}
            >
              {item.label}
            </TransitionLink>
          </li>
        );
      })}
    </ul>
  );
}
