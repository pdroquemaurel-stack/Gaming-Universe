export default function FeatureCard({ title, userDescription, businessValue, cta }) {
  return (
    <article className="card-base">
      <h3 className="text-lg font-semibold text-orangeBrand">{title}</h3>
      <p className="mt-2 text-sm text-zinc-200">{userDescription}</p>
      <p className="mt-2 text-xs text-zinc-400">Business value: {businessValue}</p>
      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-orangeBrand px-3 py-2 text-sm font-medium text-black transition hover:brightness-95"
      >
        {cta}
      </button>
    </article>
  );
}
