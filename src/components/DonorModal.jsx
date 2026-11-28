import React, { useEffect, useRef } from "react";
import { X, MapPin, CheckCircle2 } from "lucide-react";

function getInitials(name) {
  return name.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

export default function DonorModal({ donor, onClose, onRequest }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (!donor) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [donor]);

  if (!donor) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-name"
    >
      <div className="modal">
        <div className="modal-header">
          <div>
            <div className="modal-avatar">{getInitials(donor.name)}</div>
            <h2 className="modal-name" id="modal-name">{donor.name}</h2>
            <div className="modal-badges">
              <span className="badge badge-blood">{donor.bloodGroup}</span>
              <span className={`badge ${donor.available ? "badge-available" : "badge-unavailable"}`}>
                {donor.available ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>
          <button ref={closeRef} className="btn btn-icon" onClick={onClose} aria-label="Close" style={{ marginTop: 0, flexShrink: 0 }}>
            <X size={15} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-info-grid">
            <div className="modal-info-cell">
              <div className="modal-info-label">Blood Type</div>
              <div className="modal-info-value" style={{ color: "var(--color-primary)", fontSize: "20px" }}>{donor.bloodGroup}</div>
            </div>
            <div className="modal-info-cell">
              <div className="modal-info-label">City</div>
              <div className="modal-info-value">
                <MapPin size={13} style={{ display: "inline", marginRight: "4px", verticalAlign: "middle", color: "var(--color-text-muted)" }} />
                {donor.city}
              </div>
            </div>
            <div className="modal-info-cell">
              <div className="modal-info-label">Donations</div>
              <div className="modal-info-value">{donor.donationCount} total</div>
            </div>
            <div className="modal-info-cell">
              <div className="modal-info-label">Last Donated</div>
              <div className="modal-info-value">{donor.lastDonated}</div>
            </div>
          </div>

          <div className="modal-note">
            In this demonstration platform, clicking <strong>Send Request</strong> records an in-memory request for your active session and displays a confirmation toast.
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          {donor.requested ? (
            <div className="btn-requested" style={{ flex: 1, padding: "12px", borderRadius: "var(--radius-md)" }}>
              <CheckCircle2 size={15} />
              Request Sent
            </div>
          ) : (
            <button
              className="btn btn-primary"
              disabled={!donor.available}
              onClick={() => { onRequest(donor.id); onClose(); }}
            >
              {donor.available ? "Send Request" : "Not Available"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
