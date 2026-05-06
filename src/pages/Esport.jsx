import { useState } from 'react';
import ModalOverlay from '../components/ModalOverlay';
import Tabs from '../components/Tabs';
import { useToast } from '../components/ToastProvider';
import { usePlayerProgress } from '../context/PlayerProgressContext';

const tabs = [{ id: 'video', label: 'Vidéo' }, { id: 'competition', label: 'Compétition' }, { id: 'challenge', label: 'Challenge' }];
const challenge = { title: 'Headshot King — Free Fire', time: '3 jours', reward: '2 500 Max it Points', participants: 1248, status: 'En cours' };
const leaderboard = ['Amine — 84 headshots', 'Sarah — 79 headshots', 'Paul — 66 headshots', 'Kevin — 61 headshots'];

export default function Esport() {
  const [tab, setTab] = useState('video');
  const [openConnect, setOpenConnect] = useState(false);
  const [playerId, setPlayerId] = useState('');
  const { progress, updateProgress, addActivity } = usePlayerProgress();
  const { showToast } = useToast();

  return <section className="space-y-4"><h1 className="text-2xl font-bold">E-Sport</h1><Tabs tabs={tabs} activeTab={tab} onChange={setTab} />
  {tab === 'challenge' ? <div className="card-base space-y-2"><p className="font-semibold">{challenge.title}</p><p className="text-xs">Objectif : faire le maximum de headshots sur Free Fire</p><p className="text-xs text-zinc-300">Temps restant : {challenge.time} • Participants : {challenge.participants} • Statut : {challenge.status}</p><p className="text-xs text-orangeBrand">Points à gagner : {challenge.reward}</p>
  <button className="rounded bg-orangeBrand px-3 py-2 text-xs" onClick={() => progress.freeFireConnected ? (addActivity('Challenge Free Fire rejoint'), showToast('Participation enregistrée pour la démo')) : setOpenConnect(true)}>{progress.freeFireConnected ? 'Participer au challenge' : 'Joindre mon compte Free Fire'}</button>
  {progress.freeFireConnected ? <span className="ml-2 rounded-full border border-orangeBrand px-2 py-1 text-[10px] text-orangeBrand">Compte connecté</span> : null}
  <div className="space-y-1 pt-2">{leaderboard.map((line, i) => <p key={i} className={`rounded px-2 py-1 text-xs ${i===2 ? 'bg-orangeBrand/20 text-orangeBrand' : 'bg-zinc-900 text-zinc-300'}`}>{i+1}. {line}</p>)}</div>
  <div className="pt-2 text-xs text-zinc-300">Autres challenges : Fastest Lap — Asphalt • Daily Survival — PUBG Mobile • Combo Master — FC Mobile</div></div> : <div className="card-base text-sm text-zinc-300">Contenu {tab} mocké pour la démo.</div>}
  {openConnect ? <ModalOverlay title="Connecter mon compte Free Fire" onClose={() => setOpenConnect(false)}><p className="text-sm text-zinc-300">Associe ton ID joueur pour participer au challenge et suivre ton score.</p><input className="mt-3 w-full rounded border border-white/20 bg-zinc-900 px-3 py-2 text-sm" placeholder="ID joueur Free Fire" value={playerId} onChange={(e)=>setPlayerId(e.target.value)} /><div className="mt-3 flex gap-2"><button className="flex-1 rounded bg-orangeBrand py-2 text-xs" onClick={() => { updateProgress((p)=>({ ...p, freeFireConnected: true })); addActivity('Compte Free Fire connecté'); showToast('Compte Free Fire connecté pour la démo'); setOpenConnect(false); }}>Connecter mon compte</button><button className="flex-1 rounded border border-white/20 py-2 text-xs" onClick={() => setOpenConnect(false)}>Annuler</button></div></ModalOverlay> : null}
  </section>;
}
