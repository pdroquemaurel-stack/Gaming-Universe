import MetricCard from '../components/MetricCard';
import { shopProducts } from '../data/mockData';

const metrics = ['Direct revenue', 'Conversion', 'ARPU'];

export default function Gameshop() {
  return (
    <section>
      <h2 className="text-xl font-bold text-orangeBrand">Gameshop</h2>
      <p className="mt-2 text-sm text-zinc-300">Buy gaming content with Orange Money or airtime</p>

      <div className="mt-5 space-y-3">
        {shopProducts.map((product) => (
          <article key={product.name} className="card-base">
            <h3 className="text-base font-semibold">{product.name}</h3>
            <p className="mt-1 text-xs text-zinc-400">{product.detail}</p>
            <button
              type="button"
              className="mt-3 rounded-lg bg-orangeBrand px-3 py-2 text-sm font-medium text-black"
            >
              Buy now
            </button>
          </article>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {metrics.map((metric) => (
          <MetricCard key={metric} label={metric} />
        ))}
      </div>
    </section>
  );
}
