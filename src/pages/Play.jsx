import { useEffect, useMemo, useRef, useState } from 'react';
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

const DAILY_TOTAL_PTS = dailyGames.reduce((sum, g) => sum + g.points, 0);
const rankEmoji = ['🥇', '🥈', '🥉'];

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

function simRewardFromScore(score) {
  if (score >= 15) return 100;
  if (score >= 10) return 60;
  if (score >= 5) return 30;
  return 15;
}

function getPercentileBeat(score) {
  if (score >= 20) return 95;
  if (score >= 15) return 88;
  if (score >= 12) return 78;
  if (score >= 10) return 72;
  if (score >= 7) return 58;
  if (score >= 5) return 44;
  return 28;
}

function awardPoints(amount) {
  try {
    const stored = JSON.parse(localStorage.getItem('playerHubState') || '{}');
    const updated = { ...stored, coins: (stored.coins || 0) + amount };
    localStorage.setItem('playerHubState', JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('maxit:state-updated', { detail: updated }));
  } catch {}
}

function shareScore(gameName, score, percentile) {
  const text = `🎮 Je viens de faire ${score} pts sur ${gameName} et je bats ${percentile}% des joueurs aujourd'hui sur Gaming Universe ! Tu penses me battre ? 💪`;
  if (typeof navigator !== 'undefined' && navigator.share) {
    navigator.share({ title: 'Gaming Universe', text }).catch(() => {});
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }
}

// Simulated game screen for demoOnly daily games
function SimulatedGame({ game, onBack, onComplete }) {
  const [phase, setPhase] = useState('ready'); // ready | playing | done
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const intervalRef = useRef(null);

  const start = () => {
    setPhase('playing');
    setProgress(0);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          const score = Math.floor(Math.random() * 16) + 5;
          const reward = simRewardFromScore(score);
          setResult({ score, reward });
          setPhase('done');
          onComplete({ score, reward });
          return 100;
        }
        return prev + 3.5;
      });
    }, 100);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const percentile = result ? getPercentileBeat(result.score) : 0;

  if (phase === 'done' && result) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-xs uppercase tracking-widest text-orangeBrand">Partie terminée</p>
        <h4 className="text-xl font-bold text-white">{game.name}</h4>

        <div className="inline-flex rounded-full border border-orangeBrand/60 bg-orangeBrand/20 px-5 py-2 text-sm font-semibold text-orange-100">
          +{result.reward} Max it Points
        </div>

        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="rounded-xl border border-white/10 bg-black/40 p-3">
            <p className="text-[10px] text-zinc-400">Score du jour</p>
            <p className="mt-0.5 text-xl font-bold text-white">{result.score}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-3">
            <p className="text-[10px] text-zinc-400">XP gagnée</p>
            <p className="mt-0.5 text-xl font-bold text-orangeBrand">+{result.reward * 2}</p>
          </div>
        </div>

        <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3 text-left">
          <p className="text-sm font-semibold text-emerald-300">
            🏆 Tu bats <span className="text-white">{percentile}%</span> des joueurs aujourd'hui
          </p>
          <p className="mt-0.5 text-[11px] text-zinc-400">sur {game.todayPlayers.toLocaleString('fr-FR')} joueurs</p>
        </div>

        <button
          type="button"
          onClick={() => shareScore(game.name, result.score, percentile)}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-500/40 bg-green-500/10 px-3 py-2.5 text-sm font-semibold text-green-300"
        >
          📲 Défier un ami — Envoyer mon score
        </button>
        <button type="button" onClick={onBack} className="w-full rounded-xl border border-white/20 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100">
          Fermer
        </button>
      </div>
    );
  }

  if (phase === 'playing') {
    return (
      <div className="space-y-6 py-6 text-center">
        <p className="text-base font-semibold text-white">Partie en cours…</p>
        <div className="text-5xl">{game.emoji}</div>
        <div className="w-full overflow-hidden rounded-full bg-zinc-800 h-2.5">
          <div
            className="h-full rounded-full bg-orangeBrand transition-all duration-100"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="text-xs text-zinc-400">{game.dailyMission}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AssetImage src={game.image} alt={game.name} className="h-32 w-full" fallback={game.fallback} />
      <p className="text-sm text-zinc-200">{game.description}</p>
      <div className="rounded-lg border border-orangeBrand/30 bg-zinc-900 p-3 text-xs text-zinc-200">
        🎯 Mission : {game.dailyMission}
      </div>
      <p className="text-sm font-semibold text-orangeBrand">Récompense : jusqu'à +{game.points} pts</p>
      <button type="button" onClick={start} className="w-full rounded-lg bg-orangeBrand px-3 py-2.5 text-sm font-semibold text-white">
        Lancer la partie
      </button>
    </div>
  );
}

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
          awardPoints(25);
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

  const handleSimComplete = (gameId, { score, reward }) => {
    markDailyPlayed(gameId);
    setDailyPlayed((prev) => ({ ...prev, [gameId]: true }));
    awardPoints(reward);
    showToast(`Partie terminée : +${reward} Max it Points !`);
  };

  const playedCount = Object.values(dailyPlayed).filter(Boolean).length;

  return (
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-white">Univers <span className="text-orangeBrand">Jouer</span></h1>
        <p className="mt-1 text-sm text-zinc-300">Joue, gagne des points et découvre les meilleurs jeux.</p>
      </header>

      {/* ── Jeux du jour ── */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Jeux du jour</h2>
            <p className="text-xs text-zinc-400">1 partie par jeu · Leaderboard remis à zéro chaque jour</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold text-amber-300">
              🪙 Jusqu'à {DAILY_TOTAL_PTS} pts
            </span>
            <span className="text-[10px] text-zinc-500">{playedCount}/{dailyGames.length} joués</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {dailyGames.map((game) => {
            const played = dailyPlayed[game.id];
            return (
              <article
                key={game.id}
                className={`overflow-hidden rounded-2xl border ${
                  played
                    ? 'border-emerald-500/40 bg-zinc-900/70'
                    : 'border-orangeBrand/50 bg-zinc-900/70'
                }`}
              >
                {/* Image + overlays */}
                <div className="relative h-20">
                  <AssetImage src={game.image} alt={game.name} fallback={game.fallback} className="h-20 w-full" rounded="rounded-none" />
                  {/* gradient de lisibilité */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* filtre vert si joué */}
                  {played && <div className="absolute inset-0 bg-emerald-500/30" />}
                  {/* badge statut */}
                  {played ? (
                    <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-[9px] font-bold text-white">
                      ✓ Joué
                    </span>
                  ) : (
                    <span className="absolute left-2 top-2 rounded-full bg-orangeBrand px-2 py-0.5 text-[9px] font-bold text-white">
                      +{game.points} pts
                    </span>
                  )}
                  {/* nom du jeu */}
                  <span className="absolute bottom-1.5 left-2 text-[11px] font-bold text-white drop-shadow">
                    {game.name}
                  </span>
                </div>

                {/* Contenu */}
                <div className={`space-y-2 p-2.5 ${played ? 'opacity-60' : ''}`}>
                  <p className="text-[10px] leading-snug text-zinc-400">{game.dailyMission}</p>
                  <div className="space-y-0.5">
                    {game.dailyBestScores.slice(0, 3).map((entry, i) => (
                      <p key={entry.name} className="text-[9px] text-zinc-400">
                        {rankEmoji[i]} {entry.name} · {entry.score}
                      </p>
                    ))}
                  </div>
                  <button
                    type="button"
                    disabled={played}
                    onClick={() => setSelectedGame(game)}
                    className={`w-full rounded-lg py-1.5 text-[11px] font-semibold transition-colors ${
                      played
                        ? 'cursor-default bg-emerald-900/40 text-emerald-500'
                        : 'bg-orangeBrand text-white active:brightness-90'
                    }`}
                  >
                    {played ? '✓ Partie terminée' : '🎮 Jouer'}
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

      {/* Modal fiche jeu */}
      {selectedGame ? (
        <ModalOverlay title={selectedGame.name} onClose={() => setSelectedGame(null)}>
          <div className="space-y-3">
            <AssetImage src={selectedGame.image} alt={selectedGame.name} className="h-44 w-full" fallback={selectedGame.fallback} />
            <p className="text-sm text-zinc-200">{selectedGame.description}</p>
            <p className="rounded-lg border border-orangeBrand/30 bg-zinc-900 p-3 text-xs text-zinc-200">
              🎯 Mission : {selectedGame.dailyMission}
            </p>
            <p className="text-sm font-semibold text-orangeBrand">Récompense : jusqu'à +{selectedGame.points} pts</p>
            {selectedGame.todayPlayers != null && (
              <p className="text-xs text-zinc-300">
                Joueurs aujourd'hui : <span className="font-semibold text-white">{selectedGame.todayPlayers.toLocaleString('fr-FR')}</span>
              </p>
            )}
            {(selectedGame.dailyBestScores?.length > 0) && (
              <div className="rounded-lg border border-white/10 bg-black/30 p-3">
                <p className="mb-1 text-xs text-zinc-400">Meilleurs scores du jour</p>
                <div className="space-y-1 text-xs text-zinc-200">
                  {selectedGame.dailyBestScores.map((entry, i) => (
                    <p key={`${selectedGame.id}-${entry.name}`}>{rankEmoji[i] ?? '·'} {entry.name} — {entry.score}</p>
                  ))}
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={() => { setActiveGame(selectedGame); setSelectedGame(null); }}
              className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-sm font-semibold text-white"
            >
              Jouer
            </button>
            <button
              type="button"
              onClick={() => { setSelectedGame(null); handleWatchAd(); }}
              className="w-full rounded-lg border border-orangeBrand/40 bg-black/30 px-3 py-2 text-sm font-semibold text-orangeBrand"
            >
              👁 Regarder une pub → +25 Coins
            </button>
          </div>
        </ModalOverlay>
      ) : null}

      {/* Pub overlay */}
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

      {/* Modal jeu actif */}
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
          ) : activeGame.demoOnly ? (
            <SimulatedGame
              game={activeGame}
              onBack={() => setActiveGame(null)}
              onComplete={(result) => handleSimComplete(activeGame.id, result)}
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
