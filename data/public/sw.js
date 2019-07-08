var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/css/bootstrap.min.css',
  '/css/style.css',
  '/js/jquery-3.3.1.min.js',
  '/js/popper.min.js',
  '/js/bootstrap.min.js',
  '/js/vue.min.js',
  '/js/jsQR.js',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    }).catch(function(err){
      console.log(err)
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    }).catch(function(err){
      console.log(err)
    })
  );
});