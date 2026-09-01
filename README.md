<div align="center">

# HEVON SCENTS

### _Luxury Fragrance. Refined Digital Experience._

<br/>

## 🌐 [hevonscents.vercel.app](https://hevonscents.vercel.app)

> **Live site — click to experience it**

<br/>

![Hevon Scents](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)

</div>

---

## ✦ About

**HEVON SCENTS** is a premium luxury fragrance brand from Pakistan. This is the official digital storefront — built with an editorial, high-fashion aesthetic that mirrors the identity of the brand.

The site features two debut fragrances:

| | SERA | RAGE |
|---|---|---|
| **Gender** | Pour Femme | Pour Homme |
| **Type** | Eau de Parfum | Eau de Parfum |
| **Size** | 50 ML | 50 ML |
| **Price** | Rs. 4,999 | Rs. 4,999 |
| **Profile** | Fresh · Floral · Vanilla-Wood | Bold · Citrus · Dark Woody Musk |

---

## ✦ Features

- 🖤 **Editorial dark-mode design** — magazine-level aesthetic inspired by luxury fragrance houses
- 🌸 **Full fragrance profiles** — olfactive description, top / heart / base notes for every scent
- 🛒 **Shopping cart** — add to bag, quantity control, persistent cart state via React Context
- 🔍 **Live search overlay** — search across product names, notes, and fragrance family
- 📱 **Fully responsive** — desktop, tablet, and mobile optimised
- ⚡ **Page transitions** — smooth animated routing between pages
- 🖼️ **Lifestyle editorial strips** — full-bleed imagery with sticky product gallery
- ✨ **Micro-animations** — scroll reveal, hover effects, and subtle motion throughout

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev) |
| Build Tool | [Vite 5](https://vitejs.dev) |
| Routing | [React Router v6](https://reactrouter.com) |
| Styling | Vanilla CSS with custom design tokens |
| State | React Context API |
| Deployment | [Vercel](https://vercel.com) |

---

## ✦ Project Structure

```
hevon-scents/
├── public/
│   └── images/
│       ├── products/       # Product photography (RAGE, SERA)
│       ├── lifestyle/      # Editorial lifestyle imagery
│       └── brand/          # Brand campaign assets
├── src/
│   ├── components/
│   │   ├── common/         # Button, Loading, ScrollReveal, Logo
│   │   ├── home/           # Hero, FeaturedProducts, BrandFeature, SearchOverlay
│   │   ├── layout/         # Navbar, Footer, PageTransition
│   │   └── products/       # ProductCard, ProductGallery, ProductInfo, FragranceNotes
│   ├── context/
│   │   └── CartContext.jsx # Global cart state
│   ├── data/
│   │   └── products.js     # Single source of truth for all product data
│   ├── pages/              # Home, Shop, ProductDetails, About, Contact, Cart
│   └── styles/             # Global CSS, design tokens, animations
├── index.html
├── vite.config.js
└── package.json
```

---

## ✦ Getting Started

```bash
# Clone the repository
git clone https://github.com/abdulhanan-3939/Hevon-Scents.git
cd Hevon-Scents

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## ✦ The Fragrances

### SERA — Pour Femme
> *A fresh, feminine fragrance blending juicy pear and delicate florals with a warm, sensual vanilla-wood finish.*

| Layer | Notes |
|---|---|
| **Top** | Pear · Pink Pepper · Orange Blossom |
| **Heart** | Coffee · Jasmine · Bitter Almond · Licorice |
| **Base** | Vanilla · Patchouli · Cashmere Wood · Cedar |

---

### RAGE — Pour Homme
> *A bold masculine fragrance opening with citrus and crisp fruits, evolving into a dark, woody and musky finish.*

| Layer | Notes |
|---|---|
| **Top** | Lemon · Pink Pepper · Apple · Bergamot · Black Currant |
| **Heart** | Pineapple · Patchouli · Moroccan Jasmine |
| **Base** | Birch · Musk · Oakmoss · Cedarwood · Ambroxan |

---

<div align="center">

**© 2026 HEVON SCENTS. All rights reserved.**

[Visit the Live Site →](https://hevonscents.vercel.app)

</div>
