// src/components/VitalCard.jsx
import React from 'react';

export default function VitalCard({ icon, label, value, unit, status, tone = '#EAF6FB' }) {
  return (
    <div className="vital-card" style={{ background: tone }}>
      <div className="vital-icon">
        <img src={icon} alt="" aria-hidden="true" />
      </div>
      <div className="vital-label">{label}</div>
      <div className="vital-value">
        {value}
        <span className="unit"> {unit}</span>
      </div>
      <div className="vital-status">{status}</div>
    </div>
  );
}