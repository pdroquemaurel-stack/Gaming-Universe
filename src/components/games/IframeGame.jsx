import { useEffect, useState } from 'react';

export default function IframeGame({ game }) {
  const [showLoader, setShowLoader] = useState(true);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  // Masque le spinner après 3s que le jeu ait chargé ou non.
  // Si l'iframe est bloqué par X-Frame-Options, l'écran restera blanc —
  // le lien de fallback est toujours visible pour ouvrir dans le navigateur.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      if (!iframeLoaded) setShowFallback(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [iframeLoaded]);

  const handleLoad = () => {
    setIframeLoaded(true);
    setShowLoader(false);
    setShowFallback(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Zone de jeu */}
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950" style={{ height: '68vh' }}>
        {showLoader && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-zinc-950">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-orangeBrand" />
            <p className="text-xs text-zinc-400">Chargement de {game.name}…</p>
          </div>
        )}
        <iframe
          src={game.iframeUrl}
          title={game.name}
          className="h-full w-full"
          allow="fullscreen; accelerometer; gyroscope; autoplay"
          onLoad={handleLoad}
          // sandbox permissif pour les jeux HTML5
          sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
        />
      </div>

      {/* Fallback — toujours visible si l'iframe est bloquée */}
      {showFallback && (
        <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-3 text-center">
          <p className="text-xs text-zinc-300">Le jeu ne s'affiche pas dans la page.</p>
          <p className="mt-0.5 text-[10px] text-zinc-500">Le site peut bloquer l'intégration externe (X-Frame-Options).</p>
          <a
            href={game.iframeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-orangeBrand px-3 py-1.5 text-xs font-semibold text-orangeBrand"
          >
            Ouvrir {game.name} dans le navigateur →
          </a>
        </div>
      )}

      {/* Lien discret — toujours présent même si le jeu charge */}
      {!showFallback && !showLoader && (
        <p className="text-center text-[10px] text-zinc-600">
          Problème d'affichage ?{' '}
          <a href={game.iframeUrl} target="_blank" rel="noreferrer noopener" className="text-zinc-400 underline underline-offset-2">
            Ouvrir dans le navigateur
          </a>
        </p>
      )}
    </div>
  );
}
