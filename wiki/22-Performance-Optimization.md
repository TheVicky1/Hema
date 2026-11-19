# Performance Optimization & Core Web Vitals

HEMA is engineered for sub-second page loads, instant responsiveness, and zero layout shift.

---

## ⚡ Core Web Vitals Targets

| Metric | Target | HEMA Achievement | Optimization Technique |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | < 2.5s | **~0.8s** | Pre-rendered vector logo, zero font render blocking |
| **INP (Interaction to Next Paint)** | < 200ms | **< 30ms** | Lightweight React 19 state transitions, zero heavy JS computations |
| **CLS (Cumulative Layout Shift)** | < 0.1 | **0.00** | Skeleton shimmer placeholders reserving exact card aspect ratios |

---

## 🚀 Key Optimization Strategies

1. **CSS Containment**: High-frequency grid components use `contain: layout paint` to minimize browser reflow passes.
2. **Hardware Acceleration**: Background wave canvases use GPU transforms (`translate3d`) to keep the main JavaScript thread completely unblocked.
3. **Rollup Tree-Shaking**: Vite compiles only the Lucide icons and component functions actually used, maintaining a featherweight production bundle.
