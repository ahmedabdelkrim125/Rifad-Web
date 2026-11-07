import { z } from 'zod';

export const publicEnvSchema = z.object({
  siteUrl: z.url(),
  supabaseUrl: z.url(),
  supabaseAnonKey: z.string().min(20),
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;
