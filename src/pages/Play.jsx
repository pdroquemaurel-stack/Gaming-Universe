import { useEffect, useMemo, useState } from 'react';
import CatchTheCoinGame from '../components/games/CatchTheCoinGame';
import AppCard from '../components/AppCard';
import AssetImage from '../components/AssetImage';
import CategoryChips from '../components/CategoryChips';
import GameCard from '../components/GameCard';
import HorizontalCarousel from '../components/HorizontalCarousel';
import ModalOverlay from '../components/ModalOverlay';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';
import { dailyGames, myGames, playCategories, playCategoryChips, popularGames, recommendedGames } from '../data/play';

const TODAY = new Date().toISOString().slice(0, 10);

const STORAGE_KEYS = {
  lastScore: 'maxit_catch_coin_last_score',
  lastReward: 'maxit_catch_coin_last_reward',
  bestScore: 'maxit_catch_coin_best_score',
};

function readNumber(key) {
  const value = Number(window.localStorage.getItem(key));
  return Number.isFinite(value) ? value : 0;
}

function withCatchStats(game, stats) {
  if (game.id !== 'catch-the-coin') return game;
  return { ...game, lastScore: stats.lastScore, lastReward: stats.lastReward, bestScore: stats.bestScore };
}

function hasDailyPlayed(gameId) {
  return window.localStorage.getItem(`maxit_daily_${gameId}`) === TODAY;
}

function markDailyPlayed(gameId) {
  window.localStorage.setItem(`maxit_daily_${gameId}`, TODAY);
}

const rankEmoji = ['🥇', '🥈', '🥉'];

export default function Play({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeGame, setActiveGame] = useState(null);
  const [catchStats, setCatchStats] = useState({ lastScore: 0, lastReward: 0, bestScore: 0 });
  const [adPlaying, setAdPlaying] = useState(false);
  const [adCountdown, setAdCountdown] = useState(3);
  const [dailyPlayed, setDailyPlayed] = useState(() =>
    dailyGames.reduce((acc, g) => { acc[g.id] = hasDailyPlayed(g.id); return acc; }, {}),
  );
  const { showToast } = useToast();

  useEffect(() => {
    setCatchStats({
      lastScore: readNumber(STORAGE_KEYS.lastScore),
      lastReward: readNumber(STORAGE_KEYS.lastReward),
      bestScore: readNumber(STORAGE_KEYS.bestScore),
    });
  }, []);

  const currentCategory = useMemo(() => playCategories.find((c) => c.id === selectedCategory), [selectedCategory]);

  const gamesBySection = useMemo(() => ({
    myGames: myGames.map((g) => withCatchStats(g, catchStats)),
    recommendedGames: recommendedGames.map((g) => withCatchStats(g, catchStats)),
    popularGames: popularGames.map((g) => withCatchStats(g, catchStats)),
    instantPlay: (currentCategory?.instantPlay || []).map((g) => withCatchStats(g, catchStats)),
  }), [catchStats, currentCategory?.instantPlay]);

  const handleWatchAd = () => {
    setAdPlaying(true);
    setAdCountdown(3);
    const interval = setInterval(() => {
      setAdCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setAdPlaying(false);
          try {
            const stored = JSON.parse(localStorage.getItem('playerHubState') || '{}');
            const updated = { ...stored, coins: (stored.coins || 0) + 25 };
            localStorage.setItem('playerHubState', JSON.stringify(updated));
            window.dispatchEvent(new CustomEvent('maxit:state-updated', { detail: updated }));
          } catch {}
          showToast('Pub terminée — +25 Coins gagnés !');
          return 3;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleCatchComplete = ({ score, reward, xpGain }) => {
    const bestScore = Math.max(catchStats.bestScore, score);
    window.localStorage.setItem(STORAGE_KEYS.lastScore, String(score));
    window.localStorage.setItem(STORAGE_KEYS.lastReward, String(reward));
    window.localStorage.setItem(STORAGE_KEYS.bestScore, String(bestScore));
    setCatchStats({ lastScore: score, lastReward: reward, bestScore });
    markDailyPlayed('catch-the-coin');
    setDailyPlayed((prev) => ({ ...prev, 'catch-the-coin': true }));
    showToast(`Partie terminée : +${reward} points et +${xpGain} XP`);
  };

  const openDailyGame = (game) => {
    if (game.playable) {
      setSelectedGame(game);
    } else {
      window.open(game.storeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-white">Univers <span className="text-orangeBrand">Jouer</span></h1>
        <p className="mt-1 text-sm text-zinc-300">Découvre des jeux, gagne des points et télécharge les meilleures apps.</p>
      </header>

      {/* Jeux du jour */}
      <div>
        <SectionHeader
          title="Jeux du jour"
          subtitle="1 partie par jeu · Leaderboard remis à zéro chaque jour"
        />
        <div className="grid grid-cols-2 gap-3">
          {dailyGames.map((game) => {
            const played = dailyPlayed[game.id];
            return (
              <article key={game.id} className="card-base overflow-hidden p-0">
                <div className="relative h-16">
                  <AssetImage src={game.image} alt={game.name} fallback={game.fallback} className="h-16 w-full" rounded="rounded-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
                  <span className="absolute left-2 bottom-1.5 text-[11px] font-bold text-white drop-shadow">{game.name}</span>
                  {played && (
                    <span className="absolute right-1.5 top-1.5 rounded-full bg-emerald-500 px-1.5 py-0.5 text-[9px] font-bold text-white">✓ Joué</span>
                  )}
                  {!played && (
                    <span className="absolute right-1.5 top-1.5 rounded-full bg-orangeBrand px-1.5 py-0.5 text-[9px] font-bold text-white">+{game.points} pts</span>
                  )}
                </div>
                <div className="space-y-1.5 p-2.5">
                  <p className="text-[10px] text-zinc-400 leading-snug">{game.dailyMission}</p>
                  <div className="space-y-0.5">
                    {game.dailyBestScores.slice(0, 3).map((entry, i) => (
                      <p key={entry.name} className="text-[9px] text-zinc-400">
                        {rankEmoji[i]} {entry.name} · {entry.score}
                      </p>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => openDailyGame(game)}
                    disabled={played}
                    className={`w-full rounded-lg py-1.5 text-[11px] font-semibold transition-colors ${
                      played
                        ? 'cursor-default bg-zinc-800 text-zinc-500'
                        : game.playable
                          ? 'bg-orangeBrand text-white'
                          : 'border border-orangeBrand/60 text-orangeBrand'
                    }`}
                  >
                    {played ? 'Déjà joué' : game.playable ? 'Jouer' : 'Télécharger'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <CategoryChips items={playCategoryChips} activeId={selectedCategory} onSelect={setSelectedCategory} />

      {selectedCategory === 'all' ? (
        <>
          <div>
            <SectionHeader title="Mes jeux" subtitle="Derniers jeux joués" />
            <HorizontalCarousel items={gamesBySection.myGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} compact cta="Reprendre" />} />
          </div>
          <div>
            <SectionHeader title="Jeux recommandés" subtitle="Sélection personnalisée" />
            <HorizontalCarousel items={gamesBySection.recommendedGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} cta="Voir le jeu" />} />
          </div>
          <div>
            <SectionHeader title="Jeux les plus populaires" subtitle="Top tendances" />
            <HorizontalCarousel items={gamesBySection.popularGames} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} cta="Voir le jeu" />} />
          </div>
        </>
      ) : (
        <>
          <div>
            <SectionHeader title="Mini-jeux instantanés" subtitle={currentCategory?.label} />
            <HorizontalCarousel items={gamesBySection.instantPlay} renderItem={(game) => <GameCard game={game} onPlay={setSelectedGame} cta="Voir le jeu" />} />
          </div>
          <div>
            <SectionHeader title="Apps à télécharger" subtitle={currentCategory?.label} />
            <HorizontalCarousel items={currentCategory?.apps || []} renderItem={(app) => <AppCard app={app} />} />
          </div>
        </>
      )}

      {selectedGame ? (
        <ModalOverlay title={selectedGame.name} onClose={() => setSelectedGame(null)}>
          <div className="space-y-3">
            <AssetImage src={selectedGame.image} alt={selectedGame.name} className="h-44 w-full" fallback={selectedGame.fallback} />
            <p className="text-sm text-zinc-200">{selectedGame.description}</p>
            <p className="rounded-lg border border-orangeBrand/30 bg-zinc-900 p-3 text-xs text-zinc-200">Mission du jour : {selectedGame.dailyMission}</p>
            <p className="text-sm font-semibold text-orangeBrand">Récompense : +{selectedGame.points} points max</p>
            <p className="text-xs text-zinc-300">Joueurs aujourd'hui : <span className="font-semibold text-white">{selectedGame.todayPlayers ?? 0}</span></p>
            <div className="rounded-lg border border-white/10 bg-black/30 p-3">
              <p className="mb-1 text-xs text-zinc-400">Meilleurs scores du jour</p>
              <div className="space-y-1 text-xs text-zinc-200">
                {(selectedGame.dailyBestScores || []).map((entry, i) => (
                  <p key={`${selectedGame.id}-${entry.name}`}>{rankEmoji[i] ?? '·'} {entry.name} — {entry.score}</p>
                ))}
              </div>
            </div>
            <button type="button" onClick={() => { setActiveGame(selectedGame); setSelectedGame(null); }} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-sm font-semibold text-white">Jouer</button>
            <button
              type="button"
              onClick={() => { setSelectedGame(null); handleWatchAd(); }}
              className="w-full rounded-lg border border-orangeBrand/40 bg-black/30 px-3 py-2 text-sm font-semibold text-orangeBrand transition duration-200 hover:bg-orangeBrand/10 active:scale-[0.98]"
            >
              👁 Regarder une pub → +25 Coins
            </button>
          </div>
        </ModalOverlay>
      ) : null}

      {adPlaying ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95">
          <div className="flex flex-col items-center gap-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Publicité en cours</p>
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-orangeBrand/30 bg-orangeBrand/10">
              <span className="text-4xl font-black text-orangeBrand">{adCountdown}</span>
            </div>
            <div className="h-1.5 w-48 overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full rounded-full bg-orangeBrand transition-all duration-1000" style={{ width: `${((3 - adCountdown) / 3) * 100}%` }} />
            </div>
            <p className="text-sm text-zinc-300">Récompense : <span className="font-semibold text-orangeBrand">+25 Coins</span></p>
          </div>
        </div>
      ) : null}

      {activeGame ? (
        <ModalOverlay title={activeGame.name} onClose={() => setActiveGame(null)} fullScreenMobile>
          {activeGame.id === 'catch-the-coin' ? (
            <CatchTheCoinGame
              onBack={() => setActiveGame(null)}
              onComplete={handleCatchComplete}
              onUsePoints={() => { onNavigate('/points?tab=use'); setActiveGame(null); }}
              onGoShop={() => { onNavigate('/shop'); setActiveGame(null); }}
              onDownloadGame={() => {
                showToast('+50 points gagnés');
                window.open('https://play.google.com/store/apps/details?id=com.dts.freefireth', '_blank', 'noopener,noreferrer');
              }}
              onWatchAd={() => showToast('Publicité terminée — nouvelle tentative débloquée')}
              bestScore={catchStats.bestScore}
              todayPlayers={1240}
            />
          ) : (
            <>
              <p className="text-sm text-zinc-300">{activeGame.description}</p>
              <p className="mt-3 rounded-lg bg-zinc-900 p-3 text-xs text-zinc-200">Mission du jour : {activeGame.dailyMission}</p>
              <button type="button" className="mt-3 w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Jouer maintenant</button>
            </>
          )}
        </ModalOverlay>
      ) : null}
    </section>
  );
}
