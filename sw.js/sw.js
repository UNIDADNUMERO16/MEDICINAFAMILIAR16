self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("clinica-cache").then(cache => {
      return cache.addAll(["/", "/index.html", "/manifest.json", "/app.js", "/style.css"]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
