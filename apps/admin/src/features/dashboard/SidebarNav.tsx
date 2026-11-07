'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@rifad/ui';
import { adminNav } from '@/config/nav';

type SidebarNavProps = {
  onNavigate?: () => void;
};

export function SidebarNav({ onNavigate }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="القائمة الرئيسية">
      <ul className="grid gap-1">
        {adminNav.map(({ label, href, icon: Icon }) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onNavigate}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-4 py-3 text-cream-200 transition-colors hover:bg-burgundy-800 hover:text-cream-50',
                  active && 'bg-burgundy-700 font-semibold text-gold-300',
                )}
              >
                <Icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
