import React from 'react';

export default function Header({icon}) {
  return (
    <header className="topbar">
      <div className="brand">
      <img 
  style={{ maxWidth: "80%", height: "auto" }} 
  src={icon} 
  alt="" 
  aria-hidden="true" 
/>
      </div>
      <nav className="topnav">
        <button className="pill">Overview</button>
        <button className="pill pill--active">Patients</button>
        <button className="pill">Schedule</button>
        <button className="pill">Message</button>
        <button className="pill">Transactions</button>
      </nav>
      <div className="user">
        <div className="avatar" />
        <div className="user-meta">
          <div className="user-name">Dr. Jose Simmons</div>
          <div className="user-role">General Practitioner</div>
        </div>
      </div>
    </header>
  );
}
