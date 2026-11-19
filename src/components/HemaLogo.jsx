import React from "react";

/**
 * HemaLogo - Premium SVG blood drop with medical cross and cupped hand.
 * Inspired by user's logo: blood drop shape, white cross, white hand.
 * No PNG, no black background - pure SVG, renders on any background.
 */
export default function HemaLogo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.1)}
      viewBox="0 0 44 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hema-drop-grad" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%"   stopColor="#E8182C" />
          <stop offset="100%" stopColor="#9F0E1A" />
        </linearGradient>
      </defs>

      {/* Blood drop body */}
      <path
        d="M22 2C22 2 5 20 5 32C5 40.8 12.8 46 22 46C31.2 46 39 40.8 39 32C39 20 22 2 22 2Z"
        fill="url(#hema-drop-grad)"
      />

      {/* White medical cross - centered at top half of drop */}
      <rect x="19.5" y="16" width="5"  height="17" rx="2" fill="white" />
      <rect x="13"   y="22" width="18" height="5"  rx="2" fill="white" />

      {/* White cupped hand - lower portion of drop */}
      <path
        d="M10 36 Q12 30 22 32 Q32 30 34 36 Q32 42 22 44 Q12 42 10 36Z"
        fill="white"
        opacity="0.22"
      />
    </svg>
  );
}
