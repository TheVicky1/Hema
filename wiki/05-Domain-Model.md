# Domain Model & Blood Compatibility Matrix

HEMA models donors, blood groups, and donation requests with medical accuracy and strict typing.

---

## 🩸 Blood Group Compatibility Matrix

| Recipient Blood Group | Compatible Donor Blood Groups | Universal Type Status |
| :---: | :---: | :---: |
| **O-** | O- | Universal Red Cell Donor |
| **O+** | O-, O+ | |
| **A-** | O-, A- | |
| **A+** | O-, O+, A-, A+ | |
| **B-** | O-, B- | |
| **B+** | O-, O+, B-, B+ | |
| **AB-** | O-, A-, B-, AB- | |
| **AB+** | All Blood Groups (O-, O+, A-, A+, B-, B+, AB-, AB+) | Universal Recipient |

---

## 📋 Donor Entity Schema

```typescript
interface Donor {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  available: boolean;
  donationsCount: number;
  lastDonationDate?: string;
}
```
