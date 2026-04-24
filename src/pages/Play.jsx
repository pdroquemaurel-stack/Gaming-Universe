import GameCard from '../components/GameCard';
import SectionHeader from '../components/SectionHeader';
import { gamesByCategory, mostPlayedGames, playCategories, recommendedGames } from '../data/mockData';

function GameRow({ title, games }) {
  return (
    <div>
      <SectionHeader title={title} />
      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
        {games.map((game) => (
          <GameCard key={game.id} title={game.title} image={game.image} fallback={game.fallback} />
        ))}
      </div>
    </div>
  );
}

export default function Play() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Play <span className="text-orangeBrand">Now</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Netflix-style game discovery, optimized for mobile</p>
      </header>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {playCategories.map((category) => (
          <span key={category} className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

      {playCategories.map((category) => (
        <GameRow key={category} title={category} games={gamesByCategory[category]} />
      ))}

      <GameRow title="Recommended" games={recommendedGames} />
      <GameRow title="Most played" games={mostPlayedGames} />
    </section>
  );
}
