import React from 'react';
import './SectionHeading.css';

/**
 * SectionHeading — editorial label + heading + optional sub.
 * align: 'left' | 'center' | 'right'
 * theme: 'light' | 'dark'
 */
export default function SectionHeading({
  eyebrow,
  heading,
  sub,
  align = 'left',
  theme = 'light',
  className = '',
}) {
  return (
    <div className={`section-heading section-heading--${align} section-heading--${theme} ${className}`}>
      {eyebrow && <p className="eyebrow section-heading__eyebrow">{eyebrow}</p>}
      {heading && (
        <h2 className="section-heading__title serif">{heading}</h2>
      )}
      {sub && <p className="section-heading__sub">{sub}</p>}
    </div>
  );
}
