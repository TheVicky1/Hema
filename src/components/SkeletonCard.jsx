import React from "react";

export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
        <div className="skeleton skel skel-avatar" />
        <div style={{ display: "flex", gap: "7px" }}>
          <div className="skeleton skel skel-sm" style={{ width: "44px", height: "24px", borderRadius: "999px" }} />
          <div className="skeleton skel skel-sm" style={{ width: "78px", height: "24px", borderRadius: "999px" }} />
        </div>
      </div>
      <div className="skeleton skel skel-md" style={{ width: "60%", marginBottom: "10px" }} />
      <div className="skeleton skel skel-sm" style={{ width: "42%", marginBottom: "0" }} />
      <div className="skeleton skel skel-btn" />
    </div>
  );
}
