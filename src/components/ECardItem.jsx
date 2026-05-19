import AssetImage from './AssetImage';

export default function ECardItem({ card, onBuy }) {
  return (
    <article className="card-base min-w-[250px] flex-shrink-0 space-y-3">
      <div className="relative">
        <AssetImage src={card.image} alt={card.name} fallback="🎁" className="h-28 w-full" />
        {card.badge ? (
          <span className="absolute right-2 top-2 rounded-full bg-orangeBrand/90 px-2 py-0.5 text-[10px] font-semibold text-white">
            {card.badge}
          </span>
        ) : null}
      </div>
      <h3 className="text-sm font-semibold text-white">{card.name}</h3>
      <div className="flex flex-wrap gap-1">
        {card.amounts.map((amount) => (
          <span key={amount} className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-zinc-300">{amount}</span>
        ))}
      </div>
      <p className="text-xs font-semibold text-white">{card.priceLabel}</p>
      {card.pointsDiscount ? (
        <p className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300">
          🪙 {card.pointsDiscount}
        </p>
      ) : null}
      <button type="button" onClick={() => onBuy(card)} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Acheter une e-card</button>
    </article>
  );
}
