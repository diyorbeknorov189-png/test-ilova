const C='test-v5',CDN=['https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(async c=>{await c.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png']);for(const u of CDN){try{await c.add(u)}catch(_){}}}));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp)).catch(()=>{});return r}).catch(()=>caches.match(e.request)))});
