import type { ReactNode } from 'react';
import { Button } from '@rifad/ui';
import { LogOut } from 'lucide-react';
import { signOutAction } from '@/features/auth/actions';
import { AdminShell } from '@/features/dashboard/AdminShell';
import { requireAdmin } from '@/lib/auth';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const user = await requireAdmin();

  return (
    <AdminShell
      email={user.email ?? ''}
      signOut={
        <form action={signOutAction}>
          <Button type="submit" variant="ghost" size="sm">
            <LogOut className="size-4" aria-hidden="true" />
            تسجيل الخروج
          </Button>
        </form>
      }
    >
      {children}
    </AdminShell>
  );
}
