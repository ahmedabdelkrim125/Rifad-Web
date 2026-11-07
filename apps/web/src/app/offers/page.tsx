import type { Metadata } from 'next';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata: Metadata = {
  title: 'العروض',
  alternates: { canonical: '/offers' },
};

export default function OffersPage() {
  return <ComingSoon title="العروض" />;
}
