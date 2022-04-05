const cacheStorage = 'core-cache'
const dynamicCache = 'html-core'
// function to install service worker 
const cacheResources = async () => {
  const cacheFiles = [
    '/',
    '/offline',
    '/styles/style.min.css',
    '/scripts/client.min.js'
]
  const cache = await caches.open(cacheStorage)
  await self.skipWaiting()
  return cache.addAll(cacheFiles)
}

self.addEventListener('install', event => {
  console.log('Installing')
  event.waitUntil(cacheResources())
})

// Activate Service Worker and delete old cache files
const deleteOldCache = async () => {
 const keys = await caches.keys()
    return keys.all(keys.filter((key) => key !== cacheStorage && key !== dynamicCache).map((key) => caches.delete(key)))
}


self.addEventListener('activate', (event) => {
  event.waitUntil(deleteOldCache())
  event.waitUntil(clients.claim())
})

// function to render cached files
const render = async (event) => {
  const req = event.request
  const cachedFiles = await caches.match(req)
  
  try {
    // fetch files and put in cache
        const cache = await caches.open(dynamicCache)
        const updatedPages = await fetch(req)
        cache.put(req, updatedPages.clone())
        return updatedPages ||cachedFiles
  } 
  catch(err) {
    const staticCache = await caches.open(CacheStorage)
    return cachedFiles || staticCache.match('/offline')
  }
}

self.addEventListener('fetch', event => {
  event.respondWith(render(event))
  }
)

