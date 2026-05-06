import { useState } from 'react';
import CatchTheCoinGame from '../components/games/CatchTheCoinGame';
import { usePlayerProgress } from '../context/PlayerProgressContext';
import { useToast } from '../components/ToastProvider';

export default function Play({ onNavigate }) {
  const { showToast } = useToast();
  const { bestScores, addPoints, addXP, updateBestScore, addActivity } = usePlayerProgress();
  const [inGame, setInGame] = useState(false);

  if (!inGame) return <section className="space-y-3"><h1 className="text-2xl font-bold">Jouer</h1><button onClick={() => setInGame(true)} className="rounded bg-orangeBrand px-3 py-2 text-sm">Lancer Catch the Coin</button></section>;

  return <CatchTheCoinGame
    onBack={() => setInGame(false)}
    onUsePoints={() => onNavigate('/points?tab=use')}
    onWatchAd={() => showToast('Publicité terminée — XP doublée')}
    onReplay={() => setInGame(true)}
    bestScore={bestScores['catch-the-coin'] || 0}
    onComplete={({ score, points, xp, adExtraXp }) => {
      if (points) addPoints(points, 'Catch the Coin');
      if (xp) addXP(xp, 'Catch the Coin');
      if (adExtraXp) addXP(adExtraXp, 'Bonus pub Catch the Coin');
      updateBestScore('catch-the-coin', score);
      addActivity(`Catch the Coin terminé — score ${score}`);
    }}
  />;
}
