const CACHE_NAME = 'app-lista-videos-cache';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll([
                    '/Formulario',
                    '/Formulario/index.html',
                    '/Formulario/core/manifest.json',
                    '/Formulario/css/estilos.css',
                    '/Formulario/img/logo.png',
                    '/Formulario/js/formulario.js'
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
