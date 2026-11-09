import React from "react";

export default function StatsBar({ total, available, bloodGroups }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-value">{total}</div>
        <div className="stat-label">Registered Donors</div>
      </div>
      <div className="stat-card">
        <div className="stat-value red">{available}</div>
        <div className="stat-label">Available Now</div>
      </div>
      <div className="stat-card">
        <div className="stat-value green">{bloodGroups}</div>
        <div className="stat-label">Blood Types Covered</div>
      </div>
    </div>
  );
}
