import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';
import { homeFeatures } from '../data/content';

function HomePage() {
  return (
    <section className="space-y-4">
      <SectionHeader title="Max it Gaming" subtitle="Play. Pay. Compete." />

      <p className="rounded-xl border border-zinc-800 bg-zinc-950 p-3 text-sm text-zinc-200">
        This mobile-first super app prototype shows the gaming journey from discovery to monetization
        and long-term community growth.
      </p>

      <div className="space-y-4">
        {homeFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
