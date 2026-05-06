import { useState } from 'react';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { usePlayerProgress } from '../context/PlayerProgressContext';

const bundles = [
  { id: 1, name: 'DATA Free Fire', details: '1 Go dédié Free Fire', validity: '7 jours', price: '500 FCFA', bonus: { points: 50 } },
  { id: 2, name: 'DATA Gameloft', details: '2 Go dédiés aux jeux Gameloft', validity: '14 jours', price: '1 000 FCFA', bonus: { xp: 100 } },
  { id: 3, name: 'Gaming Night Pass', details: 'Data gaming illimitée de 22h à 6h', validity: '1 nuit', price: '300 FCFA', bonus: { streak: 1 } },
  { id: 4, name: 'Esport Pack', details: '3 Go gaming + accès tournoi premium', validity: '30 jours', price: '2 000 FCFA', bonus: { points: 120 } },
];

export default function Gameshop() {
  const [selected, setSelected] = useState(null);
  const { showToast } = useToast();
  const { updateProgress, addActivity } = usePlayerProgress();

  const confirm = (mode) => {
    const item = selected;
    updateProgress((p) => ({ ...p, points: p.points + (item.bonus.points || 0), xp: p.xp + (item.bonus.xp || 0), streakCount: p.streakCount + (item.bonus.streak || 0) }));
    const bonusText = item.bonus.points ? `+${item.bonus.points} Max it Points` : item.bonus.xp ? `+${item.bonus.xp} XP` : 'streak boost';
    addActivity(`${item.name} activé : ${bonusText}`);
    showToast(`Activation réussie via ${mode}`);
    setSelected(null);
  };

  return <section className="space-y-4"><header className="card-base"><h1 className="text-2xl font-bold">Boutique Gaming</h1><p className="text-xs text-zinc-300">Offre partenaire gaming et bonus fidélité Max it.</p></header>
  <div><SectionHeader title="Gaming Data Bundles" subtitle="Paiement externe uniquement" />
  <div className="space-y-2">{bundles.map((b) => <article key={b.id} className="card-base p-3"><p className="font-semibold">{b.name}</p><p className="text-xs text-zinc-400">{b.details} • Validité : {b.validity}</p><p className="text-xs text-orangeBrand">Prix : {b.price}</p><p className="text-xs text-zinc-300">Paiement : Paiement sur facture mobile, Orange Money, Carte bancaire</p><button className="mt-2 rounded border border-orangeBrand px-3 py-1 text-xs text-orangeBrand" onClick={() => setSelected(b)}>Acheter</button></article>)}</div></div>
  {selected ? <ModalOverlay title="Confirmer l'achat" onClose={() => setSelected(null)}><p className="text-sm">{selected.name}</p><p className="text-xs text-zinc-300">Prix indicatif : {selected.price}</p><p className="text-xs text-zinc-300">Validité : {selected.validity}</p><p className="text-xs text-orangeBrand">Bonus : {selected.bonus.points ? `+${selected.bonus.points} Max it Points` : selected.bonus.xp ? `+${selected.bonus.xp} XP` : 'streak boost'}</p><div className="mt-3 space-y-2"><button className="w-full rounded bg-orangeBrand py-2 text-xs" onClick={() => confirm('Paiement sur facture mobile')}>Payer par facture mobile</button><button className="w-full rounded border border-orangeBrand py-2 text-xs text-orangeBrand" onClick={() => confirm('Orange Money')}>Payer avec Orange Money</button><button className="w-full rounded border border-white/20 py-2 text-xs" onClick={() => confirm('Carte bancaire')}>Payer par carte bancaire</button></div></ModalOverlay> : null}
  </section>;
}
