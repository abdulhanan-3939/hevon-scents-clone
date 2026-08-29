import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import BrandStatement from '../components/home/BrandStatement';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandFeature from '../components/home/BrandFeature';
import './Home.css';

export default function Home() {
  return (
    <main className="page-main">
      {/* 1. Hero — both bottles on dark background */}
      <Hero />

      {/* 2. Brand statement — brief positioning copy */}
      <BrandStatement />

      {/* 3. RAGE feature + SERA feature — full-width editorial */}
      <FeaturedProducts />

      {/* 4. Brand editorial — architectural image + philosophy */}
      <BrandFeature />

      {/* 5. Final CTA */}
      <HomeCTA />
    </main>
  );
}

function HomeCTA() {
  return (
    <section className="home-cta section--dark" aria-labelledby="home-cta-heading">
      <div className="container home-cta__inner">
        <div className="home-cta__content">
          <p className="eyebrow home-cta__eyebrow">The Collection</p>
          <h2 id="home-cta-heading" className="home-cta__title serif">
            One brand.<br />
            <em>Two signatures.</em>
          </h2>
          <div className="home-cta__actions">
            <Link to="/shop" className="btn btn--ghost btn--lg">
              <span className="btn__inner">Shop the Collection</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
