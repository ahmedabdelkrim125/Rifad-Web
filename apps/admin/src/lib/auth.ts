import { cache } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerSupabase } from '@rifad/supabase/server';
import { isAdminRole } from '@rifad/validators';

export const getAdminUser = cache(async () => {
  const supabase = createServerSupabase(await cookies());
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminRole(user.app_metadata?.role)) return null;
  return user;
});

export async function requireAdmin() {
  const user = await getAdminUser();
  if (!user) redirect('/login');
  return user;
}
