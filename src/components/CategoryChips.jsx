export default function CategoryChips({ items, activeId, onSelect }) {
  return (
    <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`flex-shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold ${active ? 'border-orangeBrand bg-orangeBrand text-white' : 'border-white/15 bg-zinc-900 text-zinc-300'}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
