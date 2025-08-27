import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function DiagnosisHistory({ history = [] }) {
  const labels = useMemo(() => history.map((h) => `${h.month.slice(0, 3)} ${h.year}`), [history]);
  const systolic = history.map((h) => h?.blood_pressure?.systolic?.value ?? null);
  const diastolic = history.map((h) => h?.blood_pressure?.diastolic?.value ?? null);

  const currentSys = systolic.find((v) => v != null) ?? 0;
  const currentDia = diastolic.find((v) => v != null) ?? 0;

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolic.slice().reverse(),
        borderColor: "#E878CD", // pink line
        backgroundColor: "#E878CD",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#E878CD",
        pointRadius: 4,
        borderWidth: 2,
        tension: 0.35,
      },
      {
        label: "Diastolic",
        data: diastolic.slice().reverse(),
        borderColor: "#8972D1", // violet line
        backgroundColor: "#8972D1",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#8972D1",
        pointRadius: 4,
        borderWidth: 2,
        tension: 0.35,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: {
        grid: { display: false },
        ticks: { maxRotation: 45, minRotation: 45, color: "#6c7a86" },
      },
      y: {
        beginAtZero: false,
        grid: { color: "rgba(0,0,0,0.06)", drawBorder: false },
        ticks: { color: "#6c7a86", stepSize: 20 },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bp-card">
      <div className="bp-card__head">
        <div className="bp-title">Blood Pressure</div>
        <div className="bp-range">Last 6 months</div>
      </div>

      <div className="bp-card__grid">
        <div className="bp-chart">
          <Line data={data} options={options} />
        </div>

        <aside className="bp-legend">
          <div className="bp-legend__row">
            <span className="dot" style={{ background: "#E878CD" }} />
            <div>
              <div className="bp-legend__label">Systolic</div>
              <div className="bp-legend__value">{currentSys}</div>
              <div className="bp-legend__sub">
                {currentSys > 120 ? "Higher than Average" : currentSys < 90 ? "Lower than Average" : "Normal"}
              </div>
            </div>
          </div>
          <div className="bp-legend__row">
            <span className="dot" style={{ background: "#8972D1" }} />
            <div>
              <div className="bp-legend__label">Diastolic</div>
              <div className="bp-legend__value">{currentDia}</div>
              <div className="bp-legend__sub">
                {currentDia > 80 ? "Higher than Average" : currentDia < 60 ? "Lower than Average" : "Normal"}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
