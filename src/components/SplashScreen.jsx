export default function SplashScreen({ onDone }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
      style={{ animation: 'splashFadeOut 2.2s ease-in-out forwards' }}
      onAnimationEnd={onDone}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orangeBrand/15 text-5xl shadow-lg shadow-orangeBrand/30 ring-1 ring-orangeBrand/40">
          🎮
        </div>
        <div className="text-center">
          <p className="text-2xl font-extrabold tracking-tight text-white">
            Max it <span className="text-orangeBrand">Gaming</span>
          </p>
          <p className="mt-1 text-xs font-medium tracking-widest text-zinc-400 uppercase">
            Powered by Orange
          </p>
        </div>
        <div className="mt-6 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-orangeBrand"
              style={{ animation: `fadeIn 0.4s ease ${i * 0.18}s both` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
