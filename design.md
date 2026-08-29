# HEVON SCENTS — Design System
## RAGE + SERA Edition

> **Luxury, Bottled.**

---

# 01. Brand Concept

**HEVON SCENTS** is a modern fragrance brand focused on delivering a premium visual and shopping experience around accessible fragrance.

The current collection contains two signature perfumes:

- **RAGE** — Eau de Parfum, 50 ML, Pour Homme
- **SERA** — Eau de Parfum, 50 ML, Pour Femme

The website must make these two products the center of the experience.

The visual identity is **monochrome at the interface level**:

- black
- off-white
- grey
- subtle metallic/neutral tones where they naturally occur in product photography

The products themselves provide the visual personality.

### Important Brand Rule

**RAGE and SERA are the actual product names.**

Do not rename them to NOIR, BLANC, or any other invented names.

The previous NOIR/BLANC concept must not be used in the implementation.

---

# 02. Brand Positioning

HEVON SCENTS should communicate:

- affordable luxury
- premium presentation
- confidence
- sophistication
- simplicity
- modern fragrance culture

The website should feel like a **premium fragrance house combined with a modern fashion editorial**, while remaining easy to use as an e-commerce website.

The design must not look like:

- a generic perfume template
- a marketplace
- a basic HTML landing page
- a SaaS dashboard
- an overdecorated luxury website

### Core Principle

> **Luxury comes from restraint, not decoration.**

Every visual element should have a purpose.

---

# 03. Product Identity

## RAGE

**Product:** RAGE  
**Category:** Eau de Parfum  
**Size:** 50 ML  
**Label:** Pour Homme

RAGE should have a darker, stronger and more masculine visual presentation.

Primary visual direction:

- black
- deep charcoal
- high contrast
- dramatic lighting
- dark editorial photography
- strong shadows
- powerful compositions

Use the supplied RAGE product photography as the primary product visual.

Do not invent fragrance notes, ingredients, fragrance family, concentration details beyond the verified product information, reviews, awards, or claims.

---

## SERA

**Product:** SERA  
**Category:** Eau de Parfum  
**Size:** 50 ML  
**Label:** Pour Femme

SERA should have a softer, elegant and refined visual presentation while remaining within the HEVON monochrome interface.

Primary visual direction:

- off-white
- soft grey
- black typography
- subtle blue/neutral tones that naturally exist in the supplied bottle photography
- soft editorial lighting
- clean compositions
- elegant negative space

Use the supplied SERA product photography as the primary product visual.

Do not invent fragrance notes, ingredients, fragrance family, reviews, awards, or claims.

---

# 04. Visual Relationship Between RAGE + SERA

The two products should feel like part of the same brand without looking identical.

### RAGE

Dark / powerful / masculine

### SERA

Light / elegant / feminine

The interface remains consistent while the product presentation changes.

Think:

**One brand → two personalities.**

---

# 05. Color System

Use CSS variables.

```css
:root {
  --black: #0a0a0a;
  --ink: #161614;
  --white: #faf9f6;

  --grey-100: #eeece7;
  --grey-300: #c9c6bd;
  --grey-500: #8f8c82;
  --grey-700: #4a483f;
}
```

## Color Usage

### `--black`
`#0a0a0a`

Use for:

- primary text
- dark backgrounds
- RAGE sections
- buttons
- navigation where appropriate
- footer

### `--ink`
`#161614`

Use for:

- deep editorial backgrounds
- collection sections
- RAGE campaign sections

### `--white`
`#faf9f6`

Use for:

- main page background
- SERA sections
- light editorial sections
- light UI surfaces

### `--grey-100`
`#eeece7`

Use for:

- subtle light backgrounds
- secondary surfaces
- cards when necessary

### `--grey-300`
`#c9c6bd`

Use for:

- borders
- dividers
- subtle rules

### `--grey-500`
`#8f8c82`

Use for:

- captions
- metadata
- eyebrows
- secondary information

### `--grey-700`
`#4a483f`

Use for:

- secondary body copy
- supporting descriptions

---

# 06. Color Restrictions

Do not introduce:

- neon colors
- bright accent colors
- gradients used purely for decoration
- colorful buttons
- excessive colored cards
- random accent colors

The supplied product photography may contain natural colors.

Those natural colors should not automatically become UI colors.

The interface remains primarily black, white and grey.

---

# 07. Typography

## Display Font — Fraunces

Use **Fraunces** for:

- hero headlines
- major headings
- product names
- editorial statements
- fragrance-note presentation
- selected emphasis

Fraunces provides the editorial luxury character.

Use large typography and generous whitespace.

Italic can be used selectively.

Do not make every heading italic.

---

## Interface Font — Jost

Use **Jost** for:

- navigation
- body text
- buttons
- labels
- forms
- product metadata
- prices
- utility content

Jost should provide a clean modern contrast to Fraunces.

---

# 08. Typography Hierarchy

Use responsive typography.

### Hero

```css
font-size: clamp(4rem, 8vw, 8rem);
```

### Page Heading

```css
font-size: clamp(3rem, 6vw, 6rem);
```

### Section Heading

```css
font-size: clamp(2.5rem, 5vw, 5rem);
```

### Product Name

```css
font-size: clamp(2.5rem, 5vw, 6rem);
```

### Body

Approximately:

```css
font-size: 1rem;
line-height: 1.6;
```

### Eyebrow

Use:

- Jost
- uppercase
- small size
- letter spacing around `0.2em–0.3em`

Example:

```text
HEVON SCENTS

THE COLLECTION

RAGE

SERA

EAU DE PARFUM
```

---

# 09. Layout Philosophy

The website should feel spacious and editorial.

Avoid filling every available area.

Use:

- generous margins
- large product imagery
- asymmetrical compositions where appropriate
- large typography
- thin dividers
- minimal cards
- controlled visual rhythm

### Maximum content width

Approximately:

```text
1400px
```

### Desktop padding

```text
48px–80px
```

### Tablet padding

```text
32px–48px
```

### Mobile padding

```text
20px–24px
```

Adjust these values when necessary for visual balance.

---

# 10. Homepage Structure

The homepage should guide a visitor from brand discovery to product exploration and finally to purchase.

Recommended structure:

```text
Hero
↓
Brand Statement
↓
RAGE Feature
↓
SERA Feature
↓
The Collection
↓
Brand Philosophy
↓
Final CTA
↓
Footer
```

Do not add unnecessary sections simply to make the homepage longer.

---

# 11. Hero Section

The hero should immediately establish HEVON SCENTS.

Use one of the supplied brand/product images as the visual foundation.

Recommended composition:

```text
HEVON SCENTS

Luxury, Bottled.

A short, confident brand statement.

EXPLORE THE COLLECTION
```

The exact final copy should be refined using the real brand positioning.

Avoid excessive hero text.

---

# 12. Hero Visual Direction

The hero should use:

- high-quality product photography
- large negative space
- cinematic composition
- strong typography
- subtle motion
- minimal UI

The product should remain visually dominant.

Do not cover the product with text.

Do not place too many buttons over the hero.

---

# 13. Brand Statement

Immediately after the hero, introduce a concise editorial statement explaining the brand.

Keep it short.

Example direction:

> Fragrance with presence, designed without excess.

This is an example of tone, not mandatory final copy.

Do not make unsupported claims about the brand.

---

# 14. RAGE Feature Section

RAGE should receive a major editorial section.

Suggested structure:

```text
RAGE
EAU DE PARFUM
50 ML
POUR HOMME

[PRODUCT IMAGE]

Short product description

VIEW RAGE
```

Visual treatment:

- dark background
- black/charcoal tones
- high contrast
- dramatic product photography
- large Fraunces typography
- subtle motion

Use the real RAGE image.

---

# 15. SERA Feature Section

SERA should receive an equally important editorial section.

Suggested structure:

```text
SERA
EAU DE PARFUM
50 ML
POUR FEMME

[PRODUCT IMAGE]

Short product description

VIEW SERA
```

Visual treatment:

- off-white background
- soft grey elements
- clean typography
- elegant product photography
- generous negative space

Do not make SERA visually secondary just because its section is lighter.

Both products must receive equal design importance.

---

# 16. Product Photography

Real supplied product photography always takes priority over CSS-generated bottle illustrations.

Use the supplied images as the main product representation.

Recommended image types:

- product hero
- product front
- close-up/detail
- lifestyle
- campaign/brand image

Maintain generous negative space around the bottle where the source image allows it.

Do not unnecessarily crop the bottle.

Do not distort product proportions.

Do not apply heavy filters that change the actual product appearance.

---

# 17. Lifestyle Photography

Lifestyle imagery should support the emotional identity of each product.

### RAGE lifestyle direction

Use supplied imagery featuring:

- darker environments
- dramatic lighting
- masculine accessories
- strong textures
- architectural or editorial compositions

### SERA lifestyle direction

Use supplied imagery featuring:

- softer environments
- elegant styling
- clean surfaces
- subtle light
- refined compositions

Lifestyle imagery should not overpower the actual product.

---

# 18. Brand Photography

Brand/campaign images can be used for:

- homepage editorial sections
- About page
- brand philosophy
- promotional banners
- final CTA sections

Do not use every brand image on the homepage.

Choose images based on the purpose of the section.

---

# 19. Product Cards

Product cards should remain minimal.

Each card may contain:

- product image
- product name
- category
- size
- short note summary only if verified
- price
- View Product CTA

Example:

```text
RAGE
EAU DE PARFUM · 50 ML
Rs. [PRICE]

VIEW PRODUCT
```

Do not invent ratings or reviews.

Do not add fake badges.

Do not use excessive shadows.

---

# 20. Product Detail Pages

Create dedicated routes:

```text
/product/rage
/product/sera
```

Each product page should include:

1. Product gallery
2. Product name
3. Product type
4. Size
5. Price
6. Description
7. Fragrance notes, when supplied
8. Ingredients, when supplied
9. Add to Bag
10. Quantity selector
11. Product availability
12. Related brand/product content

Do not invent missing product information.

---

# 21. Product Data Architecture

Keep product information separate from UI components.

Recommended file:

```text
src/data/products.js
```

Example:

```js
export const products = [
  {
    id: "rage",
    slug: "rage",
    name: "RAGE",
    type: "Eau de Parfum",
    genderLabel: "Pour Homme",
    size: "50 ML",

    price: null,
    currency: "PKR",

    description: "",

    notes: {
      top: [],
      heart: [],
      base: []
    },

    ingredients: [],

    images: {
      hero: "/images/products/rage/hero.png",
      product: "/images/products/rage/product.png",
      detail: "/images/products/rage/detail.png"
    },

    lifestyleImages: [
      "/images/lifestyle/rage-dark-rock.png",
      "/images/lifestyle/rage-watch-accessories.png"
    ],

    available: true
  },

  {
    id: "sera",
    slug: "sera",
    name: "SERA",
    type: "Eau de Parfum",
    genderLabel: "Pour Femme",
    size: "50 ML",

    price: null,
    currency: "PKR",

    description: "",

    notes: {
      top: [],
      heart: [],
      base: []
    },

    ingredients: [],

    images: {
      hero: "/images/products/sera/hero.png",
      product: "/images/products/sera/product.png",
      detail: "/images/products/sera/detail.png"
    },

    lifestyleImages: [
      "/images/lifestyle/sera-dark-satin.png",
      "/images/lifestyle/sera-white-lifestyle.png"
    ],

    available: true
  }
];
```

Replace empty fields with verified brand information.

---

# 22. Pricing

Prices must be displayed in Pakistani Rupees.

Example:

```text
Rs. 4,500
```

However, **do not assume Rs. 4,500 is the final price**.

The actual price must be provided by the brand before launch.

Do not hard-code prices into reusable components.

---

# 23. Fragrance Notes

If the actual fragrance notes are provided, present them using:

```text
TOP NOTES
HEART NOTES
BASE NOTES
```

Use Fraunces selectively for the note names.

The note presentation should feel editorial.

Do not invent notes based on the appearance of the bottle.

Do not infer ingredients from a product image.

If notes are not yet available, leave the data empty or use an obvious placeholder during development.

---

# 24. Accord Line

If verified fragrance-note data is available, use the **Accord Line** as a signature interaction.

Concept:

```text
TOP ───────── HEART ───────── BASE
```

The line draws from left to right when the section enters the viewport.

Animation:

```text
width: 0 → 100%
```

Then reveal the note groups.

This represents the way a fragrance develops over time.

If actual note data is not available yet, do not fabricate note content just to demonstrate the animation.

The component can still be implemented with placeholder development data that is clearly marked.

---

# 25. Collection Section

The collection should present both products together.

Suggested layout:

```text
THE COLLECTION

RAGE                         SERA
[IMAGE]                      [IMAGE]

EAU DE PARFUM                EAU DE PARFUM
50 ML                        50 ML

Rs. [PRICE]                  Rs. [PRICE]

VIEW RAGE                    VIEW SERA
```

Use a dark editorial background when appropriate.

The cards should feel like part of a luxury campaign rather than standard e-commerce tiles.

---

# 26. Navigation

Keep navigation minimal.

Recommended:

```text
HEVON SCENTS

SHOP
ABOUT
CONTACT

SEARCH
BAG
```

The logo should use the supplied HEVON SCENTS logo.

Do not recreate the logo with plain text if the real logo asset is available.

---

# 27. Navigation Behavior

The navigation should work over both dark and light sections.

A `mix-blend-mode: difference` treatment may be used where appropriate.

However:

**Readability and accessibility take priority over visual effects.**

If the effect becomes unreliable, implement a controlled dark/light navigation state instead.

---

# 28. Mobile Navigation

Mobile navigation should contain:

```text
HEVON SCENTS
MENU
```

Opening the menu should reveal:

- Shop
- About
- Contact
- Search
- Bag

The menu must support:

- keyboard navigation
- Escape to close
- visible close control
- accessible labels

---

# 29. Search

Implement frontend-only search using the local product dataset.

Search should be able to find:

- RAGE
- SERA
- product type
- verified fragrance notes
- relevant product metadata

Provide a polished empty state.

Example:

```text
NO FRAGRANCE FOUND

Try searching for another product.
```

Do not pretend the search is connected to a server.

---

# 30. Shopping Bag

The frontend must have a functional shopping bag.

Users should be able to:

- add RAGE
- add SERA
- change quantity
- remove products
- view subtotal
- continue shopping

Persist the bag with:

```text
localStorage
```

Use React Context or an equivalent state-management approach.

---

# 31. Checkout

There is no backend or payment gateway at this stage.

Therefore:

**Do not implement fake payment processing.**

The checkout interface can be prepared for future integration.

Until a backend/payment provider exists, show a clear frontend-only state.

Example:

```text
Checkout is coming soon.
Your bag is saved for your next visit.
```

Do not claim an order was placed if no backend exists.

---

# 32. About Page

The About page should focus on the brand philosophy.

Suggested structure:

```text
HEVON SCENTS
↓
Brand Statement
↓
Affordable Luxury
↓
Fragrance Philosophy
↓
RAGE + SERA
↓
Final CTA
```

Use supplied brand photography where appropriate.

Do not invent:

- founder stories
- founding dates
- awards
- certifications
- production claims
- customer statistics

Only use verified information.

---

# 33. Contact Page

Create a minimal contact page.

Fields:

- Name
- Email
- Message

The form should include frontend validation.

Because there is no backend, do not claim that an email was actually sent.

Instead, provide a frontend success state.

---

# 34. Footer

The footer should remain minimal.

Suggested groups:

### Brand

HEVON SCENTS

### Explore

Shop  
About  
Contact

### Support

FAQ  
Shipping  
Returns

### Social

Instagram  
Facebook  
TikTok

Use placeholder links until the real URLs are provided.

---

# 35. Motion Direction

Animations should feel:

- slow
- smooth
- elegant
- intentional

Use:

- fade
- translateY
- scale
- clip-path
- width reveals

Avoid:

- bouncing
- spinning
- excessive parallax
- constant movement
- flashy transitions

---

# 36. Scroll Reveal

Use `IntersectionObserver`.

Default:

```css
opacity: 0;
transform: translateY(20px);
```

Then:

```css
opacity: 1;
transform: translateY(0);
```

Suggested duration:

```text
900ms–1100ms
```

Reveal sections or grouped content rather than animating every word independently.

---

# 37. Product Image Motion

Product images can have a subtle hover effect on desktop.

Example:

```css
transform: translateY(-8px);
```

Use a slow transition.

Do not distort or excessively zoom the product.

Disable or reduce the interaction on touch devices.

---

# 38. Image Reveal

For major product imagery, use a subtle reveal such as:

- opacity
- clip-path
- scale from `0.98` to `1`

The product should appear as though it is being revealed rather than aggressively animated.

---

# 39. Button Animation

Primary button style:

```text
Black background
White text
```

Hover:

```text
White background
Black text
```

Use a subtle fill-wipe animation.

All buttons must have visible keyboard focus states.

---

# 40. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- minimize decorative animations
- remove large transforms
- reduce transition durations
- disable unnecessary motion

Functional interactions must remain clear.

---

# 41. Responsive Design

Design intentionally for:

- desktop
- laptop
- tablet
- mobile

Do not simply shrink the desktop layout.

---

# 42. Desktop

Prioritize:

- large product imagery
- editorial typography
- split layouts
- asymmetric compositions
- generous whitespace

---

# 43. Tablet

Simplify complex layouts while preserving:

- product hierarchy
- typography
- imagery
- navigation
- whitespace

---

# 44. Mobile

Prioritize:

1. Product identity
2. Product image
3. Product information
4. Price
5. Add to Bag
6. Notes/details

Fragrance sections should stack naturally.

Avoid cramped two-column layouts.

---

# 45. Accessibility

Use semantic HTML.

Requirements:

- meaningful image alt text
- proper labels
- keyboard navigation
- visible focus states
- accessible buttons
- correct heading hierarchy
- sufficient color contrast
- accessible form errors
- accessible mobile menu

Do not use `<div>` as a button when `<button>` is appropriate.

---

# 46. Performance

Use:

- optimized images
- WebP where possible
- lazy loading below-the-fold images
- responsive image sizing
- reusable components
- CSS animations where possible

Avoid unnecessary dependencies.

Do not install a library for an effect that can be implemented cleanly with CSS or native browser APIs.

---

# 47. Asset Structure

Use this structure:

```text
public/
└── images/
    ├── logo/
    │   └── hevon-logo.png
    │
    ├── products/
    │   ├── rage/
    │   │   ├── hero.png
    │   │   ├── product.png
    │   │   └── detail.png
    │   │
    │   └── sera/
    │       ├── hero.png
    │       ├── product.png
    │       └── detail.png
    │
    ├── lifestyle/
    │   ├── rage-dark-rock.png
    │   ├── rage-watch-accessories.png
    │   ├── sera-dark-satin.png
    │   └── sera-white-lifestyle.png
    │
    └── brand/
        ├── hevon-scents-architectural.png
        └── hevon-scents-brand-campaign.png
```

Use the actual filenames once the assets are placed in the project.

---

# 48. Technical Architecture

The site must be a real multi-page-feeling React application using client-side routing.

Recommended stack:

```text
React
Vite
React Router
JavaScript / JSX
Plain CSS
Context API
localStorage
```

Do not build the website as one static HTML page.

Do not put the entire application in one component.

Use reusable components and page-level components.

---

# 49. Routes

Recommended:

```text
/
 /shop
 /product/rage
 /product/sera
 /about
 /contact
 /cart
 /404
```

The product pages should use the shared product data structure.

---

# 50. Recommended Components

Use components such as:

```text
Navbar
Footer
Button
ProductCard
ProductGallery
ProductInfo
ProductNotes
FragranceSection
CollectionGrid
ScrollReveal
PageTransition
SearchOverlay
CartDrawer
QuantitySelector
```

Create components only when they provide real reuse or separation of responsibility.

---

# 51. Backend-Ready Architecture

The current project is intentionally frontend-only.

Current architecture:

```text
React
  ↓
Local Product Data
  ↓
Frontend State
  ↓
localStorage Cart
```

Future architecture:

```text
React
  ↓
Backend API
  ↓
Database
  ↓
Products
Orders
Users
Inventory
Payments
```

The UI must not be tightly coupled to the local data source.

Later, `products.js` should be replaceable with API calls without rebuilding the entire interface.

---

# 52. Content Integrity

Never invent real product information.

Do not fabricate:

- fragrance notes
- ingredients
- prices
- reviews
- testimonials
- awards
- certifications
- customer numbers
- sales numbers
- manufacturing claims
- founder information
- shipping promises
- return policies

If information is missing, use a clear placeholder during development.

Example:

```text
[TOP NOTES — ADD VERIFIED DATA]

[HEART NOTES — ADD VERIFIED DATA]

[BASE NOTES — ADD VERIFIED DATA]

[INGREDIENTS — ADD VERIFIED DATA]

[PRICE — ADD VERIFIED DATA]
```

Never present placeholders as facts.

---

# 53. Empty and Error States

Design polished states for:

- empty cart
- no search results
- product not found
- invalid route
- unavailable product
- form validation error

These states should use the same HEVON typography, spacing and monochrome palette.

---

# 54. SEO Basics

Each page should have an appropriate:

- `<title>`
- meta description
- semantic heading structure

Example:

```text
HEVON SCENTS — RAGE Eau de Parfum
```

and:

```text
HEVON SCENTS — SERA Eau de Parfum
```

Do not use misleading SEO keywords.

---

# 55. Product Image Alt Text

Use descriptive alt text.

Examples:

```text
RAGE Eau de Parfum 50 ML by HEVON SCENTS
```

```text
SERA Eau de Parfum 50 ML by HEVON SCENTS
```

Lifestyle images should describe their actual visual content rather than using marketing slogans.

---

# 56. Definition of Done

The website is complete when:

- React/Vite application runs successfully.
- It is a true multi-page-feeling application using routing.
- Homepage works.
- Shop page works.
- RAGE product page works.
- SERA product page works.
- About page works.
- Contact page works.
- Cart page works.
- 404 page works.
- Navigation works on desktop and mobile.
- Search works using local product data.
- RAGE and SERA are represented using their actual names.
- Supplied product images are used.
- Lifestyle imagery is integrated appropriately.
- Product data is separated from components.
- Add to Bag works.
- Quantity controls work.
- Remove item works.
- Cart persists through localStorage.
- Responsive layouts work.
- Contact validation works.
- No fake checkout/payment behavior is presented.
- No unsupported product claims are presented.
- No broken images exist.
- No console errors remain.
- Accessibility basics are implemented.
- Reduced-motion preferences are supported.
- The architecture can later connect to a backend/API.

---

# 57. Final Creative Direction

The final website should feel like:

**Modern fragrance house × fashion editorial × accessible luxury e-commerce.**

The experience should be:

**Minimal.**

**Elegant.**

**Confident.**

**Atmospheric.**

**Functional.**

RAGE should feel darker and more powerful.

SERA should feel lighter and more refined.

But both must unmistakably belong to:

# HEVON SCENTS

The interface should remain primarily black, white and grey.

The products should provide the personality.

The typography should create the editorial character.

The photography should create desire.

The whitespace should create luxury.

The interactions should feel intentional.

The shopping flow should remain simple.

---

# 58. Design Decision Priority

When making design decisions, follow this order:

1. Product authenticity
2. Brand identity
3. Product photography
4. Typography
5. Layout
6. Whitespace
7. Usability
8. Product information
9. Motion
10. Decorative details

Never sacrifice usability for an animation.

Never sacrifice product clarity for decoration.

Never invent product information to fill an empty section.

Never allow the website to become visually busy.

---

# 59. One-Sentence Design Rule

> **Make HEVON SCENTS feel expensive through restraint, make RAGE and SERA feel desirable through photography, and make the website effortless to use.**
