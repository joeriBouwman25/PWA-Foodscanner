
// function to install service worker 
const cacheResources = async () => {
  const cacheStorage = 'core-cache'
  const cacheFiles = [
    '/',
    '/offline',
    '/styles/style.css',
    '/scripts/client.js',
    '/images/stay-connected.jpeg'
]
  const cache = await caches.open(cacheStorage)
  await self.skipWaiting()
  return cache.addAll(cacheFiles)
}

self.addEventListener('install', event => {
  console.log('Installing')
  event.waitUntil(cacheResources())
})

// Activate Service Worker
self.addEventListener('activate', event => {
  console.log('activated')
  event.waitUntil(clients.claim())
})

// function to render cached files
const render = async (event) => {
  const req = event.request
  const cachedFiles = await caches.match(req)
  
  try {
        const cache = await caches.open('html-core')
        const updatedPages = await fetch(req)
        cache.put(req, updatedPages.clone())
        return updatedPages ||cachedFiles
  } 
  catch(err) {
    const staticCache = await caches.open('core-cache')
    return cachedFiles || staticCache.match('/offline')
  }
}

self.addEventListener('fetch', event => {
  event.respondWith(render(event))
  }
)

