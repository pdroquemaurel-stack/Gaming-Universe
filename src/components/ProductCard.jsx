export default function ProductCard({ title, description, price, cta = 'Buy', image, fallback = '🛒', featured = false }) {
  const hasImage = Boolean(image);

  return (
    <article className={`card-base relative overflow-hidden p-0 ${featured ? 'ring-1 ring-orangeBrand/60' : ''}`}>
      {hasImage ? (
        <img src={image} alt={title} className="h-40 w-full object-cover" />
      ) : (
        <div className="flex h-40 w-full items-center justify-center bg-zinc-800 text-4xl">{fallback}</div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <span className="rounded-full bg-orangeBrand px-2 py-1 text-[10px] font-bold text-white">{price}</span>
        </div>
        <p className="mt-1 text-xs text-zinc-200">{description}</p>
        <button type="button" className="mt-2 rounded-md bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">
          {cta}
        </button>
      </div>
    </article>
  );
}
