import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import './BrandStatement.css';

export default function BrandStatement() {
  return (
    <section className="brand-statement section--sm" aria-labelledby="brand-statement-heading">
      <div className="container">
        <ScrollReveal>
          <p className="eyebrow brand-statement__eyebrow">HEVON SCENTS</p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2 id="brand-statement-heading" className="brand-statement__text serif">
            Fragrance with presence,<br />
            <em>designed without excess.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="brand-statement__body">
            {/*
              [BRAND PHILOSOPHY — ADD VERIFIED COPY]
              Replace this paragraph with the real brand statement before launch.
              The paragraph below is placeholder copy describing the brand intent.
            */}
            At HEVON SCENTS, we believe that luxury should be accessible.
            Every bottle we create is crafted to deliver an exceptional fragrance
            experience — without the exceptional price tag that usually comes with it.
            Two signatures. One house. Infinite impressions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
