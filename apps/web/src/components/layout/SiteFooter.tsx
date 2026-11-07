import Image from 'next/image';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import { siteConfig } from '@/config/site';

const groups = [
  {
    title: 'التسوق',
    links: [
      { label: 'تسوق الآن', href: '/shop' },
      { label: 'الأقسام', href: '/categories' },
      { label: 'السلة', href: '/cart' },
    ],
  },
  {
    title: 'رِفاد',
    links: [
      { label: 'من نحن', href: '/about' },
      { label: 'تواصل معنا', href: '/contact' },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-burgundy-700 text-cream-100">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div className="max-w-sm">
          <span className="inline-block rounded-2xl bg-cream-100 px-4 py-2">
            <Image
              src="/brand/logo.webp"
              alt={siteConfig.name}
              width={720}
              height={406}
              className="h-auto w-28"
            />
          </span>
          <p className="mt-5 text-lg text-cream-200">{siteConfig.tagline}</p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-lg font-semibold text-gold-400">{group.title}</h2>
            <ul className="mt-4 grid gap-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="text-cream-100/90 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-cream-100/15 py-5 text-center text-sm text-cream-200">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
