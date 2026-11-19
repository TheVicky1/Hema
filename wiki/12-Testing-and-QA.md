# Testing & Quality Assurance Matrix

HEMA follows a multi-tiered quality assurance strategy ensuring accessibility, responsiveness, and zero regressions.

---

## 🧪 Testing Pyramid

1. **Static Analysis**: ESLint checks code structure, syntax errors, and unused imports.
2. **Build Verification**: `npm run build` executes rollup tree-shaking and assets compilation to verify clean bundling.
3. **Accessibility Audits**: Automated audits with `axe-core` and Google Lighthouse ensuring WCAG 2.1 AA compliance.
4. **Manual QA Protocols**: Standardized verification checklist for all pull requests.

---

## ✅ Manual QA Verification Checklist

Before submitting a Pull Request, verify the following user journeys:

- [ ] **Navbar Navigation**: All links navigate cleanly; mobile hamburger toggles drawer smoothly.
- [ ] **Search & Filter**: Blood group pills and city search correctly filter donor cards.
- [ ] **Donor Modal**: Clicking "View Profile" opens modal; pressing `Escape` or backdrop closes it.
- [ ] **Request Action**: Clicking "Request Donor" triggers toast and toggles button state.
- [ ] **Theme Switching**: Toggling light/dark mode updates CSS variables instantly with zero flash.
- [ ] **Registration Form**: Submitting the form validates inputs and displays a confirmation toast.
