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

---

## 🔄 State Propagation Workflow

1. **Mount**: `DonorProvider` initializes and triggers `fetchDonors`.
2. **Augmentation**: Raw user records are mapped into `Donor` entities with realistic blood groups and availability.
3. **Distribution**: `useDonors` exposes reactive state to route pages.
4. **Action**: User clicks 'Request Donor' -> state updates optimistically, toast fires, and session storage records the request ID.
