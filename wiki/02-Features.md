# Platform Features & Capabilities

HEMA integrates 12 cohesive feature systems designed for emergency speed, aesthetic calm, and responsive precision.

---

## 1. Command Navigation
- 72px vertically centered header preventing visual cramping.
- Sleek active underline indicator with fluid width animation on route change.
- Dark/light mode toggle with Sun/Moon iconography.
- Live available donors badge with pulsating green status dot.
- Responsive mobile drawer with automatic dismiss on route tap or screen resize.

## 2. Atmospheric Wave Canvas
- Multi-layer floating ambient crimson orbs (`wave-orb-1`, `wave-orb-2`, `wave-orb-3`).
- Flowing SVG boundary wave curves along hero tops and bottoms.
- Persistent 32px radial dot-grid texture on the body canvas.
- Low-intensity opacity (5.5% light, 7% dark) ensuring zero text legibility interference.

## 3. Live Donor Directory
- Interactive blood group filter pill row: `All`, `A+`, `A-`, `B+`, `B-`, `AB+`, `AB-`, `O+`, `O-`.
- Instant debounced city search filter.
- Available Only toggle checkbox.
- Responsive grid with automatic 3-to-1 column collapse across viewport breakpoints.

## 4. Interactive Donor Cards
- Initials avatar badges with deterministic color hashing based on donor name.
- Prominent blood group pill with high-contrast badge styling.
- Geolocation tag with map marker icon.
- Live status badge indicating immediate availability.
- View Profile and Request Donor action buttons.

## 5. Accessible Donor Modal
- Spring-eased modal entrance animation.
- Escape key listener and backdrop click dismiss.
- Background body scroll locking while dialog is active.
- Complete donor contact info, emergency response estimates, and verified donor shield.

## 6. Live Network Statistics Bar
- 3-column live metric grid: Total Registered Donors, Active Lifesavers, Unique Blood Types.
- Vibrant status color coding (crimson for total, green for active).
- Dividers and rounded radius-xl container.

## 7. Instant Request Dispatch
- Optimistic UI updates switching button to 'Request Sent'.
- Immediate auto-dismissing toast notification.
- SessionStorage tracking preventing duplicate accidental requests.

## 8. Donor Registration Workflow
- Clean 2-column layout with donation benefits sidebar.
- Form fields: Name, Email, Phone, City, Blood Group, Availability.
- Client-side validation ensuring valid email format and required fields.
- Toast confirmation and instant local directory preview.

## 9. Process Walkthrough & FAQ Accordion
- 5-step numbered donation timeline from search to hospital coordination.
- Expandable FAQ accordion with smooth chevron rotation.
- Quick search sidebar CTA card.

## 10. Toast Notification Bus
- Decoupled event-driven toast dispatch (`addToast`).
- Support for success, info, and error variants.
- 4000ms auto-dismiss timer with manual close button.

## 11. Dual Theme System
- Pure white light theme (`#FFFFFF`) and OLED Obsidian dark theme (`#0C0C0C`).
- Seamless transitions via CSS Custom Properties.

## 12. Shimmer Skeleton Loading
- Content-matching placeholder cards during asynchronous data fetching.
- CSS keyframe shimmer wave preventing Cumulative Layout Shift (CLS).
