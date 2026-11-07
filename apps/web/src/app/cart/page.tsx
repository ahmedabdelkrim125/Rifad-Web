import type { Metadata } from 'next';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata: Metadata = {
  title: 'سلة التسوق',
  alternates: { canonical: '/cart' },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ComingSoon title="سلة التسوق" />;
}
