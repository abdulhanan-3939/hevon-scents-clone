import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <main className="page-main not-found" aria-labelledby="not-found-heading">
      <div className="container not-found__inner">
        <p className="eyebrow not-found__eyebrow">404</p>
        <h1 id="not-found-heading" className="not-found__title serif">
          Page not found
        </h1>
        <p className="not-found__sub">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found__actions">
          <Link to="/"     className="btn btn--primary btn--md"><span className="btn__inner">Go Home</span></Link>
          <Link to="/shop" className="btn btn--outline btn--md"><span className="btn__inner">Shop</span></Link>
        </div>
      </div>
    </main>
  );
}
