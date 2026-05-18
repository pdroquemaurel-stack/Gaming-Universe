import { useCallback, useEffect, useRef, useState } from 'react';

const GAME_DURATION = 20;
const MAX_BUBBLES = 6;
const BUBBLE_LIFETIME = 2400;

const BUBBLE_COLORS = [
  { bg: 'bg-orange-400', ring: 'ring-orange-300', shadow: 'shadow-orange-400/60' },
  { bg: 'bg-pink-500',   ring: 'ring-pink-300',   shadow: 'shadow-pink-400/60' },
  { bg: 'bg-purple-500', ring: 'ring-purple-300',  shadow: 'shadow-purple-400/60' },
  { bg: 'bg-cyan-400',   ring: 'ring-cyan-300',    shadow: 'shadow-cyan-400/60' },
  { bg: 'bg-emerald-400',ring: 'ring-emerald-300', shadow: 'shadow-emerald-400/60' },
];

let uid = 0;
function newBubble() {
  uid += 1;
  const size = 48 + Math.floor(Math.random() * 32);
  const color = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
  return {
    id: uid,
    x: 6 + Math.random() * 80,
    y: 10 + Math.random() * 72,
    size,
    color,
    born: Date.now(),
  };
}

function getReward(score) {
  if (score >= 20) return 100;
  if (score >= 12) return 50;
  if (score >= 6)  return 25;
  return 10;
}

function getMessage(score) {
  if (score >= 20) return 'Performance incroyable ! 🔥';
  if (score >= 12) return 'Très bon score !';
  if (score >= 6)  return 'Belle partie !';
  return 'Bon début !';
}

export default function BubbleDashGame({ onBack, onComplete, bestScore = 0 }) {
  const [phase, setPhase] = useState('idle'); // idle | playing | over
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [score, setScore] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const [pops, setPops] = useState([]); // visual +1 feedbacks
  const completedRef = useRef(false);

  const startGame = useCallback(() => {
    completedRef.current = false;
    uid = 0;
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setBubbles(Array.from({ length: MAX_BUBBLES }, newBubble));
    setPops([]);
    setPhase('playing');
  }, []);

  // countdown
  useEffect(() => {
    if (phase !== 'playing') return;
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(id); setPhase('over'); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  // expire bubbles
  useEffect(() => {
    if (phase !== 'playing') return;
    const id = setInterval(() => {
      setBubbles((prev) => {
        const now = Date.now();
        const expired = prev.filter((b) => now - b.born >= BUBBLE_LIFETIME);
        if (!expired.length) return prev;
        const kept = prev.filter((b) => now - b.born < BUBBLE_LIFETIME);
        return [...kept, ...Array.from({ length: expired.length }, newBubble)];
      });
    }, 200);
    return () => clearInterval(id);
  }, [phase]);

  // on game over, fire callback once
  useEffect(() => {
    if (phase !== 'over' || completedRef.current) return;
    completedRef.current = true;
    // read score from ref to avoid stale closure
  }, [phase]);

  const handlePop = (bubble) => {
    if (phase !== 'playing') return;
    setScore((s) => s + 1);
    setBubbles((prev) => [...prev.filter((b) => b.id !== bubble.id), newBubble()]);
    const popId = Date.now() + Math.random();
    setPops((prev) => [...prev, { id: popId, x: bubble.x, y: bubble.y }]);
    setTimeout(() => setPops((prev) => prev.filter((p) => p.id !== popId)), 600);
  };

  const reward = getReward(score);
  const xpGain = reward * 2;

  if (phase === 'idle') {
    return (
      <div className="flex flex-col items-center gap-6 py-4 text-center">
        <div className="text-6xl">🫧</div>
        <div>
          <h2 className="text-xl font-extrabold text-white">Bubble Dash</h2>
          <p className="mt-1 text-sm text-zinc-400">Éclate un maximum de bulles en 20 secondes !</p>
        </div>
        {bestScore > 0 && (
          <p className="rounded-full bg-orangeBrand/10 px-4 py-1.5 text-xs font-semibold text-orangeBrand">
            Meilleur score : {bestScore} bulles
          </p>
        )}
        <button
          type="button"
          onClick={startGame}
          className="w-full rounded-xl bg-orangeBrand py-3 text-sm font-bold text-black transition hover:brightness-110 active:scale-[0.98]"
        >
          Jouer
        </button>
        <button type="button" onClick={onBack} className="text-xs text-zinc-500 underline">
          Retour
        </button>
      </div>
    );
  }

  if (phase === 'over') {
    return (
      <div className="flex flex-col items-center gap-5 py-4 text-center">
        <div className="text-5xl">🫧</div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{getMessage(score)}</p>
          <p className="mt-2 text-5xl font-extrabold text-white">{score}</p>
          <p className="text-sm text-zinc-400">bulles éclatées</p>
        </div>
        <div className="flex w-full gap-3">
          <div className="flex-1 rounded-xl border border-white/10 bg-zinc-900 p-3">
            <p className="text-[10px] text-zinc-400">Récompense</p>
            <p className="text-lg font-bold text-orangeBrand">+{reward} pts</p>
          </div>
          <div className="flex-1 rounded-xl border border-white/10 bg-zinc-900 p-3">
            <p className="text-[10px] text-zinc-400">XP gagné</p>
            <p className="text-lg font-bold text-orangeBrand">+{xpGain} XP</p>
          </div>
          {bestScore > 0 && (
            <div className="flex-1 rounded-xl border border-white/10 bg-zinc-900 p-3">
              <p className="text-[10px] text-zinc-400">Meilleur</p>
              <p className="text-lg font-bold text-white">{Math.max(bestScore, score)}</p>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            onComplete?.({ score, reward, xpGain });
            startGame();
          }}
          className="w-full rounded-xl bg-orangeBrand py-3 text-sm font-bold text-black transition hover:brightness-110 active:scale-[0.98]"
        >
          Rejouer
        </button>
        <button type="button" onClick={onBack} className="text-xs text-zinc-500 underline">
          Retour au catalogue
        </button>
      </div>
    );
  }

  // playing
  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-950" style={{ height: '340px', touchAction: 'none' }}>
      {/* HUD */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-black/70 px-4 py-2">
        <span className="text-sm font-bold text-white">Score : <span className="text-orangeBrand">{score}</span></span>
        <span className={`text-sm font-bold tabular-nums ${timeLeft <= 5 ? 'text-red-400' : 'text-white'}`}>
          {String(timeLeft).padStart(2, '0')}s
        </span>
      </div>

      {/* Bubbles */}
      {bubbles.map((b) => {
        const age = Date.now() - b.born;
        const lifeRatio = Math.min(age / BUBBLE_LIFETIME, 1);
        const opacity = lifeRatio > 0.7 ? 1 - (lifeRatio - 0.7) / 0.3 : 1;
        return (
          <button
            key={b.id}
            type="button"
            onClick={() => handlePop(b)}
            className={`absolute rounded-full shadow-lg ring-2 transition-transform active:scale-90 ${b.color.bg} ${b.color.ring} ${b.color.shadow}`}
            style={{
              left: `${b.x}%`,
              top: `${b.y}%`,
              width: b.size,
              height: b.size,
              transform: 'translate(-50%, -50%)',
              opacity,
            }}
          />
        );
      })}

      {/* Pop feedback */}
      {pops.map((p) => (
        <span
          key={p.id}
          className="pointer-events-none absolute text-xs font-bold text-orangeBrand"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: 'translate(-50%, -50%)',
            animation: 'coinPop 0.6s ease-out forwards',
          }}
        >
          +1
        </span>
      ))}
    </div>
  );
}
