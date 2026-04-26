import Carousel from '../components/Carousel';
import FeatureCard from '../components/FeatureCard';
import MissionCard from '../components/MissionCard';
import PlayerStatusCard from '../components/PlayerStatusCard';
import SectionHeader from '../components/SectionHeader';
import { discoverItems, favoriteGames, lastPurchases, missions, playerProfile } from '../data/mockData';

export default function Home() {
  return (
    <section className="space-y-6">
      <header className="orange-glow card-base space-y-2 bg-gradient-to-br from-zinc-900 to-black">
        <h1 className="text-2xl font-bold tracking-tight text-white">Max it <span className="text-orangeBrand">Gaming</span></h1>
        <p className="text-base font-semibold text-white">Play. Pay. Compete. Get rewarded.</p>
        <p className="text-sm text-zinc-300">Your gaming hub inside Max it</p>
      </header>

      <PlayerStatusCard profile={playerProfile} />
      <MissionCard mission={missions[0]} />

      <div>
        <SectionHeader title="Discover" subtitle="Trending now" />
        <Carousel
          items={discoverItems}
          autoScrollMs={3200}
          cardWidthClass="w-full"
          renderItem={(item) => (
            <FeatureCard title={item.title} description={item.description} cta={item.cta} image={item.image} fallback={item.fallback} />
          )}
        />
      </div>

      <div>
        <SectionHeader title="Favorites" subtitle="Your quick picks" />
        <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {favoriteGames.map((game) => (
            <article key={game.id} className="card-base w-36 flex-shrink-0 overflow-hidden p-0">
              {game.image ? <img src={game.image} alt={game.title} className="h-24 w-full object-cover" /> : <div className="flex h-24 w-full items-center justify-center bg-zinc-800 text-3xl">{game.fallback}</div>}
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
