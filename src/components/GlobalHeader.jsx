import { usePlayerProgress } from '../context/PlayerProgressContext';
export default function GlobalHeader({ onNavigate }) {
  const { points, level } = usePlayerProgress();
  return <header className="fixed left-0 right-0 top-0 z-50 border-b border-orangeBrand/30 bg-[#0B0B0B]/95 backdrop-blur"><div className="mx-auto flex h-12 max-w-md items-center justify-between px-4"><button onClick={() => onNavigate('/')} className="text-left text-sm font-bold">Max it <span className="text-orangeBrand">Gaming</span></button><div className="flex items-center gap-2 text-xs"><span className="rounded-full border border-white/10 bg-zinc-900 px-2 py-1">Level {level}</span><button onClick={() => onNavigate('/points')} className="rounded-full border border-white/10 bg-zinc-900 px-2 py-1">🪙 {points}</button></div></div></header>;
}
