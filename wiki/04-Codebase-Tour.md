# Codebase Tour & Directory Structure

A guided tour of the HEMA repository structure, conventions, and file responsibilities.

---

```text
Hema/
├── .github/                   # CI/CD workflows, issue templates, dependabot
│   ├── ISSUE_TEMPLATE/        # Bug report and feature request templates
│   └── workflows/             # ci.yml, dependency-audit.yml, welcome-contributor.yml
├── public/                    # Static assets (hema-logo.svg, hema-logo.png)
├── src/
│   ├── components/            # Reusable UI component library
│   │   ├── DonorCard.jsx      # Donor profile card
│   │   ├── DonorModal.jsx     # Detailed contact modal dialog
│   │   ├── Footer.jsx         # 4-column footer
│   │   ├── HemaLogo.jsx       # Scalable SVG brand mark
│   │   ├── Navbar.jsx         # 72px header with active underline
│   │   ├── ScrollToTop.jsx    # Route scroll reset helper
│   │   ├── SkeletonCard.jsx   # Shimmer loading placeholder
│   │   ├── StatsBar.jsx       # Live network metrics bar
│   │   ├── ToastContainer.jsx # Decoupled notification system
│   │   └── WaveBackground.jsx # Atmospheric floating wave canvas
│   ├── context/
│   │   └── DonorContext.jsx   # Global state store & dispatch actions
│   ├── pages/
│   │   ├── AboutPage.jsx      # Mission, story, and values
│   │   ├── BecomeDonorPage.jsx# Registration form with validation
│   │   ├── DonorsPage.jsx     # Full directory with live filters
│   │   ├── HomePage.jsx       # Hero, stats, process preview, CTA
│   │   ├── HowItWorksPage.jsx # 5-step timeline and FAQ accordion
│   │   └── NotFoundPage.jsx   # 404 fallback page
│   ├── App.css                # Component styling, animations, media queries
│   ├── App.jsx                # React Router v7 routes declaration
│   ├── index.css              # Design tokens, themes, CSS reset, typography
│   └── main.jsx               # Application DOM mount
├── scratch/                   # CI scripts (secret-scan, check-links, dependency-health)
├── docs/                      # Canonical technical documentation
├── wiki/                      # Complete Markdown documentation wiki
├── index.html                 # HTML shell with Inter font preloading
├── package.json               # Dependencies and build scripts
└── vite.config.js             # Vite 7 build configuration
```
