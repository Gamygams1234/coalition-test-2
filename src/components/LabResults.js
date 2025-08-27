import React from 'react';
import Section from './Section';
import { Download } from 'lucide-react'; // or use an SVG inline if you don't want lucide

export default function LabResults({ items = [] }) {
  return (
    <Section title="Lab Results">
      <ul className="lab-list">
        {items.map((t, idx) => (
          <li key={idx} className="lab-row">
            <span className="lab-name">{t}</span>
            <button
              className="download-btn"
              onClick={() => alert(`Downloading ${t}...`)}
              title="Download"
            >
              <Download size={16} strokeWidth={2} />
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
}
