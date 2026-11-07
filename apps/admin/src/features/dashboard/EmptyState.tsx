type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="grid place-items-center rounded-3xl border border-dashed border-cream-300 bg-cream-100 px-6 py-20 text-center">
      <div>
        <h2 className="text-xl font-semibold text-burgundy-900">{title}</h2>
        <p className="mt-2 max-w-md text-ink-700">{description}</p>
      </div>
    </div>
  );
}
