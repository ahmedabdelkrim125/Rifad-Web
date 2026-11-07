import type { Metadata } from 'next';
import Image from 'next/image';
import { LoginForm } from '@/features/auth/LoginForm';

export const metadata: Metadata = { title: 'تسجيل الدخول' };

export default function LoginPage() {
  return (
    <main className="grid min-h-dvh place-items-center bg-cream-100 px-5 py-10">
      <div className="w-full max-w-md rounded-3xl bg-cream-50 p-8 shadow-lift ring-1 ring-cream-300 md:p-10">
        <Image
          src="/brand/logo.webp"
          alt="رِفاد"
          width={720}
          height={406}
          priority
          className="mx-auto h-auto w-36"
        />
        <h1 className="mt-6 text-center text-2xl font-bold text-burgundy-900">لوحة التحكم</h1>
        <p className="mt-1 mb-8 text-center text-ink-700">سجّل الدخول لإدارة المتجر</p>
        <LoginForm />
      </div>
    </main>
  );
}
