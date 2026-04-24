import GameCard from '../components/GameCard';
import SectionHeader from '../components/SectionHeader';
import { gamesByCategory, playCategories } from '../data/mockData';

export default function Play() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Free <span className="text-orangeBrand">Gaming</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Instant games, challenges and rewards</p>
      </header>

      <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {playCategories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200"
          >
            {category}
          </span>
        ))}
      </div>

      <article className="card-base bg-gradient-to-r from-orangeBrand/20 to-zinc-900/60">
        <h2 className="text-sm font-semibold text-white">Play & earn</h2>
        <p className="mt-1 text-xs text-zinc-300">Complete games to unlock coins and badges</p>
      </article>

      {playCategories.map((category) => (
        <div key={category}>
          <SectionHeader title={category} />
          <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
            {gamesByCategory[category].map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                genre={game.genre}
                image={game.image}
                tags={game.tags}
                reward={game.reward}
                fallback={game.fallback}
                buttonLabel="Play"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
