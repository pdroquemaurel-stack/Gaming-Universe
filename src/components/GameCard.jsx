export default function GameCard({ title, image, buttonLabel = 'Play now', fallback = '🕹️' }) {
  const hasImage = Boolean(image);

  return (
    <article className="card-base relative w-40 flex-shrink-0 overflow-hidden p-0">
      {hasImage ? (
        <img src={image} alt={title} className="h-44 w-full object-cover" />
      ) : (
        <div className="flex h-44 w-full items-center justify-center bg-zinc-800 text-4xl">{fallback}</div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-3">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <button type="button" className="mt-2 w-full rounded-md bg-orangeBrand px-2 py-2 text-xs font-semibold text-white">
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}
