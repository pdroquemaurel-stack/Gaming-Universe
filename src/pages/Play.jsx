import { useEffect, useMemo, useState } from 'react';
import BubbleDashGame from '../components/games/BubbleDashGame';
import CatchTheCoinGame from '../components/games/CatchTheCoinGame';
import AppCard from '../components/AppCard';
import CategoryChips from '../components/CategoryChips';
import GameCard from '../components/GameCard';
import HorizontalCarousel from '../components/HorizontalCarousel';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import AssetImage from '../components/AssetImage';
import { useToast } from '../components/ToastProvider';
import { myGames, playCategories, playCategoryChips, popularGames, recommendedGames } from '../data/play';

const STORAGE_KEYS = {
  lastScore: 'maxit_catch_coin_last_score',
  lastReward: 'maxit_catch_coin_last_reward',
  bestScore: 'maxit_catch_coin_best_score',
  bubbleBest: 'maxit_bubble_dash_best_score',
};

function readNumber(key) {
  const value = Number(window.localStorage.getItem(key));
  return Number.isFinite(value) ? value : 0;
}

function withCatchStats(game, stats) {
  if (game.id !== 'catch-the-coin') return game;
  return {
    ...game,
    lastScore: stats.lastScore,
    lastReward: stats.lastReward,
    bestScore: stats.bestScore,
  };
}

export default function Play({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeGame, setActiveGame] = useState(null);
  const [catchStats, setCatchStats] = useState({ lastScore: 0, lastReward: 0, bestScore: 0 });
  const [bubbleBest, setBubbleBest] = useState(0);
  const { showToast } = useToast();

  useEffect(() => {
    setCatchStats({
      lastScore: readNumber(STORAGE_KEYS.lastScore),
      lastReward: readNumber(STORAGE_KEYS.lastReward),
      bestScore: readNumber(STORAGE_KEYS.bestScore),
    });
    setBubbleBest(readNumber(STORAGE_KEYS.bubbleBest));
  }, []);

  const currentCategory = useMemo(() => playCategories.find((category) => category.id === selectedCategory), [selectedCategory]);

  const gamesBySection = useMemo(
    () => ({
      myGames: myGames.map((game) => withCatchStats(game, catchStats)),
      recommendedGames: recommendedGames.map((game) => withCatchStats(game, catchStats)),
      popularGames: popularGames.map((game) => withCatchStats(game, catchStats)),
      instantPlay: (currentCategory?.instantPlay || []).map((game) => withCatchStats(game, catchStats)),
    }),
    [catchStats, currentCategory?.instantPlay],
  );

  const handleCatchComplete = ({ score, reward, xpGain }) => {
    const bestScore = Math.max(catchStats.bestScore, score);

    window.localStorage.setItem(STORAGE_KEYS.lastScore, String(score));
    window.localStorage.setItem(STORAGE_KEYS.lastReward, String(reward));
    window.localStorage.setItem(STORAGE_KEYS.bestScore, String(bestScore));

    setCatchStats({ lastScore: score, lastReward: reward, bestScore });
    showToast(`Partie terminée : +${reward} points et +${xpGain} XP`);
  };

  const handleBubbleComplete = ({ score, reward, xpGain }) => {
    const best = Math.max(bubbleBest, score);
    window.localStorage.setItem(STORAGE_KEYS.bubbleBest, String(best));
    setBubbleBest(best);
    showToast(`Bubble Dash : +${reward} points et +${xpGain} XP`);
  };

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-white">Univers <span className="text-orangeBrand">Jouer</span></h1>
        <p className="mt-1 text-sm text-zinc-300">Découvre des jeux, gagne des points et télécharge les meilleures apps.</p>
      </header>

      <CategoryChips items={playCategoryChips} activeId={selectedCategory} onSelect={setSelectedCategory} />

      {selectedCategory === 'all' ? (
        <>
          <div>
            <SectionHeader title="Mes jeux" subtitle="Derniers jeux joués" />
            <HorizontalCarousel items={gamesBySection.myGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} compact cta="Reprendre" />} />
          </div>
          <div>
            <SectionHeader title="Jeux recommandés" subtitle="Sélection personnalisée" />
            <HorizontalCarousel items={gamesBySection.recommendedGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} cta="Voir le jeu" />} />
          </div>
          <div>
            <SectionHeader title="Jeux les plus populaires" subtitle="Top tendances" />
            <HorizontalCarousel items={gamesBySection.popularGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} cta="Voir le jeu" />} />
          </div>
        </>
      ) : (
        <>
          <div>
            <SectionHeader title="Mini-jeux instantanés" subtitle={currentCategory?.label} />
            <HorizontalCarousel items={gamesBySection.instantPlay} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} cta="Voir le jeu" />} />
          </div>
          <div>
            <SectionHeader title="Apps à télécharger" subtitle={currentCategory?.label} />
            <HorizontalCarousel items={currentCategory?.apps || []} renderItem={(app) => <AppCard app={app} />} />
          </div>
        </>
      )}

      {selectedGame ? (
        <ModalOverlay title={selectedGame.name} onClose={() => setSelectedGame(null)}>
          <div className="space-y-3">
            <AssetImage src={selectedGame.image} alt={selectedGame.name} className="h-44 w-full" fallback={selectedGame.fallback} />
            <p className="text-sm text-zinc-200">{selectedGame.description}</p>
            <p className="rounded-lg border border-orangeBrand/30 bg-zinc-900 p-3 text-xs text-zinc-200">Mission du jour : {selectedGame.dailyMission}</p>
            <p className="text-sm font-semibold text-orangeBrand">Récompense : +{selectedGame.points} points max</p>
            <p className="text-xs text-zinc-300">Joueurs aujourd’hui : <span className="font-semibold text-white">{selectedGame.todayPlayers ?? 0}</span></p>
            <div className="rounded-lg border border-white/10 bg-black/30 p-3">
              <p className="mb-1 text-xs text-zinc-400">Meilleurs scores du jour</p>
              <div className="space-y-1 text-xs text-zinc-200">
                {(selectedGame.dailyBestScores || []).map((entry) => (
                  <p key={`${selectedGame.id}-${entry.name}`}>{entry.name} — {entry.score}</p>
                ))}
              </div>
            </div>
            <button type="button" onClick={() => { setActiveGame(selectedGame); setSelectedGame(null); }} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-sm font-semibold text-white">Jouer</button>
          </div>
        </ModalOverlay>
      ) : null}

      {activeGame ? (
        <ModalOverlay title={activeGame.name} onClose={() => setActiveGame(null)} fullScreenMobile>
          {activeGame.id === 'catch-the-coin' ? (
            <CatchTheCoinGame
              onBack={() => setActiveGame(null)}
              onComplete={handleCatchComplete}
              onUsePoints={() => {
                onNavigate('/points?tab=use');
                setActiveGame(null);
              }}
              onGoShop={() => {
                onNavigate('/shop');
                setActiveGame(null);
              }}
              onDownloadGame={() => {
                showToast('+50 points gagnés');
                window.open('https://play.google.com/store/apps/details?id=com.dts.freefireth', '_blank', 'noopener,noreferrer');
              }}
              onWatchAd={() => showToast('Publicité terminée — nouvelle tentative débloquée')}
              bestScore={catchStats.bestScore}
            />
          ) : activeGame.id === 'bubble-dash' ? (
            <BubbleDashGame
              onBack={() => setActiveGame(null)}
              onComplete={handleBubbleComplete}
              bestScore={bubbleBest}
            />
          ) : (
            <>
              <p className="text-sm text-zinc-300">{activeGame.description}</p>
              <p className="mt-3 rounded-lg bg-zinc-900 p-3 text-xs text-zinc-200">Mission du jour : {activeGame.dailyMission}</p>
              <button type="button" className="mt-3 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Jouer maintenant</button>
            </>
          )}
        </ModalOverlay>
      ) : null}
    </section>
  );
}
