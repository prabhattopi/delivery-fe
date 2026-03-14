import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Delivery Tracker PWA',
    short_name: 'Tracker',
    description: 'Live delivery agent tracking and address lookup',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}