import {
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Users,
  type LucideIcon,
} from 'lucide-react';

export type AdminNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const adminNav: AdminNavItem[] = [
  { label: 'نظرة عامة', href: '/', icon: LayoutDashboard },
  { label: 'الطلبات', href: '/orders', icon: ShoppingCart },
  { label: 'المنتجات', href: '/products', icon: Package },
  { label: 'العملاء', href: '/customers', icon: Users },
  { label: 'الإعدادات', href: '/settings', icon: Settings },
];
