import { useEffect } from 'react';

export default function ModalOverlay({ title, onClose, children, fullScreenMobile = false }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/75 p-3 backdrop-blur-sm sm:items-center">
      <div className={`w-full overflow-y-auto border border-orangeBrand bg-[#101010] shadow-2xl shadow-black/60 ${
        fullScreenMobile
          ? 'h-[96vh] max-h-[96vh] rounded-2xl p-4 sm:h-auto sm:max-h-[92vh] sm:max-w-md'
          : 'max-h-[90vh] max-w-md rounded-2xl p-4'
      }`}>
        <div className="mb-4 flex items-center justify-between gap-2">
          <h3 className="text-base font-bold text-white">{title}</h3>
          <button type="button" onClick={onClose} className="rounded-lg border border-white/20 px-3 py-1 text-xs text-zinc-200">Fermer</button>
        </div>
        {children}
      </div>
    </div>
  );
}
