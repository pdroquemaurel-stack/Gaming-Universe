import AssetImage from './AssetImage';

function discountPercent(originalPrice, promoPrice) {
  const o = parseInt(originalPrice.replace(/\D/g, ''), 10);
  const p = parseInt(promoPrice.replace(/\D/g, ''), 10);
  if (!o || !p) return null;
  return Math.round((1 - p / o) * 100);
}

export default function ShopPromotionCard({ promo, onBuy }) {
  const pct = discountPercent(promo.originalPrice, promo.promoPrice);
  return (
    <article className="card-base min-w-[250px] flex-shrink-0 space-y-3">
      <div className="relative">
        <AssetImage src={promo.image} alt={promo.title} fallback="🔥" className="h-28 w-full" />
        {pct ? (
          <span className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
            -{pct}%
          </span>
        ) : null}
        {promo.badge ? (
          <span className="absolute right-2 top-2 rounded-full bg-orangeBrand/90 px-2 py-0.5 text-[10px] font-semibold text-white">
            {promo.badge}
          </span>
        ) : null}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{promo.title}</h3>
        <p className="text-xs text-zinc-400">{promo.game}</p>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-zinc-500 line-through">{promo.originalPrice}</span>
        <span className="font-bold text-orangeBrand">{promo.promoPrice}</span>
      </div>
      {promo.pointsDiscount ? (
        <p className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300">
          🪙 {promo.pointsDiscount}
        </p>
      ) : null}
      <button type="button" onClick={() => onBuy(promo)} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Acheter</button>
    </article>
  );
}
