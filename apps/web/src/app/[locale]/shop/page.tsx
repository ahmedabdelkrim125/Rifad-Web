import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/motion/PageTransition';
import { CategoryGrid } from '@/features/shop/CategoryGrid';
import { OffersBanner } from '@/features/shop/OffersBanner';
import { ShopHero } from '@/features/shop/ShopHero';
import { ShopTrust } from '@/features/shop/ShopTrust';
import { toLocale } from '@/i18n/routing';
import { buildAlternates } from '@/lib/seo';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: 'shop' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates(locale, '/shop'),
  };
}

export default async function ShopPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(toLocale(locale));

  return (
    <PageTransition>
      <ShopHero />
      <div className="grid grid-cols-1 gap-10 pt-4 md:gap-14 md:pt-8">
        <ShopTrust />
        <CategoryGrid />
        <OffersBanner />
      </div>
    </PageTransition>
  );
}
