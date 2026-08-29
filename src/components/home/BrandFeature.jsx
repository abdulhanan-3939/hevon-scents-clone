import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';
import './BrandFeature.css';

/**
 * BrandFeature — Editorial brand statement section using campaign photography.
 * Sits between the product features and the footer CTA on the homepage.
 */
export default function BrandFeature() {
  return (
    <section className="brand-feature" aria-labelledby="brand-feature-heading">
      {/* Brand campaign image — architectural storefront */}
      <div className="brand-feature__img-panel">
        <img
          src="/images/brand/hevon_scents_architectural_brand.png"
          alt="HEVON SCENTS — Luxury, Bottled."
          className="brand-feature__img"
          loading="lazy"
        />
        <div className="brand-feature__overlay" aria-hidden="true" />
      </div>

      {/* Text overlay */}
      <div className="brand-feature__content container">
        <ScrollReveal className="brand-feature__inner">
          <p className="eyebrow brand-feature__eyebrow">The House</p>
          <h2 id="brand-feature-heading" className="brand-feature__heading serif">
            Luxury comes from<br />
            restraint,<br />
            <em>not decoration.</em>
          </h2>
          <Link to="/about" className="brand-feature__link">
            About HEVON SCENTS
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: '0.5rem' }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
