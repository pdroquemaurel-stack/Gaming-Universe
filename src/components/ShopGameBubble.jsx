import AssetImage from './AssetImage';

export default function ShopGameBubble({ game, active, onClick }) {
  return (
    <button type="button" onClick={() => onClick(game)} className="flex w-24 flex-shrink-0 flex-col items-center gap-2">
      <div className={`h-20 w-20 overflow-hidden rounded-full border-2 bg-zinc-900 p-0.5 ${active ? 'border-orangeBrand shadow-lg shadow-orangeBrand/30' : 'border-white/10'}`}>
        <AssetImage src={game.logo} alt={game.name} fallback="🎮" className="h-full w-full" rounded="rounded-full" fit="contain" />
      </div>
      <span className={`text-center text-[11px] leading-tight ${active ? 'text-orangeBrand' : 'text-zinc-300'}`}>{game.shortName}</span>
    </button>
  );
}
