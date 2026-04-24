export default function Badge({ text, tone = 'default' }) {
  const toneClass = tone === 'orange'
    ? 'border-orangeBrand/60 bg-orangeBrand/20 text-orangeBrand'
    : 'border-white/15 bg-white/5 text-zinc-200';

  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-1 text-[10px] font-semibold ${toneClass}`}>
      {text}
    </span>
  );
}
