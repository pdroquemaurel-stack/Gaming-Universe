import { useMemo, useState } from 'react';
import AppCard from '../components/AppCard';
import CategoryChips from '../components/CategoryChips';
import GameCard from '../components/GameCard';
import HorizontalCarousel from '../components/HorizontalCarousel';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import { myGames, playCategories, playCategoryChips, popularGames, recommendedGames } from '../data/play';

export default function Play() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGame, setSelectedGame] = useState(null);

  const currentCategory = useMemo(() => playCategories.find((category) => category.id === selectedCategory), [selectedCategory]);

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
            <HorizontalCarousel items={myGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} compact cta="Resume" />} />
          </div>
          <div>
            <SectionHeader title="Jeux recommandés" subtitle="Sélection personnalisée" />
            <HorizontalCarousel items={recommendedGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} />} />
          </div>
          <div>
            <SectionHeader title="Jeux les plus populaires" subtitle="Top tendances" />
            <HorizontalCarousel items={popularGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} />} />
          </div>
        </>
      ) : (
        <>
          <div>
            <SectionHeader title="Mini-jeux à jouer" subtitle={currentCategory?.label} />
            <HorizontalCarousel items={currentCategory?.instantPlay || []} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} />} />
          </div>
          <div>
            <SectionHeader title="Apps à télécharger" subtitle={currentCategory?.label} />
            <HorizontalCarousel items={currentCategory?.apps || []} renderItem={(app) => <AppCard app={app} />} />
          </div>
        </>
      )}

      {selectedGame ? (
        <ModalOverlay title={selectedGame.name} onClose={() => setSelectedGame(null)}>
          <p className="text-sm text-zinc-300">{selectedGame.description}</p>
          <p className="mt-3 rounded-lg bg-zinc-900 p-3 text-xs text-zinc-200">Mission du jour: {selectedGame.dailyMission}</p>
          <button type="button" className="mt-3 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Play</button>
        </ModalOverlay>
      ) : null}
    </section>
  );
}
