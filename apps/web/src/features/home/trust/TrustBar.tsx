import { Headset, RefreshCw, ShieldCheck, Truck, type LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { siteConfig, type TrustId } from '@/config/site';

const icons: Record<TrustId, LucideIcon> = {
  shipping: Truck,
  payment: ShieldCheck,
  support: Headset,
  returns: RefreshCw,
};

export function TrustBar() {
  const t = useTranslations('trust');
  const a11y = useTranslations('a11y');

  return (
    <section aria-label={a11y('trustLabel')} className="bg-cream-100">
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 px-5 py-12 md:grid-cols-4 md:py-16">
        {siteConfig.trust.map((id) => {
          const Icon = icons[id];
          return (
            <li
              key={id}
              className="flex flex-col items-center gap-3 text-burgundy-800 md:border-s md:border-cream-300 md:first:border-s-0"
            >
              <Icon className="size-9" strokeWidth={1.4} aria-hidden="true" />
              <span className="text-lg font-medium">{t(`${id}.title`)}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
