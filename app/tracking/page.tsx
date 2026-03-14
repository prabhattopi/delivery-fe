'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import io from 'socket.io-client';
import Link from 'next/link';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Tracking() {
  const [agentLocation, setAgentLocation] = useState({ lat: 18.5284, lon: 73.8739 });

  useEffect(() => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';
    const socket = io(backendUrl,{
        withCredentials: true
      });

    socket.on('agent_location', (data) => {
      setAgentLocation({ lat: data.lat, lon: data.lon });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-600">🚚 Live Tracking</h1>
        <Link href="/" className="bg-gray-600 text-white px-4 py-2 rounded">
          👈 Back
        </Link>
      </div>
      
      <p className="mb-4 text-green-700 animate-pulse font-semibold">Agent is moving...</p>

      <Map lat={agentLocation.lat} lon={agentLocation.lon} title="Delivery Agent" />
    </main>
  );
}