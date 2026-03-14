// A standard, minimal service worker to satisfy PWA install requirements
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated.');
  });
  
  self.addEventListener('fetch', (event) => {
    // Pass-through fetch for now. 
    // For advanced offline caching, you would intercept requests here.
    event.respondWith(fetch(event.request));
  });