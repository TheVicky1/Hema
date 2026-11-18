# Performance Optimization & Core Web Vitals

HEMA is engineered for maximum speed and zero Cumulative Layout Shift (CLS).

---

## ⚡ Core Web Vitals Focus
1. **Largest Contentful Paint (LCP)**: Inter font preloaded in `index.html`; SVG brand logo embedded inline without external network roundtrips.
2. **Cumulative Layout Shift (CLS)**: `SkeletonCard` placeholders precisely match loaded `DonorCard` heights, guaranteeing CLS of 0.00.
3. **First Input Delay (FID) / Interaction to Next Paint (INP)**: Zero heavy client libraries or bloated runtime frameworks.
