import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { continuePlayingGames, dailyMissions, leaderboard, playerDefaults } from '../data/mockGamingData';

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
  set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      memoryStore[key] = value;
    }
  },
};

export default function Home() {
  const { showToast } = useToast();
  const initial = safeStorage.get('playerHubState', {
    xp: playerDefaults.xp,
    coins: playerDefaults.coins,
    streakCount: playerDefaults.streak,
    lastClaimDate: null,
    activities: [],
  });

  const [state, setState] = useState(initial);
  const [sessionModal, setSessionModal] = useState(false);

  const persist = (next) => {
    setState(next);
    safeStorage.set('playerHubState', next);
  };

  const addActivity = (label) => {
    const next = { ...state, activities: [label, ...state.activities].slice(0, 6) };
    persist(next);
  };

  const xpPercent = Math.min(Math.round((state.xp / playerDefaults.xpTarget) * 100), 100);
  const today = new Date().toISOString().slice(0, 10);
  const claimedToday = state.lastClaimDate === today;

  const claimDaily = () => {
    if (claimedToday) return showToast('Déjà récupéré aujourd’hui');
    const next = { ...state, coins: state.coins + 30, streakCount: state.streakCount + 1, lastClaimDate: today, activities: ['Récompense quotidienne récupérée +30 Max it Points', ...state.activities].slice(0, 6) };
    persist(next);
    showToast('Récompense récupérée : +30 Max it Points');
  };

  const completeSession = (gameName) => {
    const next = { ...state, xp: state.xp + 25, coins: state.coins + 10, activities: [`${gameName} partie terminée +25 XP`, ...state.activities].slice(0, 6) };
    persist(next);
    setSessionModal(true);
  };


  const streakDays = useMemo(
    () => Array.from({ length: 7 }).map((_, index) => ({ day: index + 1, done: index < Math.min(state.streakCount, 7), today: index === Math.min(state.streakCount, 6) && !claimedToday })),
    [state.streakCount, claimedToday],
  );

  return (
    <section className="space-y-4">
      <header className="card-base orange-glow sticky top-20 z-10 bg-gradient-to-br from-zinc-900 to-black">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orangeBrand/30 font-bold text-orangeBrand">{playerDefaults.avatar}</div>
            <div><p className="text-sm font-bold text-white">{playerDefaults.name}</p><p className="text-xs text-zinc-300">Level {playerDefaults.level}</p></div>
          </div>
          <button className="text-lg">🔔</button>
        </div>
        <p className="mt-2 text-xs text-zinc-300">XP: {state.xp} / {playerDefaults.xpTarget}</p>
        <div className="h-2 rounded-full bg-zinc-800"><div className="h-full rounded-full bg-orangeBrand" style={{ width: `${xpPercent}%` }} /></div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
          <div className="rounded-lg bg-zinc-900/80 p-2">Level<br /><span className="font-bold text-orangeBrand">{playerDefaults.level}</span></div>
          <div className="rounded-lg bg-zinc-900/80 p-2">Max it Points<br /><span className="font-bold text-orangeBrand">{state.coins}</span></div>
          <div className="rounded-lg bg-zinc-900/80 p-2">Streak<br /><span className="font-bold text-orangeBrand">{state.streakCount} jours</span></div>
        </div>
      </header>

      <div>
        <SectionHeader title="Continue Playing" subtitle="Reprends ta session en 1 clic" />
        <div className="space-y-2">
          {continuePlayingGames.map((game) => (
            <article key={game.id} className="card-base flex items-center justify-between gap-3 p-3">
              <div className="min-w-0"><p className="text-sm font-semibold">{game.visual} {game.name}</p><p className="text-xs text-zinc-400">Progression {game.progress}% • {game.lastSession}</p><p className="text-xs text-orangeBrand">{game.reward}</p></div>
              <button onClick={() => completeSession(game.name)} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold">Reprendre</button>
            </article>
          ))}
        </div>
      </div>

      <div className="card-base">
        <SectionHeader title="Daily Streak" subtitle="Reviens chaque jour" />
        <div className="mt-2 flex gap-1">{streakDays.map((d) => <div key={d.day} className={`flex-1 rounded-md p-2 text-center text-[10px] ${d.done ? 'bg-orangeBrand/30 text-orangeBrand' : d.today ? 'border border-orangeBrand text-orangeBrand' : 'bg-zinc-800 text-zinc-500'}`}>J{d.day}</div>)}</div>
        <button onClick={claimDaily} className="mt-3 w-full rounded-lg border border-orangeBrand py-2 text-xs font-semibold text-orangeBrand">{claimedToday ? 'Déjà récupéré aujourd’hui' : 'Récupérer ma récompense (+30 Max it Points)'}</button>
      </div>

      <div>
        <SectionHeader title="Daily Missions" subtitle="Play, challenge, bundles" />
        <div className="space-y-2">{dailyMissions.map((m) => <article key={m.id} className="card-base p-3"><div className="flex items-center justify-between"><p className="text-sm font-semibold">{m.title}</p><span className="text-[11px] text-orangeBrand">{m.status}</span></div><p className="text-xs text-zinc-400">{m.progress}/{m.total} • Récompense: {m.reward}</p><div className="mt-2 h-1.5 rounded bg-zinc-800"><div className="h-full rounded bg-orangeBrand" style={{ width: `${(m.progress / m.total) * 100}%` }} /></div></article>)}</div>
      </div>

      <div className="card-base"><SectionHeader title="Compete Now" subtitle="Challenge, tournoi, leaderboard" /><p className="text-sm">Free Fire Headshot Challenge</p><p className="text-xs text-zinc-400">500 Max it Points + badge • 1 240 participants</p><button className="mt-2 rounded-lg bg-orangeBrand px-3 py-1.5 text-xs">Participer</button><div className="mt-3 space-y-1">{leaderboard.map((row, i) => <div key={row.name} className={`flex justify-between rounded px-2 py-1 text-xs ${row.current ? 'bg-orangeBrand/20 text-orangeBrand' : 'bg-zinc-900 text-zinc-300'}`}><span>{i + 1}. {row.name}</span><span>{row.points} pts</span></div>)}</div></div>

      <div className="card-base"><SectionHeader title="Your Gaming Loop" subtitle="Play → Reward → Progress → Compete → Spend" /><p className="text-xs text-zinc-300">Play instantly • Earn XP & Max it Points • Climb leaderboard • Spend rewards • Come back tomorrow</p></div>

      <div className="card-base"><SectionHeader title="Activité récente" subtitle="Historique récent" /><div className="space-y-1">{state.activities.length ? state.activities.map((a, idx) => <p key={`${a}-${idx}`} className="text-xs text-zinc-300">• {a}</p>) : <p className="text-xs text-zinc-500">Aucune activité pour le moment.</p>}</div></div>

      {sessionModal && <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4"><div className="card-base w-full max-w-xs"><h3 className="text-lg font-bold">Partie terminée</h3><p className="mt-1 text-sm text-zinc-300">+25 XP • +10 Max it Points</p><div className="mt-3 grid grid-cols-3 gap-2 text-[11px]"><button onClick={() => setSessionModal(false)} className="rounded bg-orangeBrand px-2 py-2">Rejouer</button><button onClick={() => setSessionModal(false)} className="rounded border border-orangeBrand px-2 py-2 text-orangeBrand">Participer</button><button onClick={() => setSessionModal(false)} className="rounded border border-orangeBrand px-2 py-2 text-orangeBrand">Utiliser mes points</button></div></div></div>}

    </section>
  );
}
