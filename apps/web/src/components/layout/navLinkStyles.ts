import { cn } from '@rifad/ui';

export function navLinkClass(active: boolean, extra?: string) {
  return cn(
    'relative inline-block py-2 font-medium whitespace-nowrap text-burgundy-800 transition-colors duration-300 hover:text-burgundy-600',
    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-burgundy-700 after:transition-transform after:duration-300 after:content-['']",
    active && 'font-semibold after:scale-x-100',
    extra,
  );
}
