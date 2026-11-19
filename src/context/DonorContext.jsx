import React, { useEffect, useState, useCallback } from "react";
import { addToast } from "../utils/toast";
import { DonorContext } from "./context";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export function DonorProvider({ children }) {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        const mapped = data.map((u) => ({
          id: u.id,
          name: u.name,
          email: u.email,
          city: u.address.city,
          phone: u.phone,
          company: u.company.name,
          bloodGroup: BLOOD_GROUPS[Math.floor(Math.random() * BLOOD_GROUPS.length)],
          available: Math.random() > 0.3,
          requested: false,
          donationCount: Math.floor(Math.random() * 15) + 1,
          lastDonated: `${Math.floor(Math.random() * 11) + 1} months ago`,
        }));
        setDonors(mapped);
        setLoading(false);
        const avail = mapped.filter((d) => d.available).length;
        setTimeout(() => {
          addToast({ type: "info", title: "Donors loaded", message: `${avail} donors available in your area`, duration: 4000 });
        }, 700);
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          setLoading(false);
          addToast({ type: "error", title: "Failed to load donors", message: "Please refresh the page.", duration: 6000 });
        }
      });
    return () => controller.abort();
  }, []);

  const requestDonor = useCallback((id) => {
    const donor = donors.find((d) => d.id === id);
    setDonors((prev) => prev.map((d) => d.id === id ? { ...d, requested: true } : d));
    addToast({ type: "success", title: "Request sent!", message: `Demonstration request to ${donor?.name} recorded.`, duration: 4500 });
  }, [donors]);

  return (
    <DonorContext.Provider value={{ donors, loading, requestDonor }}>
      {children}
    </DonorContext.Provider>
  );
}

