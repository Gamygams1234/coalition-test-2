import React from 'react';
import Section from './Section';

export default function DiagnosticList({ list=[] }) {
  return (
    <Section title="Diagnostic List">
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((row, idx) => (
              <tr key={idx}>
                <td>{row.name}</td>
                <td className="muted">{row.description}</td>
                <td>
                  <span className={`status status--${slug(row.status)}`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

const slug = s => (s || '').toLowerCase().replace(/\s+/g, '-');
