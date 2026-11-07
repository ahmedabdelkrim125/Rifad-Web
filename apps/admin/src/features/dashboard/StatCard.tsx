type StatCardProps = {
  label: string;
  value: string;
  hint: string;
};

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-cream-100 p-5 ring-1 ring-cream-300">
      <p className="text-sm text-ink-700">{label}</p>
      <p className="mt-2 text-3xl font-bold text-burgundy-900">{value}</p>
      <p className="mt-1 text-xs text-ink-500">{hint}</p>
    </div>
  );
}
