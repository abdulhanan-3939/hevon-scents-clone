import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts, formatPrice } from '../../data/products';
import ScrollReveal from '../common/ScrollReveal';
import './FeaturedProducts.css';

/**
 * FeaturedProducts — Two full-width editorial feature sections.
 * RAGE: dark/dramatic. SERA: light/refined.
 */
export default function FeaturedProducts() {
  const products = getFeaturedProducts();
  const rage = products.find((p) => p.slug === 'rage');
  const sera = products.find((p) => p.slug === 'sera');

  return (
    <div className="featured-products">
      {rage && <ProductFeature product={rage} position="right" />}
      {sera && <ProductFeature product={sera} position="left" />}
    </div>
  );
}

function ProductFeature({ product, position }) {
  const isDark = product.theme === 'dark';
  const imgLeft = position === 'left';

  return (
    <section
      className={`product-feature product-feature--${product.theme}`}
      aria-labelledby={`feature-${product.slug}-heading`}
    >
      <div className={`product-feature__layout ${imgLeft ? 'product-feature__layout--img-left' : ''}`}>

        {/* Image panel */}
        <div className="product-feature__img-panel">
          <ScrollReveal className="product-feature__img-wrap">
            <img
              src={product.images.product}
              alt={`${product.name} ${product.type} 50 ML by HEVON SCENTS`}
              className="product-feature__img"
              loading="lazy"
            />
          </ScrollReveal>
        </div>

        {/* Info panel */}
        <div className="product-feature__info-panel">
          <ScrollReveal delay={1} className="product-feature__info">
            <p className="eyebrow product-feature__eyebrow">{product.genderLabel}</p>
            <h2
              id={`feature-${product.slug}-heading`}
              className="product-feature__name serif"
            >
              {product.name}
            </h2>
            <p className="product-feature__meta">
              {product.type} &nbsp;·&nbsp; {product.size}
            </p>

            {product.tagline && !product.tagline.startsWith('[') && (
              <p className="product-feature__tagline">
                {product.tagline}
              </p>
            )}

            <div className="product-feature__price-row">
              <span className="product-feature__price">
                {formatPrice(product)}
              </span>
            </div>

            <Link
              to={`/product/${product.slug}`}
              className="product-feature__cta"
              aria-label={`View ${product.name} — ${product.type}`}
            >
              <span>View {product.name}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
