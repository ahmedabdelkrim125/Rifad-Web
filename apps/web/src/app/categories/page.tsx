import type { Metadata } from 'next';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata: Metadata = {
  title: 'الأقسام',
  alternates: { canonical: '/categories' },
};

export default function Page() {
  return <ComingSoon title="الأقسام" />;
}
