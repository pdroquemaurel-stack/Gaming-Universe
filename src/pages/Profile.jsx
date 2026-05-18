import { useEffect, useState } from 'react';
import { playerProfile } from '../data/playerProfile';

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
  const [liveState, setLiveState] = useState(() =>
    safeStorage.get('playerHubState', {
      xp: playerProfile.xpCurrent,
      coins: playerProfile.coins,
      streakCount: playerProfile.streak,
    }),
  );

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
    { name: 'Free Fire', date: 'Aujourd\'hui', xp: '+25 XP' },
    { name: 'Asphalt', date: 'Hier', xp: '+20 XP' },
    { name: 'Bubble Heroes', date: 'Il y a 2 jours', xp: '+15 XP' },
  ];

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
