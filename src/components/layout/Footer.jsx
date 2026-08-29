import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__top">

          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link" aria-label="HEVON SCENTS — Home">
              <Logo
                variant="white"
                height={96}
                className="footer__logo-img"
              />
            </Link>
            <p className="footer__tagline">Luxury, Bottled.</p>
          </div>

          {/* Explore */}
          <div className="footer__col">
            <p className="footer__col-title eyebrow">Explore</p>
            <nav aria-label="Footer explore navigation">
              <ul className="footer__list">
                <li><Link to="/shop"    className="footer__link">Shop</Link></li>
                <li><Link to="/about"   className="footer__link">About</Link></li>
                <li><Link to="/contact" className="footer__link">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Support */}
          <div className="footer__col">
            <p className="footer__col-title eyebrow">Support</p>
            <nav aria-label="Footer support navigation">
              <ul className="footer__list">
                {/* Placeholder links — replace with real pages when available */}
                <li><a href="#faq"      className="footer__link">FAQ</a></li>
                <li><a href="#shipping" className="footer__link">Shipping</a></li>
                <li><a href="#returns"  className="footer__link">Returns</a></li>
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div className="footer__col">
            <p className="footer__col-title eyebrow">Follow</p>
            <nav aria-label="Social media links">
              <ul className="footer__list">
                {/* Placeholder links — replace with real URLs before launch */}
                <li><a href="#instagram" className="footer__link" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="#facebook"  className="footer__link" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="#tiktok"    className="footer__link" rel="noopener noreferrer">TikTok</a></li>
              </ul>
            </nav>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {year} HEVON SCENTS. All rights reserved.
          </p>
          <p className="footer__legal">
            {/* Placeholder links */}
            <a href="#privacy" className="footer__link">Privacy</a>
            <a href="#terms"   className="footer__link">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
