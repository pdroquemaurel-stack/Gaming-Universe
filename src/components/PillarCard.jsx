export default function PillarCard({ pillar, onNavigate }) {
  return (
    <article className="card-base flex min-w-[210px] flex-shrink-0 flex-col justify-between gap-3">
      <div>
        <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
        <p className="mt-1 text-xs text-zinc-300">{pillar.subtitle}</p>
      </div>
      <button type="button" onClick={() => onNavigate(pillar.page)} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">
        {pillar.cta}
      </button>
    </article>
  );
}
