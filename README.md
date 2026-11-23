<div id="top"></div>

<div align="center">

<img src="./public/hema-logo.svg" alt="HEMA Blood Donor Network" width="88" height="96" />

# HEMA - Community Blood Donor Network

**Connecting Lifesavers with Those in Critical Need.**  
*Find the Right Donor. Save a Life Today.*

<br />

[![Live App](https://img.shields.io/badge/Live_App-hema--blood.vercel.app-E11D48.svg?style=for-the-badge&logo=vercel&logoColor=white&color=E11D48)](https://hema-blood.vercel.app)
[![CI](https://github.com/TheVicky1/Hema/actions/workflows/ci.yml/badge.svg)](https://github.com/TheVicky1/Hema/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-E11D48.svg?style=for-the-badge)](LICENSE)
[![Hacktoberfest 2026](https://img.shields.io/badge/Hacktoberfest-2026-ff79c6.svg?style=for-the-badge&logo=hacktoberfest&logoColor=white)](https://hacktoberfest.com/)
[![Good First Issues](https://img.shields.io/github/issues/TheVicky1/Hema/good%20first%20issue?style=for-the-badge&color=7057ff&label=Good%20First%20Issues)](https://github.com/TheVicky1/Hema/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
[![First Timers Only](https://img.shields.io/badge/First--Timers--Only-Friendly-7057ff.svg?style=for-the-badge)](https://www.firsttimersonly.com/)
[![Up For Grabs](https://img.shields.io/badge/Up--For--Grabs-Listed-00b0ff.svg?style=for-the-badge)](https://up-for-grabs.net/)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-0e8a16.svg?style=for-the-badge)](docs/CONTRIBUTING.md)
[![React](https://img.shields.io/badge/React-19.2-050505.svg?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.3-050505.svg?style=for-the-badge&logo=vite&logoColor=646CFF)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-050505.svg?style=for-the-badge&logo=reactrouter&logoColor=CA4245)](https://reactrouter.com/)
[![Lucide](https://img.shields.io/badge/Lucide-Icons-050505.svg?style=for-the-badge&logo=lucide&logoColor=F56565)](https://lucide.dev/)

<br />

> 🌐 **Live Production Deployment**: Experience HEMA live in action at **[https://hema-blood.vercel.app](https://hema-blood.vercel.app)**  
> 🩸 **Emergency Blood Network**: Real-time donor matching, live availability status, and one-click contact requests.

<br />

[Live Demo](https://hema-blood.vercel.app) · [About](#about) · [Quick Start](#quick-start) · [Core Features](#core-features) · [Architecture](#architecture) · [Documentation](#documentation) · [Contributing](#open-source--contributing) · [Hall of Fame](#contributors--community)

</div>

---

<div align="center">
  <h2>About</h2>
</div>

Every two seconds, an individual somewhere in the world requires an urgent blood transfusion. Yet critical emergency operations routinely suffer from **fragmented donor databases**, **stale contact records**, and **bureaucratic friction** during the golden hour when every minute counts.

**Blood cannot be manufactured. Human connection is the only cure.**

**HEMA** is an open-source, community-driven **Blood Donor Platform** built with **React 19**, **Vite 7**, **React Router v7**, and **Lucide React** to bridge the critical gap between blood donors and patients facing medical emergencies. Rather than functioning as a passive contact spreadsheet, HEMA delivers an active, real-time coordination system unifying instant blood type filtering, verified location searching, live donor availability status, accessible profile inspections, and friction-free donor requests.

### Foundational Principles

1. **Zero-Friction Emergency Dispatch**: Blood requests are dispatched with a single click without forcing patients or families through mandatory account registrations, paywalls, or complex forms.
2. **Temporal Availability**: Real-time availability badges differentiate between active volunteers ready to donate today and off-duty donors who recently completed a donation cycle.
3. **Privacy-First Data Architecture**: Donor contact credentials remain protected and are only exchanged during an active, confirmed donation coordination workflow.
4. **Minimalist Executive Aesthetic**: An ultra-clean interface pairing a rich crimson brand palette with fluid wave atmospheric backgrounds and WCAG AA accessible contrast.
5. **Open Source & Beginner Friendly**: Designed as a welcoming hub for first-time open-source contributors with modular single-file components, zero-database local setup, and fast-track PR reviews.

---

<div align="center">
  <h2>Quick Start</h2>
</div>

### Prerequisites

- **Node.js**: `v20.x` or higher (LTS recommended)
- **Package Manager**: `npm` (v10+)
- **Git**: Installed and configured

### Local Setup

```bash
# 1. Clone your fork or the repository
git clone https://github.com/TheVicky1/Hema.git
cd Hema

# 2. Install reproducible dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to access HEMA.

### Validation & Quality Gates

Run the verification suite prior to committing changes:

```bash
# Run ESLint quality audit
npm run lint

# Run production build compilation
npm run build

# Run local production preview server
npm run preview
```

---

<div align="center">
  <h2>Core Features</h2>
</div>

HEMA is composed of 12 integrated systems operating under a cohesive, responsive interface:

| System | Capabilities | Status |
| :--- | :--- | :--- |
| **Command Navigation** | 72px vertically centered header, sleek active underline indicator, theme switch, live counter pill, and responsive mobile drawer. | Available |
| **Atmospheric Wave Canvas** | Floating radial crimson ambient orbs, curved SVG boundary waves, and 32px fixed dot-grid canvas texture. | Available |
| **Live Donor Directory** | Real-time multi-criteria filtering by blood group pills (A+, A-, B+, B-, AB+, AB-, O+, O-), city search, clear search button, and availability. | Available |
| **Interactive Donor Cards** | Initials avatar badges, blood group pills, city tags, live availability status, and quick request action buttons. | Available |
| **Accessible Donor Modal** | Spring-animated dialog with keyboard Escape dismiss, backdrop click close, body scroll-lock, and detailed donor contact credentials. | Available |
| **Live Network Statistics** | Real-time metric strip showcasing total registered donors, available lifesavers, and unique blood group coverage. | Available |
| **Instant Request Dispatch** | One-click emergency contact notification with optimistic state updates and persistent request history tracking. | Available |
| **Donor Registration Workflow** | Self-contained donor registration form with client-side field validation, instant error feedback, and donation benefits column. | Available |
| **Process Walkthrough** | 5-step detailed timeline from initial search to hospital coordination, accompanied by an interactive FAQ accordion. | Available |
| **Toast Notification Bus** | Global auto-dismissing toast notifications for request confirmations, registration success, and system alerts. | Available |
| **Dual Theme System** | Pure white light theme and deep OLED dark theme (`#0C0C0C`) with automatic transition smoothing. | Available |
| **Shimmer Skeleton Loading** | Layout-stable shimmer skeleton cards preventing Cumulative Layout Shift (CLS) during asynchronous data fetching. | Available |

---

<div align="center">
  <h2>Visual Identity & Design Philosophy</h2>
</div>

HEMA features a distinctive visual language designed for clarity, reassurance, and emergency focus:

- **Canvas Foundation**: Pure crisp white (`#FFFFFF`) in light mode and deep OLED Obsidian (`#0C0C0C`, `#161616`) in dark mode eliminating visual fatigue.
- **Rich Crimson Primary**: Brand crimson (`#E11D48`) paired with gentle translucent tinted surfaces (`rgba(225, 29, 72, 0.08)`).
- **Atmospheric Wave Background**: Soft radial gradient orbs animated with fluid, hardware-accelerated keyframe drifts.
- **Delicate Dot-Grid Texture**: Fixed 32px radial dot matrix on the body canvas providing depth without interface clutter.
- **Custom Scalable SVG Emblem**: Blood drop silhouette, white medical cross, and cupped hand contour rendered with pristine vector geometry.

> For complete guidelines, typography scales, and token values, see the [Design System Specification](docs/DESIGN_SYSTEM.md).

---

<div align="center">
  <h2>Architecture</h2>
</div>

HEMA enforces a clean, modular component architecture:

```
+-------------------------------------------------------------+
|                Client Layer (React 19 / UI)                 |
|  - 72px Centered Navbar     - Atmospheric Wave Canvas       |
|  - Active Underline Nav     - Responsive Mobile Drawer      |
+-------------------------------------------------------------+
                               |
                    React Router DOM (v7)
                               |
+-------------------------------------------------------------+
|               Page Modules (src/pages/)                     |
|  - HomePage                 - DonorsPage (Filter Directory) |
|  - BecomeDonorPage          - HowItWorksPage (FAQ Accordion)|
|  - AboutPage (Story/Values) - NotFoundPage (404 Fallback)   |
+-------------------------------------------------------------+
                               |
                    Context & State Layer
                               |
+-------------------------------------------------------------+
|              State Management (src/context/)                |
|  - DonorProvider Context    - Optimistic Request Actions    |
|  - Filter & Search State    - Session Request Persistence   |
+-------------------------------------------------------------+
                               |
                    Mock Data & API Services
                               |
+-------------------------------------------------------------+
|               Data Layer (JSONPlaceholder / Mock)           |
|  - Augmented Donor Profiles - Blood Group Compatibility     |
|  - City Geolocation Mapping - Availability Status Generator |
+-------------------------------------------------------------+
```

> For deep architectural details, see the [Architecture Guide](docs/ARCHITECTURE.md).

---

<div align="center">
  <h2>Project Structure</h2>
</div>

```text
Hema/
├── .github/                   # Workflows (CI pipeline), issue templates, Dependabot config
│   ├── ISSUE_TEMPLATE/        # Standard bug report and feature request templates
│   └── workflows/ci.yml       # Automated GitHub Actions build validation
├── docs/                      # Comprehensive technical documentation & runbooks
│   ├── ARCHITECTURE.md        # Technical architecture and data flow
│   ├── CONTRIBUTING-BEGINNERS.md # Step-by-step zero-to-PR guide
│   ├── CONTRIBUTING.md        # Contributor guidelines and workflow
│   ├── DESIGN_SYSTEM.md       # Color tokens, typography, and styling guide
│   ├── DEVELOPMENT.md         # Local setup and development commands
│   ├── FAQ.md                 # Frequently asked questions
│   ├── GIT_WORKFLOW.md        # Git standards and Conventional Commits
│   ├── ROADMAP.md             # Phased engineering roadmap
│   ├── SECURITY.md            # Security policy and vulnerability reporting
│   └── TROUBLESHOOTING.md     # Solutions for common local setup and build issues
├── public/                    # Static assets (hema-logo.png, hema-logo.svg)
├── src/
│   ├── assets/                # Static vector assets
│   ├── components/            # Reusable UI component library
│   │   ├── DonorCard.jsx      # Individual donor display card with action buttons
│   │   ├── DonorModal.jsx     # Accessible profile inspection modal dialog
│   │   ├── Footer.jsx         # 4-column responsive footer navigation
│   │   ├── HemaLogo.jsx       # Scalable SVG brand logo with blood drop and cross
│   │   ├── Navbar.jsx         # 72px vertically centered header with active underline
│   │   ├── ScrollToTop.jsx    # Route transition window scroll restoration
│   │   ├── SkeletonCard.jsx   # Shimmer loading placeholder card
│   │   ├── StatsBar.jsx       # 3-column live network metrics display
│   │   ├── ToastContainer.jsx # Global notification toast system
│   │   └── WaveBackground.jsx # Atmospheric floating wave orbs and curved boundaries
│   ├── context/
│   │   ├── context.js         # React Context declaration
│   │   ├── DonorContext.jsx   # Global donor state provider and dispatch actions
│   │   └── useDonors.js       # Custom context consumption hook
│   ├── pages/
│   │   ├── AboutPage.jsx      # Organization mission, vision, and core values
│   │   ├── BecomeDonorPage.jsx# Donor registration form with client-side validation
│   │   ├── DonorsPage.jsx     # Full donor directory with real-time filters
│   │   ├── HomePage.jsx       # Hero, urgency banner, how-it-works preview, CTA
│   │   ├── HowItWorksPage.jsx # 5-step process timeline and FAQ accordion
│   │   └── NotFoundPage.jsx   # 404 error screen with home navigation link
│   ├── utils/
│   │   └── toast.js           # Decoupled toast notification event emitter
│   ├── App.css                # Component styles, animations, responsive media queries
│   ├── App.jsx                # React Router root configuration
│   ├── index.css              # Design tokens, color palette, typography, CSS reset
│   └── main.jsx               # React 19 application mount point
├── wiki/                      # 24-chapter GitHub Wiki documentation suite
├── CONTRIBUTORS.md            # Contributors Hall of Fame
├── index.html                 # HTML shell with Inter font preloading
├── package.json               # Dependencies and build scripts
├── vercel.json                # Vercel SPA routing rewrites
└── vite.config.js             # Vite 7 build configuration
```

---

<div align="center">
  <h2>Technology Stack</h2>
</div>

- **Frontend Library**: [React 19](https://react.dev/) (Hooks, Context, Modern Concurrent Mode)
- **Build Tool**: [Vite 7](https://vitejs.dev/) (Lightning-fast HMR and optimized Rollup bundling)
- **Routing**: [React Router DOM v7](https://reactrouter.com/) (Declarative Client-Side Routing)
- **Icons**: [Lucide React](https://lucide.dev/) (Clean, consistent SVG iconography)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) (Variable font for maximum legibility)
- **Styling**: Native CSS Design Tokens with custom properties (zero CSS-in-JS runtime overhead)
- **Code Quality**: [ESLint 9](https://eslint.org/) with React Hooks & React Refresh plugins

---

<div align="center">
  <h2>Documentation</h2>
</div>

Comprehensive technical specifications, guides, and system documentation are maintained in [`docs/`](docs/) and our [GitHub Wiki](https://github.com/TheVicky1/Hema/wiki):

| Document | Purpose |
| :--- | :--- |
| 📖 [**Contributing Guide**](docs/CONTRIBUTING.md) | Standard developer workflow, code style, and PR standards |
| 🚀 [**Beginner's Contribution Guide**](docs/CONTRIBUTING-BEGINNERS.md) | Step-by-step zero-to-PR walkthrough for newcomers |
| 🏗️ [**Architecture Guide**](docs/ARCHITECTURE.md) | React component tree, state patterns, and data flow |
| 🎨 [**Design System**](docs/DESIGN_SYSTEM.md) | Crimson color palette, wave background specs, and tokens |
| 💻 [**Developer Guide**](docs/DEVELOPMENT.md) | Local environment setup and development commands |
| 🌿 [**Git Workflow**](docs/GIT_WORKFLOW.md) | Conventional Commits, branch hygiene, and safety rules |
| 🗺️ [**Product Roadmap**](docs/ROADMAP.md) | Verified implementation status and future planned milestones |
| 🔧 [**Troubleshooting**](docs/TROUBLESHOOTING.md) | Practical fixes for common setup, build, and Git roadblocks |
| ❓ [**Frequently Asked Questions**](docs/FAQ.md) | Common development and contribution questions |
| 🔒 [**Security Policy**](docs/SECURITY.md) | Responsible disclosure of security vulnerabilities |
| 📚 [**HEMA Documentation Wiki**](https://github.com/TheVicky1/Hema/wiki) | Exhaustive 24-chapter technical, domain, and operational wiki |

---

<div align="center">
  <h2>Open Source & Contributing</h2>
</div>

HEMA is free, open-source humanitarian software built by developers who believe that no life should be lost because a blood donor could not be located in time. We actively welcome contributions from developers, designers, writers, and students of all experience levels!

### 🌱 Quick Links for Contributors:
- 📖 [**Contributing Guide**](docs/CONTRIBUTING.md) - Comprehensive workflow, branching, and PR policies
- 🚀 [**Beginner's Contribution Guide**](docs/CONTRIBUTING-BEGINNERS.md) - Step-by-step zero-to-PR walkthrough
- 🎯 [**Curated Good First Issues**](https://github.com/TheVicky1/Hema/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) - Self-contained, validated micro-tasks (5-20 min)
- 🔧 [**Troubleshooting Guide**](docs/TROUBLESHOOTING.md) - Solutions for common local setup and build issues
- 💬 [**Community Discussions**](https://github.com/TheVicky1/Hema/discussions) - Feature ideas, Q&A, and community collaboration

---

<div align="center">
  <h2>Contributors & Community</h2>
</div>

HEMA is built with care by an open-source community dedicated to saving lives through high-craft software engineering.

<div align="center">

[![Contributors Count](https://img.shields.io/github/contributors/TheVicky1/Hema?style=for-the-badge&color=E11D48)](https://github.com/TheVicky1/Hema/graphs/contributors)

[![HEMA Contributors](https://contrib.rocks/image?repo=TheVicky1/Hema)](https://github.com/TheVicky1/Hema/graphs/contributors)

*A huge thank you to all lifesavers and open-source developers who have contributed to the HEMA platform!*

👉 [**View all contributors on GitHub**](https://github.com/TheVicky1/Hema/graphs/contributors) • [**Contributors Hall of Fame**](CONTRIBUTORS.md)

</div>

---

<div align="center">
  <h2>License</h2>
</div>

HEMA is open-source software licensed under the [MIT License](LICENSE).

---

<div align="center">

**Search. Connect. Save Lives. Repeat.**

[⬆ Back to top](#top)

</div>
