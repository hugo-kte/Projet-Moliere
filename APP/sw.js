const CACHE = "projet-moliere-v12";
const ASSETS = [
  "./", "./index.html", "./manifest.webmanifest", "./moliere-icon.svg",
  "./rules-superieur.js", "./rules-excellence.js", "./exos-homophones.js",
  "./exos-lexique.js", "./exos-verbes-sup.js", "./exos-accords-sup.js",
  "./exos-verbes-exc.js", "./exos-accords-exc.js", "./exos-signes.js",
  "./exos-confusions.js", "./exos-enrichis.js", "./exos-complements.js",
  "./exos-qualite.js", "./exos-curated-batch1.js", "./exos-curated-batch2.js",
  "./exos-curated-batch3.js", "./exos-curated-batch4.js", "./exos-curated-batch5.js",
  "./exos-curated-batch6.js"
];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request).then(response => {
    const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response;
  }).catch(() => caches.match("./index.html"))));
});
