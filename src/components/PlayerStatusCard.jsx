import ProgressBar from './ProgressBar';

export default function PlayerStatusCard({ profile }) {
  return (
    <article className="card-base space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-white">{profile.name}</h2>
        <span className="rounded-full bg-orangeBrand/20 px-2 py-1 text-xs font-semibold text-orangeBrand">{profile.level}</span>
      </div>
      <div>
        <div className="mb-2 flex items-center justify-between text-xs text-zinc-300">
          <span>XP progress</span>
          <span>{profile.xpProgress}%</span>
        </div>
        <ProgressBar value={profile.xpProgress} />
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl border border-white/10 bg-black/30 p-2 text-zinc-300">Coins <p className="text-sm font-semibold text-white">{profile.coins.toLocaleString()}</p></div>
        <div className="rounded-xl border border-white/10 bg-black/30 p-2 text-zinc-300">Daily streak <p className="text-sm font-semibold text-white">{profile.dailyStreak} days</p></div>
      </div>
    </article>
  );
}
