export default function LeaderboardCard({ entries, currentPlayer = 'Paul' }) {
  return (
    <div className="card-base space-y-2">
      {entries.map((entry) => {
        const top3 = entry.rank <= 3;
        const isCurrent = entry.player === currentPlayer;

        return (
          <div key={`${entry.player}-${entry.rank}`} className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm ${isCurrent ? 'border-orangeBrand/70 bg-orangeBrand/10' : 'border-white/5 bg-black/20'}`}>
            <div>
              <p className={`font-semibold ${top3 ? 'text-orangeBrand' : 'text-white'}`}>#{entry.rank} {entry.player}</p>
              <p className="text-xs text-zinc-400">{entry.country} • {entry.badge}</p>
            </div>
            <span className="font-semibold text-white">{entry.points}</span>
          </div>
        );
      })}
    </div>
  );
}
