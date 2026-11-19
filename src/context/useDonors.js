import { useContext } from "react";
import { DonorContext } from "./context";

export function useDonors() {
  const ctx = useContext(DonorContext);
  if (!ctx) throw new Error("useDonors must be used within DonorProvider");
  return ctx;
}
