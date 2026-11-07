import { Headset, RefreshCw, ShieldCheck, Truck, type LucideIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';

const icons: Record<(typeof siteConfig.trust)[number]['id'], LucideIcon> = {
  shipping: Truck,
  payment: ShieldCheck,
  support: Headset,
  returns: RefreshCw,
};

export function ShopTrust() {
  return (
    <section aria-label="مزايا رِفاد" className="mx-auto max-w-[90rem] px-5 md:px-10">
      <ul className="grid grid-cols-1 gap-y-6 rounded-3xl bg-cream-200/60 px-6 py-7 ring-1 ring-cream-300/70 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:px-10">
        {siteConfig.trust.map((item) => {
          const Icon = icons[item.id];
          return (
            <li
              key={item.id}
              className="flex items-center gap-4 lg:border-s lg:border-cream-300 lg:ps-8 lg:first:border-s-0 lg:first:ps-0"
            >
              <Icon
                className="size-11 shrink-0 text-burgundy-700"
                strokeWidth={1.3}
                aria-hidden="true"
              />
              <span className="grid">
                <span className="text-lg font-semibold text-burgundy-900">{item.title}</span>
                <span className="text-sm text-ink-500">{item.detail}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
