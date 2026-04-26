import AssetImage from './AssetImage';
import PointsBadge from './PointsBadge';

export default function GameCard({ game, onPlay, compact = false, cta = 'Play' }) {
  return (
    <article className="card-base overflow-hidden p-0">
      <div className="relative">
        <AssetImage src={game.image} alt={game.name} fallback={game.fallback || '🎮'} className={compact ? 'h-24' : 'h-28'} rounded="rounded-none" />
        <div className="absolute right-2 top-2"><PointsBadge points={game.points} compact /></div>
      </div>
      <div className="space-y-2 p-3">
        <h3 className="text-sm font-semibold text-white">{game.name}</h3>
        {!compact ? <p className="text-xs text-zinc-300">{game.description}</p> : null}
        <button type="button" onClick={() => onPlay(game)} className="w-full rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">{cta}</button>
      </div>
    </article>
  );
}
