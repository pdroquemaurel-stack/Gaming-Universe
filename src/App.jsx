import { useEffect, useMemo, useState } from 'react';
import GlobalHeader from './components/GlobalHeader';
import MainNav from './components/MainNav';
import Esport from './pages/Esport';
import Gameshop from './pages/Gameshop';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Play from './pages/Play';
import Profile from './pages/Profile';

const routeMap = {
  '/': Home,
  '/play': Play,
  '/shop': Gameshop,
  '/esport': Esport,
  '/leaderboard': Leaderboard,
  '/profile': Profile,
};

const legacyToPath = {
  home: '/',
  play: '/play',
  shop: '/shop',
  esport: '/esport',
  leaderboard: '/leaderboard',
  profile: '/profile',
};

function normalizePath(pathname) {
  return routeMap[pathname] ? pathname : '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (pathOrLegacy) => {
    const nextPath = legacyToPath[pathOrLegacy] || pathOrLegacy;
    const normalized = normalizePath(nextPath);

    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
    }
  };

  const CurrentView = useMemo(() => routeMap[currentPath] || Home, [currentPath]);

  return (
    <div className="mx-auto min-h-screen max-w-md bg-[#0B0B0B] px-4 pb-10 pt-28 text-white">
      <GlobalHeader onNavigate={navigate} />
      <MainNav currentPath={currentPath} onNavigate={navigate} />
      <CurrentView currentPath={currentPath} onNavigate={navigate} />
    </div>
  );
}
