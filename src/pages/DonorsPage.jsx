import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { useDonors } from "../context/useDonors";
import DonorCard from "../components/DonorCard";
import SkeletonCard from "../components/SkeletonCard";
import DonorModal from "../components/DonorModal";
import WaveBackground from "../components/WaveBackground";

const BLOOD_GROUPS = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function DonorsPage() {
  const { donors, loading, requestDonor } = useDonors();
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [searchCity, setSearchCity] = useState("");
  const [showAvailOnly, setShowAvailOnly] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const filtered = donors
    .filter((d) => selectedGroup === "All" || d.bloodGroup === selectedGroup)
    .filter((d) => d.city.toLowerCase().includes(searchCity.toLowerCase()))
    .filter((d) => !showAvailOnly || d.available)
    .sort((a, b) => b.available - a.available);

  const clearFilters = () => {
    setSelectedGroup("All");
    setSearchCity("");
    setShowAvailOnly(false);
  };

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero">
        <WaveBackground variant="subtle" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="page-hero-eyebrow">🩸 Find Donors</span>
          <h1 className="page-hero-title">Blood Donor Directory</h1>
          <p className="page-hero-sub">
            Browse our community of registered blood donors. Filter by blood type or city to find the right match.
          </p>
        </div>
      </section>

      {/* Sticky Filters */}
      <div className="filter-section">
        <div className="container">
          <div className="filter-top">
            <h2 className="filter-heading">Donors</h2>
            <div className="filter-controls">
              {/* City Search */}
              <div className="search-wrap">
                <Search size={15} className="icon-left" />
                <input
                  className="input"
                  type="text"
                  placeholder="Search by city…"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  aria-label="Search by city"
                />
                {searchCity && (
                  <button
                    className="search-clear"
                    type="button"
                    onClick={() => setSearchCity("")}
                    aria-label="Clear city search"
                  >
                    <X size={15} aria-hidden="true" />
                  </button>
                )}
              </div>
              {/* Available toggle */}
              <button
                className={`toggle-btn ${showAvailOnly ? "on" : ""}`}
                onClick={() => setShowAvailOnly(!showAvailOnly)}
              >
                <SlidersHorizontal size={14} />
                {showAvailOnly ? "Available Only" : "Show All"}
              </button>
            </div>
          </div>

          {/* Blood type pills */}
          <div className="blood-pills" role="group" aria-label="Filter by blood type">
            <span className="pills-label">Type:</span>
            {BLOOD_GROUPS.map((bg) => (
              <button
                key={bg}
                className={`pill ${selectedGroup === bg ? "active" : ""}`}
                onClick={() => setSelectedGroup(bg)}
                aria-pressed={selectedGroup === bg}
              >
                {bg}
              </button>
            ))}
          </div>

          {/* Results info */}
          <div className="results-bar" style={{ marginTop: "14px" }}>
            <p className="results-text">
              Showing <strong>{filtered.length}</strong> of {donors.length} donors
              {selectedGroup !== "All" && <> · Blood type <strong>{selectedGroup}</strong></>}
              {searchCity && <> · City contains <strong>"{searchCity}"</strong></>}
              {showAvailOnly && <> · <strong>Available only</strong></>}
            </p>
            {(selectedGroup !== "All" || searchCity || showAvailOnly) && (
              <button className="btn btn-ghost" style={{ padding: "5px 14px", fontSize: "12px" }} onClick={clearFilters}>
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="donors-section">
        <div className="container">
          <div className="donor-grid">
            {loading ? (
              Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
            ) : filtered.length === 0 ? (
              <div className="empty-state">
                <span className="empty-icon">🔍</span>
                <h3>No donors found</h3>
                <p>Try a different blood type or city to find donors near you.</p>
                <button className="btn btn-ghost" onClick={clearFilters}>Clear all filters</button>
              </div>
            ) : (
              filtered.map((donor, i) => (
                <DonorCard
                  key={donor.id}
                  donor={donor}
                  onRequest={requestDonor}
                  onViewDetails={setSelectedDonor}
                  style={{ animationDelay: `${Math.min(i * 35, 280)}ms` }}
                />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedDonor && (
        <DonorModal
          donor={donors.find((d) => d.id === selectedDonor.id) || selectedDonor}
          onClose={() => setSelectedDonor(null)}
          onRequest={(id) => { requestDonor(id); setSelectedDonor(null); }}
        />
      )}
    </div>
  );
}

