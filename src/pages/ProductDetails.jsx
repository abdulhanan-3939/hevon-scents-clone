import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getProducts } from '../data/products';
import ProductGallery from '../components/products/ProductGallery';
import ProductInfo from '../components/products/ProductInfo';
import ProductCard from '../components/products/ProductCard';
import ScrollReveal from '../components/common/ScrollReveal';
import './ProductDetails.css';

export default function ProductDetails() {
  const { slug }    = useParams();
  const product     = getProductBySlug(slug);
  const allProducts = getProducts();
  const related     = allProducts.filter((p) => p.slug !== slug);

  if (!product) {
    return (
      <main className="page-main not-found-inline">
        <div className="container">
          <p className="eyebrow">Not Found</p>
          <h1 className="not-found-inline__title serif">Fragrance not found</h1>
          <p className="not-found-inline__sub">
            The fragrance you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/shop" className="btn btn--primary btn--md">
            <span className="btn__inner">Back to Shop</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-main product-details-page">

      {/* Breadcrumb */}
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/"     className="breadcrumb__link">Home</Link>
          <span className="breadcrumb__sep" aria-hidden="true"> / </span>
          <Link to="/shop" className="breadcrumb__link">Shop</Link>
          <span className="breadcrumb__sep" aria-hidden="true"> / </span>
          <span className="breadcrumb__current" aria-current="page">{product.name}</span>
        </nav>
      </div>

      {/* Product layout — gallery + info */}
      <div className="product-layout container">
        <div className="product-layout__gallery">
          <ProductGallery product={product} />
        </div>
        <div className="product-layout__info">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Lifestyle editorial strip — two lifestyle images */}
      <LifestyleStrip product={product} />

      {/* Related */}
      {related.length > 0 && (
        <section
          className={`related-section ${product.theme === 'dark' ? '' : 'section--dark'}`}
          aria-labelledby="related-heading"
        >
          <div className="container">
            <ScrollReveal>
              <p className="eyebrow related-eyebrow">Also from HEVON SCENTS</p>
              <h2 id="related-heading" className="related-section__title serif">
                Explore the collection
              </h2>
            </ScrollReveal>
            <div className="related-grid">
              {related.map((p, idx) => (
                <ScrollReveal key={p.id} delay={idx + 1}>
                  <ProductCard product={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

/** Editorial lifestyle strip below the product info */
function LifestyleStrip({ product }) {
  const img1 = product.images.lifestyle1;
  const img2 = product.images.lifestyle2;
  if (!img1 && !img2) return null;

  const isDark = product.theme === 'dark';

  return (
    <section
      className={`lifestyle-strip lifestyle-strip--${product.theme}`}
      aria-label={`${product.name} lifestyle photography`}
    >
      {/* Full-bleed first image */}
      {img1 && (
        <ScrollReveal className="lifestyle-strip__panel lifestyle-strip__panel--primary">
          <img
            src={img1}
            alt={`${product.name} lifestyle — HEVON SCENTS`}
            className="lifestyle-strip__img"
            loading="lazy"
          />
          <div className="lifestyle-strip__caption">
            <p className="eyebrow lifestyle-strip__label">{product.name}</p>
            <p className="lifestyle-strip__sub serif">
              {product.type} · {product.size}
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* Second image — half-width with text */}
      {img2 && (
        <div className="lifestyle-strip__secondary-row">
          <ScrollReveal className="lifestyle-strip__panel lifestyle-strip__panel--secondary" delay={1}>
            <img
              src={img2}
              alt={`${product.name} accessories lifestyle — HEVON SCENTS`}
              className="lifestyle-strip__img"
              loading="lazy"
            />
          </ScrollReveal>
          <ScrollReveal className="lifestyle-strip__text-panel" delay={2}>
            <p className="eyebrow lifestyle-strip__text-eyebrow">{product.genderLabel}</p>
            <h3 className="lifestyle-strip__text-name serif">{product.name}</h3>
            <p className="lifestyle-strip__text-meta">{product.type} · {product.size}</p>
            <Link
              to="/shop"
              className="lifestyle-strip__cta"
            >
              Shop the Collection
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      )}
    </section>
  );
}
