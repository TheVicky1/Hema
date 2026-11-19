# Platform Features Catalog

HEMA provides a cohesive set of client-side features engineered for clarity, speed, and ease of use.

---

## 🧭 1. Command Navigation Header
- **Fixed Height**: Exactly 72px vertically centered header.
- **Route Active Indicator**: Dynamic border and pill styling showing the current route.
- **Live Donor Counter**: Real-time badge indicating currently available donors in memory.
- **Theme Switcher**: One-click toggle between Light Mode and Dark OLED Mode.
- **Mobile Responsive Drawer**: Accessible slide-out navigation for viewports under 768px.

---

## 🌊 2. Atmospheric Wave Canvas Engine
- **Visual Depth**: Layered crimson gradient waves and floating ambient orbs create an immersive backdrop.
- **Zero Runtime Cost**: Pure CSS keyframe animations powered by hardware-accelerated transforms.
- **Accessibility**: Automatically disables animations when `prefers-reduced-motion` is detected.

---

## 🩸 3. Donor Directory & Instant Search
- **Blood Group Pills**: Instant one-click filtering across all 8 standard blood groups (`A+`, `A-`, `B+`, `B-`, `AB+`, `AB-`, `O+`, `O-`) plus `All`.
- **Live City Search**: Instant case-insensitive substring matching against donor cities.
- **Compound Predicate Filter**: Blood group and city filters work together seamlessly.
- **Zero Results State**: Graceful fallback UI with a one-click button to reset all active filters.

---

## 👤 4. Interactive Donor Cards
- **Initial Avatar Badges**: Circular badges with donor initials for clean visual identity.
- **Availability Pill**: High-contrast green "Available" or muted "Resting" badges.
- **Donation Count**: Displays verified past donation milestones.
- **Quick Action**: Direct button to open the detailed profile modal.

---

## 🪟 5. Accessible Profile Inspection Modal
- **Focus Trapping**: Traps keyboard focus inside the modal dialog while open.
- **Escape Key Dismiss**: Closes immediately upon pressing the `Escape` key.
- **Backdrop Click**: Dismisses cleanly when clicking the semi-transparent overlay.
- **Privacy Masking**: Displays location and availability while safely redacting raw phone and email data.

---

## ⚡ 6. Instant Request Dispatch
- **Optimistic UI**: Immediately updates the donor card to show a "Requested" badge.
- **Toast Feedback**: Dispatches a success toast confirming the demonstration request was logged.
- **In-Memory Tracking**: Tracks request state for the duration of the browser session.

---

## 📝 7. Self-Service Donor Registration
- **Controlled Form Inputs**: Name, email, phone, city, and blood group selection.
- **Client-Side Validation**: Checks required fields and email formats before submission.
- **Benefits Side Panel**: Educational summary explaining the community impact of blood donation.

---

## 🗺️ 8. Interactive Process Timeline & FAQ
- **5-Step Walkthrough**: Clear visual guide detailing Registration, Screening, Donation, Refreshment, and Notification.
- **Expandable FAQ Accordion**: Smooth disclosure panels answering common donor questions.

---

## 🔔 9. Decoupled Toast Notification Bus
- **Multi-Type Support**: Success (green), Info (blue), Error (red), and Warning (amber) toasts.
- **Auto-Dismissal**: Configurable duration timers with clean unmount animations.
- **Non-Blocking**: Fixed position container that never interrupts user interaction.
