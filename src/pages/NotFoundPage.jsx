import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="page-wrapper" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", padding: "80px 24px" }}>
        <span style={{ fontSize: "64px", display: "block", marginBottom: "24px" }}>🩸</span>
        <h1 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "12px" }}>
          Page not found
        </h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "32px", fontSize: "15px" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" className="btn btn-primary" style={{ padding: "11px 28px" }}>Go Home</Link>
          <Link to="/donors" className="btn btn-ghost" style={{ padding: "11px 24px" }}>Find Donors</Link>
        </div>
      </div>
    </div>
  );
}

