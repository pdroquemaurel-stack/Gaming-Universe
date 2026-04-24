import FeatureCard from '../components/FeatureCard';
import { homeFeatures } from '../data/mockData';

export default function Home() {
  return (
    <section>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-orangeBrand">Max it Gaming</h1>
        <p className="mt-3 text-xl font-semibold">Play. Pay. Compete.</p>
        <p className="mt-2 text-sm text-zinc-300">Your gaming hub inside Max it</p>
      </header>

      <div className="space-y-4">
        {homeFeatures.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
