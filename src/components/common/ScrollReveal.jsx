import React, { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children and adds .is-visible when in viewport.
 * Applies the CSS 'reveal' class defined in animations.css.
 */
export default function ScrollReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
