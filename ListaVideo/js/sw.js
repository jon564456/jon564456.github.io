const CACHE_NAME = 'app-lista-videos-cache';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll([
                    '/ListaVideo',
                    '/ListaVideo/index.html',
                    '/ListaVideo/core/manifest.json',
                    '/ListaVideo/css/estilos.css',
                    '/ListaVideo/img/053-medium.svg',
                    '/ListaVideo/js/lista.js'
                    // Agrega aquí otros recursos que quieras que se almacenen en la caché
                ]);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
