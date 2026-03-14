'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Next.js Leaflet icon rendering issue
const customIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconAnchor: [12, 41]
});

function Recenter({ lat, lon }: { lat: number; lon: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon]);
  }, [lat, lon, map]);
  return null;
}

export default function Map({ lat, lon, title }: { lat: number; lon: number; title: string }) {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden border-2 border-gray-200 shadow-md z-0 relative">
      <MapContainer center={[lat, lon]} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Recenter lat={lat} lon={lon} />
        <Marker position={[lat, lon]} icon={customIcon}>
          <Popup>{title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}