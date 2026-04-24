export default function PurchaseConfirmationModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="card-base w-full max-w-sm">
        <p className="text-xs text-orangeBrand">Purchase confirmed</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{product.title}</h3>
        <p className="mt-2 text-sm text-zinc-300">Price: {product.price}</p>
        <p className="mt-1 text-sm text-zinc-300">Payment method: Orange Money</p>
        <button type="button" onClick={onClose} className="mt-4 w-full rounded-lg bg-orangeBrand px-4 py-2 text-sm font-semibold text-white">
          Done
        </button>
      </div>
    </div>
  );
}
