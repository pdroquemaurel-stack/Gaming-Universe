import { useEffect, useState } from 'react';
import { playerProfile } from '../data/playerProfile';

const memoryStore = {};
function readStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return key in memoryStore ? memoryStore[key] : fallback;
  }
}

export default function GlobalHeader({ onNavigate }) {
  const [coins, setCoins] = useState(() => {
    const stored = readStorage('playerHubState', null);
    return stored?.coins ?? playerProfile.coins;
  });

  useEffect(() => {
    const onUpdate = (event) => {
      if (event.detail?.coins != null) setCoins(event.detail.coins);
    };
    window.addEventListener('maxit:state-updated', onUpdate);
    return () => window.removeEventListener('maxit:state-updated', onUpdate);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-orangeBrand/30 bg-[#0B0B0B]/95 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-md items-center justify-between px-4">
        <button type="button" onClick={() => onNavigate('/')} className="text-left text-sm font-bold tracking-wide text-white">
          Max it <span className="text-orangeBrand">Gaming</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('/points')}
            className="flex items-center gap-1.5 rounded-full border border-orangeBrand/30 bg-orangeBrand/10 px-2.5 py-1"
          >
            <span className="text-sm">🪙</span>
            <span className="text-xs font-semibold text-orangeBrand">
              {coins.toLocaleString('fr-FR')}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/profile')}
            aria-label="Profil"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-orangeBrand/20 text-xs font-bold text-orangeBrand"
          >
            {playerProfile.initials}
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/leaderboard')}
            aria-label="Classement"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-sm"
          >
            🏆
          </button>
        </div>
      </div>
    </header>
  );
}
