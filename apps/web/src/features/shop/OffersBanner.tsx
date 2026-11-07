import { ArrowLeft } from 'lucide-react';
import { buttonVariants } from '@rifad/ui';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import { activeOffer } from '@/config/offers';
import { GiftIllustration } from './GiftIllustration';
import { PercentBadge } from './PercentBadge';

export function OffersBanner() {
  if (!activeOffer) return null;

  return (
    <section
      aria-labelledby="offers-title"
      className="mx-auto max-w-[90rem] px-5 pb-16 md:px-10 md:pb-24"
    >
      <div className="relative isolate overflow-hidden rounded-3xl bg-burgundy-700 px-6 py-8 text-cream-50 shadow-lift md:px-12 md:py-6">
        <svg
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M0 200C240 150 520 60 1200 120"
            stroke="#d4af37"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            opacity="0.7"
          />
          <path
            d="M300 200C560 140 860 90 1200 20"
            stroke="#d4af37"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            opacity="0.4"
          />
        </svg>
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <span className="size-16 shrink-0 md:size-20">
              <PercentBadge />
            </span>
            <h2 id="offers-title" className="text-2xl font-bold leading-snug md:text-4xl">
              {activeOffer.title}
            </h2>
          </div>
          <span className="order-first h-36 w-40 md:order-none md:-my-10 md:h-52 md:w-56">
            <GiftIllustration />
          </span>
          <TransitionLink
            href={activeOffer.href}
            className={buttonVariants({
              variant: 'ghost',
              size: 'md',
              className: 'bg-cream-100 text-burgundy-800 hover:bg-cream-50 hover:text-burgundy-900',
            })}
          >
            {activeOffer.ctaLabel}
            <ArrowLeft className="size-4" aria-hidden="true" />
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
