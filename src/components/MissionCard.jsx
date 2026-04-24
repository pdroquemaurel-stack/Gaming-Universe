export default function MissionCard({ mission }) {
  return (
    <article className="card-base flex items-center justify-between gap-3">
      <div>
        <p className="text-xs text-orangeBrand">{mission.title}</p>
        <p className="mt-1 text-sm font-semibold text-white">{mission.text}</p>
      </div>
      <button type="button" className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">{mission.cta}</button>
    </article>
  );
}
