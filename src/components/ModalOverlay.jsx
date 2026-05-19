import { useEffect } from 'react';

const OVERLAY_STYLE = {
  top: '56px',
  bottom: 'calc(64px + env(safe-area-inset-bottom, 0px))',
};

export default function ModalOverlay({ title, onClose, children, fullScreenMobile = false }) {
  useEffect(() => {
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-[45] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm"
      style={OVERLAY_STYLE}
    >
      <div className={`flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-orangeBrand bg-[#101010] shadow-2xl shadow-black/60 ${
        fullScreenMobile ? 'h-full' : 'max-h-full'
      }`}>
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-white/10 px-4 py-3">
          <h3 className="text-base font-bold text-white">{title}</h3>
          <button type="button" onClick={onClose} className="rounded-lg border border-white/20 px-3 py-1 text-xs text-zinc-200 transition duration-200 hover:border-orangeBrand/50 active:scale-95">Fermer</button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

