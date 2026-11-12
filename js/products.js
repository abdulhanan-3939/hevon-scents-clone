/* ============================================================
   HEVON SCENTS — products.js
   All product data for the website.
   This is a plain JavaScript version of src/data/products.js.
   No imports or exports — just a global variable array.
   ============================================================ */

// ===== ALL PRODUCTS DATA =====
// Simple array of product objects — easy to read and modify
var products = [
  {
    id: "rage",
    slug: "rage",
    name: "RAGE",
    type: "Eau de Parfum",
    genderLabel: "Pour Homme",
    size: "50 ML",
    price: 4999,
    currency: "PKR",
    tagline: "Power. Depth. Presence.",
    description: "A bold masculine fragrance opening with citrus and crisp fruits, evolving into a dark, woody and musky finish.",
    fragranceFamily: null,

    // Fragrance notes — top, heart, base
    notes: {
      top:   ["Lemon", "Pink Pepper", "Apple", "Bergamot", "Black Currant"],
      heart: ["Pineapple", "Patchouli", "Moroccan Jasmine"],
      base:  ["Birch", "Musk", "Oakmoss", "Cedarwood", "Ambroxan"]
    },

    // Image paths — relative to the root HTML files (no leading slash)
    images: {
      product:    "images/products/rage/product.png",
      lifestyle1: "images/lifestyle/rage/rage_dark_rock_lifestyle.png",
      lifestyle2: "images/lifestyle/rage/rage_watch_accessories_lifestyle.png"
    },

    // Dark or light theme for styling
    theme: "dark",
    available: true
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
    tagline: "Grace. Refinement. Quiet elegance.",
    description: "A fresh, feminine fragrance blending juicy pear and delicate florals with a warm, sensual vanilla-wood finish.",
    fragranceFamily: null,

    // Fragrance notes — top, heart, base
    notes: {
      top:   ["Pear", "Pink Pepper", "Orange Blossom"],
      heart: ["Coffee", "Jasmine", "Bitter Almond", "Licorice"],
      base:  ["Vanilla", "Patchouli", "Cashmere Wood", "Cedar"]
    },

    // Image paths — relative to the root HTML files (no leading slash)
    images: {
      product:    "images/products/sera/product.png",
      lifestyle1: "images/lifestyle/sera/sera_white_lifestyle.png",
      lifestyle2: "images/lifestyle/sera/sera_dark_satin_lifestyle.png"
    },

    // Dark or light theme for styling
    theme: "light",
    available: true
  }
];


/* ============================================================
   HELPER FUNCTIONS
   Simple functions to get product data
   ============================================================ */

// Function to get all products
function getProducts() {
  return products;
}

// Function to find a single product by its slug (e.g. "rage" or "sera")
function getProductBySlug(slug) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].slug === slug) {
      return products[i];
    }
  }
  return null; // return null if not found
}

// Function to get only available products (for featured/shop sections)
function getFeaturedProducts() {
  var featured = [];
  for (var i = 0; i < products.length; i++) {
    if (products[i].available === true) {
      featured.push(products[i]);
    }
  }
  return featured;
}

// Function to format the price for display
// Returns something like "Rs. 4,999"
function formatPrice(product) {
  if (product.price === null) return "Price TBD";
  return "Rs. " + product.price.toLocaleString("en-PK");
}

// Function to search products by name, type, gender, or notes
function searchProducts(query) {
  // If no query, return all products
  if (!query || query.trim() === "") {
    return products;
  }

  var q = query.toLowerCase();
  var results = [];

  for (var i = 0; i < products.length; i++) {
    var p = products[i];

    // Build a list of all searchable fields for this product
    var fields = [
      p.name,
      p.type,
      p.genderLabel,
      p.tagline,
      p.fragranceFamily
    ];

    // Add all notes to the searchable fields
    var allNotes = [].concat(p.notes.top, p.notes.heart, p.notes.base);
    for (var j = 0; j < allNotes.length; j++) {
      fields.push(allNotes[j]);
    }

    // Check if any field contains the search query
    var found = false;
    for (var k = 0; k < fields.length; k++) {
      if (fields[k] && fields[k].toLowerCase().indexOf(q) !== -1) {
        found = true;
        break;
      }
    }

    if (found) {
      results.push(p);
    }
  }

  return results;
}

