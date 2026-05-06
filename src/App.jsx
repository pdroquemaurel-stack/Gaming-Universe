import { useEffect, useMemo, useState } from 'react';
import GlobalHeader from './components/GlobalHeader';
import MainNav from './components/MainNav';
import { ToastProvider } from './components/ToastProvider';
import { PlayerProgressProvider } from './context/PlayerProgressContext';
import Esport from './pages/Esport';
import Gameshop from './pages/Gameshop';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Play from './pages/Play';
import Points from './pages/Points';
import Profile from './pages/Profile';
const routeMap = { '/': Home, '/play': Play, '/shop': Gameshop, '/esport': Esport, '/leaderboard': Leaderboard, '/profile': Profile, '/points': Points };
const normalizePath = (p) => (routeMap[p] ? p : '/');
export default function App() { const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname)); const [currentSearch, setCurrentSearch] = useState(() => window.location.search || ''); useEffect(() => { const onPopState = () => { setCurrentPath(normalizePath(window.location.pathname)); setCurrentSearch(window.location.search || ''); }; window.addEventListener('popstate', onPopState); return () => window.removeEventListener('popstate', onPopState); }, []); const navigate = (path) => { const [p,s=''] = path.split('?'); const np=normalizePath(p); const ns=s?`?${s}`:''; if(np===currentPath&&ns===currentSearch)return; window.history.pushState({},'',`${np}${ns}`); setCurrentPath(np); setCurrentSearch(ns); }; const CurrentView = useMemo(() => routeMap[currentPath] || Home, [currentPath]); return <ToastProvider><PlayerProgressProvider><div className="mx-auto min-h-screen max-w-md bg-[#0B0B0B] px-4 pb-10 pt-28 text-white"><GlobalHeader onNavigate={navigate} /><MainNav currentPath={currentPath} onNavigate={navigate} /><CurrentView currentPath={currentPath} currentSearch={currentSearch} onNavigate={navigate} /></div></PlayerProgressProvider></ToastProvider>; }
