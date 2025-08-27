const BASE_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

export async function fetchPatients() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: process.env.REACT_APP_CT_BASIC_AUTH || '' },
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  const data = await res.json();
  // Ensure array
  return Array.isArray(data) ? data : [];
}
