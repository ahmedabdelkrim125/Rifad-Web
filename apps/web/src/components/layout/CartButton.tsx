import { ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TransitionLink } from '@/components/navigation/TransitionLink';

type CartButtonProps = {
  /** عدد العناصر في السلة. يُربط بحالة السلة الحقيقية لاحقًا. */
  count?: number;
};

export function CartButton({ count = 0 }: CartButtonProps) {
  const t = useTranslations('a11y');

  return (
    <TransitionLink
      href="/cart"
      aria-label={count > 0 ? `${t('cart')} (${count})` : t('cart')}
      className="relative grid size-11 place-items-center rounded-full text-burgundy-800 transition-colors hover:bg-burgundy-100"
    >
      <ShoppingBag className="size-6" strokeWidth={1.6} aria-hidden="true" />
      {count > 0 && (
        <span className="absolute -end-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-burgundy-700 px-1 text-[0.7rem] font-semibold text-cream-50">
          {count}
        </span>
      )}
    </TransitionLink>
  );
}
