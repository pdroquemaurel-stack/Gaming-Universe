import { useMemo, useState } from 'react';

type Props = { onBack: () => void; onUsePoints: () => void; onWatchAd: () => void; onReplay: () => void; bestScore: number; onComplete: (payload: { score: number; points: number; xp: number; adExtraXp: number }) => void; };

export default function CatchTheCoinGame({ onBack, onUsePoints, onWatchAd, onReplay, bestScore, onComplete }: Props) {
  const [done, setDone] = useState(false);
  const [score] = useState(Math.floor(Math.random() * 50) + 10);
  const [adUsed, setAdUsed] = useState(false);
  const points = useMemo(() => Math.floor(score / 2), [score]);
  const xp = useMemo(() => score + 20, [score]);

  if (!done) return <div className="card-base space-y-3"><h3 className="text-lg font-bold">Catch the Coin</h3><p className="text-sm text-zinc-300">Partie en cours...</p><button className="rounded bg-orangeBrand px-3 py-2 text-xs" onClick={() => { setDone(true); onComplete({ score, points, xp, adExtraXp: 0 }); }}>Terminer la partie</button></div>;

  return <div className="card-base relative space-y-3"><button onClick={onBack} className="absolute right-2 top-2 text-lg">✕</button><h3 className="text-lg font-bold">Partie terminée</h3><p className="text-sm">Score : {score}</p><p className="text-sm">Max it Points gagnés : +{points}</p><p className="text-sm">XP gagnée : +{xp}</p><p className="text-sm">Meilleur score : {Math.max(bestScore, score)}</p><div className="h-2 rounded-full bg-zinc-800"><div className="h-full w-2/3 rounded-full bg-orangeBrand" /></div><p className="text-xs text-zinc-300">Belle performance, continue pour monter de niveau.</p><div className="grid gap-2"><button onClick={onUsePoints} className="rounded bg-orangeBrand px-3 py-2 text-xs">Utiliser mes points</button><button onClick={() => { if (adUsed) return; setAdUsed(true); onWatchAd(); onComplete({ score, points: 0, xp: 0, adExtraXp: xp }); }} className="rounded border border-orangeBrand px-3 py-2 text-xs text-orangeBrand">Regarder une pub pour doubler mes XP</button><button onClick={onReplay} className="rounded border border-white/20 px-3 py-2 text-xs">Rejouer</button></div></div>;
}
