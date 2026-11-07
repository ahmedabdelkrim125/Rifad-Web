import { notFound } from 'next/navigation';

// أي مسار غير معروف يعرض صفحة 404 المترجمة
export default function CatchAllPage() {
  notFound();
}
