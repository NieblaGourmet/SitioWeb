const CACHE_NAME = 'niebla-gourmet-v3';
const ASSETS = [
  './',
  './index.html',
  './menu.html',
  './lang.js',
  './manifest.json',
  './img/logo.png',
  './img/fondo.png',
  './img/menu/desayunotipico.jpg',
  './img/menu/omelette.jpeg',
  './img/menu/crocante.jpg',
  './img/menu/tostadas.jpeg'
];

// Instalar y cachear activos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching assets...');
        return cache.addAll(ASSETS);
      })
  );
});

// Activar y limpiar cachés antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Estrategia: Cache First, luego Red (para activos estáticos)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request).then((fetchRes) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // No cachear peticiones externas (CDN) por simplicidad en este paso, 
            // pero podríamos si fuera necesario.
            if (event.request.url.includes(location.origin)) {
              cache.put(event.request.url, fetchRes.clone());
            }
            return fetchRes;
          });
        });
      }).catch(() => {
        // Fallback offline para navegación
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
});
