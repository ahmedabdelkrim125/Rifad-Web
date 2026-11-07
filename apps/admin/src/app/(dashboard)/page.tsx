import { EmptyState } from '@/features/dashboard/EmptyState';
import { StatCard } from '@/features/dashboard/StatCard';

export default function OverviewPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8">
      <div>
        <h1 className="text-3xl font-bold text-burgundy-900">نظرة عامة</h1>
        <p className="mt-1 text-ink-700">ملخص سريع لأداء المتجر.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="طلبات اليوم" value="0" hint="تظهر بعد ربط قاعدة البيانات" />
        <StatCard label="المبيعات" value="0 ر.س" hint="تظهر بعد ربط قاعدة البيانات" />
        <StatCard label="العملاء" value="0" hint="تظهر بعد ربط قاعدة البيانات" />
        <StatCard label="المنتجات" value="0" hint="تظهر بعد ربط قاعدة البيانات" />
      </div>
      <EmptyState
        title="لا توجد بيانات بعد"
        description="ابدأ بإضافة أول منتج من قسم المنتجات، وسيظهر نشاط المتجر هنا."
      />
    </div>
  );
}
