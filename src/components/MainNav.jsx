const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'PLAY', path: '/play' },
  { label: 'SHOP', path: '/shop' },
  { label: 'E-SPORT', path: '/esport' },
];

export default function MainNav({ currentPath, onNavigate }) {
  return (
    <nav className="fixed left-0 right-0 top-12 z-40 border-b border-white/10 bg-black/95 backdrop-blur">
      <ul className="mx-auto grid h-11 max-w-md grid-cols-4 gap-1 px-2">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;

          return (
            <li key={item.path} className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => onNavigate(item.path)}
                className={`w-full rounded-lg px-1 py-2 text-[11px] font-bold tracking-wide ${
                  isActive ? 'bg-orangeBrand/15 text-orangeBrand' : 'text-zinc-300'
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
