---
name: Diseño Verde Brand System
colors:
  surface: "#ebffe5"
  surface-dim: "#9eed9b"
  surface-bright: "#ebffe5"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#d4ffce"
  surface-container: "#baffb5"
  surface-container-high: "#acfba8"
  surface-container-highest: "#a6f5a3"
  on-surface: "#002105"
  on-surface-variant: "#404942"
  inverse-surface: "#00390d"
  inverse-on-surface: "#c8ffc2"
  outline: "#707972"
  outline-variant: "#bfc9c0"
  surface-tint: "#256a4a"
  primary: "#004229"
  on-primary: "#ffffff"
  primary-container: "#105b3c"
  on-primary-container: "#8bd1a9"
  inverse-primary: "#90d5ae"
  secondary: "#416900"
  on-secondary: "#ffffff"
  secondary-container: "#baf076"
  on-secondary-container: "#446e00"
  tertiary: "#343d00"
  on-tertiary: "#ffffff"
  tertiary-container: "#4a550d"
  on-tertiary-container: "#bcca76"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#abf2c9"
  primary-fixed-dim: "#90d5ae"
  on-primary-fixed: "#002112"
  on-primary-fixed-variant: "#005234"
  secondary-fixed: "#bdf378"
  secondary-fixed-dim: "#a2d65f"
  on-secondary-fixed: "#102000"
  on-secondary-fixed-variant: "#2f4f00"
  tertiary-fixed: "#dcea93"
  tertiary-fixed-dim: "#c0ce7a"
  on-tertiary-fixed: "#191e00"
  on-tertiary-fixed-variant: "#414c03"
  background: "#ebffe5"
  on-background: "#002105"
  surface-variant: "#a6f5a3"
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Poppins
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 36px
  title-md:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-sm:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
    letterSpacing: 0.01em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  container-padding-mobile: 20px
  container-padding-desktop: 80px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style

This design system is built for a landscaping and environmental design firm, emphasizing a "Clean, Professional, and Natural" aesthetic. The brand personality is grounded and expert yet deeply connected to organic growth.

The visual style follows a **Modern / Corporate** approach with a strong **Minimalist** foundation. It prioritizes clarity and breathability (whitespace) to reflect the openness of outdoor spaces. Large, high-resolution nature photography should be paired with these tokens to ground the digital experience in physical reality. The interface aims to evoke a sense of tranquility, reliability, and environmental stewardship.

## Colors

The palette is derived directly from botanical tones, using a deep evergreen as the primary anchor for professionalism and authority.

- **Primary (#105b3c):** Used for headers, primary buttons, and critical branding elements. It provides the necessary contrast against the white background.
- **Secondary (#7eb03e):** A vibrant grass green used for active states, success indicators, and highlighting growth-related features.
- **Tertiary (#c7d580):** A soft, sun-drenched lime used for subtle backgrounds, secondary chips, or decorative elements.
- **Neutral Green (#2e7835):** Used for supporting UI elements like icons or borders where a softer touch than the primary dark green is required.
- **Background:** Strictly white (#ffffff) to ensure a clean, high-end editorial feel that allows the greenery of the photography and the brand colors to pop.

## Typography

We use **Poppins** across all levels to maintain a friendly, contemporary, and approachable feel. The typeface’s soft curves echo the organic shapes found in nature while remaining highly legible for professional services.

- **Headlines:** Use Bold or Semi-Bold weights with slight negative letter-spacing for a premium, "designed" look.
- **Body:** Standard weight at 16px or 18px ensures comfortable reading of service descriptions and blog content.
- **Labels:** Medium weight is used for buttons and navigation to provide clear functional cues.

## Layout & Spacing

The design system utilizes a **Fluid Grid** with generous inner margins to prevent content from feeling crowded.

- **Desktop:** A 12-column grid with 80px side margins. Large gaps between sections (120px) reinforce the minimalist, "clean" brand style.
- **Mobile:** A 4-column grid with 20px side margins.
- **Rhythm:** All spacing (padding, margins) must be a multiple of the 8px base unit to ensure visual harmony and mathematical consistency.

## Elevation & Depth

To maintain a "natural and clean" look, this system avoids heavy shadows. Instead, it uses:

- **Low-Contrast Outlines:** Subtle 1px borders using a very light version of the Neutral Green or a light gray to define cards and containers.
- **Tonal Layering:** Using the Tertiary color (#c7d580) at low opacities (e.g., 10%) as a background fill to differentiate sections without adding visual weight.
- **Flat Depth:** Hierarchy is established through size, color intensity, and generous whitespace rather than simulated 3D depth.

## Shapes

The shape language is the primary differentiator of this design system. Following the specific requirement for **24px border-radius**, the system adopts a highly rounded, organic feel that mimics the contours of leaves and landscape beds.

- **Containers & Buttons:** All interactive and containment elements must use the 24px radius.
- **Images:** Photography should also feature rounded corners to blend seamlessly with the UI.
- **Icons:** Use rounded icon sets (e.g., Lucide Rounded) to match the curvature of the containers.

## Components

### Buttons

Primary buttons use the Dark Green (#105b3c) background with white text and a 24px corner radius. Padding should be generous (16px top/bottom, 32px left/right) to create a "pill-like" substantial feel. Secondary buttons use the Secondary Green (#7eb03e) for softer actions.

### Cards

Cards are white with a 1px stroke in a muted green-gray. They must feature the 24px corner radius. Content inside should have at least 32px of internal padding to maintain the "clean" aesthetic.

### Input Fields

Fields should have a light background (Tertiary at 5% opacity) and a 24px corner radius. The focus state should utilize a 2px stroke of the Primary color.

### Chips/Tags

Used for "Plant Types" or "Service Categories," these should be small, fully pill-shaped (using the 24px radius), and utilize the Tertiary color for the background with Dark Green text.

### Image Galleries

Landscaping is a visual business. Use a masonry or clean grid layout for projects, ensuring every image has the system-standard 24px radius to feel integrated into the brand.
