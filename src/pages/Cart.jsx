import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/products/QuantitySelector';
import './Cart.css';

export default function Cart() {
  const { items, itemCount, subtotal, hasNullPrices, removeItem, updateQuantity } = useCart();

  if (itemCount === 0) {
    return (
      <main className="page-main cart-page">
        <div className="container cart-empty">
          <p className="eyebrow">Your Bag</p>
          <h1 className="cart-empty__title serif">Your bag is empty</h1>
          <p className="cart-empty__sub">
            Discover a fragrance made to stay with you.
          </p>
          <Link to="/shop" className="btn btn--primary btn--lg">
            <span className="btn__inner">Shop the Collection</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-main cart-page">
      <div className="container">

        <div className="cart-header">
          <p className="eyebrow">Your Bag</p>
          <h1 className="cart-header__title serif">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </h1>
        </div>

        <div className="cart-layout">
          {/* Items */}
          <section aria-label="Cart items">
            <ul className="cart-items">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeItem}
                  onQtyChange={updateQuantity}
                />
              ))}
            </ul>
            <div className="cart-continue">
              <Link to="/shop" className="cart-continue__link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Continue shopping
              </Link>
            </div>
          </section>

          {/* Summary */}
          <aside className="cart-summary" aria-label="Order summary">
            <h2 className="cart-summary__title eyebrow">Order Summary</h2>

            <dl className="cart-summary__rows">
              <div className="cart-summary__row">
                <dt>Subtotal</dt>
                <dd>
                  {hasNullPrices
                    ? 'Price to be confirmed'
                    : `Rs. ${subtotal.toLocaleString('en-PK')}`}
                </dd>
              </div>
              <div className="cart-summary__row">
                <dt>Shipping</dt>
                <dd>To be confirmed</dd>
              </div>
            </dl>

            <div className="cart-summary__divider" aria-hidden="true" />

            <div className="cart-summary__total">
              <span>Total</span>
              <span>
                {hasNullPrices
                  ? 'Price to be confirmed'
                  : `Rs. ${subtotal.toLocaleString('en-PK')}`}
              </span>
            </div>

            {/* Checkout — frontend only */}
            <div className="cart-checkout">
              <div className="cart-checkout__coming-soon">
                <p className="eyebrow">Coming Soon</p>
                <p className="cart-checkout__coming-text">
                  Online checkout is launching soon. Your bag is saved automatically.
                </p>
              </div>
              <button
                className="btn btn--primary btn--lg cart-checkout__btn"
                disabled
                aria-label="Checkout — coming soon"
              >
                <span className="btn__inner">Checkout — Coming Soon</span>
              </button>
            </div>

          </aside>
        </div>

      </div>
    </main>
  );
}

function CartItem({ item, onRemove, onQtyChange }) {
  const priceDisplay =
    item.price != null
      ? `Rs. ${(item.price * item.quantity).toLocaleString('en-PK')}`
      : '[Price TBD]';

  return (
    <li className="cart-item">
      <div className={`cart-item__img-wrap cart-item__img-wrap--${item.theme || 'light'}`}>
        <img
          src={item.images?.product}
          alt={`${item.name} Eau de Parfum by HEVON SCENTS`}
          className="cart-item__img"
        />
      </div>

      <div className="cart-item__info">
        <div className="cart-item__header">
          <div>
            <p className="eyebrow cart-item__label">{item.genderLabel}</p>
            <h3 className="cart-item__name serif">{item.name}</h3>
            <p className="cart-item__meta">{item.type} · {item.size}</p>
          </div>
          <button
            className="cart-item__remove"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.name} from bag`}
          >
            Remove
          </button>
        </div>

        <div className="cart-item__footer">
          <QuantitySelector
            value={item.quantity}
            onChange={(qty) => onQtyChange(item.id, qty)}
            min={1}
            max={10}
          />
          <p className="cart-item__price">{priceDisplay}</p>
        </div>
      </div>
    </li>
  );
}
