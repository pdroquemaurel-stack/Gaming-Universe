const items = [
  { key: 'home', label: 'Home' },
  { key: 'play', label: 'Play' },
  { key: 'shop', label: 'Shop' },
  { key: 'esport', label: 'Esport' },
];

export default function BottomNav({ currentPage, onChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-black/95 p-2 backdrop-blur">
      <ul className="mx-auto flex max-w-md items-center justify-around">
        {items.map((item) => {
          const isActive = currentPage === item.key;

          return (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => onChange(item.key)}
                className={`rounded-lg px-3 py-2 text-xs font-medium ${
                  isActive ? 'bg-orangeBrand text-black' : 'text-zinc-300'
                }`}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
