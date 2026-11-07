import Image from 'next/image';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import { ShoppingBag } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { MobileNav } from './MobileNav';
import { NavLinks } from './NavLinks';

export function SiteHeader() {
  return (
    <header className="site-header relative z-30 bg-cream-100">
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between gap-6 px-5 md:h-24 md:px-10">
        <TransitionLink
          href="/"
          aria-label={`${siteConfig.name} - الصفحة الرئيسية`}
          className="shrink-0"
        >
          <Image
            src="/brand/logo.webp"
            alt={siteConfig.name}
            width={720}
            height={406}
            priority
            sizes="(min-width: 768px) 150px, 100px"
            className="h-auto w-[100px] md:w-[150px]"
          />
        </TransitionLink>

        <nav aria-label="التنقل الرئيسي" className="hidden md:block">
          <NavLinks className="flex items-center gap-9 text-lg lg:gap-12" />
        </nav>

        <div className="flex items-center gap-2">
          <TransitionLink
            href="/cart"
            aria-label="سلة التسوق"
            className="grid size-11 place-items-center rounded-full text-burgundy-800 transition-colors hover:bg-burgundy-100"
          >
            <ShoppingBag className="size-6" strokeWidth={1.6} />
          </TransitionLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
