import MetricCard from '../components/MetricCard';
import SectionHeader from '../components/SectionHeader';
import { playData } from '../data/content';

function PlayPage() {
  return (
    <section className="space-y-5">
      <SectionHeader
        title="Play"
        subtitle="Free games discovery and daily challenges to drive engagement"
      />

      <div className="space-y-3">
        {playData.games.map((game) => (
          <article key={game.name} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-base font-semibold text-white">{game.name}</p>
            <p className="text-sm text-zinc-300">{game.genre}</p>
            <p className="mt-2 text-sm text-zinc-200">Daily challenge: {game.challenge}</p>
            <button
              type="button"
              className="mt-3 rounded-full bg-gamingOrange px-4 py-2 text-sm font-semibold text-black"
            >
              Play now
            </button>
          </article>
        ))}
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-300">Key metrics</h2>
        <div className="grid grid-cols-1 gap-3">
          {playData.metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlayPage;
