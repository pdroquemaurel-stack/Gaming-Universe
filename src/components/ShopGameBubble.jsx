import AssetImage from './AssetImage';

export default function ShopGameBubble({ game, active, onClick }) {
  return (
    <button type="button" onClick={() => onClick(game)} className="flex w-20 flex-shrink-0 flex-col items-center gap-1">
      <div className={`h-16 w-16 rounded-full border-2 ${active ? 'border-orangeBrand' : 'border-white/10'} p-0.5`}>
        <AssetImage src={game.logo} alt={game.name} fallback="🎮" className="h-full w-full" rounded="rounded-full" fit="contain" />
      </div>
      <span className={`text-center text-[11px] ${active ? 'text-orangeBrand' : 'text-zinc-300'}`}>{game.shortName}</span>
    </button>
  );
}
