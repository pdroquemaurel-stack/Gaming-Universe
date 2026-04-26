import AssetImage from './AssetImage';

export default function VideoCard({ video, subtitle }) {
  return (
    <article className="card-base overflow-hidden p-0">
      <AssetImage src={video.thumbnail} alt={video.title} fallback="🎬" className="h-28" rounded="rounded-none" />
      <div className="space-y-1 p-3">
        <h4 className="text-sm font-semibold text-white">{video.title}</h4>
        <p className="text-xs text-zinc-300">{subtitle(video)}</p>
        <div className="flex gap-2 text-[10px]">
          <span className="rounded-full bg-zinc-800 px-2 py-1 text-zinc-200">{video.access}</span>
          {video.status ? <span className="rounded-full bg-orangeBrand/20 px-2 py-1 text-orangeBrand">{video.status}</span> : null}
        </div>
      </div>
    </article>
  );
}
