import SectionHeader from '../components/SectionHeader';
import { featuredTournament, leaderboard, upcomingEvents } from '../data/mockData';

export default function Esport() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">E-<span className="text-orangeBrand">Sport</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Competitive space with rankings and events</p>
      </header>

      <div>
        <SectionHeader title="Featured tournament" />
        <article className="card-base relative min-h-48 overflow-hidden p-0">
          {featuredTournament.image ? (
            <img src={featuredTournament.image} alt={featuredTournament.title} className="h-48 w-full object-cover" />
          ) : (
            <div className="flex h-48 w-full items-center justify-center bg-zinc-800 text-5xl">{featuredTournament.fallback}</div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-lg font-semibold text-white">{featuredTournament.title}</h3>
            <p className="mt-1 text-sm text-zinc-200">{featuredTournament.description}</p>
            <button type="button" className="mt-3 rounded-lg bg-orangeBrand px-4 py-2 text-sm font-semibold text-white">
              Join
            </button>
          </div>
        </article>
      </div>

      <div>
        <SectionHeader title="Leaderboard" subtitle="Top 5 players" />
        <ul className="card-base space-y-2">
          {leaderboard.map((entry) => (
            <li key={entry.rank} className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-sm">
              <span className={`${entry.rank <= 3 ? 'font-bold text-orangeBrand' : 'text-zinc-300'}`}>
                #{entry.rank} {entry.player}
              </span>
              <span className="font-semibold text-white">{entry.points} pts</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionHeader title="Upcoming events" />
        <ul className="space-y-2">
          {upcomingEvents.map((event) => (
            <li key={event} className="card-base p-3 text-sm text-zinc-300">• {event}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
