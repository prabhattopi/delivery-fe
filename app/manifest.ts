import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Delivery Tracker PWA',
    short_name: 'Tracker',
    description: 'Live delivery agent tracking',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3b82f6',
    icons: [
      {
        src: 'https://api.iconify.design/mdi/truck-delivery.png?width=192&height=192&color=%233b82f6',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://api.iconify.design/mdi/truck-delivery.png?width=512&height=512&color=%233b82f6',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable', // 👈 Fixed: This MUST be exactly 'maskable' to pass the Vercel build!
      },
    ],
  }
}