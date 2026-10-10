const C='test-v1',CDN='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(async c=>{await c.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png']);try{await c.add(CDN)}catch(_){}}));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
