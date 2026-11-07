'use client';

import Image from 'next/image';
import { useEffect, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { SidebarNav } from './SidebarNav';

type AdminShellProps = {
  email: string;
  signOut: ReactNode;
  children: ReactNode;
};

export function AdminShell({ email, signOut, children }: AdminShellProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-dvh bg-cream-50 lg:grid lg:grid-cols-[17rem_1fr]">
      <aside
        className={`fixed inset-y-0 start-0 z-40 flex w-72 flex-col gap-8 bg-burgundy-900 p-5 transition-transform duration-300 ease-out-expo lg:static lg:w-auto lg:translate-x-0 ${
          open ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        <span className="inline-block self-start rounded-2xl bg-cream-100 px-4 py-2">
          <Image
            src="/brand/logo.webp"
            alt="رِفاد"
            width={720}
            height={406}
            className="h-auto w-24"
          />
        </span>
        <SidebarNav onNavigate={() => setOpen(false)} />
      </aside>
      {open ? (
        <button
          type="button"
          aria-label="إغلاق القائمة"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-burgundy-950/50 lg:hidden"
        />
      ) : null}
      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-cream-300 bg-cream-50/90 px-4 backdrop-blur md:px-8">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="grid size-10 place-items-center rounded-full text-burgundy-800 hover:bg-burgundy-100 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
          <p className="ms-auto hidden text-sm text-ink-700 sm:block" dir="ltr">
            {email}
          </p>
          {signOut}
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
