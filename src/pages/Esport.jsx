import { useState } from 'react';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { usePlayerProgress } from '../context/PlayerProgressContext';
import { esportTournaments } from '../data/esport';

export default function Esport() {
  const { showToast } = useToast();
  const { points, spendPoints, addActivity } = usePlayerProgress();
  const [selected, setSelected] = useState(null);
  const [payMethod, setPayMethod] = useState('DCB / facture mobile');
  return <section className="space-y-4"><SectionHeader title="Tournois E-Sport" subtitle="Gagne des Max it Points et inscris-toi facilement" />
    {esportTournaments.map((t) => <article key={t.id} className="card-base p-3"><p className="font-semibold">{t.name}</p><p className="text-xs text-zinc-400">{t.game} • {t.players} participants • {t.date} • {t.format}</p><p className="text-xs text-orangeBrand">À gagner : {t.pointsReward} Max it Points</p><p className="text-xs">Entrée : {t.accessLabel}</p><button onClick={() => setSelected(t)} className="mt-2 rounded-lg bg-orangeBrand px-3 py-1.5 text-xs">{t.cta}</button></article>)}
    {selected ? <ModalOverlay title={selected.name} onClose={() => setSelected(null)}><p className="text-xs">Points actuels : {points}</p><p className="text-xs">Coût : {selected.entryPointsCost || 0} points</p><p className="text-xs">Récompense : {selected.pointsReward} Max it Points</p><div className="mt-3 flex flex-col gap-2"><button onClick={() => { if (selected.entryPointsCost > 0 && !spendPoints(selected.entryPointsCost, `Inscription ${selected.name}`)) return showToast('Points insuffisants. Joue ou participe à un challenge pour en gagner.'); addActivity(`Inscription ${selected.name} -${selected.entryPointsCost} points`); showToast('Inscription validée avec tes points'); setSelected(null); }} className="rounded bg-orangeBrand py-2 text-xs">S’inscrire avec mes points</button>{selected.canPayWithMoney ? <><select className="rounded bg-zinc-900 p-2 text-xs" value={payMethod} onChange={(e)=>setPayMethod(e.target.value)}>{selected.paymentMethods.map((m)=><option key={m}>{m}</option>)}</select><button onClick={() => { showToast(`Achat simulé via ${payMethod}`); addActivity(`Accès ${selected.name} via ${payMethod}`); setSelected(null); }} className="rounded border border-orangeBrand py-2 text-xs text-orangeBrand">Payer autrement</button></> : null}</div></ModalOverlay> : null}
  </section>;
}
