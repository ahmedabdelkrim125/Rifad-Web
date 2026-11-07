import { PageTransition } from '@/components/motion/PageTransition';
import { Hero } from '@/features/home/hero';
import { TrustBar } from '@/features/home/trust/TrustBar';

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <TrustBar />
    </PageTransition>
  );
}
