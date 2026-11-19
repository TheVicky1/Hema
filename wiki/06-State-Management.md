# State Management & DonorContext

HEMA implements lightweight, high-performance state management using native React 19 Context.

---

## 📦 State Architecture

- **Store**: `src/context/DonorContext.jsx`
- **Hook**: `useDonors()`
- **Exported State**:
  - `donors`: Array of all donor entities. Each entity carries a boolean `requested` field tracking request status in the active session.
  - `loading`: Boolean loading flag indicating initial data fetching.
  - `requestDonor(id)`: Action dispatcher updating the targeted donor's `requested` field to `true` and triggering an alert toast.

> [!NOTE]
> Network fetch failures are caught and surfaced directly through an error notification toast (`addToast`) without setting an unhandled global crash boundary.
