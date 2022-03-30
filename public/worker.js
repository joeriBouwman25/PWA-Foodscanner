const cacheStorage = 'core-cache'
const cacheFiles = [
    '/',
    '/styles/style.css',
    '/scripts/client.js',
]


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheStorage)
        .then(cache => cache.addAll(cacheFiles))
        .then(() => self.skipWaiting())
    )
} )




self.addEventListener('fetch', event => {
    const req = event.request
    if (!req) {
      event.respondWith(networkFirst(req))
    } else {
      event.respondWith(cacheFirst(req))
    }
  })

  async function networkFirst(req) {
    const cache = await caches.open('html-core')
    try { 
      const fresh = await fetch(req)
      cache.put(req, fresh.clone())
      return fresh;
    } catch (e) { 
      const cachedResponse = await cache.match(req)
      if(cachedResponse === undefined) {
        const error = await caches.open(cacheStorage)
        return error
      } else {
        return cachedResponse;
      }
    }
  }


  
async function cacheFirst(request) {
    const cache = await caches.open('html-core');
    const cachedResponse = await cache.match(request);
      return cachedResponse || networkFirst(request);

}
