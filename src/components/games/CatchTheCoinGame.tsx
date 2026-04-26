import { useEffect, useMemo, useRef, useState } from 'react';

const GAME_DURATION = 20;
function getRandomPosition() {
  return {
    x: Math.floor(Math.random() * 76) + 8,
    y: Math.floor(Math.random() * 70) + 10,
  };
}

export function getRewardFromScore(score) {
  if (score >= 15) return 100;
  if (score >= 10) return 50;
  if (score >= 5) return 25;
  return 10;
}

function getPerformanceMessage(score) {
  if (score >= 15) return 'Amazing performance';
  if (score >= 10) return 'Great score';
  if (score >= 5) return 'Good run';
  return 'Nice start';
}

export default function CatchTheCoinGame({ onBack, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [coinsCollected, setCoinsCollected] = useState(0);
  const [coinPosition, setCoinPosition] = useState(getRandomPosition);
  const [showFeedback, setShowFeedback] = useState(false);
  const [hasCoinImage, setHasCoinImage] = useState(true);
  const completionSentRef = useRef(false);

  const isGameOver = timeLeft <= 0;
  const reward = useMemo(() => getRewardFromScore(score), [score]);
  const performanceMessage = useMemo(() => getPerformanceMessage(score), [score]);

  useEffect(() => {
    if (isGameOver) return undefined;

    const interval = setInterval(() => {
      setTimeLeft((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameOver]);

  useEffect(() => {
    if (!isGameOver || completionSentRef.current) return;

    completionSentRef.current = true;
    onComplete?.({
      score,
      coinsCollected,
      reward,
    });
  }, [coinsCollected, isGameOver, onComplete, reward, score]);

  const handleCollectCoin = () => {
    if (isGameOver) return;

    setScore((previous) => previous + 1);
    setCoinsCollected((previous) => previous + 1);
    setCoinPosition(getRandomPosition());
    setShowFeedback(true);

    window.setTimeout(() => {
      setShowFeedback(false);
    }, 260);
  };

  const restartGame = () => {
    completionSentRef.current = false;
    setTimeLeft(GAME_DURATION);
    setScore(0);
    setCoinsCollected(0);
    setCoinPosition(getRandomPosition());
    setShowFeedback(false);
  };

  if (isGameOver) {
    return (
      <div className="rounded-2xl border border-orangeBrand bg-[#121212] p-4 text-center shadow-lg shadow-orangeBrand/10">
        <p className="text-xs uppercase tracking-[0.18em] text-orangeBrand">Game completed</p>
        <h4 className="mt-1 text-xl font-bold text-white">Catch the Coin</h4>
        <div className="mt-4 flex justify-center">
          <div className="rounded-full border border-orangeBrand/60 bg-orangeBrand/20 px-5 py-2 text-sm font-semibold text-orange-100">
            +{reward} Max it Points
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-200">You collected {coinsCollected} coins</p>
        <p className="mt-1 text-lg font-semibold text-white">Score: {score}</p>
        <p className="mt-1 text-sm text-orange-200">{performanceMessage}</p>
        <div className="mt-2 text-xs text-zinc-400">
          <p>You are #8 today</p>
          <p>Top score today: 22</p>
        </div>

        <div className="mt-5 space-y-2">
          <button
            type="button"
            onClick={restartGame}
            className="w-full rounded-xl bg-orangeBrand px-3 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Play again
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full rounded-xl border border-white/20 bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100"
          >
            Back to Play
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-xl border border-orangeBrand/40 bg-zinc-900/90 p-3">
        <div>
          <h4 className="text-base font-bold text-white">Catch the Coin</h4>
          <p className="text-xs text-zinc-300">Tap the coin as fast as you can</p>
        </div>
        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-zinc-400">Time</p>
          <p className="text-lg font-bold text-orangeBrand">{timeLeft}s</p>
        </div>
      </div>

      <div className="rounded-2xl border border-orangeBrand/40 bg-gradient-to-b from-[#1a1a1a] to-[#101010] p-3">
        <div className="mb-3 flex items-center justify-between text-sm">
          <p className="text-zinc-300">Score</p>
          <p className="font-bold text-white">{score}</p>
        </div>

        <div className="relative h-[48vh] min-h-[260px] max-h-[380px] rounded-xl border border-orangeBrand/20 bg-[#0d0d0d]">
          <button
            type="button"
            onClick={handleCollectCoin}
            className="absolute flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-orangeBrand/70 bg-orangeBrand/10 text-2xl shadow-[0_0_30px_rgba(255,121,0,0.45)] transition duration-100 active:scale-90"
            style={{ left: `${coinPosition.x}%`, top: `${coinPosition.y}%` }}
            aria-label="Catch coin"
          >
            {hasCoinImage ? (
              <img
                src="/assets/coin.png"
                alt="Coin"
                className="h-full w-full object-contain p-2"
                onError={() => setHasCoinImage(false)}
              />
            ) : (
              <span
                className="flex h-full w-full items-center justify-center rounded-full bg-orangeBrand text-3xl"
                role="img"
                aria-label="coin fallback"
              >
                🪙
              </span>
            )}
          </button>

          <div
            className={`pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 rounded-full border border-orangeBrand/50 bg-orangeBrand/25 px-3 py-1 text-xs font-semibold text-white transition ${showFeedback ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
          >
            +1
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-zinc-400">Each coin = +1 score • Reward up to +100 Max it points</p>
    </div>
  );
}
