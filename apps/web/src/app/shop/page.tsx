import type { Metadata } from 'next';
import { PageTransition } from '@/components/motion/PageTransition';
import { CategoryGrid } from '@/features/shop/CategoryGrid';
import { OffersBanner } from '@/features/shop/OffersBanner';
import { ShopHero } from '@/features/shop/ShopHero';
import { ShopTrust } from '@/features/shop/ShopTrust';

export const metadata: Metadata = {
  title: 'تسوق الآن',
  description: 'تصفح أفضل المنتجات في رِفاد من إلكترونيات وأزياء ومنزل وجمال ورياضة، في مكان واحد.',
  alternates: { canonical: '/shop' },
};

export default function ShopPage() {
  return (
    <PageTransition>
      <ShopHero />
      <div className="grid gap-10 pt-4 md:gap-14 md:pt-8">
        <ShopTrust />
        <CategoryGrid />
        <OffersBanner />
      </div>
    </PageTransition>
  );
}
