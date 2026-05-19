import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { continuePlayingGames, dailyMissions, leaderboard, playerDefaults } from '../data/mockGamingData';
import CommunitySurvey from '../components/CommunitySurvey';

const FREE_FIRE_ID_KEY = 'maxit_freefire_player_id';
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
  getRaw(key, fallback = '') {
    try {
      return window.localStorage.getItem(key) ?? fallback;
    } catch {
      return key in memoryStore ? memoryStore[key] : fallback;
    }
  },
  setRaw(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      memoryStore[key] = value;
    }
  },
};

const gameContexts = ['Tournoi en cours', 'Streak actif', 'Quick session'];
const freeFireLeaderboard = [
  { name: 'Amine', score: 84 },
  { name: 'Sarah', score: 79 },
  { name: 'AkosuaK95', score: 66, current: true },
  { name: 'Kevin', score: 61 },
];

export default function Home({ onNavigate }) {
  const { showToast } = useToast();
  const initial = safeStorage.get('playerHubState', {
    xp: playerDefaults.xp,
    coins: playerDefaults.coins,
    streakCount: playerDefaults.streak,
    lastClaimDate: null,
    activities: [],
  });
  const initialFreeFireId = safeStorage.getRaw(FREE_FIRE_ID_KEY, '');

  const [state, setState] = useState(initial);
  const [sessionModal, setSessionModal] = useState(false);
  const [rulesModal, setRulesModal] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [freeFireId, setFreeFireId] = useState(initialFreeFireId);
  const [freeFireInput, setFreeFireInput] = useState('');
  const [freeFireInputError, setFreeFireInputError] = useState('');
  const [completedMissions, setCompletedMissions] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('maxit_completed_missions') || '[]')); }
    catch { return new Set(); }
  });
  const [justCompleted, setJustCompleted] = useState(null);

  const isFreeFireConnected = Boolean(freeFireId?.trim());

  const persist = (next) => {
    setState(next);
    safeStorage.set('playerHubState', next);
    window.dispatchEvent(new CustomEvent('maxit:state-updated', { detail: next }));
  };

  const xpPercent = Math.min(Math.round((state.xp / playerDefaults.xpTarget) * 100), 100);
  const today = new Date().toISOString().slice(0, 10);
  const claimedToday = state.lastClaimDate === today;

  const claimDaily = () => {
    if (claimedToday) return showToast('Déjà récupéré aujourd’hui');
    const next = {
      ...state,
      coins: state.coins + 30,
      streakCount: state.streakCount + 1,
      lastClaimDate: today,
      activities: ['Récompense quotidienne récupérée +30 Max it Points', ...state.activities].slice(0, 6),
    };
    persist(next);
    showToast('Récompense récupérée : +30 Max it Points');
  };

  const completeSession = (gameName) => {
    const next = {
      ...state,
      xp: state.xp + 25,
      coins: state.coins + 10,
      activities: [`${gameName} partie terminée +25 XP`, ...state.activities].slice(0, 6),
    };
    persist(next);
    setSessionModal(true);
  };

  const streakDays = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, index) => ({
        day: index + 1,
        done: index < Math.min(state.streakCount, 7),
        today: index === Math.min(state.streakCount, 6) && !claimedToday,
      })),
    [state.streakCount, claimedToday],
  );

  const parseMissionReward = (rewardStr) => {
    const coinsMatch = rewardStr?.match(/(\d+)\s*Max it Points/i);
    const xpMatch = rewardStr?.match(/(\d+)\s*XP/i);
    return { coins: coinsMatch ? parseInt(coinsMatch[1]) : 0, xp: xpMatch ? parseInt(xpMatch[1]) : 0 };
  };

  const handleCompleteMission = (mission) => {
    if (completedMissions.has(mission.id)) return;
    const { coins: rewardCoins, xp: rewardXp } = parseMissionReward(mission.reward);
    const newCompleted = new Set([...completedMissions, mission.id]);
    setCompletedMissions(newCompleted);
    try { localStorage.setItem('maxit_completed_missions', JSON.stringify([...newCompleted])); } catch {}
    setJustCompleted(mission.id);
    setTimeout(() => setJustCompleted(null), 700);
    const next = {
      ...state,
      coins: state.coins + (rewardCoins || 50),
      xp: state.xp + (rewardXp || 25),
      activities: [`Mission "${mission.title}" complétée +${rewardCoins || 50} Coins`, ...state.activities].slice(0, 6),
    };
    persist(next);
    showToast(`✅ Mission complétée ! +${rewardCoins || 50} Coins • +${rewardXp || 25} XP`);
  };

  const handleJoinChallenge = () => {
    const trimmed = freeFireInput.trim();
    if (!trimmed) {
      setFreeFireInputError('Merci de renseigner ton ID joueur Free Fire.');
      return;
    }
    safeStorage.setRaw(FREE_FIRE_ID_KEY, trimmed);
    setFreeFireId(trimmed);
    setFreeFireInput('');
    setFreeFireInputError('');
    setJoinModalOpen(false);
    showToast('Compte Free Fire connecté — participation confirmée');
  };

  return (
    <section className="space-y-6">
      <div className="sticky top-5 z-30 -mx-4 -mt-5 mb-2 bg-[#0B0B0B] px-4 pt-5 pb-3 shadow-lg shadow-black/40">
        <header className="card-base overflow-hidden border border-white/10 bg-[#0B0B0B] py-4 shadow-md shadow-black/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orangeBrand/30 font-bold text-orangeBrand">{playerDefaults.avatar}</div>
              <div>
                <p className="text-sm font-bold text-white">{playerDefaults.name}</p>
                <p className="text-xs text-zinc-300">Level {playerDefaults.level}</p>
              </div>
            </div>
            <button className="text-lg transition duration-200 hover:scale-105 active:scale-95">🔔</button>
          </div>
          <p className="mt-2 text-xs text-zinc-300">XP: {state.xp} / {playerDefaults.xpTarget}</p>
          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-full rounded-full bg-orangeBrand transition-all duration-300" style={{ width: `${xpPercent}%` }} />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div className="rounded-lg bg-zinc-900 p-2">Level<br /><span className="font-bold text-orangeBrand">{playerDefaults.level}</span></div>
            <div className="rounded-lg bg-zinc-900 p-2">Max it Points<br /><span className="font-bold text-orangeBrand">{state.coins}</span></div>
            <div className="rounded-lg bg-zinc-900 p-2">Streak<br /><span className="font-bold text-orangeBrand">{state.streakCount} jours</span></div>
          </div>
        </header>
        <div className="h-3 w-full bg-[#0B0B0B]" aria-hidden="true" />
      </div>

      <article className="relative overflow-hidden rounded-2xl border border-orangeBrand/30 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-5 shadow-lg shadow-orangeBrand/10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orangeBrand/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-32 w-32 rounded-full bg-orangeBrand/10 blur-2xl" />
        <div className="relative z-10 space-y-3.5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-orangeBrand/40 bg-orangeBrand/10 px-2.5 py-1 text-[11px] font-semibold text-orangeBrand"><span className="h-2 w-2 animate-pulse rounded-full bg-orangeBrand" />Événement live</span>
              <h1 className="mt-3 text-xl font-extrabold leading-tight text-white">Free Fire Headshot Challenge</h1>
              <p className="mt-1 text-xs text-zinc-300">3 jours restants • 2 500 Max it Points à gagner</p>
            </div>
            <span className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[11px] text-zinc-200">1 248 joueurs</span>
          </div>

          {isFreeFireConnected ? <p className="inline-flex rounded-full border border-orangeBrand/30 bg-orangeBrand/15 px-2.5 py-1 text-[11px] font-semibold text-orangeBrand">Compte Free Fire connecté</p> : null}

          {isFreeFireConnected ? (
            <div className="rounded-xl border border-white/10 bg-black/30 p-3">
              <p className="mb-2 text-xs text-zinc-300">Leaderboard — Headshot King</p>
              <div className="space-y-1">
                {freeFireLeaderboard.map((row, index) => (
                  <div key={row.name} className={`flex items-center justify-between rounded px-2 py-1 text-xs ${row.current ? 'bg-orangeBrand/20 text-orangeBrand' : 'text-zinc-300'}`}>
                    <span className={row.current ? 'font-semibold text-orangeBrand' : ''}>{index + 1}. {row.name}</span>
                    <span className={row.current ? 'font-semibold text-orangeBrand' : ''}>{row.score} headshots</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs text-zinc-200">Ton score (<span className="font-semibold text-orangeBrand">AkosuaK95</span>) : <span className="font-semibold text-orangeBrand">66 headshots</span></p>
              <p className="text-xs text-zinc-200">Classement actuel : <span className="font-semibold text-orangeBrand">#3</span></p>
            </div>
          ) : null}

          <div className="flex gap-2">
            <button
              onClick={() => {
                if (isFreeFireConnected) {
                  onNavigate?.('/esport?tab=challenge');
                  return;
                }
                setJoinModalOpen(true);
              }}
              className="flex-1 rounded-lg bg-orangeBrand px-4 py-2.5 text-sm font-semibold text-black transition duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              {isFreeFireConnected ? 'Détails' : 'Participer'}
            </button>
            <button onClick={() => setRulesModal(true)} className="flex-1 rounded-lg border border-white/15 bg-black/30 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition duration-200 hover:border-orangeBrand/40 hover:text-orangeBrand active:scale-[0.98]">Voir les règles</button>
          </div>
        </div>
      </article>

      <div className="space-y-3">
        <SectionHeader title="Continue Playing" subtitle="Reprends ta session en 1 clic" />
        <div className="space-y-3">{continuePlayingGames.map((game, idx) => { const contextLabel = gameContexts[idx % gameContexts.length]; const progress = Math.max(8, Math.min(100, game.progress)); return <article key={game.id} className="card-base border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-900/70 to-black/60 p-4 transition duration-200 hover:scale-[1.01] hover:border-orangeBrand/40 hover:shadow-lg hover:shadow-orangeBrand/20 active:scale-[0.99]"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="text-base font-semibold text-white">{game.visual} {game.name}</p><p className="mt-1 text-xs text-zinc-400">{game.lastSession}</p></div><span className="rounded-full border border-orangeBrand/30 bg-orangeBrand/10 px-2 py-1 text-[10px] font-semibold text-orangeBrand">{contextLabel}</span></div><div className="mt-3 h-1.5 rounded-full bg-zinc-800"><div className="h-full rounded-full bg-orangeBrand transition-all duration-300" style={{ width: `${progress}%` }} /></div><div className="mt-3 flex items-center justify-between gap-2"><div><p className="text-xs text-zinc-300">Progression {game.progress}%</p><p className="text-xs font-semibold text-orangeBrand">{game.reward} • +10 Max it Points</p></div><button onClick={() => completeSession(game.name)} className="rounded-lg bg-orangeBrand px-3.5 py-2 text-xs font-semibold text-black transition duration-200 hover:brightness-110 active:scale-[0.98]">Reprendre</button></div></article>; })}</div>
      </div>

      <div className="card-base border border-white/10 bg-zinc-900/70 p-4"><SectionHeader title="Daily Streak" subtitle="Reviens chaque jour" /><div className="mt-2 flex gap-1">{streakDays.map((d) => <div key={d.day} className={`flex-1 rounded-md p-2 text-center text-[10px] ${d.done ? 'bg-orangeBrand/30 text-orangeBrand' : d.today ? 'border border-orangeBrand text-orangeBrand' : 'bg-zinc-800 text-zinc-500'}`}>J{d.day}</div>)}</div><button onClick={claimDaily} className="mt-3 w-full rounded-lg border border-orangeBrand/70 py-2 text-xs font-semibold text-orangeBrand transition duration-200 hover:bg-orangeBrand/10 active:scale-[0.99]">{claimedToday ? 'Déjà récupéré aujourd’hui' : 'Récupérer ma récompense (+30 Max it Points)'}</button></div>

      <div>
        <SectionHeader title="Daily Missions" subtitle="Play, challenge, bundles" />
        <div className="space-y-2.5">
          {dailyMissions.map((m) => {
            const done = completedMissions.has(m.id);
            const completing = justCompleted === m.id;
            return (
              <article
                key={m.id}
                className={`card-base border p-3.5 transition-all duration-300 ${completing ? 'mission-completing' : ''} ${
                  done
                    ? 'border-green-500/40 bg-green-950/30'
                    : 'border-white/10 bg-zinc-900/70 hover:border-orangeBrand/30'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold">{m.title}</p>
                  {done ? (
                    <span className={`text-lg leading-none transition-transform duration-300 ${completing ? 'scale-125' : 'scale-100'}`}>✅</span>
                  ) : (
                    <button
                      onClick={() => handleCompleteMission(m)}
                      className="shrink-0 rounded-lg border border-orangeBrand/40 bg-orangeBrand/10 px-2.5 py-1 text-[11px] font-semibold text-orangeBrand transition duration-200 hover:bg-orangeBrand/20 active:scale-95"
                    >
                      Compléter
                    </button>
                  )}
                </div>
                <p className="mt-1 text-xs text-zinc-400">
                  {done ? `${m.total}/${m.total}` : `${m.progress}/${m.total}`} • Récompense : {m.reward}
                </p>
                <div className="mt-2 h-1.5 rounded bg-zinc-800">
                  <div
                    className="h-full rounded transition-all duration-500"
                    style={{
                      width: done ? '100%' : `${(m.progress / m.total) * 100}%`,
                      background: done ? '#22c55e' : '#FF7900',
                    }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <CommunitySurvey />
      <div className="card-base border border-white/10 bg-zinc-900/70 p-4"><SectionHeader title="Compete Now" subtitle="Challenge, tournoi, leaderboard" /><p className="text-sm">Free Fire Headshot Challenge</p><p className="text-xs text-zinc-400">500 Max it Points + badge • 1 240 participants</p><button className="mt-2 rounded-lg bg-orangeBrand px-3 py-1.5 text-xs text-black transition duration-200 hover:brightness-110 active:scale-[0.98]">Participer</button><div className="mt-3 space-y-1">{leaderboard.map((row, i) => <div key={row.name} className={`flex justify-between rounded px-2 py-1 text-xs ${row.current ? 'bg-orangeBrand/20 text-orangeBrand' : 'bg-zinc-900 text-zinc-300'}`}><span>{i + 1}. {row.name}</span><span>{row.points} pts</span></div>)}</div></div>
      <div className="card-base border border-white/10 bg-zinc-900/70 p-4"><SectionHeader title="Your Gaming Loop" subtitle="Play → Reward → Progress → Compete → Spend" /><p className="text-xs text-zinc-300">Play instantly • Earn XP & Max it Points • Climb leaderboard • Spend rewards • Come back tomorrow</p></div>
      <div className="card-base border border-white/10 bg-zinc-900/50 p-3.5"><SectionHeader title="Activité récente" subtitle="Historique récent" /><div className="space-y-1">{state.activities.length ? state.activities.map((a, idx) => <p key={`${a}-${idx}`} className="text-xs text-zinc-400">• {a}</p>) : <p className="text-xs text-zinc-500">Aucune activité pour le moment.</p>}</div></div>

      {joinModalOpen ? <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4"><div className="card-base w-full max-w-sm border border-white/10 bg-[#0B0B0B] p-5 shadow-xl shadow-black/40"><h3 className="text-lg font-bold text-white">Participer au challenge Free Fire</h3><p className="mt-2 text-sm text-zinc-300">Renseigne ton ID joueur Free Fire pour rejoindre le challenge Headshot King et suivre ton score dans le leaderboard.</p><input value={freeFireInput} onChange={(event) => { setFreeFireInput(event.target.value); if (freeFireInputError) setFreeFireInputError(''); }} placeholder="ID joueur Free Fire" className="mt-3 w-full rounded-lg border border-white/20 bg-zinc-900 px-3 py-2 text-sm text-white outline-none focus:border-orangeBrand/50" />{freeFireInputError ? <p className="mt-2 text-xs text-red-300">{freeFireInputError}</p> : null}<div className="mt-4 grid grid-cols-2 gap-2"><button onClick={() => { setJoinModalOpen(false); setFreeFireInputError(''); }} className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-zinc-200">Annuler</button><button onClick={handleJoinChallenge} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-black transition duration-200 hover:brightness-110 active:scale-[0.98]">Valider ma participation</button></div></div></div> : null}

      {rulesModal ? <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4"><div className="card-base w-full max-w-sm border border-white/10 bg-zinc-900/95 p-5"><h3 className="text-lg font-bold text-white">Règles de l’événement</h3><p className="mt-2 text-sm text-zinc-300">Fais le plus de headshots possible en session classée. Les récompenses sont attribuées selon ton rang final.</p><ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-zinc-300"><li>Durée : 3 jours</li><li>Récompense max : 2 500 Max it Points</li><li>Bonus actif : Weekend Double XP</li></ul><button onClick={() => setRulesModal(false)} className="mt-4 w-full rounded-lg bg-orangeBrand py-2 text-sm font-semibold text-black transition duration-200 hover:brightness-110 active:scale-[0.98]">Compris</button></div></div> : null}
      {sessionModal ? <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4"><div className="card-base w-full max-w-xs border border-white/10 bg-zinc-900/95"><h3 className="text-lg font-bold">Partie terminée</h3><p className="mt-1 text-sm text-zinc-300">+25 XP • +10 Max it Points</p><div className="mt-3 grid grid-cols-3 gap-2 text-[11px]"><button onClick={() => setSessionModal(false)} className="rounded bg-orangeBrand px-2 py-2 text-black transition duration-200 hover:brightness-110">Rejouer</button><button onClick={() => setSessionModal(false)} className="rounded border border-orangeBrand px-2 py-2 text-orangeBrand transition duration-200 hover:bg-orangeBrand/10">Participer</button><button onClick={() => setSessionModal(false)} className="rounded border border-orangeBrand px-2 py-2 text-orangeBrand transition duration-200 hover:bg-orangeBrand/10">Utiliser mes points</button></div></div></div> : null}
    </section>
  );
}
