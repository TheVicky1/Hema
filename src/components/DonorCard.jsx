import React from "react";
import { MapPin, CheckCircle2, Eye } from "lucide-react";

function getInitials(name) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

export default function DonorCard({ donor, onRequest, onViewDetails, style }) {
  return (
    <article
      className={`donor-card${!donor.available ? " unavailable" : ""}`}
      style={style}
      onClick={() => onViewDetails(donor)}
      role="button"
      tabIndex={0}
      aria-label={`View profile of ${donor.name}`}
      onKeyDown={(e) => e.key === "Enter" && onViewDetails(donor)}
    >
      <div className="donor-card-top">
        <div className="donor-avatar">{getInitials(donor.name)}</div>
        <div className="donor-badges">
          <span className="badge badge-blood">{donor.bloodGroup}</span>
          <span className={`badge ${donor.available ? "badge-available" : "badge-unavailable"}`}>
            {donor.available ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>

      <div className="donor-name">{donor.name}</div>
      <div className="donor-city">
        <MapPin size={13} />
        {donor.city}
      </div>

      <div className="donor-card-footer" onClick={(e) => e.stopPropagation()}>
        {donor.requested ? (
          <div className="btn-requested">
            <CheckCircle2 size={14} />
            Request Sent
          </div>
        ) : (
          <button
            className="btn btn-primary btn-request"
            disabled={!donor.available}
            onClick={(e) => { e.stopPropagation(); onRequest(donor.id); }}
            aria-label={`Request ${donor.name}`}
          >
            {donor.available ? "Request Donor" : "Unavailable"}
          </button>
        )}
        <button
          className="btn-view-details"
          onClick={(e) => { e.stopPropagation(); onViewDetails(donor); }}
          aria-label="View details"
          title="View profile"
        >
          <Eye size={15} />
        </button>
      </div>
    </article>
  );
}
