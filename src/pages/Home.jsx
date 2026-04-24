import Carousel from '../components/Carousel';
import SectionHeader from '../components/SectionHeader';
import { discoverItems, favoriteGames, lastPurchases } from '../data/mockData';

const navItems = [
  { key: 'play', label: 'Play' },
  { key: 'shop', label: 'Gameshop' },
  { key: 'esport', label: 'E-Sport' },
];

export default function Home({ currentPage, onNavigate }) {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-orangeBrand">Max it Gaming</h1>
        <p className="mt-2 text-sm text-zinc-300">Your mobile gaming hub</p>
      </header>

      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {navItems.map((item) => {
          const isActive = currentPage === item.key || (currentPage === 'home' && item.key === 'play');

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onNavigate(item.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                isActive ? 'bg-orangeBrand text-black' : 'bg-zinc-900 text-zinc-300'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div>
        <SectionHeader title="Discover" subtitle="What is hot right now" />
        <Carousel
          items={discoverItems}
          autoScrollMs={3200}
          renderItem={(item) => (
            <article className="card-base">
              <h3 className="text-base font-semibold text-orangeBrand">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
              <button type="button" className="mt-3 rounded-lg bg-orangeBrand px-3 py-2 text-sm font-semibold text-black">
                {item.cta}
              </button>
            </article>
          )}
        />
      </div>

      <div>
        <SectionHeader title="Favorites" subtitle="Your quick picks" />
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {favoriteGames.map((game) => (
            <article key={game.id} className="card-base w-36 flex-shrink-0 p-3">
              <h3 className="text-sm font-semibold">{game.title}</h3>
              <p className="mt-1 text-xs text-zinc-400">{game.genre}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="Last purchases" subtitle="Recent transactions" />
        <div className="space-y-2">
          {lastPurchases.map((purchase) => (
            <article key={purchase.id} className="card-base p-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{purchase.item}</h3>
                <span className="text-xs font-semibold text-orangeBrand">{purchase.price}</span>
              </div>
              <p className="mt-1 text-xs text-zinc-400">{purchase.game}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
