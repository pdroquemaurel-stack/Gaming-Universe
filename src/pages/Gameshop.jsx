import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import { shopSections } from '../data/mockData';

export default function Gameshop() {
  const sectionNames = Object.keys(shopSections);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Game<span className="text-orangeBrand">shop</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Premium gaming store with clean mobile cards</p>
      </header>

      {sectionNames.map((sectionName) => (
        <div key={sectionName}>
          <SectionHeader title={sectionName} />
          <div className="space-y-3">
            {shopSections[sectionName].map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                fallback={product.fallback}
                featured={product.featured}
                cta="Buy"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
