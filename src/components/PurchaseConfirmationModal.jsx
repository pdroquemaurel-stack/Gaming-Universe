import { useEffect } from 'react';

const OVERLAY_STYLE = {
  top: '56px',
  bottom: 'calc(64px + env(safe-area-inset-bottom, 0px))',
};

export default function PurchaseConfirmationModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [product]);

  if (!product) return null;

  return (
    <div
      className="fixed left-0 right-0 z-[45] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      style={OVERLAY_STYLE}
    >
      <div className="w-full max-w-sm rounded-2xl border border-orangeBrand bg-[#101010] p-5 shadow-2xl shadow-black/60">
        <p className="text-xs text-orangeBrand">Achat confirmé</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{product.title}</h3>
        <p className="mt-2 text-sm text-zinc-300">Prix : {product.price}</p>
        <p className="mt-1 text-sm text-zinc-300">Paiement : Orange Money</p>
        <button type="button" onClick={onClose} className="mt-4 w-full rounded-lg bg-orangeBrand px-4 py-2 text-sm font-semibold text-black transition duration-200 hover:brightness-110 active:scale-[0.98]">
          Terminer
        </button>
      </div>
    </div>
  );
}

