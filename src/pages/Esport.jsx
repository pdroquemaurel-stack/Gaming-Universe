import { useMemo, useState } from 'react';
import EsportTournamentCard from '../components/EsportTournamentCard';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import Tabs from '../components/Tabs';
import VideoCard from '../components/VideoCard';
import { esportTournaments, esportVideos } from '../data/esport';

const groups = [
  { id: 'in-progress', title: 'Tournois en cours' },
  { id: 'open-registration', title: 'Inscriptions ouvertes' },
  { id: 'future', title: 'Futurs tournois' },
];

export default function Esport() {
  const [activeTab, setActiveTab] = useState('video');
  const [selectedTournament, setSelectedTournament] = useState(null);

  const groupedTournaments = useMemo(() => groups.map((group) => ({ ...group, items: esportTournaments.filter((tournament) => tournament.status === group.id) })), []);

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-white">E-Sport <span className="text-orangeBrand">Zone</span></h1>
        <p className="mt-1 text-sm text-zinc-300">Watch, compete and climb the scene.</p>
      </header>

      <Tabs tabs={[{ id: 'video', label: 'Vidéo' }, { id: 'competition', label: 'Compétition' }]} activeId={activeTab} onChange={setActiveTab} />

      {activeTab === 'video' ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <SectionHeader title="VOD" subtitle="Tutorial, masterclass, interview, highlights" />
            {esportVideos.vod.map((video) => <VideoCard key={video.id} video={video} subtitle={(item) => `${item.type} · ${item.duration}`} />)}
          </div>
          <div className="space-y-2">
            <SectionHeader title="Live" subtitle="Streams en direct" />
            {esportVideos.live.map((video) => <VideoCard key={video.id} video={video} subtitle={(item) => `${item.game} · ${item.time}`} />)}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {groupedTournaments.map((group) => (
            <div key={group.id} className="space-y-2">
              <SectionHeader title={group.title} />
              {group.items.map((tournament) => <EsportTournamentCard key={tournament.id} tournament={tournament} onOpen={setSelectedTournament} />)}
            </div>
          ))}
        </div>
      )}

      {selectedTournament ? (
        <ModalOverlay title={selectedTournament.name} onClose={() => setSelectedTournament(null)}>
          <div className="space-y-2 text-sm text-zinc-200">
            <p><span className="text-zinc-400">Jeu:</span> {selectedTournament.game}</p>
            <p><span className="text-zinc-400">Statut:</span> {selectedTournament.status}</p>
            <p><span className="text-zinc-400">Prix:</span> {selectedTournament.prize}</p>
            <p><span className="text-zinc-400">Joueurs:</span> {selectedTournament.players}</p>
            <p><span className="text-zinc-400">Format:</span> {selectedTournament.format}</p>
            <p><span className="text-zinc-400">Date:</span> {selectedTournament.date}</p>
            <p><span className="text-zinc-400">Conditions:</span> {selectedTournament.requirements}</p>
            <button type="button" className="mt-2 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">{selectedTournament.cta}</button>
          </div>
        </ModalOverlay>
      ) : null}
    </section>
  );
}
