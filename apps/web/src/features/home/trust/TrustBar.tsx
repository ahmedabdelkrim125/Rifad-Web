import { Headset, RefreshCw, ShieldCheck, Truck, type LucideIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';

const icons: Record<(typeof siteConfig.trust)[number]['id'], LucideIcon> = {
  shipping: Truck,
  payment: ShieldCheck,
  support: Headset,
  returns: RefreshCw,
};

export function TrustBar() {
  return (
    <section aria-label="مزايا رِفاد" className="bg-cream-100">
      <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 px-5 py-12 md:grid-cols-4 md:py-16">
        {siteConfig.trust.map((item) => {
          const Icon = icons[item.id];
          return (
            <li
              key={item.id}
              className="flex flex-col items-center gap-3 text-burgundy-800 md:border-s md:border-cream-300 md:first:border-s-0"
            >
              <Icon className="size-9" strokeWidth={1.4} aria-hidden="true" />
              <span className="text-lg font-medium">{item.title}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
