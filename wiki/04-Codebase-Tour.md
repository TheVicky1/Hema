# Codebase Tour & Directory Structure

A comprehensive guide to every file and folder in the HEMA repository.

---

## 📁 Repository Layout

```
Hema/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI quality gate
├── public/
│   ├── favicon.ico              # Browser tab icon
│   ├── hema-logo.png            # Crimson brand logo (transparent PNG)
│   └── hema-logo.svg            # Clean vector SVG logo
├── src/
│   ├── assets/                  # Static assets and icons
│   ├── components/              # Modular UI components
│   │   ├── DonorCard.jsx        # Individual donor preview card
│   │   ├── DonorModal.jsx       # Detailed profile modal dialog
│   │   ├── Footer.jsx           # Site-wide navigation footer
│   │   ├── HemaLogo.jsx         # Cohesive inline SVG brand logo
│   │   ├── Navbar.jsx           # 72px navigation bar and drawer
│   │   ├── ScrollToTop.jsx      # Route change scroll restoration
│   │   ├── SkeletonCard.jsx     # Zero-CLS loading shimmer card
│   │   ├── StatsBar.jsx         # Live reactive network statistics
│   │   ├── ToastContainer.jsx   # Global floating toast container
│   │   └── WaveBackground.jsx   # Atmospheric background canvas
│   ├── context/                 # Application state
│   │   ├── context.js           # React Context declaration
│   │   ├── DonorContext.jsx     # Data provider & request dispatch
│   │   └── useDonors.js         # Custom consumption hook
│   ├── pages/                   # Application route pages
│   │   ├── AboutPage.jsx        # Project mission and core values
│   │   ├── BecomeDonorPage.jsx  # Self-service registration form
│   │   ├── DonorsPage.jsx       # Search & filter donor directory
│   │   ├── HomePage.jsx         # Landing page and call to action
│   │   ├── HowItWorksPage.jsx   # 5-step process and FAQ accordion
│   │   └── NotFoundPage.jsx     # 404 error fallback screen
│   ├── utils/
│   │   └── toast.js             # Decoupled toast event emitter
│   ├── App.css                  # Global component layout styles
│   ├── App.jsx                  # Root router shell and theme provider
│   ├── index.css                # CSS custom property tokens
│   └── main.jsx                 # React 19 DOM entrypoint
├── index.html                   # HTML template and meta tags
├── package.json                 # Project dependencies and npm scripts
├── vercel.json                  # Vercel SPA rewrites and caching
└── vite.config.js               # Vite build configuration
```

---

## 🧩 Key Component Responsibilities

| Component | Responsibility | Props / Hook Dependencies |
| :--- | :--- | :--- |
| `AppShell` | Coordinates Navbar, Main View, Footer, and Toast Container | `darkMode`, `setDarkMode`, `useDonors` |
| `Navbar` | Renders navigation links, active indicator, and mobile menu | `darkMode`, `setDarkMode`, `liveCount` |
| `DonorCard` | Presents summary profile, availability badge, and modal trigger | `donor`, `onSelect` |
| `DonorModal` | Modal view with donation history, masked contact info, and request action | `donor`, `onClose`, `onRequest` |
| `StatsBar` | Displays total donors, active donors, and available blood types | Derived directly from `donors` state |
| `ToastContainer` | Subscribes to toast events and renders dismissing toast stack | Subscribes to `toast.js` listener |
| `WaveBackground` | Injects atmospheric floating crimson orbs and wave layers | Self-contained CSS module |
