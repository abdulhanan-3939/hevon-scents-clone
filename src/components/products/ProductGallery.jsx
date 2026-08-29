import React from 'react';
import './ProductGallery.css';

/**
 * ProductGallery — Shows the primary product image large.
 * Uses product.png — the one confirmed image per product.
 */
export default function ProductGallery({ product }) {
  return (
    <div className="product-gallery">
      <div className={`gallery__main gallery__main--${product.theme}`}>
        <img
          src={product.images.product}
          alt={`${product.name} ${product.type} ${product.size} — HEVON SCENTS`}
          className="gallery__main-img"
          loading="eager"
          fetchpriority="high"
        />
      </div>
    </div>
  );
}
