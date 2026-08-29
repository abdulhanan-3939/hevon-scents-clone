import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

// ── Actions ──────────────────────────────────────────────
const ADD_ITEM     = 'ADD_ITEM';
const REMOVE_ITEM  = 'REMOVE_ITEM';
const UPDATE_QTY   = 'UPDATE_QTY';
const CLEAR_CART   = 'CLEAR_CART';

// ── Reducer ──────────────────────────────────────────────
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + (action.payload.quantity || 1) }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: action.payload.quantity || 1 },
        ],
      };
    }

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case UPDATE_QTY: {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    }

    case CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
}

// ── Initial state ─────────────────────────────────────────
function getInitialState() {
  try {
    const stored = localStorage.getItem('hevon_cart');
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return { items: [] };
}

// ── Provider ──────────────────────────────────────────────
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hevon_cart', JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const addItem = (product, quantity = 1) =>
    dispatch({ type: ADD_ITEM, payload: { ...product, quantity } });

  const removeItem = (id) =>
    dispatch({ type: REMOVE_ITEM, payload: id });

  const updateQuantity = (id, quantity) =>
    dispatch({ type: UPDATE_QTY, payload: { id, quantity } });

  const clearCart = () => dispatch({ type: CLEAR_CART });

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);

  const subtotal = state.items.reduce((sum, i) => {
    if (i.price == null) return sum;
    return sum + i.price * i.quantity;
  }, 0);

  const hasNullPrices = state.items.some((i) => i.price == null);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        itemCount,
        subtotal,
        hasNullPrices,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
