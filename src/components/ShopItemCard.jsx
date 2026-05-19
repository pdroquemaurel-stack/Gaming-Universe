import AssetImage from './AssetImage';

export default function ShopItemCard({ item, onBuy }) {
  return (
    <article className="card-base space-y-2">
      <AssetImage src={item.image} alt={item.name} fallback="🛍️" className="h-24 w-full" />
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-white">{item.name}</h4>
        {item.badge ? <span className="rounded-full border border-orangeBrand/40 px-2 py-0.5 text-[10px] text-orangeBrand">{item.badge}</span> : null}
      </div>
      <p className="text-xs text-zinc-300">{item.description}</p>
      {item.pointsDiscount ? <p className="text-xs text-zinc-200">{item.pointsDiscount}</p> : null}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-orangeBrand">{item.price}</span>
        <button type="button" onClick={() => onBuy?.(item)} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Acheter</button>
      </div>
    </article>
  );
}
