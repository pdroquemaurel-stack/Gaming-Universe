import MetricCard from '../components/MetricCard';
import { leaderboard, tournament } from '../data/mockData';

const metrics = ['Retention', 'Community', 'Sponsorship'];

export default function Esport() {
  return (
    <section>
      <h2 className="text-xl font-bold text-orangeBrand">Esport</h2>
      <p className="mt-2 text-sm text-zinc-300">Compete in tournaments and climb the leaderboard</p>

      <article className="card-base mt-5">
        <h3 className="text-base font-semibold">{tournament.name}</h3>
        <p className="mt-1 text-xs text-zinc-400">Game: {tournament.game}</p>
        <p className="mt-1 text-xs text-zinc-400">Schedule: {tournament.date}</p>
        <p className="mt-1 text-sm text-orangeBrand">{tournament.prize}</p>
        <button
          type="button"
          className="mt-3 rounded-lg bg-orangeBrand px-3 py-2 text-sm font-medium text-black"
        >
          Join tournament
        </button>
      </article>

      <div className="card-base mt-4">
        <h3 className="text-sm font-semibold text-zinc-200">Leaderboard</h3>
        <ul className="mt-3 space-y-2">
          {leaderboard.map((entry) => (
            <li key={entry.rank} className="flex items-center justify-between text-sm">
              <span className="text-zinc-300">#{entry.rank} {entry.player}</span>
              <span className="font-semibold text-orangeBrand">{entry.points} pts</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {metrics.map((metric) => (
          <MetricCard key={metric} label={metric} />
        ))}
      </div>
    </section>
  );
}
