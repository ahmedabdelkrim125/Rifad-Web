import type { Metadata } from 'next';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata: Metadata = {
  title: 'تواصل معنا',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ComingSoon title="تواصل معنا" />;
}
