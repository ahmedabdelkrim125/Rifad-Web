import Link from 'next/link';
import { buttonVariants } from '@rifad/ui';

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-5 py-20 text-center">
      <div>
        <p className="text-7xl font-bold text-burgundy-700">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-burgundy-900">الصفحة غير موجودة</h1>
        <p className="mt-2 text-ink-700">الرابط الذي فتحته غير صحيح أو تم نقله.</p>
        <Link href="/" className={buttonVariants({ className: 'mt-8' })}>
          العودة للرئيسية
        </Link>
      </div>
    </section>
  );
}
