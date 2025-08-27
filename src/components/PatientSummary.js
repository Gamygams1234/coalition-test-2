import React from "react";
import { formatDOB } from '../utils/formatters.js';

export default function PatientSummary({ p }) {
  return (
    <div className="patient-summary">
      <img className="summary-photo" src={p.profile_picture} alt={p.name} />
      <h3 className="summary-name">{p.name}</h3>

      <div className="summary-info">
        <div className="summary-row">
          <img src="/images/BirthIcon.svg" alt="" className="summary-icon" />
          <div>
            <div className="summary-label">Date of Birth</div>
            <div className="summary-value">{formatDOB(p.date_of_birth)}</div>
          </div>
        </div>

        <div className="summary-row">
          <img src="/images/FemaleIcon.svg" alt="" className="summary-icon" />
          <div>
            <div className="summary-label">Gender</div>
            <div className="summary-value">{p.gender}</div>
          </div>
        </div>

        <div className="summary-row">
          <img src="/images/PhoneIcon.svg" alt="" className="summary-icon" />
          <div>
            <div className="summary-label">Contact Info</div>
            <div className="summary-value">{p.phone_number}</div>
          </div>
        </div>

        <div className="summary-row">
          <img src="/images/PhoneIcon.svg" alt="" className="summary-icon" />
          <div>
            <div className="summary-label">Emergency Contacts</div>
            <div className="summary-value">{p.emergency_contact}</div>
          </div>
        </div>

        <div className="summary-row">
          <img src="/images/InsuranceIcon.svg" alt="" className="summary-icon" />
          <div>
            <div className="summary-label">Insurance Provider</div>
            <div className="summary-value">{p.insurance_type}</div>
          </div>
        </div>
      </div>

      <button className="summary-btn">Show All Information</button>
    </div>
  );
}
