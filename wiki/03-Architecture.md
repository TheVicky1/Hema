# System Architecture & Data Flow

HEMA is engineered as a client-side Single Page Application (SPA) prioritizing immediate interactivity, zero render lag, and zero layout shift.

---

## 🏛️ Layered System Diagram

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
|  - Filter & Search State    - In-Memory Request State       |
+-------------------------------------------------------------+
                               |
                    Mock Data & API Services
                               |
+-------------------------------------------------------------+
|               Data Layer (JSONPlaceholder / Mock)           |
|  - Augmented Donor Profiles - Exact Blood-Group Matching    |
|  - City Geolocation Mapping - Availability Status Generator |
+-------------------------------------------------------------+
```

---

## 🔄 State Propagation Workflow

1. **Mount**: `DonorProvider` initializes and fetches mock donor users via JSONPlaceholder API with an `AbortController` for cleanup.
2. **Augmentation**: Raw user records are mapped into `Donor` entities with randomized blood groups, availability flags, and donation counts.
3. **Distribution**: `useDonors` exposes reactive state (`donors`, `loading`, `requestDonor`) to route pages.
4. **Action**: User clicks 'Request Donor' -> state updates optimistically in memory (setting `requested: true` on the targeted donor entity) and displays a confirmation toast. The `requested` state is held in memory for the active session.

---

## 🛡️ Error Boundary & Resilience Strategy

- **Network Failures**: Network fetch rejections are intercepted and surfaced via `addToast({ type: "error", ... })` without breaking the UI.
- **Storage Resilience**: `localStorage` access is wrapped in `try/catch` blocks to maintain compatibility with privacy-mode browsers and iframes.
- **404 Route Catch-All**: An explicit `NotFoundPage` catches unmapped routes and provides a one-click return to the homepage.
