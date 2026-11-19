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

> [!NOTE]
> Advanced blood group compatibility cross-matching (e.g. matching O- universal donors with other recipient blood groups) is planned as a future capability. The current `DonorsPage` filters by exact blood-group equality or shows all groups when 'All' is selected.

---

## 🔄 State Propagation Workflow

1. **Mount**: `DonorProvider` initializes and fetches mock donor users.
2. **Augmentation**: Raw user records are mapped into `Donor` entities with randomized blood groups, availability flags, and donation counts.
3. **Distribution**: `useDonors` exposes reactive state (`donors`, `loading`, `requestDonor`) to route pages.
4. **Action**: User clicks 'Request Donor' -> state updates optimistically in memory (setting `requested: true` on the targeted donor entity) and displays a confirmation toast. The `requested` state is held in memory for the active session and resets to false upon full page reload.
