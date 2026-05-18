const navItems = [
  { label: 'Accueil', path: '/', icon: '🏠' },
  { label: 'Jouer', path: '/play', icon: '🎮' },
  { label: 'E-sport', path: '/esport', icon: '🏆' },
  { label: 'Boutique', path: '/shop', icon: '🛒' },
  { label: 'Profil', path: '/profile', icon: '👤' },
];

export default function MainNav({ currentPath, onNavigate }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-orangeBrand/20 bg-black">
      <ul className="mx-auto grid h-16 max-w-md grid-cols-5">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;

          return (
            <li key={item.path} className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => onNavigate(item.path)}
                className={`flex flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 transition-all duration-200
                  ${isActive ? 'text-orangeBrand' : 'text-zinc-500 active:text-zinc-300'}`}
                style={{ minWidth: 0, width: '100%' }}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-base transition-all duration-200
                    ${isActive ? 'bg-orangeBrand/20 scale-110' : ''}`}
                >
                  {item.icon}
                </span>
                <span className={`text-[10px] font-semibold leading-none ${isActive ? 'text-orangeBrand' : 'text-zinc-500'}`}>
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
