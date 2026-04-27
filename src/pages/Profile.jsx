const profile = {
  fullName: 'Paul Rahmani',
  username: '@paulmax',
  level: 'Niveau 12',
  progressPercent: 72,
  points: '12 450',
  gamesPlayed: 186,
  playHours: 342,
  rank: '#14 Mondial',
  favoriteGames: ['League of Legends', 'Fortnite', 'Free Fire', 'Royal Match'],
  externalConnecterions: ['League of Legends', 'Fortnite', 'Free Fire', 'EA SPORTS FC'],
};

const metrics = [
  { label: 'Points cumulés', value: profile.points },
  { label: 'Jeux joués', value: profile.gamesPlayed },
  { label: 'Heures de jeu', value: profile.playHours },
  { label: 'Rang actuel', value: profile.rank },
];

export default function Profile() {
  return (
    <section className="space-y-5">
      <header className="card-base flex items-center gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-zinc-800 text-2xl">
          <img
            src="/assets/avatar.png"
            alt="Avatar joueur"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <span className="absolute">👤</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">{profile.fullName}</h1>
          <p className="text-sm text-zinc-300">{profile.username}</p>
          <p className="text-xs font-semibold text-orangeBrand">{profile.level}</p>
        </div>
      </header>

      <article className="card-base space-y-3">
        <h2 className="text-sm font-semibold text-white">Progression</h2>
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-white/10 bg-black/40 p-3">
              <p className="text-[11px] text-zinc-400">{metric.label}</p>
              <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="mb-1 flex justify-between text-[11px] text-zinc-400">
            <span>Vers Niveau 13</span>
            <span>{profile.progressPercent}%</span>
          </div>
          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-2 rounded-full bg-orangeBrand" style={{ width: `${profile.progressPercent}%` }} />
          </div>
        </div>
      </article>

      <article className="card-base">
        <h2 className="text-sm font-semibold text-white">Jeux préférés</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.favoriteGames.map((game) => (
            <span key={game} className="rounded-full border border-orangeBrand/40 bg-orangeBrand/10 px-3 py-1 text-xs text-orangeBrand">
              {game}
            </span>
          ))}
        </div>
      </article>

      <article className="card-base space-y-3">
        <h2 className="text-sm font-semibold text-white">Social</h2>
        <div className="flex items-center gap-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-dashed border-white/20 bg-zinc-900 text-3xl">▦</div>
          <p className="text-xs text-zinc-300">QR code de démo pour ajouter ce joueur en ami.</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Rechercher un ami"
            className="flex-1 rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-sm text-white outline-none focus:border-orangeBrand"
          />
          <button type="button" className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white">Ajouter</button>
        </div>
      </article>

      <article className="card-base space-y-3">
        <h2 className="text-sm font-semibold text-white">Connexions externes</h2>
        {profile.externalConnecterions.map((item) => (
          <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 p-3">
            <div>
              <p className="text-sm font-medium text-white">{item}</p>
              <p className="text-xs text-zinc-400">Non connecté</p>
            </div>
            <button type="button" className="rounded-md border border-orangeBrand px-3 py-2 text-xs font-semibold text-orangeBrand">Connecter</button>
          </div>
        ))}
      </article>
    </section>
  );
}
