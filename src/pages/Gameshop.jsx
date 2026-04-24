import SectionHeader from '../components/SectionHeader';
import { shopSections } from '../data/mockData';

export default function Gameshop() {
  const sectionNames = Object.keys(shopSections);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-orangeBrand">Gameshop</h1>
        <p className="mt-2 text-sm text-zinc-300">Clean store for gaming products</p>
      </header>

      {sectionNames.map((sectionName) => (
        <div key={sectionName}>
          <SectionHeader title={sectionName} />
          <div className="space-y-2">
            {shopSections[sectionName].map((product) => (
              <article key={product.id} className="card-base p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold">{product.title}</h3>
                    <p className="mt-1 text-xs text-zinc-400">{product.description}</p>
                  </div>
                  <span className="text-xs font-semibold text-orangeBrand">{product.price}</span>
                </div>
                <button type="button" className="mt-3 rounded-md bg-orangeBrand px-3 py-2 text-xs font-semibold text-black">
                  Buy
                </button>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
