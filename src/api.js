const API = 'https://dating-website-backend.onrender.com/api';

export async function reject() {
  await fetch(`${API}/reject`, { method: 'POST' });
}

export async function submitDate(data) {
  await fetch(`${API}/date`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
}