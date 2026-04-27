import AssetImage from './AssetImage';

export default function FeatureCard({ title, description, cta, image, fallback = '🎮' }) {
  return (
    <article className="card-base relative min-h-44 overflow-hidden p-0">
      <AssetImage src={image} alt={title} fallback={fallback} className="h-44 w-full" rounded="rounded-none" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-1 text-xs text-zinc-200">{description}</p>
        <button type="button" className="mt-3 rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">
          {cta}
        </button>
      </div>
    </article>
  );
}
