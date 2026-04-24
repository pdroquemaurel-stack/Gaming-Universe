import { useMemo, useState } from 'react';
import FloatingBackButton from './components/FloatingBackButton';
import Esport from './pages/Esport';
import Gameshop from './pages/Gameshop';
import Home from './pages/Home';
import Play from './pages/Play';

export default function App() {
  // Simple state-based navigation keeps the app easy to read for beginners.
  const [currentPage, setCurrentPage] = useState('home');

  const CurrentView = useMemo(() => {
    switch (currentPage) {
      case 'play':
        return Play;
      case 'shop':
        return Gameshop;
      case 'esport':
        return Esport;
      case 'home':
      default:
        return Home;
    }
  }, [currentPage]);

  return (
    <div className="mx-auto min-h-screen max-w-md bg-black px-4 pb-24 pt-6 text-white">
      <CurrentView currentPage={currentPage} onNavigate={setCurrentPage} />
      <FloatingBackButton onHome={() => setCurrentPage('home')} />
    </div>
  );
}
