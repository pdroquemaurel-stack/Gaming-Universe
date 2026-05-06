import { useEffect, useMemo, useState } from 'react';
import EsportTournamentCard from '../components/EsportTournamentCard';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import Tabs from '../components/Tabs';
import VideoCard from '../components/VideoCard';
import { useToast } from '../components/ToastProvider';
import { esportChallenges, esportTournaments, esportVideos, headshotLeaderboard, premiumPlans } from '../data/esport';

const STORAGE_KEY_PREMIUM = 'maxit_esport_premium_active';

const groups = [
  { id: 'in-progress', title: 'Tournois en cours' },
  { id: 'open-registration', title: 'Inscriptions ouvertes' },
  { id: 'future', title: 'Futurs tournois' },
];

function isSubscriptionActive() {
  return window.localStorage.getItem(STORAGE_KEY_PREMIUM) === 'true';
}

export default function Esport() {
  const [activeTab, setActiveTab] = useState('video');
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [premiumTarget, setPremiumTarget] = useState(null);
  const [videoDetail, setVideoDetail] = useState(null);
  const [isPremiumSubscriber, setIsPremiumSubscriber] = useState(false);
  const [isFreeFireConnected, setIsFreeFireConnected] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [freeFirePlayerId, setFreeFirePlayerId] = useState('');
  const { showToast } = useToast();

  useEffect(() => {
    setIsPremiumSubscriber(isSubscriptionActive());
  }, []);

  const groupedTournaments = useMemo(() => groups.map((group) => ({ ...group, items: esportTournaments.filter((tournament) => tournament.status === group.id) })), []);

  const openVideo = (video) => {
    if (video.requiresSubscription && !isPremiumSubscriber) {
      setPremiumTarget(video);
      return;
    }

    const url = video.youtubeUrl || video.twitchUrl || video.externalUrl;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    setVideoDetail(video);
  };

  const openTournament = (tournament) => {
    if (tournament.requiresSubscription && !isPremiumSubscriber) {
      setPremiumTarget(tournament);
      return;
    }

    setSelectedTournament(tournament);
  };

  const activatePremium = () => {
    window.localStorage.setItem(STORAGE_KEY_PREMIUM, 'true');
    setIsPremiumSubscriber(true);
    showToast('Abonnement activé avec succès');
    setPremiumTarget(null);
  };

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-white">E-Sport <span className="text-orangeBrand">immersif</span></h1>
        <p className="mt-1 text-sm text-zinc-300">Regarde, joue en compétition et monte dans la scène.</p>
        {isPremiumSubscriber ? <p className="mt-2 inline-flex rounded-full border border-orangeBrand/40 bg-orangeBrand/10 px-3 py-1 text-xs font-semibold text-orange-100">Abonnement Premium actif</p> : null}
      </header>

      <Tabs tabs={[{ id: 'video', label: 'Vidéo' }, { id: 'competition', label: 'Compétition' }, { id: 'challenge', label: 'Challenge' }]} activeId={activeTab} onChange={setActiveTab} />

      {activeTab === 'video' ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <SectionHeader title="Vidéos" subtitle="Tutoriel, masterclass, interview, highlights" />
            {esportVideos.vod.map((video) => <VideoCard key={video.id} video={video} subtitle={(item) => `${item.type} · ${item.duration}`} onOpen={openVideo} isSubscriber={isPremiumSubscriber} />)}
          </div>
          <div className="space-y-2">
            <SectionHeader title="Lives" subtitle="En direct ou à venir" />
            {esportVideos.live.map((video) => <VideoCard key={video.id} video={video} subtitle={(item) => `${item.game} · ${item.time}`} onOpen={openVideo} isSubscriber={isPremiumSubscriber} />)}
          </div>
        </div>
      ) : activeTab === 'competition' ? (
        <div className="space-y-4">
          {groupedTournaments.map((group) => (
            <div key={group.id} className="space-y-2">
              <SectionHeader title={group.title} />
              {group.items.map((tournament) => <EsportTournamentCard key={tournament.id} tournament={tournament} onOpen={openTournament} isSubscriber={isPremiumSubscriber} />)}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {esportChallenges.map((challenge) => (
            <article key={challenge.id} className="card-base space-y-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-white">{challenge.title} — {challenge.game}</p>
                {challenge.isMain ? <span className="rounded-full border border-orangeBrand/40 px-2 py-0.5 text-[10px] text-orangeBrand">{challenge.status}</span> : null}
              </div>
              {challenge.objective ? <p className="text-xs text-zinc-300">{challenge.objective}</p> : null}
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                <p>Temps restant : {challenge.timeLeft}</p>
                <p>Récompense : {challenge.reward}</p>
                <p>Participants : {challenge.participants.toLocaleString('fr-FR')}</p>
              </div>
              {challenge.id === 'challenge-headshot-ff' && isFreeFireConnected ? <span className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">Compte connecté</span> : null}
              <button
                type="button"
                onClick={() => {
                  if (challenge.id === 'challenge-headshot-ff' && !isFreeFireConnected) {
                    setShowConnectModal(true);
                    return;
                  }
                  showToast('Participation simulée pour la démo');
                }}
                className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white"
              >
                {challenge.id === 'challenge-headshot-ff' && isFreeFireConnected ? 'Participer au challenge' : challenge.cta}
              </button>
              {challenge.isMain ? (
                <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                  <p className="mb-2 text-xs text-zinc-300">Leaderboard — Headshot King</p>
                  <div className="space-y-1">
                    {headshotLeaderboard.map((row, index) => (
                      <div key={row.name} className="flex items-center justify-between text-xs">
                        <span className={row.current ? 'font-semibold text-[#FF7900]' : 'text-zinc-300'}>{index + 1}. {row.name}</span>
                        <span className={row.current ? 'font-semibold text-[#FF7900]' : 'text-zinc-300'}>{row.score} headshots</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      )}

      {videoDetail ? (
        <ModalOverlay title={videoDetail.title} onClose={() => setVideoDetail(null)}>
          <p className="text-sm text-zinc-200">{videoDetail.type} · {videoDetail.duration}</p>
          <p className="mt-2 text-xs text-zinc-300">Source : {videoDetail.source}</p>
          <button type="button" className="mt-3 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Regarder</button>
        </ModalOverlay>
      ) : null}

      {selectedTournament ? (
        <ModalOverlay title={selectedTournament.name} onClose={() => setSelectedTournament(null)}>
          <div className="space-y-2 text-sm text-zinc-200">
            <p><span className="text-zinc-400">Jeu :</span> {selectedTournament.game}</p>
            <p><span className="text-zinc-400">Statut :</span> {selectedTournament.statusLabel}</p>
            <p><span className="text-zinc-400">Prix à gagner :</span> {selectedTournament.prize}</p>
            <p><span className="text-zinc-400">Joueurs :</span> {selectedTournament.players}</p>
            <p><span className="text-zinc-400">Format :</span> {selectedTournament.format}</p>
            <p><span className="text-zinc-400">Date :</span> {selectedTournament.date}</p>
            <p><span className="text-zinc-400">Conditions :</span> {selectedTournament.requirements}</p>
            <button
              type="button"
              className="mt-2 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white"
              onClick={() => {
                showToast('Inscription simulée pour la démo');
                setSelectedTournament(null);
              }}
            >
              {selectedTournament.cta}
            </button>
          </div>
        </ModalOverlay>
      ) : null}

      {premiumTarget ? (
        <ModalOverlay title="Débloquer le contenu Premium" onClose={() => setPremiumTarget(null)}>
          <p className="text-sm text-zinc-300">Abonne-toi pour accéder aux vidéos exclusives, tournois premium et récompenses spéciales.</p>
          <div className="mt-3 space-y-2">
            {premiumPlans.map((plan) => (
              <article key={plan.id} className="rounded-xl border border-white/10 bg-black/30 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white">{plan.name}</p>
                  {plan.badge ? <span className="rounded-full border border-orangeBrand/30 px-2 py-0.5 text-[10px] text-orangeBrand">{plan.badge}</span> : null}
                </div>
                <p className="mt-1 text-xs text-zinc-300">Durée : {plan.duration}</p>
                <ul className="mt-1 space-y-0.5 text-xs text-zinc-300">
                  {plan.benefits.map((benefit) => <li key={`${plan.id}-${benefit}`}>• {benefit}</li>)}
                </ul>
                <p className="mt-2 text-xs text-zinc-300">Prix : <span className="font-semibold text-orange-100">{plan.price}</span> ou <span className="font-semibold text-orangeBrand">{plan.pointsPrice.toLocaleString('fr-FR')} points</span></p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button type="button" onClick={activatePremium} className="rounded-lg border border-orangeBrand px-2 py-2 text-[11px] font-semibold text-orangeBrand">Payer en monnaie</button>
                  <button type="button" onClick={activatePremium} className="rounded-lg bg-orangeBrand px-2 py-2 text-[11px] font-semibold text-white">Payer avec mes points</button>
                </div>
              </article>
            ))}
          </div>
        </ModalOverlay>
      ) : null}

      {showConnectModal ? (
        <ModalOverlay title="Connecter mon compte Free Fire" onClose={() => setShowConnectModal(false)}>
          <p className="text-sm text-zinc-300">Associe ton ID joueur pour participer au challenge et suivre ton score.</p>
          <input value={freeFirePlayerId} onChange={(event) => setFreeFirePlayerId(event.target.value)} placeholder="ID joueur Free Fire" className="mt-3 w-full rounded-lg border border-white/20 bg-zinc-900 px-3 py-2 text-sm text-white outline-none" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button type="button" onClick={() => setShowConnectModal(false)} className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-zinc-200">Annuler</button>
            <button
              type="button"
              onClick={() => {
                setIsFreeFireConnected(true);
                setShowConnectModal(false);
                showToast('Compte Free Fire connecté pour la démo');
              }}
              className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white"
            >
              Connecter mon compte
            </button>
          </div>
        </ModalOverlay>
      ) : null}
    </section>
  );
}
