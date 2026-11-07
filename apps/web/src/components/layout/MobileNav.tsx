'use client';

import { useEffect, useId, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NavLinks } from './NavLinks';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
        className="grid size-11 place-items-center rounded-full text-burgundy-800 transition-colors hover:bg-burgundy-100"
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 border-t border-cream-300 bg-cream-50 px-6 py-5 shadow-lift"
      >
        <NavLinks
          className="grid gap-1"
          linkClassName="w-full py-3 text-lg"
          onNavigate={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
