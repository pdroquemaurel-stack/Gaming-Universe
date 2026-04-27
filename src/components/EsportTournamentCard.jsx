import AssetImage from './AssetImage';

export default function EsportTournamentCard({ tournament, onOpen, isSubscriber = false }) {
  const isPremiumLocked = Boolean(tournament.requiresSubscription) && !isSubscriber;

  return (
    <article className="card-base overflow-hidden p-0">
      <button type="button" onClick={() => onOpen(tournament)} className="w-full text-left">
        <div className="relative aspect-video">
          <AssetImage src={tournament.cover || tournament.gameLogo} alt={tournament.game} fallback="🏆" className="h-full" rounded="rounded-none" />
          <div className={`absolute inset-0 ${isPremiumLocked ? 'bg-black/55 backdrop-blur-[2px]' : 'bg-black/35'}`} />
          {tournament.isPremium ? <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-1 text-[10px] text-orange-200">{isPremiumLocked ? '🔒 Premium' : '⭐ Premium'}</span> : null}
          <span className="absolute right-2 top-2 rounded-full bg-orangeBrand/20 px-2 py-1 text-[10px] text-orange-100">{tournament.statusLabel}</span>
        </div>
      </button>

      <div className="space-y-2 p-3">
        <div className="flex items-center gap-3">
          <AssetImage src={tournament.gameLogo} alt={tournament.game} fallback="🏆" className="h-10 w-10" fit="contain" />
          <div>
            <h4 className="text-sm font-semibold text-white">{tournament.name}</h4>
            <p className="text-xs text-zinc-300">{tournament.game} · {tournament.players} joueurs</p>
          </div>
        </div>
        <p className="text-sm font-bold text-orangeBrand">{tournament.prize}</p>
        {tournament.requiresSubscription ? <p className="text-[11px] text-zinc-300">Accès réservé aux abonnés Premium</p> : null}
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-zinc-300">{tournament.dateLabel}</span>
          <button type="button" onClick={() => onOpen(tournament)} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">{tournament.cta}</button>
        </div>
      </div>
    </article>
  );
}
