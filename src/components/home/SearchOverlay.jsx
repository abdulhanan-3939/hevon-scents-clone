import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { searchProducts, formatPrice } from '../../data/products';
import './SearchOverlay.css';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery]     = useState('');
  const [results, setResults] = useState([]);
  const inputRef              = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Live search
  useEffect(() => {
    if (query.trim().length > 0) {
      setResults(searchProducts(query));
    } else {
      setResults([]);
    }
  }, [query]);

  // Escape to close
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Search fragrances"
    >
      <div className="search-overlay__backdrop" onClick={onClose} aria-hidden="true" />

      <div className="search-overlay__panel">
        <div className="search-overlay__header">
          <div className="search-overlay__input-wrap">
            <label htmlFor="search-input" className="sr-only">Search fragrances</label>
            <input
              id="search-input"
              ref={inputRef}
              type="search"
              className="search-overlay__input"
              placeholder="Search fragrances…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button className="search-overlay__close" onClick={onClose} aria-label="Close search">
            <CloseIcon />
          </button>
        </div>

        <div className="search-overlay__body">
          {query.trim() === '' && (
            <p className="search-overlay__hint eyebrow">
              Start typing to search
            </p>
          )}

          {query.trim() !== '' && results.length === 0 && (
            <div className="search-overlay__empty">
              <p className="search-overlay__empty-title serif">No fragrance found</p>
              <p className="search-overlay__empty-sub">Try searching for RAGE or SERA</p>
            </div>
          )}

          {results.length > 0 && (
            <ul className="search-results" role="list">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/product/${product.slug}`}
                    className="search-result"
                    onClick={onClose}
                  >
                    <div className="search-result__img-wrap">
                      <img
                        src={product.images.product}
                        alt={`${product.name} ${product.type} by HEVON SCENTS`}
                        className="search-result__img"
                        onError={(e) => { e.target.style.visibility = 'hidden'; }}
                      />
                    </div>
                    <div className="search-result__info">
                      <p className="search-result__name serif">{product.name}</p>
                      <p className="search-result__meta eyebrow">{product.type} · {product.size}</p>
                      <p className="search-result__price">{formatPrice(product)}</p>
                    </div>
                    <ArrowIcon />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
