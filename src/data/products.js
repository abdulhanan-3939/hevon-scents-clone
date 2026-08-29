/**
 * HEVON SCENTS — Product Data
 *
 * Single source of truth for all product information.
 * Replace placeholder values with verified brand data before launch.
 * Structure is designed to be replaced by API calls in a future backend integration.
 *
 * Image paths use the confirmed files from public/images/
 */

export const products = [
  {
    id: "rage",
    slug: "rage",
    name: "RAGE",
    type: "Eau de Parfum",
    genderLabel: "Pour Homme",
    size: "50 ML",

    price: 4999,
    currency: "PKR",

    // [TAGLINE — ADD VERIFIED COPY]
    tagline: "Power. Depth. Presence.",

    description: "A bold masculine fragrance opening with citrus and crisp fruits, evolving into a dark, woody and musky finish.",

    // [FRAGRANCE FAMILY — ADD VERIFIED DATA]
    fragranceFamily: null,

    notes: {
      top:   ["Lemon", "Pink Pepper", "Apple", "Bergamot", "Black Currant"],
      heart: ["Pineapple", "Patchouli", "Moroccan Jasmine"],
      base:  ["Birch", "Musk", "Oakmoss", "Cedarwood", "Ambroxan"],
    },

    // [INGREDIENTS — ADD VERIFIED DATA BEFORE LAUNCH]
    ingredients: [],

    images: {
      // Primary product photography — transparent PNG on white
      product:   "/images/products/rage/product.png",
      // Lifestyle editorial imagery
      lifestyle1: "/images/lifestyle/rage/rage_dark_rock_lifestyle.png",
      lifestyle2: "/images/lifestyle/rage/rage_watch_accessories_lifestyle.png",
    },

    // Visual theme for this product's sections
    theme: "dark",

    available: true,
  },

  {
    id: "sera",
    slug: "sera",
    name: "SERA",
    type: "Eau de Parfum",
    genderLabel: "Pour Femme",
    size: "50 ML",

    price: 4999,
    currency: "PKR",

    // [TAGLINE — ADD VERIFIED COPY]
    tagline: "Grace. Refinement. Quiet elegance.",

    description: "A fresh, feminine fragrance blending juicy pear and delicate florals with a warm, sensual vanilla-wood finish.",

    // [FRAGRANCE FAMILY — ADD VERIFIED DATA]
    fragranceFamily: null,

    notes: {
      top:   ["Pear", "Pink Pepper", "Orange Blossom"],
      heart: ["Coffee", "Jasmine", "Bitter Almond", "Licorice"],
      base:  ["Vanilla", "Patchouli", "Cashmere Wood", "Cedar"],
    },

    // [INGREDIENTS — ADD VERIFIED DATA BEFORE LAUNCH]
    ingredients: [],

    images: {
      // Primary product photography — transparent PNG on white
      product:   "/images/products/sera/product.png",
      // Lifestyle editorial imagery
      lifestyle1: "/images/lifestyle/sera/sera_white_lifestyle.png",
      lifestyle2: "/images/lifestyle/sera/sera_dark_satin_lifestyle.png",
    },

    // Visual theme for this product's sections
    theme: "light",

    available: true,
  },
];

/**
 * Returns all products.
 * Replace with: const res = await fetch('/api/products'); return res.json();
 */
export function getProducts() {
  return products;
}

/**
 * Returns a single product by slug.
 * Replace with: const res = await fetch(`/api/products/${slug}`); return res.json();
 */
export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

/**
 * Returns featured products for homepage display.
 * Replace with: const res = await fetch('/api/products?featured=true'); return res.json();
 */
export function getFeaturedProducts() {
  return products.filter((p) => p.available);
}

/**
 * Formats a price for display. Returns placeholder when price is null.
 */
export function formatPrice(product) {
  if (product.price === null) return "[PRICE — TBD]";
  return `Rs. ${product.price.toLocaleString("en-PK")}`;
}

/**
 * Searches products by name, type, gender label, fragrance family, and notes.
 */
export function searchProducts(query) {
  if (!query || query.trim() === "") return products;
  const q = query.toLowerCase();
  return products.filter((p) => {
    const fields = [
      p.name,
      p.type,
      p.genderLabel,
      p.fragranceFamily,
      p.tagline,
      ...(p.notes.top || []),
      ...(p.notes.heart || []),
      ...(p.notes.base || []),
    ]
      .filter(Boolean)
      .map((f) => f.toLowerCase());
    return fields.some((f) => f.includes(q));
  });
}
