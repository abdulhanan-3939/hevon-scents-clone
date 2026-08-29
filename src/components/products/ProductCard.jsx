import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../data/products';
import './ProductCard.css';

/**
 * ProductCard — editorial product card for Shop and related product grids.
 * Uses the confirmed product.png as the primary image.
 */
export default function ProductCard({ product }) {
  return (
    <article className={`product-card product-card--${product.theme}`}>
      <Link
        to={`/product/${product.slug}`}
        className="product-card__img-link"
        aria-label={`View ${product.name} — ${product.type}`}
        tabIndex={-1}
      >
        <div className="product-card__img-wrap">
          <img
            src={product.images.product}
            alt={`${product.name} ${product.type} ${product.size} by HEVON SCENTS`}
            className="product-card__img"
            loading="lazy"
          />
          {!product.available && (
            <span className="product-card__badge" aria-label="Sold out">
              Sold Out
            </span>
          )}
        </div>
      </Link>

      <div className="product-card__info">
        <div className="product-card__meta-group">
          <p className="eyebrow product-card__label">{product.genderLabel}</p>
          <h3 className="product-card__name serif">
            <Link to={`/product/${product.slug}`} className="product-card__name-link">
              {product.name}
            </Link>
          </h3>
          <p className="product-card__meta">{product.type} · {product.size}</p>
        </div>
        <div className="product-card__footer">
          <p className="product-card__price">{formatPrice(product)}</p>
          <Link
            to={`/product/${product.slug}`}
            className="product-card__cta"
          >
            View Fragrance
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
