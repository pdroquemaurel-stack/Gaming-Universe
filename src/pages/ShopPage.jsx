import MetricCard from '../components/MetricCard';
import SectionHeader from '../components/SectionHeader';
import { shopData } from '../data/content';

function ShopPage() {
  return (
    <section className="space-y-5">
      <SectionHeader
        title="Shop"
        subtitle="Monetize with gift cards, top-ups, and Orange Money payments"
      />

      <div className="space-y-3">
        {shopData.items.map((item) => (
          <article key={item.name} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-base font-semibold text-white">{item.name}</p>
            <p className="mt-1 text-sm text-zinc-300">Price: {item.price}</p>
            <p className="text-sm text-zinc-200">Pay with: {item.payment}</p>
            <button
              type="button"
              className="mt-3 rounded-full bg-gamingOrange px-4 py-2 text-sm font-semibold text-black"
            >
              Buy now
            </button>
          </article>
        ))}
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-300">Key metrics</h2>
        <div className="grid grid-cols-1 gap-3">
          {shopData.metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
