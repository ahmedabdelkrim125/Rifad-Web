# رِفاد (Rifad)

متجر إلكتروني (Dropshipping - السعودية) مبني كمونوريبو: واجهة المتجر + لوحة التحكم + باك اند Supabase.

## الهيكل

```
rifad/
├─ apps/
│  ├─ web/        واجهة المتجر (Next.js - SSR/SSG - SEO)         http://localhost:3000
│  └─ admin/      لوحة التحكم (Next.js - خلف تسجيل دخول)         http://localhost:3001
├─ packages/
│  ├─ tokens/     ألوان وخطوط الهوية (Tailwind v4 theme)
│  ├─ ui/         مكونات مشتركة (Button, cn)
│  ├─ supabase/   عملاء Supabase (browser / server / proxy)
│  ├─ validators/ مخططات zod (env, auth, roles)
│  └─ config/     إعدادات TypeScript المشتركة
├─ supabase/      migrations + edge functions
├─ design-assets/ ملفات التصميم الأصلية
└─ docs/
```

داخل كل تطبيق: `src/app` للمسارات فقط، و `src/features/<feature>` لكل ميزة، و `src/components` للمكونات العامة، و `src/config` و `src/lib` للإعدادات والأدوات.

## التشغيل

```bash
corepack enable
pnpm install
cp .env.example apps/web/.env.local
cp .env.example apps/admin/.env.local
pnpm dev
```

أوامر مفيدة: `pnpm dev:web` و `pnpm dev:admin` و `pnpm typecheck` و `pnpm build` و `pnpm format`.

## قواعد الأمان (لا تُكسر)

1. **RLS مفعّل على كل جدول** في Supabase بدون استثناء.
2. مفتاح `service_role` ممنوع في أي كود Frontend أو متغير `NEXT_PUBLIC_*`. يُستخدم فقط داخل Edge Functions.
3. صلاحية الأدمن تُخزَّن في `app_metadata.role` فقط (تُعدَّل من السيرفر). لا تعتمد أبدًا على `user_metadata` لأن المستخدم يقدر يعدله.
4. `proxy.ts` في لوحة التحكم فحص أولي فقط. الحماية الحقيقية في `requireAdmin()` داخل الـ layout، وفي سياسات RLS.
5. الأسعار والإجماليات والدفع تُحسب وتُتحقق على السيرفر، ولا تُصدَّق من المتصفح.
6. أي مدخل من المستخدم يمر على مخطط zod من `@rifad/validators`.
7. رؤوس الأمان و CSP في `src/config/security-headers.ts` لكل تطبيق.

## الأنيميشن في الصفحة الرئيسية

المنتجات مقسّمة لطبقات WebP منفصلة في `apps/web/public/hero`، وتركيبها في `apps/web/src/features/home/hero/hero-layers.ts` (التوقيت والحركة لكل طبقة). الحركة CSS خالصة بدون مكتبات، وتحترم `prefers-reduced-motion`.

لو عندك صور منفصلة لكل منتج بخلفية شفافة، استبدل ملف الطبقة بنفس الاسم وعدّل مكانها في `hero-manifest.json`.

## الخطوات القادمة

1. سكيما Supabase + سياسات RLS (`supabase/migrations`).
2. صفحات الأقسام والمنتج (ISR) مع حقول SEO.
3. السلة والدفع (Edge Functions).
4. إدارة المنتجات والطلبات في لوحة التحكم.
