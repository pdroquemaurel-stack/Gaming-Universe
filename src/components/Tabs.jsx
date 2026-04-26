export default function Tabs({ tabs, activeId, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-xl bg-zinc-900/80 p-1">
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${active ? 'bg-orangeBrand text-white' : 'bg-zinc-800 text-zinc-300'}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
