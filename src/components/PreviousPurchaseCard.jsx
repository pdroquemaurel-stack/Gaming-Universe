import AssetImage from './AssetImage';

const statusStyles = {
  Utilisé: 'border-zinc-700 bg-zinc-800/70 text-zinc-300',
  Disponible: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
  Activé: 'border-orangeBrand/40 bg-orangeBrand/10 text-orange-200',
};

export default function PreviousPurchaseCard({ purchase, onRepurchase }) {
  return (
    <article className="card-base flex items-center justify-between gap-3 p-3">
      <div className="flex min-w-0 items-center gap-3">
        <AssetImage src={purchase.image} alt={purchase.productName} fallback="🛍️" className="h-11 w-11" />
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-white">{purchase.productName}</h3>
          <p className="text-xs text-zinc-400">{purchase.game} • {purchase.date}</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-xs font-semibold text-orangeBrand">{purchase.price}</span>
            <span className={`rounded-full border px-2 py-0.5 text-[10px] ${statusStyles[purchase.status] || 'border-zinc-700 bg-zinc-800/70 text-zinc-300'}`}>
              {purchase.status}
            </span>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => onRepurchase(purchase)} className="rounded-lg border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand">
        {purchase.cta}
      </button>
    </article>
  );
}
