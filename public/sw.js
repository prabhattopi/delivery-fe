self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Required by PWA standards to handle network requests
  event.respondWith(
    fetch(event.request).catch(() => caches.match('/'))
  );
});