# Atmospheric Wave Canvas Engine

The visual signature of HEMA is its subtle, fluid crimson wave backdrop that creates depth without causing distraction or layout shifts.

---

## 🌊 Architecture & Keyframes

The wave engine is implemented in `src/components/WaveBackground.jsx` with pure CSS hardware acceleration.

```css
@keyframes float {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(20px, -25px, 0) scale(1.05);
  }
}

@keyframes waveShift {
  0% { transform: translateX(0); }
  50% { transform: translateX(-40px); }
  100% { transform: translateX(0); }
}
```

---

## ⚡ Performance & Accessibility Optimizations

1. **Hardware Acceleration**: Animations utilize `transform: translate3d()` to leverage the GPU compositor thread, guaranteeing zero main-thread jank.
2. **Pointer Events Disabled**: Background canvas elements have `pointer-events: none` to prevent interference with click and scroll interactions.
3. **Reduced Motion Support**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .wave-layer, .ambient-orb {
       animation: none !important;
       transform: none !important;
     }
   }
   ```
