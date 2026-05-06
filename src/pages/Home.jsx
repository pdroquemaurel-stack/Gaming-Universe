import { useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { continuePlayingGames, dailyMissions, leaderboard } from '../data/mockGamingData';
import { usePlayerProgress } from '../context/PlayerProgressContext';

export default function Home({ onNavigate }) {
  const { showToast } = useToast();
  const { name, avatar, level, xp, xpTarget, points, streakCount, lastClaimDate, activities, claimDailyReward, addXP, addPoints } = usePlayerProgress();
  const claimedToday = lastClaimDate === new Date().toISOString().slice(0, 10);
  const xpPercent = Math.min(100, Math.round((xp / xpTarget) * 100));
  const streakDays = useMemo(() => Array.from({ length: 7 }).map((_, i) => ({ day: i + 1, done: i < Math.min(streakCount, 7) })), [streakCount]);

  return <section className="space-y-4">
    <header className="card-base orange-glow sticky top-20 z-10 bg-gradient-to-br from-zinc-900 to-black">
      <div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-orangeBrand/30 font-bold text-orangeBrand">{avatar}</div><div><p className="text-sm font-bold">{name}</p><p className="text-xs text-zinc-300">Level {level}</p></div></div><button>🔔</button></div>
      <p className="mt-2 text-xs text-zinc-300">XP : {xp} / {xpTarget}</p><div className="h-2 rounded-full bg-zinc-800"><div className="h-full rounded-full bg-orangeBrand" style={{ width: `${xpPercent}%` }} /></div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-xs"><div className="rounded-lg bg-zinc-900/80 p-2">Max it Points<br /><span className="font-bold text-orangeBrand">{points}</span></div><div className="rounded-lg bg-zinc-900/80 p-2">Streak<br /><span className="font-bold text-orangeBrand">{streakCount} jours</span></div></div>
    </header>
    <div><SectionHeader title="Continue Playing" subtitle="Reprends ta session en 1 clic" /><div className="space-y-2">{continuePlayingGames.map((g) => <article key={g.id} className="card-base flex items-center justify-between p-3"><div><p className="text-sm font-semibold">{g.visual} {g.name}</p><p className="text-xs text-zinc-400">Progression {g.progress}%</p><p className="text-xs text-orangeBrand">{g.reward}</p></div><button onClick={() => { addXP(25, `${g.name} session`); addPoints(10, `${g.name} session`); showToast('Session terminée : +25 XP, +10 Max it Points'); }} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold">Reprendre</button></article>)}</div></div>
    <div className="card-base"><SectionHeader title="Daily Streak" subtitle="Reviens chaque jour" /><div className="mt-2 flex gap-1">{streakDays.map((d) => <div key={d.day} className={`flex-1 rounded-md p-2 text-center text-[10px] ${d.done ? 'bg-orangeBrand/30 text-orangeBrand' : 'bg-zinc-800 text-zinc-500'}`}>J{d.day}</div>)}</div><button onClick={() => showToast(claimDailyReward() ? 'Récompense récupérée : +30 Max it Points' : 'Récompense déjà récupérée aujourd’hui')} className="mt-3 w-full rounded-lg border border-orangeBrand py-2 text-xs font-semibold text-orangeBrand">{claimedToday ? 'Récompense déjà récupérée aujourd’hui' : 'Récupérer ma récompense'}</button></div>
    <div><SectionHeader title="Daily Missions" subtitle="Missions du jour" /><div className="space-y-2">{dailyMissions.map((m) => <article key={m.id} className="card-base p-3"><p className="text-sm font-semibold">{m.title}</p><p className="text-xs text-zinc-400">{m.progress}/{m.total} • {m.reward}</p></article>)}</div></div>
    <div className="card-base"><SectionHeader title="Compete Now" subtitle="Tournoi en cours" /><p className="text-sm">Free Fire Headshot Challenge</p><p className="text-xs text-zinc-300">À gagner : 500 Max it Points + badge</p><p className="text-xs text-zinc-400">Inscription : 100 points</p><button onClick={() => onNavigate('/esport')} className="mt-2 rounded-lg bg-orangeBrand px-3 py-1.5 text-xs">Voir le tournoi</button></div>
    <div className="card-base"><SectionHeader title="Your Gaming Loop" subtitle="Jouer → gagner → utiliser → revenir" /><p className="text-xs text-zinc-300">Jouer • Gagner XP et points • Utiliser ses points en boutique ou e-sport • Revenir chaque jour.</p></div>
    <div className="card-base"><SectionHeader title="Activités récentes" subtitle="Historique" />{activities.length ? activities.map((a, i) => <p key={`${a}-${i}`} className="text-xs text-zinc-300">• {a}</p>) : <p className="text-xs text-zinc-500">Aucune activité pour le moment.</p>}</div>
  </section>;
}
