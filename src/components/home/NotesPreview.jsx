import React, { useEffect, useRef, useState } from 'react';
import { getProducts } from '../../data/products';
import ScrollReveal from '../common/ScrollReveal';
import './NotesPreview.css';

/**
 * NotesPreview — Fragrance notes accordion section.
 * Shows TOP / HEART / BASE for both products.
 * Gracefully hides when notes are empty (not yet provided).
 */
export default function NotesPreview() {
  const products = getProducts();
  const [active, setActive] = useState(null);
  const lineRef = useRef(null);
  const [lineVisible, setLineVisible] = useState(false);

  // Animate the accord line
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLineVisible(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Check if any product has notes
  const anyNotes = products.some(
    (p) =>
      p.notes.top.length > 0 ||
      p.notes.heart.length > 0 ||
      p.notes.base.length > 0
  );

  return (
    <section className="notes-preview section" aria-labelledby="notes-heading">
      <div className="container">

        <ScrollReveal>
          <p className="eyebrow">Fragrance Notes</p>
          <h2 id="notes-heading" className="notes-preview__title serif">
            The architecture of scent
          </h2>
        </ScrollReveal>

        {/* Accord line */}
        <div className="accord-wrap" ref={lineRef}>
          <div className={`accord-line ${lineVisible ? 'accord-line--visible' : ''}`} aria-hidden="true" />
          <div className="accord-labels">
            <span className="eyebrow">Top</span>
            <span className="eyebrow">Heart</span>
            <span className="eyebrow">Base</span>
          </div>
        </div>

        {anyNotes ? (
          <div className="notes-grid">
            {products.map((product) => (
              <NotesCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <ScrollReveal delay={1}>
            <p className="notes-preview__placeholder">
              {/* Placeholder — fragrance notes will appear here once verified data is available */}
              Fragrance notes for RAGE and SERA will be published once the
              verified ingredient information is confirmed.
            </p>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}

function NotesCard({ product }) {
  const hasNotes =
    product.notes.top.length > 0 ||
    product.notes.heart.length > 0 ||
    product.notes.base.length > 0;

  return (
    <div className={`notes-card notes-card--${product.theme}`}>
      <div className="notes-card__header">
        <p className="eyebrow notes-card__label">{product.genderLabel}</p>
        <h3 className="notes-card__name serif">{product.name}</h3>
      </div>

      {hasNotes ? (
        <dl className="notes-list">
          <NoteRow label="Top"   notes={product.notes.top} />
          <NoteRow label="Heart" notes={product.notes.heart} />
          <NoteRow label="Base"  notes={product.notes.base} />
        </dl>
      ) : (
        <p className="notes-card__empty">
          {/* [NOTES — ADD VERIFIED DATA] */}
          Notes to be confirmed.
        </p>
      )}
    </div>
  );
}

function NoteRow({ label, notes }) {
  if (!notes || notes.length === 0) return null;
  return (
    <div className="note-row">
      <dt className="note-row__label eyebrow">{label}</dt>
      <dd className="note-row__values">
        {notes.join(' · ')}
      </dd>
    </div>
  );
}
