import { useMemo, useState } from 'react';
import EsportTournamentCard from '../components/EsportTournamentCard';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import Tabs from '../components/Tabs';
import VideoCard from '../components/VideoCard';
import { useToast } from '../components/ToastProvider';
import { esportTournaments, esportVideos, premiumOffers } from '../data/esport';

const groups = [
  { id: 'in-progress', title: 'Tournois en cours' },
  { id: 'open-registration', title: 'Inscriptions ouvertes' },
  { id: 'future', title: 'Futurs tournois' },
];

export default function Esport() {
  const [activeTab, setActiveTab] = useState('video');
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [premiumTarget, setPremiumTarget] = useState(null);
  const [videoDetail, setVideoDetail] = useState(null);
  const { showToast } = useToast();

  const groupedTournaments = useMemo(() => groups.map((group) => ({ ...group, items: esportTournaments.filter((tournament) => tournament.status === group.id) })), []);

  const openVideo = (video) => {
    if (video.locked) {
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
    if (tournament.locked) {
      setPremiumTarget(tournament);
      return;
    }

    setSelectedTournament(tournament);
  };

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-white">E-Sport <span className="text-orangeBrand">immersif</span></h1>
        <p className="mt-1 text-sm text-zinc-300">Regarde, joue en compétition et monte dans la scène.</p>
      </header>

      <Tabs tabs={[{ id: 'video', label: 'Vidéo' }, { id: 'competition', label: 'Compétition' }]} activeId={activeTab} onChange={setActiveTab} />

      {activeTab === 'video' ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <SectionHeader title="Vidéos" subtitle="Tutoriel, masterclass, interview, highlights" />
            {esportVideos.vod.map((video) => <VideoCard key={video.id} video={video} subtitle={(item) => `${item.type} · ${item.duration}`} onOpen={openVideo} />)}
          </div>
          <div className="space-y-2">
            <SectionHeader title="Lives" subtitle="En direct ou à venir" />
            {esportVideos.live.map((video) => <VideoCard key={video.id} video={video} subtitle={(item) => `${item.game} · ${item.time}`} onOpen={openVideo} />)}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {groupedTournaments.map((group) => (
            <div key={group.id} className="space-y-2">
              <SectionHeader title={group.title} />
              {group.items.map((tournament) => <EsportTournamentCard key={tournament.id} tournament={tournament} onOpen={openTournament} />)}
            </div>
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
            <button type="button" className="mt-2 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">{selectedTournament.cta}</button>
          </div>
        </ModalOverlay>
      ) : null}

      {premiumTarget ? (
        <ModalOverlay title="Débloquer le contenu Premium" onClose={() => setPremiumTarget(null)}>
          <p className="text-sm text-zinc-300">Abonne-toi pour accéder aux vidéos exclusives, tournois premium et récompenses spéciales.</p>
          <div className="mt-3 space-y-2">
            {premiumOffers.map((offer) => (
              <article key={offer.id} className="rounded-xl border border-white/10 bg-black/30 p-3">
                <p className="text-sm font-semibold text-white">{offer.duration}</p>
                <p className="text-xs text-zinc-300">{offer.benefit}</p>
                <p className="mt-1 text-xs font-semibold text-orangeBrand">{offer.cost}</p>
                <button
                  type="button"
                  onClick={() => {
                    showToast('Abonnement activé pour la démo');
                    setPremiumTarget(null);
                  }}
                  className="mt-2 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white"
                >
                  S’abonner
                </button>
              </article>
            ))}
          </div>
        </ModalOverlay>
      ) : null}
    </section>
  );
}
