const assetFallback = {
  coin: '🪙',
  avatar: '👤',
  leaderboard: '🏆',
};

function IconWithFallback({ src, alt, fallback, rounded = false }) {
  return (
    <div className={`relative flex h-7 w-7 items-center justify-center overflow-hidden bg-zinc-800 text-sm ${rounded ? 'rounded-full' : 'rounded-md'}`}>
      <img
        src={src}
        alt={alt}
        className="relative z-10 h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <span className="absolute z-0">{fallback}</span>
    </div>
  );
}

export default function GlobalHeader({ onNavigate }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-orangeBrand/30 bg-[#0B0B0B]/95 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-md items-center justify-between px-4">
        <button type="button" onClick={() => onNavigate('/')} className="text-left text-sm font-bold tracking-wide text-white">
          Max it <span className="text-orangeBrand">Gaming</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900 px-2 py-1">
            <IconWithFallback src="/assets/coin.png" alt="Coin" fallback={assetFallback.coin} />
            <span className="text-xs font-semibold text-white">12 450</span>
          </div>

          <button type="button" onClick={() => onNavigate('/profile')} aria-label="Profile">
            <IconWithFallback src="/assets/avatar.png" alt="Avatar" fallback={assetFallback.avatar} rounded />
          </button>

          <button type="button" onClick={() => onNavigate('/leaderboard')} aria-label="Leaderboard">
            <IconWithFallback src="/assets/leaderboard.png" alt="Leaderboard" fallback={assetFallback.leaderboard} />
          </button>
        </div>
      </div>
    </header>
  );
}
