import { useState } from 'react';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import ShopGameBubble from '../components/ShopGameBubble';
import ShopItemCard from '../components/ShopItemCard';
import AssetImage from '../components/AssetImage';
import { useToast } from '../components/ToastProvider';
import { shopGames } from '../data/shop';

export default function Gameshop() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [playerId, setPlayerId] = useState('');
  const [connected, setConnected] = useState(false);
  const { showToast } = useToast();

  const openGame = (game) => {
    setSelectedGame(game);
    setPlayerId('');
    setConnected(false);
  };

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Bou<span className="text-orangeBrand">tique</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Choisis ton jeu et débloque des bonus.</p>
      </header>

      <div>
        <SectionHeader title="Jeux populaires" subtitle="Sélectionne un jeu" />
        <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {shopGames.map((game) => <ShopGameBubble key={game.id} game={game} active={selectedGame?.id === game.id} onClick={openGame} />)}
        </div>
      </div>

      {selectedGame ? (
        <ModalOverlay title={selectedGame.name} onClose={() => setSelectedGame(null)}>
          <div className="space-y-3">
            <AssetImage src={selectedGame.image} alt={selectedGame.name} fallback="🎮" className="h-36 w-full" />
            <p className="text-xs text-zinc-300">{selectedGame.description}</p>
            <a href={selectedGame.storeUrl} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-lg border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand">Télécharger le jeu</a>

            <input value={playerId} onChange={(event) => setPlayerId(event.target.value)} placeholder="Player ID" className="w-full rounded-lg border border-white/20 bg-zinc-900 px-3 py-2 text-sm text-white outline-none" />
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
                <SectionHeader title="Contenus achetables" />
                {selectedGame.items.map((item) => <ShopItemCard key={item.id} item={item} />)}
              </div>
            ) : null}
          </div>
        </ModalOverlay>
      ) : null}
    </section>
  );
}
