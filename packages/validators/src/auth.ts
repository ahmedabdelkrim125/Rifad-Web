import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email('البريد الإلكتروني غير صحيح')),
  password: z.string().min(8, 'كلمة المرور لا تقل عن 8 أحرف').max(128),
});

export type LoginInput = z.infer<typeof loginSchema>;
