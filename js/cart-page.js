/* ============================================================
   HEVON SCENTS — cart-page.js
   Renders and manages the cart page (cart.html).
   Handles: show/hide empty vs filled state, render items,
   remove item, update quantity, clear all, order summary.
   ============================================================ */

// Wait for the page to load, then render the cart
document.addEventListener("DOMContentLoaded", function () {
  renderCartPage();
  updateCartBadge();

  // Wire up the "Clear All" button if it exists
  var clearBtn = document.getElementById("cart-clear-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      // Ask for confirmation before clearing all items
      if (confirm("Remove all items from your bag?")) {
        clearCart();
        renderCartPage(); // re-render to show empty state
      }
    });
  }
});


/* ============================================================
   RENDER CART PAGE
   Decides whether to show empty cart or filled cart state.
   Cart data is always read fresh from localStorage.
   ============================================================ */

function renderCartPage() {
  var cart = loadCart(); // read from localStorage

  var emptySection  = document.getElementById("cart-empty");
  var filledSection = document.getElementById("cart-filled");

  if (!emptySection || !filledSection) return;

  if (cart.length === 0) {
    // No items — show the empty bag message
    emptySection.style.display  = "block";
    filledSection.style.display = "none";
  } else {
    // Items exist — show the cart with all items
    emptySection.style.display  = "none";
    filledSection.style.display = "block";

    renderCartItems(cart);    // build the item rows
    updateCartSummary(cart);  // update subtotal / total
    attachCartItemEvents();   // wire up remove and qty buttons
  }
}


/* ============================================================
   RENDER CART ITEMS
   Builds the HTML list of all items in the cart.
   ============================================================ */

function renderCartItems(cart) {
  var container = document.getElementById("cart-items-list");
  if (!container) return;

  var html = "";
  for (var i = 0; i < cart.length; i++) {
    html += renderCartItem(cart[i]);
  }
  container.innerHTML = html;
}

// Function to build HTML for a single cart item row.
// CSS classes match Cart.jsx CartItem component exactly.
function renderCartItem(item) {
  // RAGE has dark background, SERA has light background for the image
  var imgTheme     = (item.id === "rage") ? "dark" : "light";
  var priceDisplay = "Rs. " + (item.price * item.quantity).toLocaleString("en-PK");

  return '<li class="cart-item">' +

    // Product image panel
    '<div class="cart-item__img-wrap cart-item__img-wrap--' + imgTheme + '">' +
      '<img src="' + item.image + '" alt="' + item.name + ' Eau de Parfum by HEVON SCENTS" class="cart-item__img">' +
    '</div>' +

    // Product info column
    '<div class="cart-item__info">' +

      // Top row: product name + Remove button
      '<div class="cart-item__header">' +
        '<div>' +
          '<p class="eyebrow cart-item__label">' + item.genderLabel + '</p>' +
          '<h3 class="cart-item__name serif">' + item.name + '</h3>' +
          '<p class="cart-item__meta">' + item.type + ' · ' + item.size + '</p>' +
        '</div>' +
        // Remove button — data-remove-id is used by event delegation
        '<button class="cart-item__remove" data-remove-id="' + item.id + '" aria-label="Remove ' + item.name + ' from bag">Remove</button>' +
      '</div>' +

      // Bottom row: quantity controls + item total price
      '<div class="cart-item__footer">' +

        // Quantity selector: − qty +
        '<div class="qty-selector" role="group" aria-label="Quantity">' +
          '<button class="qty-selector__btn" data-qty-decrement="' + item.id + '" aria-label="Decrease quantity">&#8722;</button>' +
          '<span class="qty-selector__value" id="qty-' + item.id + '" aria-live="polite" aria-atomic="true">' + item.quantity + '</span>' +
          '<button class="qty-selector__btn" data-qty-increment="' + item.id + '" aria-label="Increase quantity">+</button>' +
        '</div>' +

        // Item total price
        '<p class="cart-item__price">' + priceDisplay + '</p>' +

      '</div>' +
    '</div>' +
  '</li>';
}


/* ============================================================
   CART EVENT HANDLERS
   Uses event delegation — one listener on the cart list.
   Handles: remove item, decrement qty, increment qty.
   ============================================================ */

function attachCartItemEvents() {
  var container = document.getElementById("cart-items-list");
  if (!container) return;

  // Remove any old event listener by cloning the element
  var newContainer = container.cloneNode(true);
  container.parentNode.replaceChild(newContainer, container);

  // Add a single click listener — checks which button was clicked
  newContainer.addEventListener("click", function (e) {
    var target = e.target;

    // --- REMOVE button clicked ---
    var removeId = target.getAttribute("data-remove-id");
    if (removeId) {
      removeFromCart(removeId);
      renderCartPage();
      return;
    }

    // --- DECREMENT (-) button clicked ---
    var decrementId = target.getAttribute("data-qty-decrement");
    if (decrementId) {
      var cart = loadCart();
      var currentQty = 0;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === decrementId) { currentQty = cart[i].quantity; break; }
      }
      if (currentQty <= 1) {
        // Qty would hit 0 — remove item instead
        removeFromCart(decrementId);
      } else {
        updateCartQuantity(decrementId, currentQty - 1);
      }
      renderCartPage();
      return;
    }

    // --- INCREMENT (+) button clicked ---
    var incrementId = target.getAttribute("data-qty-increment");
    if (incrementId) {
      var cart2 = loadCart();
      var currentQty2 = 0;
      for (var j = 0; j < cart2.length; j++) {
        if (cart2[j].id === incrementId) { currentQty2 = cart2[j].quantity; break; }
      }
      if (currentQty2 < 10) { // max 10
        updateCartQuantity(incrementId, currentQty2 + 1);
        renderCartPage();
      }
      return;
    }
  });
}


/* ============================================================
   CART SUMMARY
   Updates the subtotal, total, and item count in the sidebar
   ============================================================ */

function updateCartSummary(cart) {
  var subtotalEl = document.getElementById("cart-subtotal");
  var totalEl    = document.getElementById("cart-total");
  var countEl    = document.getElementById("cart-count-label");

  var subtotal  = getCartSubtotal();
  var formatted = "Rs. " + subtotal.toLocaleString("en-PK");
  var count     = getCartItemCount();

  if (subtotalEl) subtotalEl.textContent = formatted;
  if (totalEl)    totalEl.textContent    = formatted;
  if (countEl)    countEl.textContent    = count + (count === 1 ? " item" : " items");
}
