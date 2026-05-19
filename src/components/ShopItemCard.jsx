import AssetImage from './AssetImage';

export default function ShopItemCard({ item, onBuy }) {
  return (
    <article className="card-base space-y-2">
      <div className="relative">
        <AssetImage src={item.image} alt={item.name} fallback="🛍️" className="h-24 w-full" />
        {item.badge ? (
          <span className="absolute right-2 top-2 rounded-full bg-orangeBrand/90 px-2 py-0.5 text-[10px] font-semibold text-white">
            {item.badge}
          </span>
        ) : null}
      </div>
      <h4 className="text-sm font-semibold text-white">{item.name}</h4>
      <p className="text-xs text-zinc-300">{item.description}</p>
      {item.pointsDiscount ? (
        <p className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300">
          🪙 {item.pointsDiscount}
        </p>
      ) : null}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-orangeBrand">{item.price}</span>
        <button type="button" onClick={() => onBuy?.(item)} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Acheter</button>
      </div>
    </article>
  );
}
