import AssetImage from './AssetImage';
import PointsBadge from './PointsBadge';

export default function AppCard({ app }) {
  return (
    <article className="card-base overflow-hidden p-0">
      <div className="relative">
        <AssetImage src={app.image} alt={app.name} fallback={app.fallback || '📱'} className="h-28" rounded="rounded-none" />
        <div className="absolute right-2 top-2"><PointsBadge points={app.points} compact /></div>
      </div>
      <div className="space-y-2 p-3">
        <h3 className="text-sm font-semibold text-white">{app.name}</h3>
        <p className="text-xs text-zinc-300">⭐ {app.rating} · {app.downloads}</p>
        <a href={app.playStoreUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-lg border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand">Download</a>
      </div>
    </article>
  );
}
