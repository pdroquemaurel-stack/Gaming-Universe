import Carousel from '../components/Carousel';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { discoverItems, favoriteGames, lastPurchases } from '../data/mockData';

const kpis = [
  { label: 'points gagnés', value: '12 450' },
  { label: 'jeux actifs', value: '8' },
  { label: 'tournois en cours', value: '3' },
];

const playerProgress = {
  titre: 'Explorateur Gaming — Niveau 3',
  xp: 650,
  xpTarget: 1000,
  points: '12 450',
  rang: 'Top 12',
};

const dailyChallenges = [
  { id: 'daily-play', icon: '🕹️', title: 'Jouer à un mini-jeu', reward: '+50 points', status: 'Terminé', cta: 'Jouer', route: '/play' },
  { id: 'daily-video', icon: '🎬', title: 'Regarder une vidéo E-Sport', reward: '+20 points', status: 'À faire', cta: 'Regarder', route: '/esport' },
  { id: 'daily-tournament', icon: '🏆', title: 'Participer à un tournoi', reward: '+100 points', status: 'À faire', cta: 'Voir les tournois', route: '/esport' },
];

const socialKpis = [
  '3 amis jouent à PUBG Mobile',
  'Amina t’a dépassé au classement',
  'Karim vient de gagner +120 points',
  '1240 joueurs actifs aujourd’hui',
];

const friendActivity = [
  { id: 'friend-1', name: 'Amina', avatar: 'A', action: 'a gagné 120 points sur Catch the Coin', time: 'Il y a 5 min' },
  { id: 'friend-2', name: 'Karim', avatar: 'K', action: 's’est inscrit au tournoi Free Fire', time: 'Il y a 12 min' },
  { id: 'friend-3', name: 'Youssef', avatar: 'Y', action: 'a acheté une e-card Steam', time: 'Il y a 40 min' },
];

export default function Home({ onNavigate }) {
  const { showToast } = useToast();
  const xpPercent = Math.min(Math.round((playerProgress.xp / playerProgress.xpTarget) * 100), 100);

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
          <button type="button" onClick={() => onNavigate('/points?tab=use')} className="rounded-lg border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand">Utiliser mes points</button>
        </div>
      </header>

      <div className="card-base space-y-3">
        <SectionHeader title="Progression joueur" subtitle="Monte de niveau chaque jour" />
        <p className="text-sm font-semibold text-white">{playerProgress.titre}</p>
        <p className="text-xs text-zinc-300">XP : {playerProgress.xp} / {playerProgress.xpTarget}</p>
        <div className="h-2 rounded-full bg-zinc-800">
          <div className="h-full rounded-full bg-orangeBrand" style={{ width: `${xpPercent}%` }} />
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg border border-white/10 bg-zinc-900/70 p-2 text-zinc-200">Points disponibles : <span className="font-semibold text-orangeBrand">{playerProgress.points}</span></div>
          <div className="rounded-lg border border-white/10 bg-zinc-900/70 p-2 text-zinc-200">Rang : <span className="font-semibold text-orangeBrand">{playerProgress.rang}</span></div>
        </div>
      </div>

      <div className="space-y-2">
        <SectionHeader title="Défis du jour" subtitle="Complète tes missions pour gagner plus" />
        <div className="space-y-2">
          {dailyChallenges.map((challenge) => (
            <article key={challenge.id} className="card-base flex items-center justify-between gap-3 p-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{challenge.icon} {challenge.title}</p>
                <p className="text-xs text-zinc-300">{challenge.reward} • {challenge.status}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  showToast('Défi du jour lancé');
                  onNavigate(challenge.route);
                }}
                className="rounded-lg border border-orangeBrand px-3 py-1.5 text-xs font-semibold text-orangeBrand"
              >
                {challenge.cta}
              </button>
            </article>
          ))}
        </div>
      </div>

      <div className="card-base space-y-2">
        <SectionHeader title="Activité de tes amis" subtitle="Reste connecté à ta squad" />
        <div className="grid grid-cols-2 gap-2">
          {socialKpis.map((item) => (
            <p key={item} className="rounded-lg border border-white/10 bg-zinc-900/70 px-2 py-1.5 text-xs text-zinc-200">{item}</p>
          ))}
        </div>
        <div className="space-y-2">
          {friendActivity.map((activity) => (
            <article key={activity.id} className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-2 py-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orangeBrand/20 text-xs font-bold text-orangeBrand">{activity.avatar}</div>
              <div className="min-w-0">
                <p className="text-xs text-zinc-200"><span className="font-semibold text-white">{activity.name}</span> {activity.action}</p>
                <p className="text-[11px] text-zinc-500">{activity.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="card-base overflow-hidden bg-gradient-to-r from-orangeBrand/20 to-zinc-900">
        <SectionHeader title="Événement du jour" subtitle="Moment fort de la communauté" />
        <p className="mt-1 text-sm font-semibold text-white">Tournoi Free Fire — ce soir 20h</p>
        <p className="mt-1 text-xs text-zinc-300">Récompense : Samsung S25 + 50 Go data</p>
        <button type="button" onClick={() => onNavigate('/esport')} className="mt-3 rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Voir l’événement</button>
      </div>

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
