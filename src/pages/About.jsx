import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import './About.css';

export default function About() {
  return (
    <main className="page-main about-page">

      {/* Hero — architectural storefront image */}
      <div className="about-hero">
        <div className="about-hero__img-wrap">
          <img
            src="/images/brand/hevon_scents_architectural_brand.png"
            alt="HEVON SCENTS storefront — Luxury, Bottled."
            className="about-hero__img"
            loading="eager"
            fetchpriority="high"
          />
          <div className="about-hero__overlay" aria-hidden="true" />
        </div>
        <div className="about-hero__content container">
          <p className="eyebrow about-hero__eyebrow">About</p>
          <h1 className="about-hero__title serif">
            The House of<br />
            <em>HEVON SCENTS</em>
          </h1>
        </div>
      </div>

      {/* Brand philosophy */}
      <section
        className="about-philosophy section container"
        aria-labelledby="about-philosophy-heading"
      >
        <div className="about-philosophy__layout">
          <ScrollReveal className="about-philosophy__lead">
            <p className="eyebrow">Philosophy</p>
            <h2 id="about-philosophy-heading" className="about-philosophy__title serif">
              Luxury doesn't have<br />
              to be inaccessible.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1} className="about-philosophy__body">
            <p>
              At HEVON SCENTS, we started with one question: why should a truly
              exceptional fragrance be out of reach for most people? We believe
              luxury is not defined by price — it's defined by craft, character,
              and the experience of wearing something that feels exactly right.
            </p>
            <p>
              Every decision we make — from the formula to the bottle to the way
              our fragrances are presented — is guided by this principle. We don't
              believe in excess. We believe in presence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="about-principles" aria-labelledby="about-principles-heading">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">Our principles</p>
            <h2 id="about-principles-heading" className="about-principles__title serif">
              Three ideas.<br /><em>One brand.</em>
            </h2>
          </ScrollReveal>
          <div className="about-principles__grid">
            {[
              {
                num: '01',
                name: 'Craft',
                desc: 'Every fragrance is built with intention. The formula, the bottle, the experience — nothing is accidental.',
              },
              {
                num: '02',
                name: 'Simplicity',
                desc: 'Restraint is the highest form of design. We remove everything that does not belong.',
              },
              {
                num: '03',
                name: 'Accessibility',
                desc: 'Premium fragrance should be within reach. We believe in quality without the unnecessary markup.',
              },
            ].map((p, i) => (
              <ScrollReveal key={p.num} delay={i + 1} className="principle">
                <span className="principle__num eyebrow">{p.num}</span>
                <h3 className="principle__name serif">{p.name}</h3>
                <p className="principle__desc">{p.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign image section */}
      <section
        className="about-campaign"
        aria-labelledby="about-campaign-heading"
      >
        <div className="about-campaign__img-wrap">
          <img
            src="/images/brand/hevon_scents_brand_campaign.png"
            alt="HEVON SCENTS — Exceptional fragrance, without the exceptional price."
            className="about-campaign__img"
            loading="lazy"
          />
        </div>
        <div className="about-campaign__overlay" aria-hidden="true" />
        <div className="container about-campaign__content">
          <ScrollReveal>
            <p className="eyebrow about-campaign__eyebrow">HEVON SCENTS</p>
            <h2 id="about-campaign-heading" className="about-campaign__heading serif">
              Exceptional fragrance,<br />
              without the<br />
              <em>exceptional price.</em>
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Product CTAs */}
      <section
        className="about-products section"
        aria-labelledby="about-products-heading"
      >
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow">The Collection</p>
            <h2 id="about-products-heading" className="about-products__title serif">
              Two expressions
            </h2>
          </ScrollReveal>

          <div className="about-products__grid">
            {/* RAGE */}
            <ScrollReveal delay={1} className="about-product-card about-product-card--dark">
              <div className="about-product-card__img-wrap">
                <img
                  src="/images/products/rage/product.png"
                  alt="RAGE Eau de Parfum by HEVON SCENTS"
                  className="about-product-card__img"
                  loading="lazy"
                />
              </div>
              <div className="about-product-card__info">
                <p className="eyebrow">Pour Homme</p>
                <h3 className="about-product-card__name serif">RAGE</h3>
                <p className="about-product-card__meta">Eau de Parfum · 50 ML</p>
                <Link to="/product/rage" className="about-product-card__link">
                  Explore RAGE
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* SERA */}
            <ScrollReveal delay={2} className="about-product-card about-product-card--light">
              <div className="about-product-card__img-wrap">
                <img
                  src="/images/products/sera/product.png"
                  alt="SERA Eau de Parfum by HEVON SCENTS"
                  className="about-product-card__img"
                  loading="lazy"
                />
              </div>
              <div className="about-product-card__info">
                <p className="eyebrow">Pour Femme</p>
                <h3 className="about-product-card__name serif">SERA</h3>
                <p className="about-product-card__meta">Eau de Parfum · 50 ML</p>
                <Link to="/product/sera" className="about-product-card__link">
                  Explore SERA
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </main>
  );
}
