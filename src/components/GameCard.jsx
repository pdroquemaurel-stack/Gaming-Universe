import Badge from './Badge';

export default function GameCard({ title, genre, image, tags = [], reward, buttonLabel = 'Play', fallback = '🕹️' }) {
  const hasImage = Boolean(image);

  return (
    <article className="card-base relative w-44 flex-shrink-0 overflow-hidden p-0">
      {hasImage ? (
        <img src={image} alt={title} className="h-44 w-full object-cover" />
      ) : (
        <div className="flex h-44 w-full items-center justify-center bg-zinc-800 text-4xl">{fallback}</div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 space-y-2 p-3">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-[11px] text-zinc-300">{genre}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={`${title}-${tag}`} text={tag} tone={tag === 'Trending' || tag === 'Rewarded' ? 'orange' : 'default'} />
          ))}
        </div>
        {reward ? <p className="text-[10px] text-orangeBrand">{reward}</p> : null}
        <button type="button" className="w-full rounded-md bg-orangeBrand px-2 py-2 text-xs font-semibold text-white">{buttonLabel}</button>
      </div>
    </article>
  );
}
