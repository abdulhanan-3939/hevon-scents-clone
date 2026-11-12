/* ============================================================
   HEVON SCENTS — cart.js
   Shopping cart functionality using localStorage.
   This file manages: add, remove, update quantity, clear cart.
   localStorage key: "hevon_cart"
   ============================================================ */

// The localStorage key where we save cart data
var CART_KEY = "hevon_cart";


/* ============================================================
   LOAD & SAVE CART
   These two functions read and write cart data to localStorage
   ============================================================ */

// Function to load the cart from localStorage
// Returns an array of cart items, or empty array if nothing saved
function loadCart() {
  try {
    var saved = localStorage.getItem(CART_KEY);
    if (saved) {
      var parsed = JSON.parse(saved);
      // Make sure we always return an array
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (e) {
    console.log("Cart load error:", e);
  }
  return [];
}

// Function to save the cart array to localStorage
function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.log("Cart save error:", e);
  }
}


/* ============================================================
   ADD TO CART
   Adds a product to the cart (or increases its quantity).
   Called from product-details.js when "Add to Bag" is clicked.
   ============================================================ */

// Function to add a product to the shopping cart
// productData: the full product object (passed directly — no lookup needed)
// quantity: how many to add (default 1)
function addToCart(productData, quantity) {
  // Default quantity to 1 if not provided or invalid
  if (!quantity || quantity < 1) quantity = 1;

  // If a string ID was passed instead of an object, look up the product
  // This handles both addToCart("rage", 1) and addToCart(productObject, 1)
  var product;
  if (typeof productData === "string") {
    product = getProductBySlug(productData);
    if (!product) {
      console.log("addToCart: product not found for id:", productData);
      return;
    }
  } else {
    product = productData;
  }

  // Load the current cart from localStorage
  var cart = loadCart();

  // Check if this product is already in the cart
  var existingIndex = -1;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === product.id) {
      existingIndex = i;
      break;
    }
  }

  if (existingIndex !== -1) {
    // Product already in cart — increase the quantity
    cart[existingIndex].quantity = cart[existingIndex].quantity + quantity;
  } else {
    // New product — add it as a new cart item
    cart.push({
      id: product.id,
      slug: product.slug,
      name: product.name,
      type: product.type,
      genderLabel: product.genderLabel,
      size: product.size,
      price: product.price,
      currency: product.currency,
      image: product.images.product,  // relative path: images/products/rage/product.png
      quantity: quantity
    });
  }

  // Save the updated cart to localStorage
  saveCart(cart);

  // Update the cart count badge in the navbar
  updateCartBadge();

  return cart;
}


/* ============================================================
   REMOVE FROM CART
   Removes a single product completely from the cart.
   ============================================================ */

// Function to remove one product from the cart by its id
function removeFromCart(productId) {
  var cart = loadCart();

  // Keep all items EXCEPT the one being removed
  var newCart = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id !== productId) {
      newCart.push(cart[i]);
    }
  }

  saveCart(newCart);
  updateCartBadge();
  return newCart;
}


/* ============================================================
   UPDATE QUANTITY
   Changes how many of a product are in the cart.
   If quantity goes to 0 or below, the item is removed.
   ============================================================ */

// Function to update the quantity of a specific cart item
function updateCartQuantity(productId, quantity) {
  // If new quantity is 0 or less, remove the item entirely
  if (quantity <= 0) {
    return removeFromCart(productId);
  }

  var cart = loadCart();

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      cart[i].quantity = quantity;
      break;
    }
  }

  saveCart(cart);
  updateCartBadge();
  return cart;
}


/* ============================================================
   CLEAR CART
   Removes ALL items from the cart at once.
   ============================================================ */

// Function to empty the entire cart
function clearCart() {
  saveCart([]);
  updateCartBadge();
}


/* ============================================================
   CART CALCULATIONS
   Functions to count items and calculate totals
   ============================================================ */

// Function to get the total number of items in the cart
// (counts each quantity — so 2x RAGE = 2 items)
function getCartItemCount() {
  var cart = loadCart();
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].quantity;
  }
  return total;
}

// Function to calculate the total price of all cart items
function getCartSubtotal() {
  var cart = loadCart();
  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    subtotal = subtotal + (cart[i].price * cart[i].quantity);
  }
  return subtotal;
}


/* ============================================================
   CART BADGE
   Updates the little number on the bag icon in the navbar
   ============================================================ */

// Function to update the cart count shown in the navbar bag icon
function updateCartBadge() {
  var count = getCartItemCount();

  // Update desktop navbar badge
  var desktopBadge = document.getElementById("navbar-cart-count");
  if (desktopBadge) {
    if (count > 0) {
      desktopBadge.textContent = count;
      desktopBadge.style.display = "flex";
    } else {
      desktopBadge.style.display = "none";
    }
  }

  // Update mobile navbar badge
  var mobileBadge = document.getElementById("mobile-cart-count");
  if (mobileBadge) {
    if (count > 0) {
      mobileBadge.textContent = count;
      mobileBadge.style.display = "flex";
    } else {
      mobileBadge.style.display = "none";
    }
  }
}
