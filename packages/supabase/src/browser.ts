import { createBrowserClient } from '@supabase/ssr';
import type { Database } from './database.types';
import { getPublicEnv } from './env';

export function createBrowserSupabase() {
  const { supabaseUrl, supabaseAnonKey } = getPublicEnv();
  return createBrowserClient<Database>(supabaseUrl, supabaseAnonKey);
}
