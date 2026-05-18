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
  gamingDataBundles,
  popularShopGames,
  previousPurchases,
  shopECards,
  shopPromotions,
  shopSubscriptions,
} from '../data/shop';

// ─── Orange Money purchase flow ──────────────────────────────────────────────
// step 1: confirm  |  step 2: phone  |  step 3: success
function OrangeMoneyFlow({ item, onClose, onSuccess }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [coinsVisible, setCoinsVisible] = useState(false);

  const coinsEarned = Math.floor((item.price || 500) / 10);
  const label = item.name || item.title || item.item;
  const price = item.price
    ? `${item.price.toLocaleString('fr-FR')} FCFA`
    : item.salePrice || item.priceLabel || '—';

  const confirmPhone = () => {
    const digits = phone.replace(/\s/g, '');
    if (digits.length < 8) {
      setPhoneError('Numéro invalide — ex : 77 123 45 67');
      return;
    }
    setPhoneError('');
    setStep(3);
    setTimeout(() => setCoinsVisible(true), 400);
  };

  if (step === 1) {
    return (
      <div className="space-y-4">
        <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-4">
          <p className="text-xs text-zinc-400">Tu achètes</p>
          <p className="mt-0.5 text-base font-bold text-white">{label}</p>
          <p className="mt-1 text-lg font-extrabold text-orangeBrand">{price}</p>
          {item.validity && <p className="mt-0.5 text-xs text-zinc-400">Validité : {item.validity}</p>}
          {item.bonus && <p className="mt-1 text-xs font-semibold text-emerald-400">Bonus : {item.bonus}</p>}
        </div>

        <button
          type="button"
          onClick={() => setStep(2)}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-orangeBrand py-3.5 text-sm font-bold text-black transition hover:brightness-110 active:scale-[0.98]"
        >
          <span className="text-xl">🟠</span>
          Payer avec Orange Money
        </button>

        <div className="flex items-center gap-2 text-center">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-zinc-500">ou</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setStep(2)}
            className="rounded-xl border border-white/15 py-2.5 text-xs font-semibold text-zinc-300"
          >
            📱 Facture mobile
          </button>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="rounded-xl border border-white/15 py-2.5 text-xs font-semibold text-zinc-300"
          >
            💳 Carte bancaire
          </button>
        </div>

        <p className="text-center text-[10px] text-zinc-500">
          Paiement sécurisé · Sans carte bancaire requise
        </p>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3 rounded-xl border border-orangeBrand/30 bg-orangeBrand/10 p-3">
          <span className="text-3xl">🟠</span>
          <div>
            <p className="text-sm font-bold text-white">Orange Money</p>
            <p className="text-xs text-zinc-300">Paiement en 2 taps · Instantané</p>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold text-zinc-300">
            Ton numéro Orange Money
          </label>
          <div className="flex gap-2">
            <span className="flex items-center rounded-lg border border-white/15 bg-zinc-900 px-3 text-xs text-zinc-400">
              +221
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); setPhoneError(''); }}
              placeholder="77 123 45 67"
              className="flex-1 rounded-lg border border-white/15 bg-zinc-900 px-3 py-2.5 text-sm text-white outline-none focus:border-orangeBrand"
            />
          </div>
          {phoneError && <p className="mt-1 text-xs text-red-400">{phoneError}</p>}
        </div>

        <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-400">Montant</span>
            <span className="font-semibold text-white">{price}</span>
          </div>
          <div className="mt-1 flex justify-between text-xs">
            <span className="text-zinc-400">Bonus Max it Points</span>
            <span className="font-semibold text-orangeBrand">+{coinsEarned} pts</span>
          </div>
        </div>

        <button
          type="button"
          onClick={confirmPhone}
          className="w-full rounded-xl bg-orangeBrand py-3.5 text-sm font-bold text-black transition hover:brightness-110 active:scale-[0.98]"
        >
          Confirmer le paiement
        </button>
        <button type="button" onClick={() => setStep(1)} className="w-full text-center text-xs text-zinc-500 underline">
          Retour
        </button>
      </div>
    );
  }

  // step 3 — success
  return (
    <div className="flex flex-col items-center gap-5 py-2 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-4xl ring-2 ring-emerald-400/30">
        ✓
      </div>
      <div>
        <p className="text-lg font-extrabold text-white">Paiement confirmé !</p>
        <p className="mt-1 text-sm text-zinc-300">{label} activé avec succès</p>
      </div>

      <div
        className="rounded-xl border border-orangeBrand/30 bg-orangeBrand/10 px-6 py-4 transition-all duration-500"
        style={{ opacity: coinsVisible ? 1 : 0, transform: coinsVisible ? 'scale(1)' : 'scale(0.8)' }}
      >
        <p className="text-xs text-zinc-400">Max it Points gagnés</p>
        <p className="text-3xl font-extrabold text-orangeBrand">+{coinsEarned}</p>
        <p className="text-xs text-zinc-400">crédités sur ton compte</p>
      </div>

      <div className="w-full rounded-xl border border-white/8 bg-zinc-900/60 px-4 py-3 text-left text-xs text-zinc-400">
        <div className="flex justify-between"><span>Référence</span><span className="text-white">OM-{Math.random().toString(36).slice(2, 8).toUpperCase()}</span></div>
        <div className="mt-1 flex justify-between"><span>Montant débité</span><span className="text-white">{price}</span></div>
        <div className="mt-1 flex justify-between"><span>Statut</span><span className="text-emerald-400">✓ Confirmé</span></div>
      </div>

      <button
        type="button"
        onClick={() => { onSuccess?.(coinsEarned); onClose(); }}
        className="w-full rounded-xl bg-orangeBrand py-3 text-sm font-bold text-black transition hover:brightness-110 active:scale-[0.98]"
      >
        Retour à la boutique
      </button>
    </div>
  );
}

// ─── Main Gameshop component ──────────────────────────────────────────────────
export default function Gameshop({ onNavigate }) {
  const [selectedGame, setSelectedGame] = useState(null);
  const [playerId, setPlayerId] = useState('');
  const [connected, setConnected] = useState(false);
  const [purchaseItem, setPurchaseItem] = useState(null);
  const { showToast } = useToast();

  const openGame = (game) => {
    setSelectedGame(game);
    setPlayerId('');
    setConnected(false);
  };

  const openPurchase = (item) => setPurchaseItem(item);

  const handlePurchaseSuccess = (coinsEarned) => {
    showToast(`Achat confirmé · +${coinsEarned} Max it Points crédités`);
    window.dispatchEvent(new CustomEvent('maxit:state-updated', {
      detail: (() => {
        try {
          const stored = JSON.parse(window.localStorage.getItem('playerHubState') || '{}');
          const next = { ...stored, coins: (stored.coins ?? 1240) + coinsEarned };
          window.localStorage.setItem('playerHubState', JSON.stringify(next));
          return next;
        } catch { return {}; }
      })(),
    }));
  };

  return (
    <section className="space-y-6">
      <header className="card-base orange-glow space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-2xl font-bold text-white">Boutique Gaming</h1>
            <p className="mt-1 text-xs text-zinc-300">Achète du contenu, utilise tes points et profite d'offres partenaires.</p>
          </div>
          <span className="rounded-full border border-orangeBrand/40 bg-orangeBrand/10 px-2 py-1 text-[10px] font-semibold text-orangeBrand">Promos du jour</span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950/90 p-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">🪙</span>
            <p className="text-sm font-semibold text-white">1 240 points</p>
          </div>
          <button type="button" onClick={() => onNavigate('/points?tab=use')} className="rounded-lg border border-orangeBrand px-3 py-1.5 text-xs font-semibold text-orangeBrand">Voir mes points</button>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-orangeBrand/20 bg-orangeBrand/5 px-3 py-2">
          <span className="text-xl">🟠</span>
          <p className="text-xs text-zinc-300">
            <span className="font-semibold text-white">Orange Money</span> — Paiement en 2 taps, sans carte bancaire
          </p>
        </div>
      </header>

      <div>
        <SectionHeader title="Promotions du moment" subtitle="Des offres gaming boostées avec Max it Points" />
        <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {shopPromotions.map((promo) => (
            <ShopPromotionCard
              key={promo.id}
              promo={promo}
              onBuy={() => openPurchase({ name: promo.title, price: promo.salePrice ? parseInt(promo.salePrice) : 500, priceLabel: promo.salePrice })}
            />
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="Gaming Data Bundles" subtitle="Offres data pensées pour tes jeux préférés" />
        <div className="space-y-2">
          {gamingDataBundles.map((bundle) => (
            <article key={bundle.id} className="card-base p-3">
              <p className="text-sm font-semibold text-white">{bundle.name}</p>
              <p className="text-xs text-zinc-400">{bundle.details}</p>
              <p className="text-xs text-zinc-400">Validité {bundle.validity}</p>
              <p className="text-xs text-orangeBrand">{bundle.price.toLocaleString()} FCFA • Bonus: {bundle.bonus}</p>
              <button type="button" onClick={() => openPurchase(bundle)} className="mt-2 rounded-lg border border-orangeBrand px-3 py-1.5 text-xs font-semibold text-orangeBrand">Acheter</button>
            </article>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="Jeux populaires" subtitle="Connecte ton profil joueur pour voir les contenus disponibles" />
        <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {popularShopGames.map((game) => (
            <ShopGameBubble key={game.id} game={game} active={selectedGame?.id === game.id} onClick={openGame} />
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="Abonnements Gaming" subtitle="Passe premium et options sans pub" />
        <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {shopSubscriptions.map((subscription) => (
            <ShopSubscriptionCard
              key={subscription.id}
              subscription={subscription}
              onSubscribe={() => openPurchase({ name: subscription.name, price: 500 })}
            />
          ))}
        </div>
      </div>

      <div>
        <SectionHeader title="E-Cards" subtitle="Cartes cadeaux instantanées" />
        <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {shopECards.map((card) => (
            <ECardItem key={card.id} card={card} onBuy={() => openPurchase({ name: card.name, price: 1000 })} />
          ))}
        </div>
      </div>

      <div className="card-base space-y-3">
        <SectionHeader title="Mes avantages Max it Points" subtitle="Profite au maximum de tes points" />
        <ul className="space-y-1 text-sm text-zinc-200">
          <li>• Réduis le prix de tes achats</li>
          <li>• Débloque des offres exclusives</li>
          <li>• Accède à des abonnements premium</li>
          <li>• Participe à des tirages au sort</li>
        </ul>
        <button type="button" onClick={() => onNavigate('/points?tab=use')} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-sm font-semibold text-white">Voir mes points</button>
      </div>

      <div className="space-y-2">
        <SectionHeader title="Mes anciens achats" subtitle="Retrouve tes derniers achats gaming" />
        <div className="space-y-2">
          {previousPurchases.map((purchase) => (
            <PreviousPurchaseCard key={purchase.id} purchase={purchase} onRepurchase={() => openPurchase({ name: purchase.item, price: 500 })} />
          ))}
        </div>
      </div>

      {/* Game detail modal */}
      {selectedGame ? (
        <ModalOverlay title={selectedGame.name} onClose={() => setSelectedGame(null)}>
          <div className="space-y-3">
            <AssetImage src={selectedGame.image} alt={selectedGame.name} fallback="🎮" className="h-36 w-full" />
            <p className="text-xs text-zinc-300">{selectedGame.description}</p>
            <a href={selectedGame.storeUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-lg border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand">Télécharger le jeu</a>

            <input value={playerId} onChange={(event) => setPlayerId(event.target.value)} placeholder="ID joueur" className="w-full rounded-lg border border-white/20 bg-zinc-900 px-3 py-2 text-sm text-white outline-none" />
            <button
              type="button"
              onClick={() => setConnected(true)}
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
                    onBuy={() => openPurchase(item)}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </ModalOverlay>
      ) : null}

      {/* Orange Money purchase flow */}
      {purchaseItem ? (
        <ModalOverlay title="Paiement" onClose={() => setPurchaseItem(null)}>
          <OrangeMoneyFlow
            item={purchaseItem}
            onClose={() => setPurchaseItem(null)}
            onSuccess={handlePurchaseSuccess}
          />
        </ModalOverlay>
      ) : null}
    </section>
  );
}
