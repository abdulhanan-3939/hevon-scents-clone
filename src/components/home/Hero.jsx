import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

/**
 * Hero — Full-screen editorial opener.
 * Shows both RAGE + SERA bottles on a deep dark background.
 * Animate entrance: nav → eyebrow → headline → sub → bottles → CTAs.
 */
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animations after mount
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`hero ${mounted ? 'hero--mounted' : ''}`}
      aria-label="HEVON SCENTS — Hero"
    >
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__content container">
        {/* Text column */}
        <div className="hero__text">
          <p className="eyebrow hero__eyebrow">HEVON SCENTS</p>

          <h1 className="hero__headline serif">
            Luxury,<br />
            <em>Bottled.</em>
          </h1>

          <p className="hero__sub">
            Exceptional fragrance,<br />
            without the exceptional price.
          </p>

          <div className="hero__ctas">
            <Link
              to="/shop"
              className="btn btn--ghost btn--lg hero__cta-primary"
            >
              <span className="btn__inner">Explore the Collection</span>
            </Link>
            <Link
              to="/about"
              className="hero__cta-secondary"
            >
              Discover HEVON
            </Link>
          </div>
        </div>

        {/* Product images */}
        <div className="hero__bottles" aria-hidden="true">
          <div className="hero__bottle hero__bottle--rage">
            <img
              src="/images/products/rage/product.png"
              alt="RAGE Eau de Parfum by HEVON SCENTS"
              className="hero__bottle-img"
              loading="eager"
              fetchpriority="high"
            />
          </div>
          <div className="hero__bottle hero__bottle--sera">
            <img
              src="/images/products/sera/product.png"
              alt="SERA Eau de Parfum by HEVON SCENTS"
              className="hero__bottle-img"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
