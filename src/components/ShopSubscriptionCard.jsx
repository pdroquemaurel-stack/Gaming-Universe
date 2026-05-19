export default function ShopSubscriptionCard({ subscription, onSubscribe }) {
  return (
    <article className="card-base min-w-[250px] flex-shrink-0 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-white">{subscription.name}</h3>
          <p className="text-xs text-zinc-400">Durée : {subscription.duration}</p>
        </div>
        {subscription.badge ? <span className="rounded-full border border-orangeBrand/40 bg-orangeBrand/10 px-2 py-0.5 text-[10px] font-semibold text-orangeBrand">{subscription.badge}</span> : null}
      </div>
      <ul className="space-y-1 text-xs text-zinc-300">
        {subscription.benefits.map((benefit) => (
          <li key={benefit}>• {benefit}</li>
        ))}
      </ul>
      <div className="rounded-lg border border-white/10 bg-zinc-950/80 p-2 text-xs text-zinc-200">
        <p className="font-semibold text-white">{subscription.price}</p>
        <p>{subscription.pointsOption}</p>
      </div>
      <button type="button" onClick={() => onSubscribe(subscription)} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">S’abonner</button>
    </article>
  );
}
