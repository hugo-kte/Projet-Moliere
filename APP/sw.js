/* Service worker « réseau d'abord » : l'application reste utilisable hors ligne,
   mais une version mise à jour est toujours servie dès que le réseau répond.
   (L'ancienne stratégie « cache d'abord » figeait l'application sur une version périmée.) */
const CACHE = "projet-moliere-v22";
const ASSETS = [
  "./", "./index.html", "./manifest.webmanifest", "./moliere-icon.svg",
  "./apple-touch-icon.png", "./icon-192.png", "./icon-512.png",
  "./rules-superieur.js", "./rules-excellence.js",
  "./difficulte.js", "./parcours.js", "./astuces.js",
  "./exos-homophones.js", "./exos-lexique.js", "./exos-verbes-sup.js",
  "./exos-accords-sup.js", "./exos-verbes-exc.js", "./exos-accords-exc.js",
  "./exos-signes.js", "./exos-confusions.js", "./exos-enrichis.js",
  "./exos-complements.js", "./exos-qualite.js",
  "./exos-curated-batch1.js", "./exos-curated-batch2.js", "./exos-curated-batch3.js",
  "./exos-curated-batch4.js", "./exos-curated-batch5.js", "./exos-curated-batch6.js",
  "./exos-curated-batch7.js", "./exos-curated-batch8.js", "./exos-curated-batch9.js",
  "./exos-curated-batch10.js", "./exos-curated-batch11.js", "./exos-curated-batch12.js",
  "./exos-curated-batch13.js",
  "./exos-niveau-700.js", "./exos-excellence.js"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => Promise.allSettled(ASSETS.map(a => cache.add(new Request(a, { cache: "reload" })))))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  /* les ressources externes (polices web) ne sont pas gérées : le navigateur s'en charge */
  if (new URL(event.request.url).origin !== self.location.origin) return;
  /* « no-cache » : on revalide auprès du serveur pour ne jamais servir une version périmée
     du cache HTTP du navigateur (sinon une mise à jour peut ne pas arriver) */
  event.respondWith(
    fetch(event.request, { cache: "no-cache" })
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then(hit => hit || caches.match("./index.html")))
  );
});
