import React, { useState, useMemo } from 'react';
import { getProducts } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import ScrollReveal from '../components/common/ScrollReveal';
import './Shop.css';

const FILTERS = [
  { id: 'all',       label: 'All' },
  { id: 'homme',     label: 'Pour Homme' },
  { id: 'femme',     label: 'Pour Femme' },
  { id: 'available', label: 'Available' },
];

export default function Shop() {
  const allProducts  = getProducts();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    switch (activeFilter) {
      case 'homme':     return allProducts.filter((p) => p.genderLabel === 'Pour Homme');
      case 'femme':     return allProducts.filter((p) => p.genderLabel === 'Pour Femme');
      case 'available': return allProducts.filter((p) => p.available);
      default:          return allProducts;
    }
  }, [activeFilter, allProducts]);

  return (
    <main className="page-main shop-page">

      {/* Header */}
      <div className="shop-header container">
        <ScrollReveal>
          <p className="eyebrow shop-header__eyebrow">The Collection</p>
          <h1 className="shop-header__title serif">Discover<br /><em>HEVON SCENTS</em></h1>
          <p className="shop-header__intro">
            Two signature fragrances. One standard of excellence.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <div className="shop-filters" role="group" aria-label="Filter products">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`shop-filter ${activeFilter === f.id ? 'shop-filter--active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
              aria-pressed={activeFilter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container">
        {filtered.length === 0 ? (
          <div className="shop-empty">
            <p className="shop-empty__text serif">No fragrances found</p>
          </div>
        ) : (
          <div className="shop-grid">
            {filtered.map((product, idx) => (
              <ScrollReveal key={product.id} delay={idx + 1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

    </main>
  );
}
