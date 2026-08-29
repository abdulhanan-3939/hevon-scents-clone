import React from 'react';
import './QuantitySelector.css';

/**
 * QuantitySelector — decrement / value / increment.
 */
export default function QuantitySelector({ value, onChange, min = 1, max = 99 }) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <div className="qty-selector" role="group" aria-label="Quantity">
      <button
        className="qty-selector__btn"
        onClick={decrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="qty-selector__value" aria-live="polite" aria-atomic="true">
        {value}
      </span>
      <button
        className="qty-selector__btn"
        onClick={increment}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
