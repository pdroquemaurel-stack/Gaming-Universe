import MetricCard from '../components/MetricCard';
import SectionHeader from '../components/SectionHeader';
import { esportData } from '../data/content';

function EsportPage() {
  return (
    <section className="space-y-5">
      <SectionHeader
        title="Esport"
        subtitle="Compete in tournaments, climb the leaderboard, and win rewards"
      />

      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">Tournaments</h2>
        <ul className="mt-3 space-y-3">
          {esportData.tournaments.map((tournament) => (
            <li key={tournament.name} className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
              <p className="font-semibold text-white">{tournament.name}</p>
              <p className="text-sm text-zinc-300">Format: {tournament.format}</p>
              <p className="text-sm text-zinc-200">Reward: {tournament.reward}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">Leaderboard</h2>
        <ul className="mt-3 space-y-2">
          {esportData.leaderboard.map((entry) => (
            <li
              key={entry.player}
              className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2"
            >
              <span className="text-sm text-white">
                #{entry.rank} {entry.player}
              </span>
              <span className="text-sm font-semibold text-gamingOrange">{entry.points} pts</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-300">Key metrics</h2>
        <div className="grid grid-cols-1 gap-3">
          {esportData.metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EsportPage;
