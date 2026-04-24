import SectionHeader from '../components/SectionHeader';
import { featuredTournament, leaderboard, upcomingEvents } from '../data/mockData';

export default function Esport() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-orangeBrand">E-Sport</h1>
        <p className="mt-2 text-sm text-zinc-300">Competitive and community focused</p>
      </header>

      <div>
        <SectionHeader title="Featured tournament" />
        <article className="card-base">
          <h3 className="text-base font-semibold">{featuredTournament.title}</h3>
          <p className="mt-2 text-sm text-zinc-300">{featuredTournament.description}</p>
          <button type="button" className="mt-3 rounded-lg bg-orangeBrand px-4 py-2 text-sm font-semibold text-black">
            Join
          </button>
        </article>
      </div>

      <div>
        <SectionHeader title="Leaderboard" subtitle="Top 5 players" />
        <ul className="card-base space-y-2">
          {leaderboard.map((entry) => (
            <li key={entry.rank} className="flex items-center justify-between text-sm">
              <span className="text-zinc-300">#{entry.rank} {entry.player}</span>
              <span className="font-semibold text-orangeBrand">{entry.points} pts</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionHeader title="Upcoming events" />
        <ul className="card-base space-y-2">
          {upcomingEvents.map((event) => (
            <li key={event} className="text-sm text-zinc-300">• {event}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
