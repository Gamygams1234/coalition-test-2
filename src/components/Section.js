import React from 'react';
export default function Section({ title, right, children, className='' }) {
  return (
    <section className={`section-card ${className}`}>
      <header className="section-head">
        <h3>{title}</h3>
        {right}
      </header>
      <div className="section-body">{children}</div>
    </section>
  );
}
