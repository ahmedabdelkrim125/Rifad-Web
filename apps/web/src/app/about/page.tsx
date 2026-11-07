import type { Metadata } from 'next';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata: Metadata = {
  title: 'من نحن',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <ComingSoon title="من نحن" />;
}
