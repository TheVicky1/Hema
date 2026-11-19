# Design System & CSS Tokens

HEMA utilizes a custom tokenized CSS architecture that supports seamless light/dark mode transitions, accessible contrast, and fluid typography.

---

## 🎨 Color Tokens & Palette

### Primary Crimson Brand Tokens
- **Brand Crimson**: `#E11D48` (Primary CTA, logos, and critical accents)
- **Brand Crimson Hover**: `#BE123C`
- **Brand Rose**: `#FB7185`
- **Brand Muted Tint**: `rgba(225, 29, 72, 0.08)`

### Theme Palettes

| Token | Light Theme Value | Dark OLED Theme Value | Purpose |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `#FFFFFF` | `#0C0C0C` | Root page background |
| `--bg-card` | `#F8FAFC` | `#171717` | Card and panel surfaces |
| `--bg-card-hover` | `#F1F5F9` | `#202020` | Hover elevation states |
| `--text-primary` | `#0F172A` | `#F8FAFC` | Primary headlines and labels |
| `--text-muted` | `#64748B` | `#94A3B8` | Secondary descriptive copy |
| `--border-color` | `#E2E8F0` | `#262626` | Card and divider boundaries |
| `--accent-color` | `#E11D48` | `#E11D48` | Interactive buttons and pills |

---

## 📐 Typography & Grid Scale

- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Base Grid**: 4px base increment (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
- **Navigation Height**: Exactly `72px` vertically centered
- **Border Radius Hierarchy**:
  - Small Pills: `9999px` (full rounded)
  - Cards: `12px`
  - Modals: `16px`
  - Inputs & Buttons: `8px`
