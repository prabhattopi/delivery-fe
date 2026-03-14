'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Link from 'next/link';

// Dynamic import to prevent SSR errors with window objects in Leaflet
const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  const [address, setAddress] = useState('');
  const [coords, setCoords] = useState({ lat: 18.5204, lon: 73.8567 });
  const [parsedData, setParsedData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCoords({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        () => console.log("Geolocation denied.")
      );
    }
  }, []);

  const handleSearch = async () => {
    if (!address) return;
    setLoading(true);
    try {
      console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';
      const res = await axios.post(`${backendUrl}/api/geocode`, { address }, { withCredentials: true });
      setCoords({ lat: res.data.data.lat, lon: res.data.data.lon });
      setParsedData(res.data.data.parsedFields);
    } catch (error) {
      alert("Could not locate address.");
    }
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">📍 Address Lookup</h1>
        <Link href="/tracking" className="bg-green-600 text-white px-4 py-2 rounded shadow">
          Live Tracking 👉
        </Link>
      </div>

      <div className="flex gap-2 mb-6">
      <input 
          type="text" 
          className="border border-gray-400 bg-white text-gray-900 p-3 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Type an address..." 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading} className="bg-blue-600 text-white px-6 py-3 rounded">
          {loading ? '...' : 'Search'}
        </button>
      </div>

      {parsedData && (
        <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm">
          <p><strong>City/Town:</strong> {parsedData.city || parsedData.town || parsedData.suburb}</p>
          <p><strong>State:</strong> {parsedData.state}</p>
          <p><strong>Postcode:</strong> {parsedData.postcode}</p>
        </div>
      )}

      <Map lat={coords.lat} lon={coords.lon} title="Searched Location" />
    </main>
  );
}