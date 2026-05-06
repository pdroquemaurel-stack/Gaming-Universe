import { useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { usePlayerProgress } from '../context/PlayerProgressContext';

const dailyRewards = [20, 30, 40, 50, 60, 80, 120];
const missions = [
  { id: 1, title: 'Joue à Catch the Coin', progress: 1, total: 1, reward: '+50 Max it Points', status: 'Terminé', cta: 'Rejouer' },
  { id: 2, title: 'Regarde une pub pour doubler ton XP', progress: 0, total: 1, reward: '+100 XP', status: 'À faire', cta: 'Jouer maintenant' },
  { id: 3, title: 'Découvre un bundle gaming', progress: 0, total: 1, reward: '+30 Max it Points', status: 'À faire', cta: 'Voir la boutique' },
];

export default function Home({ onNavigate }) {
  const { progress, updateProgress, addActivity } = usePlayerProgress();
  const { showToast } = useToast();
  const today = new Date().toISOString().slice(0, 10);
  const claimedToday = progress.lastClaimDate === today;
  const xpPercent = Math.min(Math.round((progress.xp / progress.xpTarget) * 100), 100);

  const streakDays = useMemo(() => Array.from({ length: 7 }).map((_, index) => {
    const activeDay = progress.streakCount % 7 || 7;
    return { day: index + 1, done: index < activeDay - 1, today: index === activeDay - 1 };
  }), [progress.streakCount]);

  const claimDaily = () => {
    if (claimedToday) return showToast('Reviens demain pour continuer ta série');
    const dayIndex = progress.streakCount % 7;
    const reward = dailyRewards[dayIndex];
    updateProgress((prev) => ({ ...prev, points: prev.points + reward, streakCount: prev.streakCount + 1, lastClaimDate: today }));
    addActivity(`Récompense quotidienne : +${reward} Max it Points`);
    showToast(`Récompense récupérée : +${reward} Max it Points`);
  };

  if (!progress.isOnboardingDone) {
    return <section className="card-base space-y-4 text-center"><h2 className="text-2xl font-bold">Bienvenue dans Max it Gaming</h2><ol className="space-y-1 text-sm text-zinc-300"><li>1. Joue instantanément</li><li>2. Gagne des Max it Points et de l’XP</li><li>3. Utilise tes points dans la section Points ou pour accéder à des avantages</li></ol><button className="w-full rounded-lg bg-orangeBrand py-2 font-semibold" onClick={() => updateProgress((p) => ({ ...p, isOnboardingDone: true }))}>Commencer</button></section>;
  }

  return <section className="space-y-4">
    <header className="card-base orange-glow">
      <div className="flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-orangeBrand/20 text-orangeBrand font-bold">M</div><div><p className="font-bold">Mon Player Hub</p><p className="text-xs text-zinc-400">Mon niveau {progress.level}</p></div></div>
      <p className="mt-2 text-xs">XP : {progress.xp} / {progress.xpTarget}</p><div className="h-2 rounded-full bg-zinc-800"><div className="h-full rounded-full bg-orangeBrand" style={{ width: `${xpPercent}%` }} /></div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs"><div className="rounded bg-zinc-900 p-2">Mes points<br/><span className="text-orangeBrand font-bold">{progress.points}</span></div><div className="rounded bg-zinc-900 p-2">Mon niveau<br/><span className="text-orangeBrand font-bold">{progress.level}</span></div><div className="rounded bg-zinc-900 p-2">Streak<br/><span className="text-orangeBrand font-bold">{progress.streakCount} jours</span></div></div>
      <p className="mt-3 text-[11px] text-zinc-400">XP : fais progresser ton niveau • Max it Points : débloque des avantages, réductions et accès</p>
    </header>
    <div className="card-base"><SectionHeader title="Daily Streak" subtitle="Bonus fidélité Max it" /><div className="mt-2 flex gap-1">{streakDays.map((d) => <div key={d.day} className={`flex-1 rounded-md p-2 text-center text-[10px] ${d.done ? 'bg-orangeBrand/30 text-orangeBrand' : d.today ? 'border border-orangeBrand text-orangeBrand' : 'bg-zinc-800 text-zinc-500'}`}>J{d.day}<br/>+{dailyRewards[d.day - 1]} pts</div>)}</div><button onClick={claimDaily} className="mt-3 w-full rounded-lg border border-orangeBrand py-2 text-xs font-semibold text-orangeBrand">Récupérer ma récompense</button>{claimedToday ? <p className="mt-2 text-xs text-zinc-400">Reviens demain pour continuer ta série</p> : null}</div>
    <div><SectionHeader title="Missions du jour" subtitle="Récompense gaming" /><div className="space-y-2">{missions.map((m) => <article key={m.id} className="card-base p-3"><div className="flex justify-between"><p className="text-sm font-semibold">{m.title}</p><span className="text-[11px] text-orangeBrand">{m.status}</span></div><p className="text-xs text-zinc-400">{m.progress}/{m.total} • {m.reward}</p><div className="mt-2 h-1.5 rounded bg-zinc-800"><div className="h-full rounded bg-orangeBrand" style={{ width: `${(m.progress / m.total) * 100}%` }} /></div><button onClick={() => onNavigate('/play')} className="mt-2 rounded border border-orangeBrand px-3 py-1 text-xs text-orangeBrand">{m.cta}</button></article>)}</div></div>
    <div className="card-base"><SectionHeader title="Derniers jeux joués" /><button className="rounded bg-orangeBrand px-3 py-2 text-xs" onClick={() => onNavigate('/play')}>Retourner jouer</button></div>
    <div className="card-base"><SectionHeader title="Historique d’activité" />{progress.activities.length ? progress.activities.map((a, i) => <p key={i} className="text-xs text-zinc-300">• {a}</p>) : <p className="text-xs text-zinc-500">Aucune activité.</p>}</div>
  </section>;
}
