import React from 'react';
import PatientCard from './PatientCard';

export default function Sidebar({ patients, activeName, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-head">Patients</div>
      <div className="patient-list">
        {patients.map((p) => (
          <PatientCard
            key={p.name}
            name={p.name}
            gender={p.gender}
            age={p.age}
            picture={p.profile_picture}
            active={p.name === activeName}
            onClick={() => onSelect(p.name)}
          />
        ))}
      </div>
    </aside>
  );
}
