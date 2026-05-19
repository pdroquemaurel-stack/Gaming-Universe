import { useMemo, useState } from 'react';
import LeaderboardCard from '../components/LeaderboardCard';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { leaderboardCountry, leaderboardFriends, leaderboardGlobal } from '../data/mockData';

const tabs = ['Global', 'Pays', 'Amis'];

export default function Leaderboard() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('Global');
  const [friends, setFriends] = useState(leaderboardFriends);
  const [addInput, setAddInput] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const entries = useMemo(() => {
    if (activeTab === 'Pays') return leaderboardCountry;
    if (activeTab === 'Amis') return friends;
    return leaderboardGlobal;
  }, [activeTab, friends]);

  const handleAddFriend = () => {
    const pseudo = addInput.trim();
    if (!pseudo) return;
    if (friends.some((f) => f.player.toLowerCase() === pseudo.toLowerCase())) {
      showToast('Cet ami est déjà dans le classement');
      return;
    }
    setFriends((prev) => [
      ...prev,
      { rank: prev.length + 1, player: pseudo, country: '—', points: 0, badge: 'Nouveau' },
    ]);
    setAddInput('');
    setShowAddForm(false);
    showToast(`${pseudo} ajouté à tes amis !`);
  };

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
            {tab === 'Amis' && (
              <span className="ml-1 rounded-full bg-white/10 px-1.5 py-0.5 text-[10px]">{friends.length}</span>
            )}
          </button>
        ))}
      </div>

      <LeaderboardCard entries={entries} currentPlayer="AkosuaK95" />

      {activeTab === 'Amis' && (
        <article className="card-base space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Ajouter un ami</h2>
            <span className="text-xs text-zinc-400">{friends.length} ami{friends.length !== 1 ? 's' : ''}</span>
          </div>
          <p className="text-xs text-zinc-400">Entre le pseudo d'un joueur pour l'ajouter à ton classement amis.</p>

          {showAddForm ? (
            <div className="flex gap-2">
              <input
                value={addInput}
                onChange={(e) => setAddInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddFriend()}
                placeholder="Pseudo du joueur"
                className="min-w-0 flex-1 rounded-lg border border-white/20 bg-zinc-900 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-orangeBrand"
                autoFocus
              />
              <button type="button" onClick={handleAddFriend} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">
                Ajouter
              </button>
              <button type="button" onClick={() => { setShowAddForm(false); setAddInput(''); }} className="rounded-lg border border-white/20 px-3 py-2 text-xs text-zinc-300">
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowAddForm(true)}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 py-2.5 text-xs font-semibold text-zinc-400 transition-colors hover:border-orangeBrand/50 hover:text-orangeBrand"
            >
              + Ajouter un ami
            </button>
          )}
        </article>
      )}

      {activeTab !== 'Amis' && (
        <article className="card-base bg-gradient-to-r from-orangeBrand/20 to-zinc-900/60">
          <SectionHeader title="Récompenses" />
          <p className="text-sm text-zinc-200">Les meilleurs joueurs gagnent des pièces, des badges et des accès exclusifs aux tournois.</p>
        </article>
      )}
    </section>
  );
}
