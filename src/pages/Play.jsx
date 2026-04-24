import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { playCategories } from '../data/games';

function PointsBadge({ points }) {
  return (
    <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/80 px-2 py-1 text-[10px] font-semibold text-white">
      <img
        src="/assets/coin.png"
        alt="Coin"
        className="h-3 w-3 object-cover"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <span>🪙</span>
      <span>{points}</span>
    </div>
  );
}

function Visual({ image, alt, fallback, heightClass = 'h-32' }) {
  return (
    <div className={`relative ${heightClass} w-full overflow-hidden rounded-xl bg-zinc-800`}>
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-4xl">{fallback}</div>
    </div>
  );
}

export default function Play() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Free <span className="text-orangeBrand">Gaming</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Instant games, challenges and rewards</p>
      </header>

      {playCategories.map((category) => (
        <article key={category.id} className="space-y-3">
          <SectionHeader title={category.title} subtitle="Play now or download apps" />

          <div className="card-base space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-orangeBrand">Instant Play</h3>
            <div className="grid gap-3">
              {category.instantPlay.map((game) => (
                <div key={game.id} className="rounded-2xl border border-white/10 bg-black/40 p-3">
                  <div className="relative">
                    <Visual image={game.image} alt={game.name} fallback={game.fallback} />
                    <PointsBadge points={game.points} />
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-white">{game.name}</h4>
                    <p className="mt-1 text-xs text-zinc-300">{game.description}</p>
                    <button
                      type="button"
                      onClick={() => setSelectedGame(game)}
                      className="mt-3 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white"
                    >
                      Play
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-base space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-orangeBrand">Apps</h3>
            <div className="grid gap-3">
              {category.apps.map((app) => (
                <div key={app.id} className="rounded-2xl border border-white/10 bg-black/40 p-3">
                  <div className="relative">
                    <Visual image={app.image} alt={app.name} fallback={app.fallback} />
                    <PointsBadge points={app.points} />
                  </div>
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-white">{app.name}</h4>
                    <p className="mt-1 text-xs text-zinc-300">⭐ {app.rating} · {app.downloads} downloads</p>
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}

      {selectedGame ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-orangeBrand bg-[#101010] p-4 shadow-xl shadow-black/50">
            <div className="relative">
              <Visual image={selectedGame.image} alt={selectedGame.name} fallback={selectedGame.fallback} heightClass="h-40" />
              <PointsBadge points={selectedGame.points} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">{selectedGame.name}</h3>
            <p className="mt-2 text-sm text-zinc-300">{selectedGame.description}</p>
            <p className="mt-3 rounded-lg bg-zinc-900 p-3 text-xs text-zinc-200">Mission du jour: {selectedGame.dailyMission}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button type="button" className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Play now</button>
              <button
                type="button"
                onClick={() => setSelectedGame(null)}
                className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-zinc-200"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
