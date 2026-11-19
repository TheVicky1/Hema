# Domain Model & Blood Compatibility Matrix

HEMA models donors, blood groups, and donation requests with medical reference accuracy and clean schema typing.

---

## 🩸 Blood Group Compatibility Reference Matrix

Blood compatibility is determined by the presence or absence of A, B, and Rh (D) antigens on the surface of red blood cells.

| Recipient Blood Group | Compatible Donor Red Cells | Compatible Plasma Donors | Status |
| :---: | :---: | :---: | :--- |
| **O-** | O- | O-, O+, A-, A+, B-, B+, AB-, AB+ | **Universal Red Cell Donor** |
| **O+** | O-, O+ | O+, A+, B+, AB+ | High Emergency Need |
| **A-** | O-, A- | A-, A+, AB-, AB+ | Rare Donor Type |
| **A+** | O-, O+, A-, A+ | A+, AB+ | Common Blood Group |
| **B-** | O-, B- | B-, B+, AB-, AB+ | Rare Donor Type |
| **B+** | O-, O+, B-, B+ | B+, AB+ | High Prevalence |
| **AB-** | O-, A-, B-, AB- | AB-, AB+ | Universal Plasma Donor |
| **AB+** | All Groups (O-, O+, A-, A+, B-, B+, AB-, AB+) | AB+ | **Universal Red Cell Recipient** |

---

## 📋 Donor Entity Schema

```typescript
interface Donor {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  company?: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  available: boolean;
  requested: boolean;
  donationCount: number;
  lastDonated: string;
}
```

---

## 🩺 Standard Blood Donation Eligibility Criteria

To ensure the safety of both donors and recipients, standard medical eligibility rules apply:

- **Age Requirement**: 18 to 65 years old (16-17 with parental consent in some jurisdictions).
- **Body Weight**: Minimum 50 kg (110 lbs) for standard whole blood donation.
- **Hemoglobin Level**: Minimum 12.5 g/dL for females, 13.0 g/dL for males.
- **Donation Interval**:
  - Whole Blood: Minimum 56 days (8 weeks) between donations.
  - Platelets (Apheresis): Minimum 7 days (up to 24 times per year).
  - Double Red Cells: Minimum 112 days (16 weeks).
- **Temporary Deferrals**:
  - Tattoos / Piercings: 3 to 6 months depending on facility certification.
  - Major Surgery: 6 months after full recovery.
  - Antibiotic Treatment: Must be symptom-free for 48 hours post-treatment.
  - Travel to Malaria-Endemic Zones: 3 to 12 months deferral.
