import Carousel from '../components/Carousel';
import FeatureCard from '../components/FeatureCard';
import MissionCard from '../components/MissionCard';
import PlayerStatusCard from '../components/PlayerStatusCard';
import SectionHeader from '../components/SectionHeader';
import { discoverItems, favoriteGames, lastPurchases, missions, playerProfile } from '../data/mockData';

const kpis = [
  { label: 'points gagnés', value: '12 450' },
  { label: 'jeux actifs', value: '8' },
  { label: 'tournois en cours', value: '3' },
];

export default function Home({ onNavigate }) {
  return (
    <section className="space-y-6">
      <header className="orange-glow card-base space-y-4 bg-gradient-to-br from-zinc-900 to-black">
        <p className="text-xs uppercase tracking-[0.2em] text-orangeBrand">Max it Gaming</p>
        <h1 className="text-2xl font-bold tracking-tight text-white">Le hub gaming de Max it</h1>
        <p className="text-sm text-zinc-200">Joue, gagne des points, achète du contenu et participe à des compétitions.</p>

        <div className="grid grid-cols-3 gap-2">
          {kpis.map((kpi) => (
            <article key={kpi.label} className="rounded-xl border border-white/10 bg-black/30 p-2 text-center">
              <p className="text-sm font-extrabold text-orangeBrand">{kpi.value}</p>
              <p className="text-[10px] uppercase tracking-wide text-zinc-400">{kpi.label}</p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={() => onNavigate('/play')} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Commencer à jouer</button>
          <button type="button" onClick={() => onNavigate('/points')} className="rounded-lg border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand">Utiliser mes points</button>
        </div>
      </header>

      <PlayerStatusCard profile={playerProfile} />
      <MissionCard mission={missions[0]} />

      <div>
        <SectionHeader title="À découvrir" subtitle="Tendances du moment" />
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
        <SectionHeader title="Favoris" subtitle="Accès rapide" />
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
        <SectionHeader title="Derniers achats" subtitle="Transactions récentes" />
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
