---
name: Warm Growth
colors:
  surface: "#f8f9fa"
  surface-dim: "#d9dadb"
  surface-bright: "#f8f9fa"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f4f5"
  surface-container: "#edeeef"
  surface-container-high: "#e7e8e9"
  surface-container-highest: "#e1e3e4"
  on-surface: "#191c1d"
  on-surface-variant: "#3f4a3c"
  inverse-surface: "#2e3132"
  inverse-on-surface: "#f0f1f2"
  outline: "#6f7a6b"
  outline-variant: "#becab9"
  surface-tint: "#006e1c"
  primary: "#006e1c"
  on-primary: "#ffffff"
  primary-container: "#4bae4f"
  on-primary-container: "#003b0b"
  inverse-primary: "#78dc77"
  secondary: "#735c00"
  on-secondary: "#ffffff"
  secondary-container: "#fdd34d"
  on-secondary-container: "#725b00"
  tertiary: "#286b33"
  on-tertiary: "#ffffff"
  tertiary-container: "#65a969"
  on-tertiary-container: "#003b11"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#94f990"
  primary-fixed-dim: "#78dc77"
  on-primary-fixed: "#002204"
  on-primary-fixed-variant: "#005313"
  secondary-fixed: "#ffe087"
  secondary-fixed-dim: "#ebc23e"
  on-secondary-fixed: "#241a00"
  on-secondary-fixed-variant: "#574500"
  tertiary-fixed: "#abf4ac"
  tertiary-fixed-dim: "#90d792"
  on-tertiary-fixed: "#002107"
  on-tertiary-fixed-variant: "#07521d"
  background: "#f8f9fa"
  on-background: "#191c1d"
  surface-variant: "#e1e3e4"
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 40px
    fontWeight: "700"
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
  title-md:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 40px
---

## Brand & Style

The design system centers on a "Modern Cozy" aesthetic, blending the reliability of financial management with the warmth of a shared family home. It targets families who want to manage wealth without the cold, clinical feel of traditional banking apps.

The visual style is a hybrid of **Minimalism** and **Soft Modernism**. It prioritizes high legibility and spaciousness while using organic shapes and subtle depth to evoke an emotional response of safety, optimism, and togetherness. The interface should feel like a well-organized digital kitchen—clean, functional, but deeply personal.

## Colors

This design system utilizes a palette that balances financial vitality with domestic warmth.

- **Primary (Sage Green):** Used for primary actions, growth indicators, and successful budget status. It is soft enough to feel natural but saturated enough to imply financial health.
- **Secondary (Sunlight Yellow):** Used sparingly as an accent for highlights, "happy path" achievements, and family-centric notifications.
- **Neutral Palette:** Employs "Porcelain White" for main surfaces and "Light Slate" for borders and inactive states to maintain a high-end, professional finish.
- **Semantic Colors:** Success is tied to the primary green, while warnings use a soft terracotta rather than a harsh red to maintain the "cozy" atmosphere.

## Typography

The system uses **Be Vietnam Pro** exclusively to ensure excellent Vietnamese diacritic rendering and a friendly, contemporary character.

- **Headlines:** Use Bold weights with tight letter spacing for a confident, grounded look.
- **Body Text:** Use Regular weight for high readability in transaction lists.
- **Numerical Data:** For currency and balances, use Semibold weights to ensure financial figures are the focal point of any view.
- **Scaling:** Large display sizes must scale down by roughly 25-30% on mobile devices to prevent awkward text wrapping in currency displays.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous safe areas to prevent a cluttered feel.

- **Rhythm:** A 4px baseline grid governs all vertical rhythm.
- **Mobile:** 4-column layout with 20px side margins. Cards usually span full width or appear in 2-column carousels.
- **Desktop:** 12-column centered layout with a maximum content width of 1200px.
- **Padding:** Containers (Cards) should use `lg` (24px) padding to create a sense of airiness and luxury.

## Elevation & Depth

Depth is created through **Tonal Layering** supplemented by **Ambient Shadows**.

- **Level 0 (Base):** The neutral background (#F8F9FA).
- **Level 1 (Cards):** Pure white surfaces with a very soft, diffused shadow (Offset: 0, 4px; Blur: 20px; Opacity: 4% Black).
- **Level 2 (Interactive):** Elements like "Quick Entry" buttons use a slightly more pronounced shadow (8% Opacity) to suggest they sit higher and are ready to be pressed.
- **Interactions:** On hover or press, shadows should "compress" (shrink), mimicking a physical button being pushed into a soft surface.

## Shapes

The shape language is defined by significant **Roundedness** to maintain the "cozy" and "approachable" brand promise.

- **Standard Elements:** Buttons and small input fields use `rounded` (0.5rem).
- **Containers:** Content cards and family profile sections use `rounded-lg` (1rem).
- **Specialty Components:** Progress bar tracks and "Quick Entry" floating action buttons use `rounded-xl` (1.5rem) or full pill shapes to emphasize their friendly, tactile nature.

## Components

- **Buttons:** Primary buttons use the Green palette with white text. High-priority "Quick Entry" buttons should be oversized with an icon + text pairing.
- **Cards (Family Members):** Use a vertical layout with a circular avatar at the top, a title-md name, and a body-sm "spent" amount.
- **Progress Bars:** Use a thick (8px) height with fully rounded caps. The track is a 10% opacity version of the primary color, while the fill is the solid primary green.
- **Input Fields:** Use a light grey fill with no border in their default state. Upon focus, they transition to a white background with a 2px primary green border.
- **Chips:** For expense categories (e.g., "Food", "Rent"), use low-contrast backgrounds (tinted versions of the category icon color) with dark text to ensure the UI remains calm.
- **Icons:** Use "Lineal-Rounded" icons. Avoid sharp corners or thin 1px lines; a 2px stroke width is preferred for a friendlier, more substantial look.
