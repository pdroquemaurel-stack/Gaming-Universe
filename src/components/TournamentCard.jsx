import Badge from './Badge';

const ctaByStatus = {
  Upcoming: 'Register',
  Live: 'View live',
  Closed: 'View ranking',
};

export default function TournamentCard({ tournament }) {
  return (
    <article className="card-base overflow-hidden p-0">
      {tournament.image ? (
        <img src={tournament.image} alt={tournament.title} className="h-36 w-full object-cover" />
      ) : (
        <div className="flex h-36 w-full items-center justify-center bg-zinc-800 text-4xl">{tournament.fallback}</div>
      )}
      <div className="space-y-2 p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-white">{tournament.title}</h3>
            <p className="text-xs text-zinc-300">{tournament.game}</p>
          </div>
          <Badge text={tournament.status} tone={tournament.status === 'Live' ? 'orange' : 'default'} />
        </div>
        <div className="flex items-center justify-between text-xs text-zinc-300">
          <span>Prize: {tournament.prizePool}</span>
          <span>{tournament.participants} players</span>
        </div>
        <button type="button" className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">
          {ctaByStatus[tournament.status]}
        </button>
      </div>
    </article>
  );
}
