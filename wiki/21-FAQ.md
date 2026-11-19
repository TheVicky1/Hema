# Frequently Asked Questions (FAQ)

Comprehensive answers to medical, architectural, privacy, and community questions.

---

## 🩸 Medical & Donation Questions

### Q: Who can donate blood?
**A**: Generally, healthy individuals aged 18-65, weighing at least 50 kg (110 lbs), with adequate hemoglobin levels. Review [05. Domain Model](05-Domain-Model) for detailed criteria.

### Q: Why is O- considered the universal donor?
**A**: O- red blood cells lack A, B, and Rh antigens on their surface. This means they can be transfused to patients of virtually any blood type in life-threatening emergencies where cross-matching time is unavailable.

### Q: How often can a volunteer donate blood?
**A**: For standard whole blood, a mandatory recovery interval of 56 days (8 weeks) is required to replenish red blood cells and iron stores.

---

## 🔒 Privacy & Security Questions

### Q: Are donor phone numbers visible to the public?
**A**: No. HEMA implements privacy-by-design: phone numbers and raw email addresses are strictly omitted from cards and modals to prevent spam and data harvesting.

### Q: Does HEMA store my data permanently?
**A**: In the demonstration application, all donor interactions and requests are maintained in volatile in-memory React state and reset upon page reload.

---

## 💻 Developer & Open Source Questions

### Q: Why React 19 and Vite 7?
**A**: React 19 provides state-of-the-art concurrent rendering, while Vite 7 delivers sub-50ms HMR and lightning-fast production builds, creating a world-class contributor experience.

### Q: How do I claim a beginner issue?
**A**: Comment on any open issue marked with `good first issue` or `first-timers-only` expressing your interest, and a maintainer will assign it to you.
