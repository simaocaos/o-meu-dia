var C="o-meu-dia-v2",A=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(A);}));self.skipWaiting();});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C;}).map(function(n){return caches.delete(n);}));}));self.clients.claim();});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
e.respondWith(caches.open(C).then(function(c){return c.match(r).then(function(m){var n=fetch(r).then(function(x){c.put(r,x.clone());return x;}).catch(function(){return m;});return m||n;});}));});
