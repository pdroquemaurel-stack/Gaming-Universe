import MetricCard from '../components/MetricCard';
import { freeGames } from '../data/mockData';

const metrics = ['Traffic', 'DAU', 'Ads revenue'];

export default function Play() {
  return (
    <section>
      <h2 className="text-xl font-bold text-orangeBrand">Play</h2>
      <p className="mt-2 text-sm text-zinc-300">Discover free games and play instantly</p>

      <div className="mt-5 space-y-3">
        {freeGames.map((game) => (
          <article key={game.name} className="card-base">
            <h3 className="text-base font-semibold">{game.name}</h3>
            <p className="mt-1 text-xs text-zinc-400">Category: {game.category}</p>
            <button
              type="button"
              className="mt-3 rounded-lg bg-orangeBrand px-3 py-2 text-sm font-medium text-black"
            >
              Play now
            </button>
          </article>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {metrics.map((metric) => (
          <MetricCard key={metric} label={metric} />
        ))}
      </div>
    </section>
  );
}
