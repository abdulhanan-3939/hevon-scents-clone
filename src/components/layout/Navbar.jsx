import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import SearchOverlay from '../home/SearchOverlay';
import Logo from '../common/Logo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount }               = useCart();
  const location                    = useLocation();
  const prevCount                   = useRef(itemCount);
  const [cartBounce, setCartBounce] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Cart bounce on item add
  useEffect(() => {
    if (itemCount > prevCount.current) {
      setCartBounce(true);
      const t = setTimeout(() => setCartBounce(false), 600);
      return () => clearTimeout(t);
    }
    prevCount.current = itemCount;
  }, [itemCount]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Escape key closes menu / search
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
        <div className="navbar__inner container">
          {/* Logo — white on dark hero, black when scrolled */}
          <Link to="/" className="navbar__logo" aria-label="HEVON SCENTS — Home">
            <Logo
              variant={scrolled ? 'black' : 'white'}
              height={88}
              className="navbar__logo-img"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="navbar__nav" aria-label="Primary navigation">
            <NavLink to="/shop"    className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>Shop</NavLink>
            <NavLink to="/about"   className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>Contact</NavLink>
          </nav>

          {/* Actions */}
          <div className="navbar__actions">
            <button
              className="navbar__icon-btn"
              aria-label="Search fragrances"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon />
            </button>

            <Link
              to="/cart"
              className={`navbar__icon-btn navbar__cart ${cartBounce ? 'navbar__cart--bounce' : ''}`}
              aria-label={`Shopping bag, ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
            >
              <BagIcon />
              {itemCount > 0 && (
                <span className="navbar__cart-count" aria-hidden="true">{itemCount}</span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className={`navbar__burger ${menuOpen ? 'is-open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              <span className="navbar__burger-bar" />
              <span className="navbar__burger-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          <NavLink to="/shop"    className="mobile-menu__link" onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/about"   className="mobile-menu__link" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="mobile-menu__link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/cart"    className="mobile-menu__link" onClick={() => setMenuOpen(false)}>
            Bag {itemCount > 0 && <span className="mobile-menu__count">{itemCount}</span>}
          </NavLink>
          <button className="mobile-menu__search-btn" onClick={() => { setMenuOpen(false); setSearchOpen(true); }}>
            Search
          </button>
        </nav>
      </div>

      {/* Overlay backdrop for mobile menu */}
      {menuOpen && (
        <div
          className="mobile-menu__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Search overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
