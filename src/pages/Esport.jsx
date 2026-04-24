import LeaderboardCard from '../components/LeaderboardCard';
import SectionHeader from '../components/SectionHeader';
import TournamentCard from '../components/TournamentCard';
import { leaderboardCountry, leaderboardGlobal, upcomingEvents, tournaments } from '../data/mockData';

export default function Esport() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Esport <span className="text-orangeBrand">Arena</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Compete, rank up and win rewards</p>
      </header>

      <div className="space-y-3">
        <SectionHeader title="Tournaments" subtitle="Upcoming, live and closed" />
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>

      <div className="space-y-3">
        <SectionHeader title="Global ranking" />
        <LeaderboardCard entries={leaderboardGlobal} currentPlayer="Paul" />
      </div>

      <div className="space-y-3">
        <SectionHeader title="Country ranking" subtitle="Morocco" />
        <LeaderboardCard entries={leaderboardCountry} currentPlayer="Paul" />
      </div>

      <div>
        <SectionHeader title="Upcoming events" />
        <div className="space-y-2">
          {upcomingEvents.map((event) => (
            <article key={event.id} className="card-base">
              <p className="text-sm font-semibold text-white">{event.title}</p>
              <p className="mt-1 text-xs text-zinc-300">{event.date}</p>
              <p className="text-xs text-orangeBrand">{event.region}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
