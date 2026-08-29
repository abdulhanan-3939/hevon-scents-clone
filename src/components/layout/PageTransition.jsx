import React from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

/**
 * Wraps page content with a fade-in transition keyed to the route.
 */
export default function PageTransition({ children }) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
