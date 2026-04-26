export default function ModalOverlay({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/75 p-3 backdrop-blur-sm sm:items-center">
      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border border-orangeBrand bg-[#101010] p-4 shadow-2xl shadow-black/60">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h3 className="text-base font-bold text-white">{title}</h3>
          <button type="button" onClick={onClose} className="rounded-lg border border-white/20 px-3 py-1 text-xs text-zinc-200">Fermer</button>
        </div>
        {children}
      </div>
    </div>
  );
}
