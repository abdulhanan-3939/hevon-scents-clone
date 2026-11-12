# HEVON SCENTS — HTML/CSS/JS Website

A luxury perfume e-commerce website converted from React/Vite to plain HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript.

---

## How to Run

1. Open the `d:\hevon-scents\` folder in **VS Code**
2. Right-click `index.html` and select **"Open with Live Server"**
3. The website will open at `http://127.0.0.1:5500/`

> Make sure the **Live Server** extension is installed in VS Code.

---

## Project Structure

```
hevon-scents/
│
├── index.html              ← Home page
├── shop.html               ← Shop / product listing page
├── about.html              ← About page
├── contact.html            ← Contact form page
├── cart.html               ← Shopping cart page
├── product-details.html    ← Product detail page (uses ?product=rage or ?product=sera)
├── 404.html                ← Page not found
│
├── css/
│   ├── variables.css       ← CSS custom properties (colors, fonts, spacing)
│   ├── animations.css      ← Keyframe animations and reveal utilities
│   └── style.css           ← Master stylesheet (all component styles)
│
├── js/
│   ├── products.js         ← Product data (RAGE + SERA) and helper functions
│   ├── cart.js             ← Cart logic: add, remove, update, localStorage
│   ├── main.js             ← Site-wide JS: navbar, mobile menu, search, scroll reveal
│   ├── product-details.js  ← Builds the product details page dynamically
│   └── cart-page.js        ← Renders the cart page from localStorage
│
├── images/
│   ├── products/           ← Product bottle photos
│   ├── lifestyle/          ← Lifestyle editorial images
│   ├── brand/              ← Brand campaign images
│   └── logo/               ← HEVON SCENTS logo files
│
└── src/                    ← Original React project (DO NOT DELETE)
```

---

## Page URLs

| Page            | URL                                          |
|-----------------|----------------------------------------------|
| Home            | `index.html`                                 |
| Shop            | `shop.html`                                  |
| About           | `about.html`                                 |
| Contact         | `contact.html`                               |
| Cart            | `cart.html`                                  |
| RAGE details    | `product-details.html?product=rage`          |
| SERA details    | `product-details.html?product=sera`          |
| 404             | `404.html`                                   |

---

## Technology Stack

| Technology     | Purpose                                      |
|----------------|----------------------------------------------|
| HTML5          | Page structure and content                   |
| CSS3           | Custom styling (original design preserved)   |
| Bootstrap 5    | Responsive grid and layout utilities only    |
| Vanilla JS     | Interactivity, cart, search, animations      |
| localStorage   | Cart data persistence across page refreshes  |

---

## JavaScript Features

### `js/products.js`
- `getProducts()` — returns all products
- `getProductBySlug(slug)` — finds product by id/slug
- `getFeaturedProducts()` — returns available products
- `formatPrice(product)` — returns "Rs. 4,999"
- `searchProducts(query)` — filters products by keyword

### `js/cart.js`
- `addToCart(productId, quantity)` — adds to cart, saves to localStorage
- `removeFromCart(productId)` — removes item, saves to localStorage
- `updateCartQuantity(productId, quantity)` — updates qty, saves
- `clearCart()` — empties the cart
- `getCartItemCount()` — total quantity of all items
- `getCartSubtotal()` — total price
- `updateCartBadge()` — updates cart count in navbar

### `js/main.js`
- Navbar scroll behavior (white → black at 60px scroll)
- Mobile menu open/close with burger button
- Search overlay open/close with live results
- Scroll reveal animations (IntersectionObserver)
- Footer year auto-update

### `js/product-details.js`
- Reads `?product=` from URL
- Builds entire product page via innerHTML
- Gallery image switching (thumbnail clicks)
- Quantity selector (+/- buttons)
- Add to cart with feedback

### `js/cart-page.js`
- Renders cart items from localStorage
- Quantity increment/decrement
- Remove item
- Order summary calculation

---

## Cart Data

Cart data is saved in browser localStorage under the key: `hevon_cart`

Format: `[{ id, slug, name, type, genderLabel, size, price, image, quantity }]`

The cart persists when the browser is refreshed. It clears only when the user's browser storage is cleared.

---

## Products

| Product | Gender     | Price    | Theme |
|---------|------------|----------|-------|
| RAGE    | Pour Homme | Rs. 4,999 | Dark  |
| SERA    | Pour Femme | Rs. 4,999 | Light |

---

## Important Notes

- The original React project is in `src/` — **do not delete it**
- All image paths are relative (no leading `/`)
- Logo files have double extension: `hevon-logo-white.png.png` (this is intentional)
- Bootstrap is used **only** for grid/utilities — custom CSS always takes priority
- JavaScript uses `var` and named functions for university viva clarity

---

## Common Modifications

**Change product price:**  
Edit `js/products.js` → find `price: 4999` → change value

**Change navbar color:**  
Edit `css/variables.css` → `--black`, `--white` variables

**Change hero text:**  
Edit `index.html` → find `hero__headline` section

**Add a product:**  
Edit `js/products.js` → add new object to the `products` array

**Change contact email:**  
Edit `contact.html` → find `hello@hevonscents.com`

---

*HEVON SCENTS — Luxury, Bottled.*
