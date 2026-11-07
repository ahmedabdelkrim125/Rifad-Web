import type { Metadata } from 'next';
import { PageTransition } from '@/components/motion/PageTransition';
import { ShopSearch } from '@/features/shop/ShopSearch';

export const metadata: Metadata = {
  title: 'نتائج البحث',
  robots: { index: false, follow: false },
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const raw = Array.isArray(q) ? q[0] : q;
  const query = (raw ?? '').trim().slice(0, 100);

  return (
    <PageTransition>
      <section className="mx-auto grid max-w-3xl gap-8 px-5 py-14 md:py-20">
        <ShopSearch />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-burgundy-900 md:text-4xl">
            {query ? `نتائج البحث عن «${query}»` : 'ابحث في رِفاد'}
          </h1>
          <p className="mt-3 text-lg text-ink-700">لا توجد منتجات متاحة بعد. سنضيفها قريبًا.</p>
        </div>
      </section>
    </PageTransition>
  );
}
