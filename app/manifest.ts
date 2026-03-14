import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Delivery Tracker PWA',
    short_name: 'Tracker',
    description: 'Live delivery agent tracking and address lookup',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000', 
    theme_color: '#3b82f6',      
    icons: [
      {
        // A perfect 192x192 blue delivery truck icon
        src: 'https://api.iconify.design/mdi/truck-delivery.png?width=192&height=192&color=%233b82f6',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        // A perfect 512x512 blue delivery truck icon
        src: 'https://api.iconify.design/mdi/truck-delivery.png?width=512&height=512&color=%233b82f6',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable' // Fixed TypeScript error here!
      },
    ],
  }
}