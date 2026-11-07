import type { Metadata } from 'next';
import { EmptyState } from '@/features/dashboard/EmptyState';

export const metadata: Metadata = { title: 'المنتجات' };

export default function Page() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8">
      <h1 className="text-3xl font-bold text-burgundy-900">المنتجات</h1>
      <EmptyState
        title="هذا القسم قيد التجهيز"
        description="سيتم تفعيله بعد إعداد قاعدة البيانات."
      />
    </div>
  );
}
