---
name: Vintage Scrapbook & Editorial Collage
colors:
  surface: '#fff9e8'
  surface-dim: '#e1daba'
  surface-bright: '#fff9e8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf4d3'
  surface-container: '#f6eecd'
  surface-container-high: '#f0e9c8'
  surface-container-highest: '#eae3c2'
  on-surface: '#1f1c08'
  on-surface-variant: '#504441'
  inverse-surface: '#34311b'
  inverse-on-surface: '#f9f1d0'
  outline: '#837470'
  outline-variant: '#d5c3be'
  surface-tint: '#7a564c'
  primary: '#30160f'
  on-primary: '#ffffff'
  primary-container: '#482a22'
  on-primary-container: '#bb9085'
  inverse-primary: '#ebbcb0'
  secondary: '#5f5f57'
  on-secondary: '#ffffff'
  secondary-container: '#e4e3d9'
  on-secondary-container: '#65655d'
  tertiary: '#271b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#412f00'
  on-tertiary-container: '#b99547'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ebbcb0'
  on-primary-fixed: '#2e140d'
  on-primary-fixed-variant: '#603e36'
  secondary-fixed: '#e4e3d9'
  secondary-fixed-dim: '#c8c7bd'
  on-secondary-fixed: '#1b1c16'
  on-secondary-fixed-variant: '#474740'
  tertiary-fixed: '#ffdf9f'
  tertiary-fixed-dim: '#e9c16f'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#fff9e8'
  on-background: '#1f1c08'
  surface-variant: '#eae3c2'
  espresso-dark: '#361E18'
  butter: '#F9F5D7'
  ink: '#3D231C'
  chrome-metal: '#C4C4C4'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Space Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

# Design System: Vintage Scrapbook & Editorial Collage
**Project:** Portfolio Sopi Fadhillah Nur Azizah  
**Role:** Informatics Engineering Student · CAD Structural Drafter & Construction Site Inspector  
**Version:** 1.0.0 · 2026  

---

## 1. Overview & Brand Personality
Design system ini menggabungkan presisi teknis keteknikan (CAD drafter & pengawasan konstruksi) dengan estetika hangat, taktil, dan terkurasi dari **Vintage Scrapbook & Editorial Collage**. 

### Brand Attributes & Keywords
- **Warm & Organic:** Nuansa kertas cokelat espresso, krem butter, dan tekstur bergaris/grid.
- **Editorial & Scholarly:** Tipografi klasik serif dengan hierarki tajam ala majalah arsitektur/editorial lawas.
- **Tactile Craft:** Komponen fisik seperti klip kertas binder logam (*chrome binder clip*), pita selotip bermotif (*patterned washi tape*), stiker bintang emas, stiker potongan huruf, dan bingkai polaroid.
- **Precision & Structure:** Metadata berjarak lebar, kode batang (*barcode*), denah grid 36px, dan lembar spesifikasi teknis (*spec-sheet*).

---

## 2. Color Palette & Design Tokens

```css
:root {
  /* Surface & Background Colors */
  --espresso: #482A22;          /* Deep warm chocolate brown background */
  --espresso-dark: #361E18;     /* Darker brown for deep borders & shadows */
  --cream: #F6F4EA;             /* Warm off-white paper canvas */
  --butter: #F9F5D7;            /* Sticky note, badge, and card cream */
  --sage-sand: #DFD8B8;         /* Muted warm olive-cream for alternating sections */

  /* Text & Ink Colors */
  --ink: #3D231C;               /* Primary text color (deep espresso, never harsh black) */
  --ink-soft: rgba(61, 35, 28, 0.72); /* Secondary body text */
  --ink-muted: rgba(61, 35, 28, 0.45); /* Captions, fine print, subtle labels */
  --cream-text: #F6F4EA;        /* Text on espresso/dark backgrounds */
  --cream-soft: rgba(246, 244, 234, 0.82);

  /* Accent & Material Details */
  --gold-star: #A68438;         /* Antique brass/gold for decorative star stickers */
  --chrome-metal: #C4C4C4;      /* Highlights for binder clips and wireframes */

  /* Paper Grid Line Tokens */
  --grid-light: rgba(255, 255, 255, 0.12); /* Subtle grid on dark espresso background */
  --grid-dark: rgba(72, 42, 34, 0.08);     /* Subtle drafting grid on cream/sage background */

  /* Motion & Elevation */
  --ease: cubic-bezier(0.25, 0.8, 0.25, 1);
  --shadow-sm: 0 4px 12px rgba(72, 42, 34, 0.08);
  --shadow-md: 0 12px 28px rgba(72, 42, 34, 0.12);
  --shadow-lg: 0 24px 48px rgba(0, 0, 0, 0.35);
  --shadow-polaroid: 0 18px 36px rgba(0, 0, 0, 0.28);
}
```

---

## 3. Typography Scale & Font Pairings

### Font Families
1. **Editorial Serif:** `'Cormorant Garamond'`, `'Playfair Display'`, serif
2. **Handwritten Script:** `'Caveat'`, `'Dancing Script'`, cursive
3. **Structured Sans & Mono:** `'Plus Jakarta Sans'`, `'Space Mono'`, monospace, sans-serif

---

## 4. Textures & Background Patterns

### Drafting Grid Paper
Grid 36px x 36px untuk memperkuat nuansa kertas grafik keteknikan dan buku catatan.
- `.bg-espresso-grid`: Espresso background with subtle light grid.
- `.bg-cream-grid`: Warm cream background with subtle dark drafting grid.
- `.bg-sage-grid`: Sage sand background with subtle drafting grid.

---

## 5. Signature Scrapbook Components
1. **Metallic Binder Clip (`.binder-clip`)**: Klip perak krom di atas kartu memo/foto.
2. **Patterned Washi Tape (`.washi-tape`)**: Pita selotip bermotif cokelat espresso menempel di atas sticky note.
3. **Decorative Gold Star Stickers (`.star-sticker`)**: Bintang 4-point/5-point warna emas antik.
4. **Magazine Letter Cutouts**: Stiker lingkaran espresso gelap bertuliskan huruf krem tebal "S-O-P-I".
5. **Polaroid Frame (`.polaroid`)**: Bingkai foto retro dengan bayangan tebal.
6. **Technical Barcode Strip**: Garis barcode rapi dengan kode serial teknis.
