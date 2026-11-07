import { createServerClient } from '@supabase/ssr';
import type { Database } from './database.types';
import { getPublicEnv } from './env';

type CookieStore = {
  getAll(): { name: string; value: string }[];
  set(name: string, value: string, options?: Record<string, unknown>): void;
};

export function createServerSupabase(cookieStore: CookieStore) {
  const { supabaseUrl, supabaseAnonKey } = getPublicEnv();
  return createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          return;
        }
      },
    },
  });
}
