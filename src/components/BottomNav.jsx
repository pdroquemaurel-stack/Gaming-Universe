import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Play', to: '/play' },
  { label: 'Shop', to: '/shop' },
  { label: 'Esport', to: '/esport' }
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-10 w-full max-w-md -translate-x-1/2 border-t border-zinc-800 bg-black/95 px-2 py-2 backdrop-blur">
      <ul className="grid grid-cols-4 gap-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                [
                  'block rounded-lg px-2 py-2 text-center text-xs font-medium transition',
                  isActive ? 'bg-gamingOrange text-black' : 'bg-zinc-900 text-zinc-200 hover:bg-zinc-800'
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNav;
