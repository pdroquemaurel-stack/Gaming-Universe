import { useEffect, useMemo, useState } from 'react';
import GlobalHeader from './components/GlobalHeader';
import MainNav from './components/MainNav';
import { ToastProvider } from './components/ToastProvider';
import Esport from './pages/Esport';
import Gameshop from './pages/Gameshop';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Play from './pages/Play';
import Points from './pages/Points';
import Profile from './pages/Profile';
import { PlayerProgressProvider } from './context/PlayerProgressContext';

const routeMap = {
  '/': Home,
  '/play': Play,
  '/shop': Gameshop,
  '/esport': Esport,
  '/leaderboard': Leaderboard,
  '/profile': Profile,
  '/points': Points,
};

const legacyToPath = {
  home: '/',
  play: '/play',
  shop: '/shop',
  esport: '/esport',
  leaderboard: '/leaderboard',
  profile: '/profile',
  points: '/points',
};

function normalizePath(pathname) {
  return routeMap[pathname] ? pathname : '/';
}

function parseNavigationTarget(pathOrLegacy) {
  const resolvedPath = legacyToPath[pathOrLegacy] || pathOrLegacy;
  const [rawPath, rawSearch = ''] = resolvedPath.split('?');
  const normalizedPath = normalizePath(rawPath);
  const search = rawSearch ? `?${rawSearch}` : '';

  return { path: normalizedPath, search };
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));
  const [currentSearch, setCurrentSearch] = useState(() => window.location.search || '');

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      setCurrentSearch(window.location.search || '');
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (pathOrLegacy) => {
    const target = parseNavigationTarget(pathOrLegacy);
    const hasChanged = target.path !== currentPath || target.search !== currentSearch;

    if (!hasChanged) return;

    window.history.pushState({}, '', `${target.path}${target.search}`);
    setCurrentPath(target.path);
    setCurrentSearch(target.search);
  };

  const CurrentView = useMemo(() => routeMap[currentPath] || Home, [currentPath]);

  return (
    <PlayerProgressProvider>
    <ToastProvider>
      <div className="mx-auto min-h-screen max-w-md bg-[#0B0B0B] px-4 pb-10 pt-28 text-white">
        <GlobalHeader onNavigate={navigate} />
        <MainNav currentPath={currentPath} onNavigate={navigate} />
        <CurrentView currentPath={currentPath} currentSearch={currentSearch} onNavigate={navigate} />
      </div>
    </ToastProvider>
  </PlayerProgressProvider>
  );
}
