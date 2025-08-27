export const formatPhone = (s='') =>
    s.replace(/[^\d]/g, '')
     .replace(/^(\d{3})(\d{3})(\d{4}).*/, '($1) $2-$3');
  
  export const toMonthLabels = (history=[]) =>
    history.map(h => `${h.month} ${h.year}`);
  
  export const seriesFromHistory = (history=[]) => {
    const systolic = history.map(h => h?.blood_pressure?.systolic?.value ?? null);
    const diastolic = history.map(h => h?.blood_pressure?.diastolic?.value ?? null);
    return { systolic, diastolic };
  };
  

  export function formatDOB(s) {
    if (!s) return '';
    // If it's YYYY-MM-DD, format as MM/DD/YYYY
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (m) return `${m[2]}/${m[3]}/${m[1]}`;
  
    // Otherwise let Date try; fall back to the original string
    const d = new Date(s);
    return Number.isNaN(d.getTime())
      ? s
      : d.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }