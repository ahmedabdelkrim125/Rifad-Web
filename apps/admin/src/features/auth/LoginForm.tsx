'use client';

import { useActionState } from 'react';
import { Button } from '@rifad/ui';
import { loginAction, type LoginState } from './actions';

const initialState: LoginState = {};

const fieldClass =
  'h-12 w-full rounded-xl border border-cream-300 bg-cream-50 px-4 text-base text-ink-900 outline-none transition-[border-color,box-shadow] placeholder:text-ink-500 focus:border-burgundy-700 focus:ring-4 focus:ring-burgundy-100';

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="grid gap-5" noValidate>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-burgundy-900">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="username"
          required
          dir="ltr"
          className={fieldClass}
          placeholder="admin@example.com"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="password" className="text-sm font-medium text-burgundy-900">
          كلمة المرور
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          minLength={8}
          dir="ltr"
          className={fieldClass}
        />
      </div>
      {state.error ? (
        <p role="alert" className="rounded-xl bg-burgundy-100 px-4 py-3 text-sm text-burgundy-800">
          {state.error}
        </p>
      ) : null}
      <Button type="submit" size="lg" disabled={pending} className="w-full px-6">
        {pending ? 'جارٍ تسجيل الدخول...' : 'تسجيل الدخول'}
      </Button>
    </form>
  );
}
