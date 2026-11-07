import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import { CartButton } from './CartButton';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import { NavLinks } from './NavLinks';

export function SiteHeader() {
  const site = useTranslations('site');
  const a11y = useTranslations('a11y');

  return (
    <header className="site-header relative z-30 bg-cream-100">
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between gap-4 px-5 md:h-24 md:px-10">
        <TransitionLink
          href="/"
          aria-label={a11y('home', { name: site('name') })}
          className="shrink-0"
        >
          <Image
            src="/brand/logo.webp"
            alt={site('name')}
            width={720}
            height={406}
            priority
            sizes="(min-width: 768px) 150px, 100px"
            className="h-auto w-[100px] md:w-[150px]"
          />
        </TransitionLink>

        <nav aria-label={a11y('mainNav')} className="hidden lg:block">
          <NavLinks variant="desktop" className="flex items-center gap-8 text-lg xl:gap-12" />
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <CartButton />
          <span className="hidden h-7 w-px bg-cream-300 sm:block" aria-hidden="true" />
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
