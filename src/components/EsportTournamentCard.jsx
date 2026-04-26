import AssetImage from './AssetImage';

export default function EsportTournamentCard({ tournament, onOpen }) {
  return (
    <article className="card-base space-y-2">
      <div className="flex items-center gap-3">
        <AssetImage src={tournament.gameLogo} alt={tournament.game} fallback="🏆" className="h-12 w-12" />
        <div>
          <h4 className="text-sm font-semibold text-white">{tournament.name}</h4>
          <p className="text-xs text-zinc-300">{tournament.game} · {tournament.players} joueurs</p>
        </div>
      </div>
      <p className="text-xs text-zinc-300">{tournament.prize}</p>
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-orangeBrand">{tournament.dateLabel}</span>
        <button type="button" onClick={() => onOpen(tournament)} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">{tournament.cta}</button>
      </div>
    </article>
  );
}
