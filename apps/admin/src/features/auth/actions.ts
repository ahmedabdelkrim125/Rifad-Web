'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerSupabase } from '@rifad/supabase/server';
import { isAdminRole, loginSchema } from '@rifad/validators';

export type LoginState = { error?: string };

export async function loginAction(_previous: LoginState, formData: FormData): Promise<LoginState> {
  const parsed = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'البيانات المدخلة غير صحيحة' };
  }

  const supabase = createServerSupabase(await cookies());
  const { data, error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error || !data.user) {
    return { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
  }

  if (!isAdminRole(data.user.app_metadata?.role)) {
    await supabase.auth.signOut();
    return { error: 'هذا الحساب لا يملك صلاحية الدخول إلى لوحة التحكم' };
  }

  redirect('/');
}

export async function signOutAction() {
  const supabase = createServerSupabase(await cookies());
  await supabase.auth.signOut();
  redirect('/login');
}
