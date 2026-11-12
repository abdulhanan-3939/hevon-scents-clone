/* ============================================================
   HEVON SCENTS — main.js
   Site-wide JavaScript — runs on every page.
   Handles: navbar, mobile menu, search overlay, scroll reveal,
   cart badge, page transitions, footer year.
   ============================================================ */

// Wait until the full page HTML is loaded before running our code
document.addEventListener("DOMContentLoaded", function () {

  // Initialize all site-wide features
  initNavbarScroll();
  initMobileMenu();
  initSearchOverlay();
  initScrollReveal();
  initFooterYear();
  updateCartBadge(); // Show cart count from localStorage on page load

  // Add page transition class so the fade-in animation plays
  document.body.classList.add("page-transition");

});


/* ============================================================
   NAVBAR SCROLL BEHAVIOR
   Changes navbar style when user scrolls down past 60px.
   White text → black text, transparent → frosted glass.
   ============================================================ */

function initNavbarScroll() {
  var navbar = document.getElementById("site-navbar");
  var logo   = document.getElementById("navbar-logo");

  // If navbar doesn't exist on this page, stop
  if (!navbar) return;

  // Listen for scroll events on the window
  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      // User scrolled down — switch to dark/scrolled style
      navbar.classList.add("navbar--scrolled");

      // Swap logo to black version
      if (logo) {
        logo.src = "images/logo/hevon-logo-black.png.png";
      }
    } else {
      // User scrolled back to top — restore original style
      navbar.classList.remove("navbar--scrolled");

      // Swap logo back to white version
      if (logo) {
        // Check if we're on a page that starts with a dark hero (index.html)
        var isHeroPage = document.querySelector(".hero") !== null;
        if (isHeroPage) {
          logo.src = "images/logo/hevon-logo-white.png.png";
        }
      }
    }
  });
}


/* ============================================================
   MOBILE MENU
   Opens and closes the mobile navigation drawer.
   ============================================================ */

function initMobileMenu() {
  var burgerBtn   = document.getElementById("burger-btn");
  var mobileMenu  = document.getElementById("mobile-menu");
  var backdrop    = document.getElementById("menu-backdrop");

  // If mobile menu doesn't exist, stop
  if (!burgerBtn || !mobileMenu) return;

  // Open menu when burger button is clicked
  burgerBtn.addEventListener("click", function () {
    openMobileMenu();
  });

  // Close menu when backdrop (dark overlay) is clicked
  if (backdrop) {
    backdrop.addEventListener("click", function () {
      closeMobileMenu();
    });
  }

  // Close menu when any mobile nav link is clicked
  var mobileLinks = mobileMenu.querySelectorAll("a");
  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener("click", function () {
      closeMobileMenu();
    });
  }

  // Close menu when Escape key is pressed
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMobileMenu();
    }
  });
}

// Function to open the mobile menu
function openMobileMenu() {
  var mobileMenu = document.getElementById("mobile-menu");
  var burgerBtn  = document.getElementById("burger-btn");
  var backdrop   = document.getElementById("menu-backdrop");

  if (mobileMenu) mobileMenu.classList.add("mobile-menu--open");
  if (burgerBtn)  burgerBtn.classList.add("is-open");
  if (backdrop)   backdrop.style.display = "block";

  // Prevent background from scrolling while menu is open
  document.body.style.overflow = "hidden";
}

// Function to close the mobile menu
function closeMobileMenu() {
  var mobileMenu = document.getElementById("mobile-menu");
  var burgerBtn  = document.getElementById("burger-btn");
  var backdrop   = document.getElementById("menu-backdrop");

  if (mobileMenu) mobileMenu.classList.remove("mobile-menu--open");
  if (burgerBtn)  burgerBtn.classList.remove("is-open");
  if (backdrop)   backdrop.style.display = "none";

  // Allow background scrolling again
  document.body.style.overflow = "";
}


/* ============================================================
   SEARCH OVERLAY
   Shows/hides the full-screen search panel.
   Also renders live search results as the user types.
   ============================================================ */

function initSearchOverlay() {
  var overlay      = document.getElementById("search-overlay");
  var searchInput  = document.getElementById("search-input");
  var searchHint   = document.getElementById("search-hint");
  var searchResults = document.getElementById("search-results");
  var openBtns     = document.querySelectorAll(".js-search-open");
  var closeBtns    = document.querySelectorAll(".js-search-close");
  var searchBackdrop = document.getElementById("search-backdrop");

  if (!overlay) return;

  // Open search overlay when any search button is clicked
  for (var i = 0; i < openBtns.length; i++) {
    openBtns[i].addEventListener("click", function () {
      openSearchOverlay();
    });
  }

  // Close search overlay when close button is clicked
  for (var j = 0; j < closeBtns.length; j++) {
    closeBtns[j].addEventListener("click", function () {
      closeSearchOverlay();
    });
  }

  // Close search when backdrop is clicked
  if (searchBackdrop) {
    searchBackdrop.addEventListener("click", function () {
      closeSearchOverlay();
    });
  }

  // Handle Escape key to close search
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("search-overlay--open")) {
      closeSearchOverlay();
    }
  });

  // Handle live search as user types
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var query = searchInput.value;
      renderSearchResults(query, searchResults, searchHint);
    });
  }
}

// Function to open the search overlay
function openSearchOverlay() {
  var overlay = document.getElementById("search-overlay");
  var input   = document.getElementById("search-input");

  if (overlay) {
    overlay.classList.add("search-overlay--open");
    // Focus the search input so user can start typing immediately
    if (input) {
      setTimeout(function () { input.focus(); }, 100);
    }
  }

  // Also close mobile menu if it's open
  closeMobileMenu();
}

// Function to close the search overlay
function closeSearchOverlay() {
  var overlay = document.getElementById("search-overlay");
  var input   = document.getElementById("search-input");
  var results = document.getElementById("search-results");
  var hint    = document.getElementById("search-hint");

  if (overlay) overlay.classList.remove("search-overlay--open");
  if (input)   input.value = "";
  if (results) results.innerHTML = "";
  if (hint)    hint.style.display = "block";
}

// Function to render search results based on a query
function renderSearchResults(query, resultsContainer, hintEl) {
  if (!resultsContainer) return;

  // If the search box is empty, show hint and clear results
  if (!query || query.trim() === "") {
    resultsContainer.innerHTML = "";
    if (hintEl) hintEl.style.display = "block";
    return;
  }

  // Hide the hint text while searching
  if (hintEl) hintEl.style.display = "none";

  // Get matching products (searchProducts is defined in products.js)
  var results = searchProducts(query);

  if (results.length === 0) {
    resultsContainer.innerHTML = '<li style="list-style:none;">' +
      '<div class="search-overlay__empty">' +
        '<p class="search-overlay__empty-title serif">No fragrance found</p>' +
        '<p class="search-overlay__empty-sub">Try searching for RAGE or SERA</p>' +
      '</div>' +
    '</li>';
    return;
  }

  // Build HTML list of search results
  // Structure matches SearchOverlay.jsx result items
  var html = "";
  for (var i = 0; i < results.length; i++) {
    var p = results[i];
    var priceStr = formatPrice(p);
    html += '<li>';
    html += '<a href="product-details.html?product=' + p.slug + '" class="search-result">';
    // Image wrapper
    html += '<div class="search-result__img-wrap">';
    html += '<img src="' + p.images.product + '" alt="' + p.name + ' ' + p.type + ' by HEVON SCENTS" class="search-result__img">';
    html += '</div>';
    // Info text
    html += '<div class="search-result__info">';
    html += '<p class="search-result__name serif">' + p.name + '</p>';
    html += '<p class="search-result__meta eyebrow">' + p.type + ' · ' + p.size + '</p>';
    html += '<p class="search-result__price">' + priceStr + '</p>';
    html += '</div>';
    // Arrow icon
    html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
    html += '</a>';
    html += '</li>';
  }
  resultsContainer.innerHTML = html;
}


/* ============================================================
   SCROLL REVEAL ANIMATION
   Elements with class "reveal" fade in when they enter the viewport.
   Adding class "is-visible" triggers the CSS animation.
   ============================================================ */

function initScrollReveal() {
  // Get all elements that should be revealed on scroll
  var revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length === 0) return;

  // IntersectionObserver watches elements and fires when they come into view
  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      if (entry.isIntersecting) {
        // Element is now visible — add the "is-visible" class to trigger animation
        entry.target.classList.add("is-visible");
        // Stop watching this element (animation only plays once)
        observer.unobserve(entry.target);
      }
    }
  }, {
    threshold: 0.12 // trigger when 12% of the element is visible
  });

  // Start watching each reveal element
  for (var i = 0; i < revealElements.length; i++) {
    observer.observe(revealElements[i]);
  }
}

// Function to re-run scroll reveal on dynamically added elements
// (Used by product-details.js after it builds the page)
function reinitScrollReveal() {
  initScrollReveal();
}


/* ============================================================
   ACCORD LINE ANIMATION
   The horizontal lines under fragrance notes animate in width.
   ============================================================ */

function initAccordLines() {
  var accordLines = document.querySelectorAll(".accord-line");

  if (accordLines.length === 0) return;

  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add("accord-line--visible");
        observer.unobserve(entries[i].target);
      }
    }
  }, { threshold: 0.3 });

  for (var i = 0; i < accordLines.length; i++) {
    observer.observe(accordLines[i]);
  }
}


/* ============================================================
   FOOTER YEAR
   Automatically updates the copyright year in the footer
   ============================================================ */

function initFooterYear() {
  var yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

