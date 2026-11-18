# State Management & DonorContext

HEMA implements lightweight, high-performance state management using native React 19 Context.

---

## 📦 State Architecture

- **Store**: `src/context/DonorContext.jsx`
- **Hook**: `useDonors()`
- **Exported State**:
  - `donors`: Array of all donor entities.
  - `loading`: Boolean loading flag.
  - `error`: Error string or null.
  - `requestedIds`: Array of donor IDs requested in the current session.
  - `requestDonor(id)`: Action dispatcher triggering optimistic updates and toast alert.
