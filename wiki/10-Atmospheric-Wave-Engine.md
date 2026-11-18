# Atmospheric Wave Engine

The visual signature of HEMA is a luxury atmospheric canvas featuring floating radial gradient wave orbs and fixed dot-grid textures.

---

## 🌊 Technical Architecture

- **Component**: `src/components/WaveBackground.jsx`
- **Variants**:
  - `hero`: 3 floating ambient orbs + SVG flowing boundary wave curves.
  - `subtle`: 2 scaled ambient orbs for inner page heroes.
- **Keyframe Drift**:
  - `waveFloat1`: 14s alternate ease-in-out drift.
  - `waveFloat2`: 18s alternate ease-in-out drift.
  - `waveFloat3`: 20s alternate ease-in-out drift.
- **Dot-Grid Canvas**: Fixed 32px radial dot matrix on the `<body>` element providing atmospheric depth.
