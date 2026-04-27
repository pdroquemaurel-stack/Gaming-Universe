import { useEffect, useMemo, useState } from 'react';
import PointsBadge from '../components/PointsBadge';
import Tabs from '../components/Tabs';
import { pointsBalance, pointsEarnWays, pointsUseWays } from '../data/points';
import AssetImage from '../components/AssetImage';
import SectionHeader from '../components/SectionHeader';
import { useToast } from '../components/ToastProvider';

function getTabFromSearch(search = '') {
  const params = new URLSearchParams(search);
  return params.get('tab') === 'use' ? 'use' : 'earn';
}

export default function Points({ currentSearch }) {
  const [activeTab, setActiveTab] = useState(() => getTabFromSearch(currentSearch));
  const { showToast } = useToast();

  useEffect(() => {
    setActiveTab(getTabFromSearch(currentSearch));
  }, [currentSearch]);

  const title = useMemo(
    () => (activeTab === 'earn' ? 'Missions récompensées' : 'Récompenses disponibles'),
    [activeTab],
  );

  return (
    <section className="space-y-4">
      <header className="card-base orange-glow space-y-3 bg-gradient-to-r from-orangeBrand/20 to-zinc-900/80">
        <p className="text-xs uppercase tracking-wide text-orangeBrand">Max it Points</p>
        <div className="flex items-center gap-3">
          <AssetImage src="/assets/coin.png" alt="Pièce" fallback="🪙" className="h-12 w-12" rounded="rounded-full" fit="contain" />
          <h1 className="text-3xl font-extrabold text-white">{pointsBalance.toLocaleString('fr-FR')} points</h1>
        </div>
      </header>

      <Tabs tabs={[{ id: 'earn', label: 'Gagner' }, { id: 'use', label: 'Utiliser' }]} activeId={activeTab} onChange={setActiveTab} />

      <SectionHeader title={title} subtitle={activeTab === 'earn' ? 'Gagne des points chaque jour' : 'Utilise tes points maintenant'} />

      <div className="space-y-3">
        {(activeTab === 'earn' ? pointsEarnWays : pointsUseWays).map((item) => (
          <article key={item.id} className="card-base space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-zinc-300">{item.description}</p>
              </div>
              {item.category || item.badge ? <span className="rounded-full border border-orangeBrand/30 px-2 py-1 text-[10px] text-orangeBrand">{item.category || item.badge}</span> : null}
            </div>
            <div className="flex items-center justify-between">
              <PointsBadge points={activeTab === 'earn' ? item.points : item.cost} prefix={activeTab === 'earn' ? '+' : '-'} />
              <button
                type="button"
                onClick={() => showToast(activeTab === 'earn' ? 'Récompense ajoutée à votre compte' : 'Demande prise en compte')}
                className="rounded-lg bg-orangeBrand px-3 py-2 text-xs font-semibold text-white"
              >
                {item.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
