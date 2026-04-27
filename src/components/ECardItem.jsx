import AssetImage from './AssetImage';

export default function ECardItem({ card, onBuy }) {
  return (
    <article className="card-base min-w-[250px] flex-shrink-0 space-y-3">
      <AssetImage src={card.image} alt={card.name} fallback="🎁" className="h-28 w-full" />
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-white">{card.name}</h3>
        {card.badge ? <span className="rounded-full border border-orangeBrand/40 bg-orangeBrand/10 px-2 py-0.5 text-[10px] font-semibold text-orangeBrand">{card.badge}</span> : null}
      </div>
      <div className="flex flex-wrap gap-1">
        {card.amounts.map((amount) => (
          <span key={amount} className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-zinc-300">{amount}</span>
        ))}
      </div>
      <p className="text-xs font-semibold text-white">{card.priceLabel}</p>
      <p className="text-xs text-zinc-200">{card.pointsDiscount}</p>
      <button type="button" onClick={() => onBuy(card)} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Acheter une e-card</button>
    </article>
  );
}
