export default function SectionHeader({ title, subtitle }) {
  return (
    <header className="mb-3 flex items-end justify-between">
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {subtitle ? <p className="mt-1 text-xs text-zinc-400">{subtitle}</p> : null}
      </div>
    </header>
  );
}
