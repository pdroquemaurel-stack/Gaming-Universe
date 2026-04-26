import { useEffect, useMemo, useState } from 'react';
import CatchTheCoinGame from '../components/games/CatchTheCoinGame';
import AppCard from '../components/AppCard';
import CategoryChips from '../components/CategoryChips';
import GameCard from '../components/GameCard';
import HorizontalCarousel from '../components/HorizontalCarousel';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import { myGames, playCategories, playCategoryChips, popularGames, recommendedGames } from '../data/play';

const STORAGE_KEYS = {
  lastScore: 'maxit_catch_coin_last_score',
  lastReward: 'maxit_catch_coin_last_reward',
  bestScore: 'maxit_catch_coin_best_score',
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

export default function Play() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGame, setSelectedGame] = useState(null);
  const [catchStats, setCatchStats] = useState({ lastScore: 0, lastReward: 0, bestScore: 0 });

  useEffect(() => {
    setCatchStats({
      lastScore: readNumber(STORAGE_KEYS.lastScore),
      lastReward: readNumber(STORAGE_KEYS.lastReward),
      bestScore: readNumber(STORAGE_KEYS.bestScore),
    });
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

  const handleCatchComplete = ({ score, reward }) => {
    const bestScore = Math.max(catchStats.bestScore, score);

    window.localStorage.setItem(STORAGE_KEYS.lastScore, String(score));
    window.localStorage.setItem(STORAGE_KEYS.lastReward, String(reward));
    window.localStorage.setItem(STORAGE_KEYS.bestScore, String(bestScore));

    setCatchStats({ lastScore: score, lastReward: reward, bestScore });
  };

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-white">Play <span className="text-orangeBrand">Universe</span></h1>
        <p className="mt-1 text-sm text-zinc-300">Discover games, win points and download top apps.</p>
      </header>

      <CategoryChips items={playCategoryChips} activeId={selectedCategory} onSelect={setSelectedCategory} />

      {selectedCategory === 'all' ? (
        <>
          <div>
            <SectionHeader title="Mes jeux" subtitle="Derniers jeux joués" />
            <HorizontalCarousel items={gamesBySection.myGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} compact cta="Resume" />} />
          </div>
          <div>
            <SectionHeader title="Jeux recommandés" subtitle="Sélection personnalisée" />
            <HorizontalCarousel items={gamesBySection.recommendedGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} />} />
          </div>
          <div>
            <SectionHeader title="Jeux les plus populaires" subtitle="Top tendances" />
            <HorizontalCarousel items={gamesBySection.popularGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} />} />
          </div>
        </>
      ) : (
        <>
          <div>
            <SectionHeader title="Mini-jeux à jouer" subtitle={currentCategory?.label} />
            <HorizontalCarousel items={gamesBySection.instantPlay} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} />} />
          </div>
          <div>
            <SectionHeader title="Apps à télécharger" subtitle={currentCategory?.label} />
            <HorizontalCarousel items={currentCategory?.apps || []} renderItem={(app) => <AppCard app={app} />} />
          </div>
        </>
      )}

      {selectedGame ? (
        <ModalOverlay title={selectedGame.name} onClose={() => setSelectedGame(null)}>
          {selectedGame.id === 'catch-the-coin' ? (
            <CatchTheCoinGame onBack={() => setSelectedGame(null)} onComplete={handleCatchComplete} />
          ) : (
            <>
              <p className="text-sm text-zinc-300">{selectedGame.description}</p>
              <p className="mt-3 rounded-lg bg-zinc-900 p-3 text-xs text-zinc-200">Mission du jour: {selectedGame.dailyMission}</p>
              <button type="button" className="mt-3 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Play</button>
            </>
          )}
        </ModalOverlay>
      ) : null}
    </section>
  );
}
