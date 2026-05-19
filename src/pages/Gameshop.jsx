import { useState } from 'react';
import AssetImage from '../components/AssetImage';
import ECardItem from '../components/ECardItem';
import ModalOverlay from '../components/ModalOverlay';
import PreviousPurchaseCard from '../components/PreviousPurchaseCard';
import SectionHeader from '../components/SectionHeader';
import ShopGameBubble from '../components/ShopGameBubble';
import ShopItemCard from '../components/ShopItemCard';
import ShopPromotionCard from '../components/ShopPromotionCard';
import ShopSubscriptionCard from '../components/ShopSubscriptionCard';
import { useToast } from '../components/ToastProvider';
import {
  popularShopGames,
  previousPurchases,
  gamingDataBundles,
  shopECards,
  shopPromotions,
  shopSubscriptions,
} from '../data/shop';

const FILTERS = [
  { id: ‘all’, label: ‘Tout’ },
  { id: ‘games’, label: ‘Jeux’ },
  { id: ‘promos’, label: ‘Promos’ },
  { id: ‘data’, label: ‘Data’ },
  { id: ‘subscriptions’, label: ‘Abonnements’ },
  { id: ‘ecards’, label: ‘E-Cards’ },
];

export default function Gameshop({ onNavigate }) {
  const [selectedGame, setSelectedGame] = useState(null);
  const [playerId, setPlayerId] = useState(‘’);
  const [connected, setConnected] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [activeFilter, setActiveFilter] = useState(‘all’);
  const { showToast } = useToast();

  const openGame = (game) => {
    setSelectedGame(game);
    setPlayerId(‘’);
    setConnected(false);
  };

  const show = (category) => activeFilter === ‘all’ || activeFilter === category;

  return (
    <section className="space-y-6">
      <header className="card-base orange-glow space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold text-white">Boutique Gaming</h1>
            <p className="mt-1 text-xs text-zinc-300">Achète du contenu, utilise tes points et profite d’offres partenaires.</p>
          </div>
          <span className="rounded-full border border-orangeBrand/40 bg-orangeBrand/10 px-2 py-1 text-[10px] font-semibold text-orangeBrand">Promos du jour</span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950/90 p-3">
          <p className="text-sm font-semibold text-white">🪙 12 450 points</p>
          <button type="button" onClick={() => onNavigate(‘/points?tab=use’)} className="rounded-lg border border-orangeBrand px-3 py-1.5 text-xs font-semibold text-orangeBrand">Voir mes points</button>
        </div>
      </header>

      <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActiveFilter(f.id)}
            className={`flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
              activeFilter === f.id
                ? ‘bg-orangeBrand text-white’
                : ‘border border-white/20 text-zinc-300’
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {show(‘games’) && (
        <div>
          <SectionHeader title="Jeux populaires" subtitle="Connecte ton profil joueur pour voir les contenus disponibles" />
          <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
            {popularShopGames.map((game) => (
              <ShopGameBubble key={game.id} game={game} active={selectedGame?.id === game.id} onClick={openGame} />
            ))}
          </div>
        </div>
      )}

      {show(‘promos’) && (
        <div>
          <SectionHeader title="Promotions du moment" subtitle="Des offres gaming boostées avec Max it Points" />
          <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
            {shopPromotions.map((promo) => (
              <ShopPromotionCard
                key={promo.id}
                promo={promo}
                onBuy={() => showToast(‘Réduction Max it Points appliquée pour la démo’)}
              />
            ))}
          </div>
        </div>
      )}

      {show(‘data’) && (
        <div>
          <SectionHeader title="Gaming Data Bundles" subtitle="Offres data pensées pour tes jeux préférés" />
          <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
            {gamingDataBundles.map((bundle) => (
              <article key={bundle.id} className="card-base min-w-[200px] flex-shrink-0 space-y-2 p-3">
                <p className="text-sm font-semibold text-white">{bundle.name}</p>
                <p className="text-xs text-zinc-400">{bundle.details}</p>
                <p className="text-xs text-zinc-400">Validité {bundle.validity}</p>
                <p className="text-sm font-bold text-orangeBrand">{bundle.price.toLocaleString()} FCFA</p>
                <p className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300">
                  🪙 {bundle.bonus}
                </p>
                <button type="button" onClick={() => setSelectedBundle(bundle)} className="mt-1 w-full rounded-lg border border-orangeBrand px-3 py-1.5 text-xs font-semibold text-orangeBrand">Acheter</button>
              </article>
            ))}
          </div>
        </div>
      )}

      {show(‘subscriptions’) && (
        <div>
          <SectionHeader title="Abonnements Gaming" subtitle="Passe premium et options sans pub" />
          <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
            {shopSubscriptions.map((subscription) => (
              <ShopSubscriptionCard
                key={subscription.id}
                subscription={subscription}
                onSubscribe={() => showToast(‘Abonnement activé pour la démo’)}
              />
            ))}
          </div>
        </div>
      )}

      {show(‘ecards’) && (
        <div>
          <SectionHeader title="E-Cards" subtitle="Cartes cadeaux instantanées" />
          <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
            {shopECards.map((card) => (
              <ECardItem key={card.id} card={card} onBuy={() => showToast(‘Achat simulé pour la démo’)} />
            ))}
          </div>
        </div>
      )}

      {activeFilter === ‘all’ && (
        <>
          <div className="card-base space-y-3">
            <SectionHeader title="Mes avantages Max it Points" subtitle="Profite au maximum de tes points" />
            <ul className="space-y-1 text-sm text-zinc-200">
              <li>• Réduis le prix de tes achats</li>
              <li>• Débloque des offres exclusives</li>
              <li>• Accède à des abonnements premium</li>
              <li>• Participe à des tirages au sort</li>
            </ul>
            <button type="button" onClick={() => onNavigate(‘/points?tab=use’)} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-sm font-semibold text-white">Voir mes points</button>
          </div>

          <div className="space-y-2">
            <SectionHeader title="Mes anciens achats" subtitle="Retrouve tes derniers achats gaming" />
            <div className="space-y-2">
              {previousPurchases.map((purchase) => (
                <PreviousPurchaseCard key={purchase.id} purchase={purchase} onRepurchase={() => showToast(‘Achat simulé pour la démo’)} />
              ))}
            </div>
          </div>
        </>
      )}

      {selectedGame ? (
        <ModalOverlay title={selectedGame.name} onClose={() => setSelectedGame(null)}>
          <div className="space-y-3">
            <AssetImage src={selectedGame.image} alt={selectedGame.name} fallback="🎮" className="h-36 w-full" />
            <p className="text-xs text-zinc-300">{selectedGame.description}</p>
            <a href={selectedGame.storeUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-lg border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand">Télécharger le jeu</a>

            <input value={playerId} onChange={(event) => setPlayerId(event.target.value)} placeholder="ID joueur" className="w-full rounded-lg border border-white/20 bg-zinc-900 px-3 py-2 text-sm text-white outline-none" />
            <button
              type="button"
              onClick={() => {
                setConnected(true);
                showToast('Profil joueur connecté');
              }}
              className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-sm font-semibold text-white"
            >
              Me connecter
            </button>

            {connected ? <span className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">Connecté</span> : null}

            {connected ? (
              <div className="space-y-3">
                <SectionHeader title="Contenus disponibles" />
                {selectedGame.items.map((item) => (
                  <ShopItemCard
                    key={item.id}
                    item={item}
                    onBuy={() => showToast('Achat simulé pour la démo')}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </ModalOverlay>
      ) : null}

      {selectedBundle ? (
        <ModalOverlay title="Confirmation d'achat" onClose={() => setSelectedBundle(null)}>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">{selectedBundle.name}</p>
            <p className="text-xs text-zinc-300">Prix : {selectedBundle.price.toLocaleString()} FCFA</p>
            <p className="text-xs text-zinc-300">Validité : {selectedBundle.validity}</p>
            <p className="text-xs text-orangeBrand">Bonus : {selectedBundle.bonus}</p>
            <div className="rounded-lg border border-white/10 bg-zinc-900/80 p-3 text-xs text-zinc-300">
              <p>Moyens de paiement :</p>
              <p>• facture mobile / DCB</p>
              <p>• Orange Money</p>
              <p>• carte bancaire</p>
            </div>
            <div className="grid gap-2">
              {['Payer sur facture mobile', 'Payer avec Orange Money', 'Payer par carte bancaire'].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    showToast(`${selectedBundle.name} activé : ${selectedBundle.bonus}`);
                    setSelectedBundle(null);
                  }}
                  className="w-full rounded-lg border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </ModalOverlay>
      ) : null}
    </section>
  );
}
