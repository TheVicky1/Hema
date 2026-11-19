# HEMA - Design System & Token Specifications

This document defines the visual design system, color palette tokens, typography scales, atmospheric wave mechanics, and accessibility rules for the **HEMA** platform.

---

## 🎨 Color Tokens

### Light Theme
- `--color-primary`: `#C9192C` (Rich crimson)
- `--color-primary-light`: `#E8384A`
- `--color-primary-dark`: `#A01020`
- `--color-primary-subtle`: `#FEF2F2`
- `--color-bg`: `#FFFFFF`
- `--color-bg-secondary`: `#F7F7F8`
- `--color-surface`: `#FFFFFF`
- `--color-text-primary`: `#0F0F0F`
- `--color-text-secondary`: `#3D3D3D`
- `--color-text-muted`: `#6B6B6B`
- `--color-available`: `#15803D`
- `--color-available-bg`: `#F0FDF4`

### Dark Theme (`[data-theme="dark"]`)
- `--color-primary`: `#E02D40`
- `--color-primary-light`: `#F04455`
- `--color-primary-subtle`: `#2A0810`
- `--color-bg`: `#0C0C0C` (OLED Obsidian)
- `--color-bg-secondary`: `#161616`
- `--color-surface`: `#161616`
- `--color-surface-elevated`: `#1E1E1E`
- `--color-border`: `#2B2B2B`
- `--color-text-primary`: `#F0F0F0`
- `--color-text-secondary`: `#A8A8A8`
- `--color-text-muted`: `#686868`
- `--color-available`: `#22C55E`
- `--color-available-bg`: `#052E16`

---

## 🌊 Atmospheric Wave Background

- **Orbs**: `wave-orb-1`, `wave-orb-2`, `wave-orb-3` using radial gradient blobs with `filter: blur(80px)`.
- **Animations**: `waveFloat1`, `waveFloat2`, `waveFloat3` with alternating easing curves.
- **Dot-Grid**: 32px fixed radial dot matrix on body background.

---

## 🔤 Typography & Metrics

- **Primary Font**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
- **Navbar Height**: `72px` (vertically centered flexbox layout)
- **Active Nav Indicator**: 2px bottom underline in `--color-primary`

