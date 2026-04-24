export default function FloatingBackButton({ onHome }) {
  return (
    <button
      type="button"
      onClick={onHome}
      aria-label="Back to home"
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-orangeBrand text-xl font-bold text-black shadow-lg shadow-orangeBrand/30"
    >
      ←
    </button>
  );
}
