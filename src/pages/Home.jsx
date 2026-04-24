import Carousel from '../components/Carousel';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';
import { discoverItems, favoriteGames, lastPurchases } from '../data/mockData';

const navItems = [
  { key: 'play', label: 'Play' },
  { key: 'shop', label: 'Gameshop' },
  { key: 'esport', label: 'E-Sport' },
];

export default function Home({ currentPage, onNavigate }) {
  return (
    <section className="space-y-7">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-white">Max it <span className="text-orangeBrand">Gaming</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Premium mobile hub for play, shop, and competition</p>
      </header>

      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {navItems.map((item) => {
          const isActive = currentPage === item.key || (currentPage === 'home' && item.key === 'play');

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onNavigate(item.key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? 'border-orangeBrand bg-orangeBrand text-white shadow-md shadow-orangeBrand/30'
                  : 'border-white/10 bg-zinc-900 text-zinc-300'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div>
        <SectionHeader title="Discover" subtitle="Trending now" />
        <Carousel
          items={discoverItems}
          autoScrollMs={3200}
          cardWidthClass="w-full"
          renderItem={(item) => (
            <FeatureCard
              title={item.title}
              description={item.description}
              cta={item.cta}
              image={item.image}
              fallback={item.fallback}
            />
          )}
        />
      </div>

      <div>
        <SectionHeader title="Favorites" subtitle="Your quick picks" />
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {favoriteGames.map((game) => (
            <article key={game.id} className="card-base w-36 flex-shrink-0 overflow-hidden p-0">
              {game.image ? (
                <img src={game.image} alt={game.title} className="h-24 w-full object-cover" />
              ) : (
                <div className="flex h-24 w-full items-center justify-center bg-zinc-800 text-3xl">{game.fallback}</div>
              )}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-white">{game.title}</h3>
                <p className="mt-1 text-xs text-zinc-400">{game.genre}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="Last purchases" subtitle="Recent transactions" />
        <div className="space-y-2">
          {lastPurchases.map((purchase) => (
            <article key={purchase.id} className="card-base flex items-center justify-between gap-3 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-lg">{purchase.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{purchase.item}</h3>
                  <p className="mt-1 text-xs text-zinc-400">{purchase.game}</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-orangeBrand">{purchase.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
