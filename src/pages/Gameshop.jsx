import { useState } from 'react';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { usePlayerProgress } from '../context/PlayerProgressContext';
import { gamingDataBundles, pointsRedemptionItems } from '../data/shop';

export default function Gameshop() {
  const { showToast } = useToast();
  const { points, addPoints, addXP, spendPoints, addActivity } = usePlayerProgress();
  const [bundle, setBundle] = useState(null);
  const [method, setMethod] = useState('Orange Money');
  return <section className="space-y-5"><header className="card-base"><h1 className="text-2xl font-bold">Boutique Gaming</h1><p className="text-xs text-zinc-300">Des offres data pensées pour jouer plus longtemps</p></header>
  <div><SectionHeader title="Bundles Data Gaming" subtitle="Des offres data pensées pour jouer plus longtemps" /><div className="space-y-2">{gamingDataBundles.map((b) => <article key={b.id} className="card-base p-3"><p className="text-sm font-semibold">{b.name}</p><p className="text-xs text-zinc-400">{b.details} • Validité : {b.validity}</p><p className="text-xs text-zinc-300">Prix : {b.price} FCFA</p><p className="text-xs text-orangeBrand">Bonus : {b.bonusLabel}</p><button onClick={() => { setBundle(b); setMethod(b.paymentMethods[1]); }} className="mt-2 rounded-lg border border-orangeBrand px-3 py-1.5 text-xs text-orangeBrand">Acheter</button></article>)}</div></div>
  <div><SectionHeader title="Utiliser mes Max it Points" /><p className="mb-2 text-xs">Solde : {points} points</p><div className="space-y-2">{pointsRedemptionItems.map((it) => <article key={it.id} className="card-base flex items-center justify-between p-3"><div><p className="text-sm">{it.title}</p><p className="text-xs text-zinc-400">{it.cost} points</p></div><button onClick={() => { if (!spendPoints(it.cost, it.title)) return showToast('Points insuffisants. Joue ou participe à un challenge pour en gagner.'); addActivity(`${it.title} débloqué`); showToast('Avantage débloqué avec succès'); }} className="rounded-lg bg-orangeBrand px-3 py-2 text-xs">Utiliser</button></article>)}</div></div>
  {bundle ? <ModalOverlay title="Confirmation d’achat" onClose={() => setBundle(null)}><p className="text-sm">{bundle.name}</p><p className="text-xs">Prix : {bundle.price} FCFA</p><p className="text-xs">Validité : {bundle.validity}</p><p className="text-xs text-orangeBrand">Bonus : {bundle.bonusLabel}</p><div className="mt-2 space-y-1">{bundle.paymentMethods.map((m) => <label key={m} className="flex items-center gap-2 text-xs"><input type="radio" name="pm" checked={method===m} onChange={() => setMethod(m)} />{m}</label>)}</div><div className="mt-3 flex gap-2"><button onClick={() => { if (bundle.pointsBonus) addPoints(bundle.pointsBonus, `${bundle.name} activé`); if (bundle.xpBonus) addXP(bundle.xpBonus, `${bundle.name} activé`); addActivity(`${bundle.name} activé — ${bundle.bonusLabel}`); showToast(`Achat simulé via ${method}`); setBundle(null); }} className="flex-1 rounded bg-orangeBrand py-2 text-xs">Confirmer l’achat</button><button onClick={() => setBundle(null)} className="flex-1 rounded border border-white/20 py-2 text-xs">Annuler</button></div></ModalOverlay> : null}
  </section>;
}
