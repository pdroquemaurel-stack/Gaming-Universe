import AssetImage from './AssetImage';

export default function PointsBadge({ points, prefix = '+', compact = false }) {
  return (
    <div className={`flex items-center gap-1 rounded-full border border-orangeBrand/40 bg-black/80 ${compact ? 'px-2 py-1 text-[10px]' : 'px-2.5 py-1 text-xs'} font-semibold text-white`}>
      <AssetImage src="/assets/coin.png" alt="Coin" fallback="🪙" className="h-4 w-4" rounded="rounded-full" />
      <span>{prefix}{points}</span>
    </div>
  );
}
