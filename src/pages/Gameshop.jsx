import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import PurchaseConfirmationModal from '../components/PurchaseConfirmationModal';
import SectionHeader from '../components/SectionHeader';
import { shopSections } from '../data/mockData';

export default function Gameshop() {
  const sectionNames = Object.keys(shopSections);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">Game<span className="text-orangeBrand">shop</span></h1>
        <p className="mt-2 text-sm text-zinc-300">Top-ups, passes and gaming content</p>
      </header>

      <article className="card-base orange-glow flex items-center justify-between gap-3 bg-gradient-to-r from-orangeBrand/20 to-zinc-900/70">
        <div>
          <p className="text-xs text-orangeBrand">Orange Money ready</p>
          <p className="text-sm font-semibold text-white">Fast checkout with Orange Money</p>
        </div>
        <span className="rounded-full border border-orangeBrand/40 px-2 py-1 text-[10px] text-orangeBrand">Secure</span>
      </article>

      {sectionNames.map((sectionName) => (
        <div key={sectionName} className="space-y-3">
          <SectionHeader title={sectionName} />
          {shopSections[sectionName].map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              fallback={product.fallback}
              cta="Buy"
              badge={product.badge}
              category={product.category}
              onBuy={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      ))}

      <PurchaseConfirmationModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
