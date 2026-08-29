import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';
import FragranceNotes from './FragranceNotes';
import QuantitySelector from './QuantitySelector';
import Button from '../common/Button';
import './ProductInfo.css';

export default function ProductInfo({ product }) {
  const [qty, setQty]           = useState(1);
  const [added, setAdded]       = useState(false);
  const { addItem }             = useCart();

  const handleAddToCart = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-info">

      {/* Eyebrow */}
      <p className="eyebrow product-info__eyebrow">{product.genderLabel}</p>

      {/* Name */}
      <h1 className="product-info__name serif">{product.name}</h1>

      {/* Meta */}
      <p className="product-info__meta">
        {product.type} &nbsp;·&nbsp; {product.size}
        {product.fragranceFamily && !product.fragranceFamily.startsWith('[') && (
          <> &nbsp;·&nbsp; {product.fragranceFamily}</>
        )}
      </p>

      {/* Price */}
      <p className="product-info__price">
        {formatPrice(product)}
      </p>

      <hr className="divider product-info__divider" />

      {/* Description + Notes (description now renders inside FragranceNotes, below the heading) */}
      <FragranceNotes notes={product.notes} description={product.description} />

      <hr className="divider product-info__divider" />

      {/* Quantity + Add to Cart */}
      {product.available ? (
        <div className="product-info__purchase">
          <QuantitySelector value={qty} onChange={setQty} min={1} max={10} />
          <div className="product-info__actions">
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              className="product-info__add-btn"
              aria-label={`Add ${product.name} to bag`}
            >
              {added ? 'Added to Bag ✓' : 'Add to Bag'}
            </Button>
          </div>
        </div>
      ) : (
        <p className="product-info__unavailable">
          Currently unavailable
        </p>
      )}

      {/* Ingredients */}
      {product.ingredients && product.ingredients.length > 0 && (
        <details className="product-info__details">
          <summary className="product-info__details-summary eyebrow">Ingredients</summary>
          <p className="product-info__ingredients-text">
            {product.ingredients.join(', ')}
          </p>
        </details>
      )}

      {/* Shipping info placeholder */}
      <details className="product-info__details">
        <summary className="product-info__details-summary eyebrow">Shipping & Returns</summary>
        <div className="product-info__details-body">
          {/*
            [SHIPPING & RETURNS POLICY — ADD VERIFIED INFORMATION]
            Replace this placeholder with the real policy before launch.
          */}
          <p>Shipping and returns information will be added before launch.</p>
        </div>
      </details>

    </div>
  );
}
