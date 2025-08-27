import React from 'react';
import cn from 'classnames';

export default function PatientCard({ name, gender, age, picture, active, onClick }) {
  return (
    <button
      className={cn('patient-card', { 'is-active': active })}
      onClick={onClick}
      type="button"
    >
      <img className="patient-avatar" src={picture} alt={name} />
      <div className="patient-meta">
        <div className="patient-name">{name}</div>
        <div className="patient-sub">{gender}, {age}</div>
      </div>
      <div className="ellipsis">⋯</div>
    </button>
  );
}
