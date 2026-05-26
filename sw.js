// Service Worker — RJM Valparaíba
// Apenas garante que o app seja instalável como PWA.
// Não faz cache offline pois os dados vêm do Firebase em tempo real.

const CACHE_NAME = 'rjm-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Passa todas as requisições direto para a rede (sem cache)
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
