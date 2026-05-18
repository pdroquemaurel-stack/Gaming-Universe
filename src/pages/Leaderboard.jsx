import { useMemo, useState } from 'react';
import LeaderboardCard from '../components/LeaderboardCard';
import SectionHeader from '../components/SectionHeader';
import { leaderboardCountry, leaderboardFriends, leaderboardGlobal } from '../data/mockData';

const tabs = ['Global', 'Pays', 'Amis'];

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('Global');

  const entries = useMemo(() => {
    if (activeTab === 'Pays') return leaderboardCountry;
    if (activeTab === 'Amis') return leaderboardFriends;
    return leaderboardGlobal;
  }, [activeTab]);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Classe<span className="text-orangeBrand">ment</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Classements globaux et pays</p>
      </header>

      <div className="flex gap-2 rounded-2xl border border-white/10 bg-zinc-900 p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold ${activeTab === tab ? 'bg-orangeBrand text-white' : 'text-zinc-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <LeaderboardCard entries={entries} currentPlayer="AkosuaK95" />

      <article className="card-base bg-gradient-to-r from-orangeBrand/20 to-zinc-900/60">
        <SectionHeader title="Récompenses" />
        <p className="text-sm text-zinc-200">Les meilleurs joueurs gagnent des pièces, des badges et des accès exclusifs aux tournois.</p>
      </article>
    </section>
  );
}
