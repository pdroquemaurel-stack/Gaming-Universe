import AssetImage from './AssetImage';

const accessStyles = {
  gratuit: 'bg-emerald-500/20 text-emerald-200',
  premium: 'bg-orangeBrand/20 text-orange-100',
  live: 'bg-red-500/20 text-red-100',
};

export default function VideoCard({ video, subtitle, onOpen, isSubscriber = false }) {
  const isLocked = Boolean(video.requiresSubscription) && !isSubscriber;

  return (
    <article className="card-base overflow-hidden p-0">
      <button type="button" onClick={() => onOpen?.(video)} className="w-full text-left">
        <div className="relative aspect-video">
          <AssetImage src={video.thumbnail} alt={video.title} fallback="🎬" className="h-full" rounded="rounded-none" />
          <div className={`absolute inset-0 ${isLocked ? 'backdrop-blur-[2px] bg-black/40' : 'bg-black/20'}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-white/20 bg-black/70 px-3 py-2 text-xs font-semibold text-white">▶ Lire</div>
          </div>
          {isLocked ? <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-1 text-[10px] text-orange-200">🔒 Premium</span> : null}
          <span className={`absolute right-2 top-2 rounded-full px-2 py-1 text-[10px] font-semibold ${accessStyles[video.badgeType] || 'bg-zinc-800 text-zinc-100'}`}>{video.badgeLabel}</span>
        </div>
      </button>
      <div className="space-y-1 p-3">
        <h4 className="text-sm font-semibold text-white">{video.title}</h4>
        <p className="text-xs text-zinc-300">{subtitle(video)}</p>
        <p className="text-[11px] text-zinc-400">Source : {video.source}</p>
      </div>
    </article>
  );
}
