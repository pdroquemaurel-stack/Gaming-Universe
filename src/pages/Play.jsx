import SectionHeader from '../components/SectionHeader';
import { gamesByCategory, mostPlayedGames, playCategories, recommendedGames } from '../data/mockData';

function GameRow({ title, games }) {
  return (
    <div>
      <SectionHeader title={title} />
      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
        {games.map((game) => (
          <article key={game.id} className="card-base w-40 flex-shrink-0 p-3">
            <div className="mb-2 text-3xl">{game.image}</div>
            <h3 className="text-sm font-semibold">{game.title}</h3>
            <button type="button" className="mt-3 w-full rounded-md bg-orangeBrand px-2 py-2 text-xs font-semibold text-black">
              Play now
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Play() {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-orangeBrand">Play</h1>
        <p className="mt-2 text-sm text-zinc-300">Discover games like a streaming catalog</p>
      </header>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {playCategories.map((category) => (
          <span key={category} className="rounded-full bg-zinc-900 px-4 py-2 text-xs text-zinc-200">
            {category}
          </span>
        ))}
      </div>

      {playCategories.map((category) => (
        <GameRow key={category} title={category} games={gamesByCategory[category]} />
      ))}

      <GameRow title="Recommended" games={recommendedGames} />
      <GameRow title="Most played" games={mostPlayedGames} />
    </section>
  );
}
