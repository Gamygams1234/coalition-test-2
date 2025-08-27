import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { fetchPatients } from "./api/patients";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import DiagnosisHistory from "./components/DiagnosisHistory";
import VitalCard from "./components/VitalCard";
import PatientSummary from "./components/PatientSummary";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";

export default function App() {
  const [patients, setPatients] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPatients()
      .then((list) => {
        setPatients(list);
        const jess = list.find((p) => p.name?.toLowerCase() === "jessica taylor");
        setSelectedId(jess ? jess.name : list[0]?.name);
      })
      .catch((e) => setError(e.message));
  }, []);

  const patient = useMemo(() => patients.find((p) => p.name === selectedId), [patients, selectedId]);

  if (error)
    return (
      <div className="container">
        <p className="error">API Error: {error}</p>
      </div>
    );
  if (!patient)
    return (
      <div className="container">
        <p>Loading…</p>
      </div>
    );

  // API’s most-recent snapshot (used for vitals cards)
  const latest = patient.diagnosis_history?.[0] || {};

  return (
    <div className="app-root">
      <Header icon="/images/TestLogo.svg" />
      <div className="shell">
        <Sidebar patients={patients} activeName={selectedId} onSelect={setSelectedId} />

        <main className="content">
          <div className="grid">
            {/* LEFT COLUMN: chart -> vitals -> diagnostic list */}
            <div className="left-col">
              <Section title="Diagnosis History">
                <DiagnosisHistory history={patient.diagnosis_history || []} />
              </Section>

              {/* Vitals row (3 cards) */}
              <div className="vitals-row">
                <VitalCard
                  icon="/images/respiratory rate.svg"
                  label="Respiratory Rate"
                  value={latest?.respiratory_rate?.value ?? 0}
                  unit="bpm"
                  status="Normal"
                  tone="#EAF6FB" // light blue background
                />
                <VitalCard
                  icon="/images/temperature.svg"
                  label="Temperature"
                  value={latest?.temperature?.value ?? 0}
                  unit="°F"
                  status="Normal"
                  tone="#FDE8EF" // light pink background
                />
                <VitalCard
                  icon="/images/HeartBPM.svg"
                  label="Heart Rate"
                  value={latest?.heart_rate?.value ?? 0}
                  unit="bpm"
                  status="Lower than Average"
                  tone="#FBE8EA" // light rose background
                />
              </div>

              {/* Diagnostic list under vitals */}
              <DiagnosticList list={patient.diagnostic_list || []} />
            </div>

            {/* RIGHT COLUMN: patient summary -> lab results */}
            <div className="right-col">
              <PatientSummary p={patient} />
              <LabResults items={patient.lab_results || []} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
