import { useEffect, useState } from 'react';
import { useToast } from '../components/ToastProvider';
import { playerProfile } from '../data/playerProfile';
import { leaderboardFriends } from '../data/mockData';

const memoryStore = {};
const safeStorage = {
  get(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return key in memoryStore ? memoryStore[key] : fallback;
    }
  },
};

export default function Profile() {
  const { showToast } = useToast();

  const [liveState, setLiveState] = useState(() =>
    safeStorage.get('playerHubState', {
      xp: playerProfile.xpCurrent,
      coins: playerProfile.coins,
      streakCount: playerProfile.streak,
    }),
  );

  const [friends, setFriends] = useState(
    leaderboardFriends.filter((f) => f.player !== 'AkosuaK95'),
  );
  const [addInput, setAddInput] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const onUpdate = (event) => setLiveState(event.detail);
    window.addEventListener('maxit:state-updated', onUpdate);
    return () => window.removeEventListener('maxit:state-updated', onUpdate);
  }, []);

  const xpPercent = Math.min(Math.round((liveState.xp / playerProfile.xpNextLevel) * 100), 100);

  const metrics = [
    { label: 'Max it Points', value: liveState.coins.toLocaleString('fr-FR') },
    { label: 'Jeux joués', value: playerProfile.gamesPlayed },
    { label: 'Tournois joués', value: playerProfile.tournamentsPlayed },
    { label: 'Rang pays', value: playerProfile.rank },
  ];

  const streakDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const achievements = [
    { id: 'first-game', emoji: '🎮', label: 'Premier Jeu', unlocked: true },
    { id: 'streak-3', emoji: '🔥', label: 'Streak 3j', unlocked: true },
    { id: 'top-10', emoji: '🏅', label: 'Top 10 Pays', unlocked: true },
    { id: 'tournament', emoji: '🏆', label: '1er Tournoi', unlocked: true },
    { id: 'streak-30', emoji: '⚡', label: 'Streak 30j', unlocked: false, condition: 'Reviens 30 jours de suite' },
    { id: 'legend', emoji: '👑', label: 'Legend', unlocked: false, condition: 'Atteins le niveau 50' },
  ];

  const recentGames = [
    { name: 'Free Fire', date: "Aujourd'hui", xp: '+25 XP' },
    { name: 'Asphalt', date: 'Hier', xp: '+20 XP' },
    { name: 'Bubble Heroes', date: 'Il y a 2 jours', xp: '+15 XP' },
  ];

  const handleAddFriend = () => {
    const pseudo = addInput.trim();
    if (!pseudo) return;
    if (friends.some((f) => f.player.toLowerCase() === pseudo.toLowerCase())) {
      showToast('Cet ami est déjà dans ta liste');
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
    <section className="space-y-5">
      <header className="card-base flex items-center gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-orangeBrand/20 text-2xl font-bold text-orangeBrand">
          {playerProfile.initials}
          <span className="absolute -bottom-1 -right-1 rounded-full bg-orangeBrand px-1.5 py-0.5 text-[10px] font-bold text-black">
            {playerProfile.levelName}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-bold text-white">{playerProfile.pseudo}</h1>
          <p className="text-xs text-zinc-400">{playerProfile.country} · {playerProfile.rank}</p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className="rounded-full bg-orangeBrand/15 px-2 py-0.5 text-[10px] font-semibold text-orangeBrand">
              Lv. {playerProfile.level}
            </span>
            <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300">
              🔥 {liveState.streakCount} jours
            </span>
            <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-300">
              {playerProfile.bundle}
            </span>
          </div>
        </div>
      </header>

      <article className="card-base space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">Progression XP</h2>
          <span className="text-xs text-zinc-400">{liveState.xp} / {playerProfile.xpNextLevel} XP</span>
        </div>
        <div className="h-2.5 rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orangeBrand to-amber-400 transition-all duration-500"
            style={{ width: `${xpPercent}%` }}
          />
        </div>
        <p className="text-xs text-zinc-400">{xpPercent}% vers Lv. {playerProfile.level + 1}</p>
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="text-[11px] text-zinc-400">{metric.label}</p>
              <p className="mt-0.5 text-sm font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="card-base space-y-3">
        <h2 className="text-sm font-semibold text-white">Streak — 7 derniers jours</h2>
        <div className="flex gap-1.5">
          {streakDays.map((day, idx) => {
            const done = idx < Math.min(liveState.streakCount, 7);
            const isToday = idx === Math.min(liveState.streakCount - 1, 6) && done;
            return (
              <div
                key={day}
                className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-2 text-[10px] font-semibold
                  ${done ? 'bg-orangeBrand/20 text-orangeBrand' : 'bg-zinc-800 text-zinc-500'}
                  ${isToday ? 'ring-1 ring-orangeBrand' : ''}`}
              >
                <span>{day}</span>
                <span>{done ? '✓' : '·'}</span>
              </div>
            );
          })}
        </div>
      </article>

      <article className="card-base space-y-3">
        <h2 className="text-sm font-semibold text-white">Achievements</h2>
        <div className="grid grid-cols-3 gap-2">
          {achievements.map((badge) => (
            <div
              key={badge.id}
              className={`flex flex-col items-center rounded-xl p-3 text-center
                ${badge.unlocked ? 'border border-orangeBrand/30 bg-orangeBrand/10' : 'border border-white/5 bg-zinc-900/50 opacity-50'}`}
            >
              <span className="text-2xl">{badge.emoji}</span>
              <p className={`mt-1 text-[10px] font-semibold ${badge.unlocked ? 'text-orangeBrand' : 'text-zinc-500'}`}>
                {badge.label}
              </p>
              {!badge.unlocked && (
                <p className="mt-0.5 text-[9px] text-zinc-600">{badge.condition}</p>
              )}
            </div>
          ))}
        </div>
      </article>

      <article className="card-base space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">Mes amis</h2>
          <span className="text-xs text-zinc-400">{friends.length} ami{friends.length !== 1 ? 's' : ''}</span>
        </div>

        {friends.length === 0 && !showAddForm && (
          <p className="text-xs text-zinc-500">Aucun ami pour l'instant. Ajoute-en un !</p>
        )}

        <div className="space-y-2">
          {friends.map((friend) => (
            <div key={friend.player} className="flex items-center gap-3 rounded-xl border border-white/8 bg-black/30 px-3 py-2.5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orangeBrand/20 text-xs font-bold text-orangeBrand">
                {friend.player.slice(0, 2).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">{friend.player}</p>
                <p className="text-xs text-zinc-400">{friend.country} · {friend.badge}</p>
              </div>
              <span className="text-xs font-semibold text-orangeBrand">{friend.points > 0 ? `${friend.points} pts` : '—'}</span>
            </div>
          ))}
        </div>

        {showAddForm ? (
          <div className="flex gap-2">
            <input
              value={addInput}
              onChange={(e) => setAddInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddFriend()}
              placeholder="Pseudo de l'ami"
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

      <article className="card-base space-y-3">
        <h2 className="text-sm font-semibold text-white">Derniers jeux</h2>
        <div className="space-y-2">
          {recentGames.map((game) => (
            <div key={game.name} className="flex items-center justify-between rounded-xl border border-white/8 bg-black/30 px-3 py-2.5">
              <div>
                <p className="text-sm font-medium text-white">{game.name}</p>
                <p className="text-xs text-zinc-400">{game.date}</p>
              </div>
              <span className="text-xs font-semibold text-orangeBrand">{game.xp}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="card-base space-y-3">
        <h2 className="text-sm font-semibold text-white">Bundle actif</h2>
        <div className="flex items-center justify-between rounded-xl border border-orangeBrand/20 bg-orangeBrand/5 p-3">
          <div>
            <p className="text-sm font-semibold text-white">{playerProfile.bundle}</p>
            <p className="text-xs text-zinc-400">Data gaming restante</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-orangeBrand">{playerProfile.dataRemaining}</p>
            <p className="text-[10px] text-zinc-500">FREE OF DATA actif</p>
          </div>
        </div>
      </article>

      <article className="card-base space-y-3">
        <h2 className="text-sm font-semibold text-white">Connexions externes</h2>
        {['Free Fire', 'PUBG Mobile', 'EA SPORTS FC', 'Fortnite'].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-3">
            <div>
              <p className="text-sm font-medium text-white">{item}</p>
              <p className="text-xs text-zinc-400">Non connecté</p>
            </div>
            <button type="button" className="rounded-md border border-orangeBrand px-3 py-1.5 text-xs font-semibold text-orangeBrand">
              Connecter
            </button>
          </div>
        ))}
      </article>
    </section>
  );
}
