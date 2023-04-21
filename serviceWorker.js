const staticHealAnima = "dev-healthy-animal-site-v1"
const assets = [
  "/PWA/",
  "/PWA/index.html",
  "/PWA/mapa.html",
  "css/style.css",
  "js/app.js",
  "pwa-icon.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticHealAnima).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})