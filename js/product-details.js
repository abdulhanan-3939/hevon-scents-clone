/* ============================================================
   HEVON SCENTS — product-details.js
   Reads the ?product=slug URL parameter and builds the entire
   product details page dynamically using JavaScript.
   Uses exact same CSS class names as the original React components.
   ============================================================ */

// Wait for the page HTML to load, then build the product page
document.addEventListener("DOMContentLoaded", function () {

  // Read the product slug from the URL
  // e.g. product-details.html?product=rage → slug = "rage"
  var urlParams = new URLSearchParams(window.location.search);
  var slug = urlParams.get("product");

  // Find the container where we'll put all the product content
  var container = document.getElementById("product-content");
  if (!container) return;

  // Look up the product data from products.js
  var product = getProductBySlug(slug);

  if (!product) {
    // Product not found — show an error message
    renderNotFound(container);
    return;
  }

  // Product found — build the full page
  renderProductPage(product, container);

  // Update the browser tab title
  document.title = product.name + " — HEVON SCENTS";

  // Run scroll reveal on the newly created elements
  setTimeout(function () {
    reinitScrollReveal();
    initAccordLines();
  }, 100);

  // Update the cart badge from localStorage
  updateCartBadge();
});


/* ============================================================
   RENDER PRODUCT PAGE
   Builds all the HTML for the product details page.
   The order matches the original React ProductDetails.jsx.
   ============================================================ */

function renderProductPage(product, container) {
  var html = "";

  // Build all sections of the page (same order as React version)
  html += renderBreadcrumb(product);           // Breadcrumb nav
  html += renderProductLayout(product);        // Gallery + Info columns
  html += renderLifestyleStrip(product);       // Editorial lifestyle images
  html += renderRelatedSection(product);       // "Also from HEVON SCENTS"

  container.innerHTML = html;

  // After the HTML is in the DOM, initialize interactive features
  initQuantitySelector();
  initAddToCart(product);
  initGallery(product);
}


/* ============================================================
   BREADCRUMB
   Navigation trail: Home > Shop > RAGE
   Classes match ProductDetails.jsx: .breadcrumb, .breadcrumb__link,
   .breadcrumb__sep, .breadcrumb__current
   ============================================================ */

function renderBreadcrumb(product) {
  return '<div class="container">' +
    '<nav class="breadcrumb" aria-label="Breadcrumb">' +
      '<a href="index.html" class="breadcrumb__link">Home</a>' +
      '<span class="breadcrumb__sep" aria-hidden="true"> / </span>' +
      '<a href="shop.html" class="breadcrumb__link">Shop</a>' +
      '<span class="breadcrumb__sep" aria-hidden="true"> / </span>' +
      '<span class="breadcrumb__current" aria-current="page">' + product.name + '</span>' +
    '</nav>' +
  '</div>';
}


/* ============================================================
   PRODUCT LAYOUT
   Two-column layout: gallery on left, product info on right.
   Classes match ProductDetails.jsx: .product-layout, .product-layout__gallery,
   .product-layout__info
   ============================================================ */

function renderProductLayout(product) {
  // .product-layout is a 2-column CSS grid
  // First child = gallery (no specific class needed — it fills the left column)
  // Second child = .product-layout__info (right column with padding)
  return '<div class="product-layout container">' +
    '<div>' +
      renderProductGallery(product) +
    '</div>' +
    '<div class="product-layout__info">' +
      renderProductInfo(product) +
    '</div>' +
  '</div>';
}


/* ============================================================
   PRODUCT GALLERY
   Shows the product image in a styled panel.
   Classes match ProductGallery.jsx: .product-gallery, .gallery__main,
   .gallery__main--dark/light, .gallery__main-img
   ============================================================ */

function renderProductGallery(product) {
  return '<div class="product-gallery">' +
    '<div class="gallery__main gallery__main--' + product.theme + '">' +
      '<img' +
        ' id="gallery-main-img"' +
        ' src="' + product.images.product + '"' +
        ' alt="' + product.name + ' ' + product.type + ' ' + product.size + ' — HEVON SCENTS"' +
        ' class="gallery__main-img"' +
        ' loading="eager"' +
      '/>' +
    '</div>' +

    // Thumbnail row for lifestyle images
    '<div class="gallery__thumbs">' +
      '<button class="gallery__thumb gallery__thumb--active" data-img="' + product.images.product + '" aria-label="Product image">' +
        '<img src="' + product.images.product + '" alt="' + product.name + ' product" />' +
      '</button>' +
      '<button class="gallery__thumb" data-img="' + product.images.lifestyle1 + '" aria-label="Lifestyle image 1">' +
        '<img src="' + product.images.lifestyle1 + '" alt="' + product.name + ' lifestyle" />' +
      '</button>' +
      '<button class="gallery__thumb" data-img="' + product.images.lifestyle2 + '" aria-label="Lifestyle image 2">' +
        '<img src="' + product.images.lifestyle2 + '" alt="' + product.name + ' lifestyle" />' +
      '</button>' +
    '</div>' +

  '</div>';
}


/* ============================================================
   PRODUCT INFO
   Right column: name, price, description, notes, qty, add to cart.
   Classes match ProductInfo.jsx: .product-info, .product-info__name,
   .product-info__price, .product-info__meta, etc.
   ============================================================ */

function renderProductInfo(product) {
  var priceStr = formatPrice(product);

  return '<div class="product-info">' +

    // Eyebrow — gender label
    '<p class="eyebrow product-info__eyebrow reveal">' + product.genderLabel + '</p>' +

    // Product name (large heading)
    '<h1 class="product-info__name serif reveal">' + product.name + '</h1>' +

    // Type · Size
    '<p class="product-info__meta reveal">' + product.type + ' &nbsp;·&nbsp; ' + product.size + '</p>' +

    // Price
    '<p class="product-info__price reveal">' + priceStr + '</p>' +

    // Divider line
    '<hr class="divider product-info__divider" />' +

    // Fragrance notes (matches FragranceNotes.jsx)
    renderFragranceNotes(product) +

    // Divider line
    '<hr class="divider product-info__divider" />' +

    // Quantity selector + Add to Cart button
    renderPurchaseSection(product) +

    // Shipping & Returns accordion (using native <details>)
    renderShippingDetails() +

  '</div>';
}


/* ============================================================
   FRAGRANCE NOTES
   Shows top, heart, and base notes.
   Classes match FragranceNotes.jsx: .frag-notes, .frag-notes__eyebrow,
   .frag-notes__profile-text, .frag-notes__list, .frag-notes__group,
   .frag-notes__group-label, .frag-notes__group-values
   ============================================================ */

function renderFragranceNotes(product) {
  return '<div class="frag-notes reveal">' +
    '<p class="eyebrow frag-notes__eyebrow">Fragrance Profile</p>' +
    '<p class="frag-notes__profile-text">' + product.description + '</p>' +
    '<div class="frag-notes__accord" aria-hidden="true"></div>' +
    '<dl class="frag-notes__list">' +
      renderNoteGroup("Top Notes",   product.notes.top) +
      renderNoteGroup("Heart Notes", product.notes.heart) +
      renderNoteGroup("Base Notes",  product.notes.base) +
    '</dl>' +
  '</div>';
}

// Function to build a single group of notes (e.g. "Top Notes: Lemon · Bergamot")
function renderNoteGroup(label, notesArray) {
  if (!notesArray || notesArray.length === 0) return "";

  return '<div class="frag-notes__group">' +
    '<dt class="eyebrow frag-notes__group-label">' + label + '</dt>' +
    '<dd class="frag-notes__group-values serif">' + notesArray.join(' · ') + '</dd>' +
  '</div>';
}


/* ============================================================
   PURCHASE SECTION
   Quantity selector + Add to Bag button.
   Classes match ProductInfo.jsx: .product-info__purchase,
   .product-info__actions, .product-info__add-btn
   QuantitySelector classes: .qty-selector, .qty-selector__btn, .qty-selector__value
   ============================================================ */

function renderPurchaseSection(product) {
  return '<div class="product-info__purchase reveal">' +

    // Quantity selector — matches QuantitySelector.jsx
    '<div class="qty-selector" role="group" aria-label="Quantity">' +
      '<button class="qty-selector__btn" id="qty-decrement" aria-label="Decrease quantity">&#8722;</button>' +
      '<span class="qty-selector__value" id="qty-value" aria-live="polite" aria-atomic="true">1</span>' +
      '<button class="qty-selector__btn" id="qty-increment" aria-label="Increase quantity">+</button>' +
    '</div>' +

    // Add to cart button
    '<div class="product-info__actions">' +
      '<button class="btn btn--primary btn--lg product-info__add-btn" id="add-to-cart-btn" aria-label="Add ' + product.name + ' to bag">' +
        'Add to Bag' +
      '</button>' +
    '</div>' +

  '</div>';
}


/* ============================================================
   SHIPPING & RETURNS
   Uses HTML <details>/<summary> element (native accordion).
   Classes match ProductInfo.jsx: .product-info__details,
   .product-info__details-summary, .product-info__details-body
   ============================================================ */

function renderShippingDetails() {
  return '<details class="product-info__details">' +
    '<summary class="product-info__details-summary eyebrow">Shipping &amp; Returns</summary>' +
    '<div class="product-info__details-body">' +
      '<p>Free standard shipping on all orders within Pakistan. Delivery in 3–5 business days. Easy returns within 7 days of receipt.</p>' +
    '</div>' +
  '</details>';
}


/* ============================================================
   LIFESTYLE STRIP
   Full-width editorial lifestyle images below product info.
   Classes match LifestyleStrip in ProductDetails.jsx:
   .lifestyle-strip, .lifestyle-strip--dark/light,
   .lifestyle-strip__panel, .lifestyle-strip__panel--primary,
   .lifestyle-strip__img, .lifestyle-strip__caption,
   .lifestyle-strip__label, .lifestyle-strip__sub,
   .lifestyle-strip__secondary-row, .lifestyle-strip__panel--secondary,
   .lifestyle-strip__text-panel, .lifestyle-strip__cta
   ============================================================ */

function renderLifestyleStrip(product) {
  var img1 = product.images.lifestyle1;
  var img2 = product.images.lifestyle2;

  if (!img1 && !img2) return "";

  return '<section class="lifestyle-strip lifestyle-strip--' + product.theme + '" aria-label="' + product.name + ' lifestyle photography">' +

    // First lifestyle image — full bleed
    (img1 ?
      '<div class="lifestyle-strip__panel lifestyle-strip__panel--primary reveal">' +
        '<img src="' + img1 + '" alt="' + product.name + ' lifestyle — HEVON SCENTS" class="lifestyle-strip__img" loading="lazy" />' +
        '<div class="lifestyle-strip__caption">' +
          '<p class="eyebrow lifestyle-strip__label">' + product.name + '</p>' +
          '<p class="lifestyle-strip__sub serif">' + product.type + ' · ' + product.size + '</p>' +
        '</div>' +
      '</div>'
    : '') +

    // Second lifestyle image — half width with text panel
    (img2 ?
      '<div class="lifestyle-strip__secondary-row">' +
        '<div class="lifestyle-strip__panel lifestyle-strip__panel--secondary reveal">' +
          '<img src="' + img2 + '" alt="' + product.name + ' accessories lifestyle — HEVON SCENTS" class="lifestyle-strip__img" loading="lazy" />' +
        '</div>' +
        '<div class="lifestyle-strip__text-panel reveal reveal-delay-2">' +
          '<p class="eyebrow lifestyle-strip__text-eyebrow">' + product.genderLabel + '</p>' +
          '<h3 class="lifestyle-strip__text-name serif">' + product.name + '</h3>' +
          '<p class="lifestyle-strip__text-meta">' + product.type + ' · ' + product.size + '</p>' +
          '<a href="shop.html" class="lifestyle-strip__cta">' +
            'Shop the Collection ' +
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<line x1="5" y1="12" x2="19" y2="12" />' +
              '<polyline points="12 5 19 12 12 19" />' +
            '</svg>' +
          '</a>' +
        '</div>' +
      '</div>'
    : '') +

  '</section>';
}


/* ============================================================
   RELATED PRODUCTS SECTION
   Shows other products below the lifestyle strip.
   Classes match ProductDetails.jsx: .related-section,
   .related-eyebrow, .related-section__title, .related-grid
   ProductCard classes: .product-card, .product-card--dark/light,
   .product-card__img-link, .product-card__img-wrap, .product-card__img,
   .product-card__info, .product-card__meta-group, .product-card__label,
   .product-card__name, .product-card__name-link, .product-card__meta,
   .product-card__footer, .product-card__price, .product-card__cta
   ============================================================ */

function renderRelatedSection(product) {
  // Get all products and find the one(s) that aren't this product
  var allProducts = getProducts();
  var related = [];
  for (var i = 0; i < allProducts.length; i++) {
    if (allProducts[i].id !== product.id) {
      related.push(allProducts[i]);
    }
  }

  if (related.length === 0) return "";

  // If this product is dark, the related section has no extra class (stays white)
  // If this product is light, the related section gets section--dark (black background)
  var sectionClass = "related-section";
  if (product.theme !== "dark") {
    sectionClass += " section--dark";
  }

  var cardsHtml = "";
  for (var j = 0; j < related.length; j++) {
    cardsHtml += renderProductCard(related[j]);
  }

  return '<section class="' + sectionClass + '" aria-labelledby="related-heading">' +
    '<div class="container">' +
      '<div class="reveal">' +
        '<p class="eyebrow related-eyebrow">Also from HEVON SCENTS</p>' +
        '<h2 id="related-heading" class="related-section__title serif">Explore the collection</h2>' +
      '</div>' +
      '<div class="related-grid">' + cardsHtml + '</div>' +
    '</div>' +
  '</section>';
}

// Function to build a single product card (matches ProductCard.jsx)
function renderProductCard(product) {
  var priceStr = formatPrice(product);
  return '<article class="product-card product-card--' + product.theme + ' reveal">' +

    // Image link
    '<a href="product-details.html?product=' + product.slug + '" class="product-card__img-link" aria-label="View ' + product.name + ' — ' + product.type + '" tabindex="-1">' +
      '<div class="product-card__img-wrap">' +
        '<img src="' + product.images.product + '" alt="' + product.name + ' ' + product.type + ' ' + product.size + ' by HEVON SCENTS" class="product-card__img" loading="lazy" />' +
      '</div>' +
    '</a>' +

    // Info panel
    '<div class="product-card__info">' +
      '<div class="product-card__meta-group">' +
        '<p class="eyebrow product-card__label">' + product.genderLabel + '</p>' +
        '<h3 class="product-card__name serif">' +
          '<a href="product-details.html?product=' + product.slug + '" class="product-card__name-link">' + product.name + '</a>' +
        '</h3>' +
        '<p class="product-card__meta">' + product.type + ' · ' + product.size + '</p>' +
      '</div>' +
      '<div class="product-card__footer">' +
        '<p class="product-card__price">' + priceStr + '</p>' +
        '<a href="product-details.html?product=' + product.slug + '" class="product-card__cta">' +
          'View Fragrance ' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<line x1="5" y1="12" x2="19" y2="12" />' +
            '<polyline points="12 5 19 12 12 19" />' +
          '</svg>' +
        '</a>' +
      '</div>' +
    '</div>' +

  '</article>';
}


/* ============================================================
   QUANTITY SELECTOR
   The +/- buttons to pick how many to add to cart.
   ============================================================ */

function initQuantitySelector() {
  var decrementBtn = document.getElementById("qty-decrement");
  var incrementBtn = document.getElementById("qty-increment");
  var qtyDisplay   = document.getElementById("qty-value");

  if (!decrementBtn || !incrementBtn || !qtyDisplay) return;

  var currentQty = 1; // start at 1

  // Decrease quantity button (minimum is 1)
  decrementBtn.addEventListener("click", function () {
    if (currentQty > 1) {
      currentQty = currentQty - 1;
      qtyDisplay.textContent = currentQty;
      // Disable the button when at minimum
      decrementBtn.disabled = (currentQty <= 1);
    }
  });
  // Start with decrement disabled since quantity starts at 1
  decrementBtn.disabled = true;

  // Increase quantity button
  incrementBtn.addEventListener("click", function () {
    if (currentQty < 10) { // max 10
      currentQty = currentQty + 1;
      qtyDisplay.textContent = currentQty;
      decrementBtn.disabled = false; // enable decrement when above 1
    }
  });
}


/* ============================================================
   GALLERY THUMBNAIL SWITCHING
   Clicking a thumbnail changes the main large image.
   ============================================================ */

function initGallery(product) {
  var mainImg   = document.getElementById("gallery-main-img");
  var thumbBtns = document.querySelectorAll(".gallery__thumb");

  if (!mainImg || thumbBtns.length === 0) return;

  for (var i = 0; i < thumbBtns.length; i++) {
    thumbBtns[i].addEventListener("click", function () {
      // Get the image src from the data-img attribute
      var newSrc = this.getAttribute("data-img");
      if (newSrc) {
        mainImg.src = newSrc;
      }

      // Remove active class from all thumbnails
      var allThumbs = document.querySelectorAll(".gallery__thumb");
      for (var j = 0; j < allThumbs.length; j++) {
        allThumbs[j].classList.remove("gallery__thumb--active");
      }

      // Add active class to clicked thumbnail
      this.classList.add("gallery__thumb--active");
    });
  }
}


/* ============================================================
   ADD TO CART
   Handles clicking the "Add to Bag" button.
   ============================================================ */

function initAddToCart(product) {
  var addBtn     = document.getElementById("add-to-cart-btn");
  var qtyDisplay = document.getElementById("qty-value");

  if (!addBtn) {
    console.log("initAddToCart: add-to-cart-btn not found in DOM");
    return;
  }

  addBtn.addEventListener("click", function () {
    // Read the current quantity from the quantity display span
    var qty = parseInt(qtyDisplay ? qtyDisplay.textContent : "1") || 1;

    // Pass the full product object directly to addToCart
    // This avoids any lookup and is guaranteed to work
    addToCart(product, qty);

    // Update the navbar badge immediately after adding
    updateCartBadge();

    // Show brief visual feedback on the button
    var originalText = addBtn.textContent;
    addBtn.textContent = "Added to Bag \u2713";
    addBtn.disabled = true;

    // Reset button text and re-enable after 2 seconds
    setTimeout(function () {
      addBtn.textContent = originalText;
      addBtn.disabled = false;
    }, 2000);
  });
}


/* ============================================================
   NOT FOUND
   Shows an error message if the product slug is invalid.
   Classes match the not-found-inline state in ProductDetails.jsx.
   ============================================================ */

function renderNotFound(container) {
  document.title = "Fragrance Not Found — HEVON SCENTS";
  container.innerHTML =
    '<div class="page-main not-found-inline">' +
      '<div class="container">' +
        '<p class="eyebrow">Not Found</p>' +
        '<h1 class="not-found-inline__title serif">Fragrance not found</h1>' +
        '<p class="not-found-inline__sub">The fragrance you\'re looking for doesn\'t exist or has been moved.</p>' +
        '<a href="shop.html" class="btn btn--primary btn--md"><span class="btn__inner">Back to Shop</span></a>' +
      '</div>' +
    '</div>';
}
