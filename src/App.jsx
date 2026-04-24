import { Navigate, Route, Routes } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
import ShopPage from './pages/ShopPage';
import EsportPage from './pages/EsportPage';

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-black text-white">
      {/* Main content area, bottom padding keeps content visible above nav */}
      <main className="px-4 pb-24 pt-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/esport" element={<EsportPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  );
}

export default App;
