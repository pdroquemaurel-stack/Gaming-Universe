import AssetImage from './AssetImage';

export default function ShopPromotionCard({ promo, onBuy }) {
  return (
    <article className="card-base min-w-[250px] flex-shrink-0 space-y-3">
      <AssetImage src={promo.image} alt={promo.title} fallback="🔥" className="h-28 w-full" />
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-white">{promo.title}</h3>
          <p className="text-xs text-zinc-400">{promo.game}</p>
        </div>
        {promo.badge ? <span className="rounded-full border border-orangeBrand/40 bg-orangeBrand/10 px-2 py-0.5 text-[10px] font-semibold text-orangeBrand">{promo.badge}</span> : null}
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-zinc-500 line-through">{promo.originalPrice}</span>
        <span className="font-bold text-orangeBrand">{promo.promoPrice}</span>
      </div>
      <p className="text-xs text-zinc-200">{promo.pointsDiscount}</p>
      <button type="button" onClick={() => onBuy(promo)} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Acheter</button>
    </article>
  );
}
